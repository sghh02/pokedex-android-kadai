# Issue #9: 画面遷移（Navigation Compose）

スプラッシュ・一覧・詳細の遷移を、1箇所にまとめて管理します。

ここまでは画面を個別に作ってきました。この章で1本のアプリにつなぎます。

## 1. この章でやること

- `NavHost` を定義し、スプラッシュ／一覧／詳細のルートを登録する
- 詳細画面へは図鑑番号を引数で渡す
- ルート文字列を sealed class などにまとめて型安全に扱う

## 2. 着手前に読む

- [Issue #9](https://github.com/sghh02/pokedex-android-kadai/issues/9) — **実装内容と受け入れ条件の正はこちら**。この章はそれを読む順番と、つまずきやすい点を補うものです
- [基本設計](https://sghh02.github.io/pokedex-android-kadai/#02_基本設計) — 画面遷移図

## 3. つまずきどころ

- 基本設計の遷移図には設定画面とボトムナビも載っていますが、**あれは Issue #14 の担当**です。この章ではスプラッシュ・一覧・詳細の3つだけ作ってください
- ルート文字列（`"detail/{id}"` のような文字列）を画面のあちこちに直接書かないこと。typo がコンパイルで捕まらず、実行するまで気づけません

## 4. チェックリスト

- [ ] [Issue #9](https://github.com/sghh02/pokedex-android-kadai/issues/9) の受け入れ条件をすべて満たした
- [ ] スプラッシュ → 一覧 → 詳細 → 一覧 の遷移ができる
- [ ] ルート文字列が1箇所に集まっている

---

## 課題提出

この章には提出課題があります。

1. [Issue #9](https://github.com/sghh02/pokedex-android-kadai/issues/9) の受け入れ条件をすべて満たす
2. Fork した自分のリポジトリで `feature/09-navigation` ブランチを作成し、**自分の Fork の `main`** への PR を作成する（base が `sghh02/pokedex-android-kadai` のままになっていないか必ず確認する）
3. [AIプログラムレビュー](https://ai.studio/apps/84d224cb-7de1-44fb-995b-9a5917d25603?fullscreenApplet=true) を実行して自己点検する
4. メンターに PR の URL を添えてレビューを依頼する
5. LGTM をもらったら、進捗ダッシュボードで **PR URL** と **完了日** を記録
