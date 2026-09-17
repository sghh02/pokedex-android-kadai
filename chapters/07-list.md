# Issue #7: ポケモン一覧画面

この課題の中心となる画面です。151匹を2列グリッドで表示します。

Issue #5 の Repository ができていれば、画面は「ViewModel が公開する状態を購読して描くだけ」
になります。ここで画面から直接 DB や API を触りたくなったら、設計が崩れているサインです。

## 1. この章でやること

- `LazyVerticalGrid` で2列のグリッドを作る
- 各セルに図鑑番号・画像・名前を表示する（画像は Coil、プレースホルダも設定する）
- `PokemonListViewModel` が `StateFlow` で状態を公開し、画面はそれを購読するだけにする
- `init` で DB が空かを判定し、空なら初回取得を走らせる
- 取得中はローディング、失敗時はエラーと再試行ボタンを表示する

## 2. 着手前に読む

- [Issue #7](https://github.com/sghh02/pokedex-android-kadai/issues/7) — **実装内容と受け入れ条件の正はこちら**。この章はそれを読む順番と、つまずきやすい点を補うものです
- [詳細設計](https://sghh02.github.io/pokedex-android-kadai/#03_詳細設計) — 一覧画面のシーケンスと実装例
- [実装仕様](https://sghh02.github.io/pokedex-android-kadai/#04_実装仕様) — 2.3 実装の共通ルール。状態の公開の仕方

## 3. つまずきどころ

- Composable の引数に Repository や DAO を渡さないこと。**ViewModel 以外の依存を画面に入れない**のがルールです
- 画像のプレースホルダを設定しないと、スクロール時にセルの高さが飛び跳ねてカクつきます
- 画面回転で状態が消えるなら、状態を ViewModel ではなく Composable に持ってしまっています
- エラー時に**再試行ボタンを出す**こと。行き止まりの画面を作らない

## 4. チェックリスト

- [ ] [Issue #7](https://github.com/sghh02/pokedex-android-kadai/issues/7) の受け入れ条件をすべて満たした
- [ ] 151匹が2列グリッドで表示される
- [ ] 初回起動（DBが空）でローディング → 表示の流れを確認した
- [ ] 画面回転しても表示が保たれる

---

## 課題提出

この章には提出課題があります。

1. [Issue #7](https://github.com/sghh02/pokedex-android-kadai/issues/7) の受け入れ条件をすべて満たす
2. Fork した自分のリポジトリで `feature/07-list` ブランチを作成し、**自分の Fork の `main`** への PR を作成する（base が `sghh02/pokedex-android-kadai` のままになっていないか必ず確認する）
3. 以下の **PRレビュー** を実行する
4. レビューコメントをすべてコピーして、PR のコメントに貼る
5. メンターに PR の URL を添えてレビューを依頼する
6. LGTM をもらったら、進捗ダッシュボードで **PR URL** と **完了日** を記録
