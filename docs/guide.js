/* ---------- コードの色付け ---------- */
const KEYWORDS = {
  kotlin: /\b(?:val|var|fun|class|object|interface|data|sealed|suspend|override|private|internal|return|if|else|when|for|while|try|catch|finally|import|package|companion|const|by|in|is|as|null|true|false|this|super|enum|abstract|lateinit|init|throw|do|it)\b/g,
  sql: /\b(?:CREATE|TABLE|INDEX|SELECT|FROM|WHERE|ORDER|BY|LIMIT|INSERT|INTO|VALUES|DELETE|UPDATE|SET|PRIMARY|KEY|FOREIGN|REFERENCES|NOT|NULL|DEFAULT|AUTOINCREMENT|INTEGER|TEXT|DATETIME|ON|AND|OR|IN|COUNT|MAX|CURRENT_TIMESTAMP)\b/g,
  json: /\b(?:true|false|null)\b/g
};

function highlight(code, lang){
  const marks = [];
  /* 退避用の番兵。コード中に現れない私用領域の文字を実行時に作る。 */
  const S0 = String.fromCharCode(0xE000), S1 = String.fromCharCode(0xE001);
  // 番号の前に文字を置く。そうしないと数値の色付けが退避番号自体を拾ってしまう
  const stash = (cls, txt) => S0 + "t" + (marks.push([cls, txt]) - 1) + S1;
  // 文字列とコメントは1本の正規表現で、先に現れたほうを優先させる。
  // 分けて処理すると "https://..." の // がコメント扱いになりコードが壊れる。
  let s = code
    .replace(
      /"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|\/\/[^\n]*|--[^\n]*/g,
      m => stash(m[0] === '"' || m[0] === "'" ? "tok-s" : "tok-c", m)
    )
    .replace(/@\w+/g, m => stash("tok-a", m));
  const kw = KEYWORDS[lang];
  if (kw) s = s.replace(kw, m => stash("tok-k", m));
  s = s.replace(/\b\d[\d_]*(?:\.\d+)?\b/g, m => stash("tok-n", m));
  return s.replace(new RegExp(S0 + "t(\\d+)" + S1, "g"), (_, i) => {
    const [cls, txt] = marks[Number(i)];
    return '<span class="' + cls + '">' + txt + "</span>";
  });
}

document.querySelectorAll("figure.code code").forEach(el => {
  const m = el.className.match(/lang-(\w+)/);
  const lang = m ? m[1] : "";
  if (["kotlin", "sql", "json"].indexOf(lang) !== -1) {
    el.innerHTML = highlight(el.innerHTML, lang);
  }
});

/* ---------- コピー ---------- */
document.querySelectorAll(".copy").forEach(btn => {
  btn.addEventListener("click", () => {
    const code = btn.closest("figure").querySelector("code");
    navigator.clipboard.writeText(code.innerText).then(() => {
      btn.textContent = "コピーしました";
      btn.classList.add("done");
      setTimeout(() => { btn.textContent = "コピー"; btn.classList.remove("done"); }, 1600);
    }).catch(() => {
      btn.textContent = "コピーできません";
      setTimeout(() => { btn.textContent = "コピー"; }, 1600);
    });
  });
});

const KEY = "pokedex-kadai-progress";

/* ---------- チェックリストの進捗（この端末にのみ保存） ---------- */
document.querySelectorAll(".doc").forEach(doc => {
  const boxes = Array.prototype.slice.call(doc.querySelectorAll("li.task input"));
  if (!boxes.length) return;

  const storeKey = KEY + ":" + doc.dataset.file;
  const label = "評価基準の達成状況";

  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(storeKey) || "{}"); } catch (e) { saved = {}; }
  boxes.forEach((b, i) => { b.checked = !!saved[i]; });

  const panel = document.createElement("div");
  panel.className = "progress";
  panel.innerHTML =
    '<div class="row"><span class="lbl"></span><span class="num"></span></div>' +
    '<div class="bar"><div class="fill"></div></div>' +
    '<div class="row" style="margin-top:10px"><span class="lbl">チェックはこの端末にのみ保存されます</span>' +
    '<button type="button">すべて解除</button></div>';
  panel.querySelector(".lbl").textContent = label;

  // 最初のチェック欄が属する節の見出しの直後に置く。
  // 文書の先頭に固定すると、関係のない節を読んでいる間もずっと出てしまう。
  const heads = Array.prototype.slice.call(doc.querySelectorAll("h2"));
  const owner = heads.filter(h =>
    h.compareDocumentPosition(boxes[0]) & Node.DOCUMENT_POSITION_FOLLOWING).pop();
  if (owner) owner.insertAdjacentElement("afterend", panel);
  else doc.appendChild(panel);

  const num = panel.querySelector(".num");
  const fill = panel.querySelector(".fill");

  function render(){
    const n = boxes.filter(b => b.checked).length;
    num.textContent = n + " / " + boxes.length;
    fill.style.width = (n / boxes.length * 100) + "%";
  }
  function persist(){
    const o = {};
    boxes.forEach((b, i) => { if (b.checked) o[i] = 1; });
    try { localStorage.setItem(storeKey, JSON.stringify(o)); } catch (e) {}
  }
  boxes.forEach(b => b.addEventListener("change", () => { persist(); render(); }));
  panel.querySelector("button").addEventListener("click", () => {
    boxes.forEach(b => { b.checked = false; });
    persist();
    render();
  });
  render();
});


const sections = [...document.querySelectorAll(".doc")];
const navLinks = [...document.querySelectorAll(".doc-links a")];
const outline = document.getElementById("outline-links");
const sidebar = document.getElementById("sidebar");
const menu = document.querySelector(".menu");
const narrow = matchMedia("(max-width: 800px)");
let activeDoc;
let headingObserver;

function closeMenu() {
  sidebar.classList.remove("open");
  menu.setAttribute("aria-expanded", "false");
}

menu.addEventListener("click", () => {
  const open = sidebar.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});
narrow.addEventListener("change", closeMenu);
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && sidebar.classList.contains("open")) {
    closeMenu();
    menu.focus();
  }
});
document.addEventListener("click", event => {
  if (!sidebar.contains(event.target) && !menu.contains(event.target)) closeMenu();
});

// The article headings are also the source for the navigation outline.
function updateOutline(doc) {
  headingObserver?.disconnect();
  outline.replaceChildren();
  const headings = [...doc.querySelectorAll("h2[id], h3[id]")];
  const links = new Map();
  for (const heading of headings) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#" + heading.id;
    a.textContent = heading.textContent;
    if (heading.tagName === "H3") li.className = "sub";
    li.append(a);
    outline.append(li);
    links.set(heading, a);
  }
  headingObserver = new IntersectionObserver(() => {
    const current = headings.filter(h => h.getBoundingClientRect().top <= 140).pop();
    for (const [heading, link] of links) {
      if (heading === current) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    }
  }, {rootMargin: "-72px 0px -55% 0px"});
  headings.forEach(h => headingObserver.observe(h));
}

function navigate(event) {
  let hash = location.hash.slice(1);
  try { hash = decodeURIComponent(hash); } catch { /* Use the overview for unknown links. */ }
  const target = document.getElementById(hash);
  const doc = target?.closest(".doc") || sections[0];
  if (doc !== activeDoc) {
    activeDoc = doc;
    sections.forEach(section => { section.hidden = section !== doc; });
    const key = doc.dataset.file.replace(/\.md$/, "");
    for (const link of navLinks) {
      if (link.hash === "#" + encodeURI(key)) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    }
    updateOutline(doc);
    document.title = doc.querySelector("h1").textContent + " | Android カリキュラム";
  }
  closeMenu();
  const destination = target?.closest(".doc") && !target.classList.contains("doc-start") ? target : doc.querySelector("h1");
  if (event) {
    destination.tabIndex = -1;
    destination.focus({preventScroll: true});
  }
  if (!target || target.classList.contains("doc-start") || target === doc) window.scrollTo(0, 0);
  else target.scrollIntoView();
}

document.documentElement.classList.add("interactive");
window.addEventListener("hashchange", navigate);
sidebar.addEventListener("click", event => {
  const link = event.target.closest("a");
  if (link && link.hash === location.hash) navigate(event);
});
navigate();

// Render diagrams as readers approach them. Unopened documents need no measuring pass.
let mermaidReady;
function loadMermaid() {
  if (!mermaidReady) {
    mermaidReady = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js";
      script.onload = () => {
        mermaid.initialize({startOnLoad: false, theme: "default", securityLevel: "strict"});
        resolve(mermaid);
      };
      script.onerror = reject;
      document.head.append(script);
    });
  }
  return mermaidReady;
}

const diagramObserver = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    const block = entry.target;
    diagramObserver.unobserve(block);
    loadMermaid().then(async renderer => {
      const {svg} = await renderer.render("diagram-" + block.dataset.index, block.textContent);
      block.innerHTML = svg;
      const drawing = block.querySelector("svg");
      const width = drawing.viewBox.baseVal.width;
      if (width > 0) drawing.style.width = width + "px";
    }).catch(() => { /* The diagram source remains readable when offline. */ });
  }
}, {rootMargin: "600px"});
document.querySelectorAll("pre.mermaid").forEach((block, index) => {
  block.dataset.index = index;
  diagramObserver.observe(block);
});
