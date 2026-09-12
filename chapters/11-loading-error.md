# Issue #11: ローディング表示とエラーハンドリング

**ここから Phase 2（加点要件）です。** 通信中・失敗時に、ユーザーが次に何をすればいいか
分かる状態にします。

Issue #7 でも簡易的なローディングとエラーは出しましたが、ここで**状態を型として整理**し、
原因ごとにメッセージを出し分けます。

## 1. この章でやること

- 画面の状態を `Loading` / `Success` / `Empty` / `Error` として表現する
- 失敗時はエラーメッセージと再試行ボタンを表示する
- メッセージを原因ごとに出し分ける（オフライン／タイムアウト／サーバーエラー）
- 一覧に Pull to refresh を実装する

## 2. 着手前に読む

- [Issue #11](https://github.com/sghh02/pokedex-android-kadai/issues/11) — **実装内容と受け入れ条件の正はこちら**。この章はそれを読む順番と、つまずきやすい点を補うものです
- [詳細設計](https://sghh02.github.io/pokedex-android-kadai/#03_詳細設計) — 状態の持ち方と実装例

## 3. つまずきどころ

- `isLoading: Boolean` と `error: String?` を並べて持たないこと。「ローディング中かつエラー」という**あり得ない状態**が表現できてしまいます。sealed class で1つにまとめます
- `Empty`（0件）と `Loading`（まだ分からない）を混同しないこと。ユーザーに見せる意味が違います
- エラー文言に例外クラス名をそのまま出さないこと。ユーザーが次に何をすればいいかを書きます

## 4. チェックリスト

- [ ] [Issue #11](https://github.com/sghh02/pokedex-android-kadai/issues/11) の受け入れ条件をすべて満たした
- [ ] オフラインとサーバーエラーでメッセージが変わる
- [ ] Pull to refresh で一覧が更新される

---

## 課題提出

この章には提出課題があります。

1. [Issue #11](https://github.com/sghh02/pokedex-android-kadai/issues/11) の受け入れ条件をすべて満たす
2. Fork した自分のリポジトリで `feature/11-loading-error` ブランチを作成し、**自分の Fork の `main`** への PR を作成する（base が `sghh02/pokedex-android-kadai` のままになっていないか必ず確認する）
3. [AIプログラムレビュー](https://ai.studio/apps/84d224cb-7de1-44fb-995b-9a5917d25603?fullscreenApplet=true) を実行して自己点検する
4. メンターに PR の URL を添えてレビューを依頼する
5. LGTM をもらったら、進捗ダッシュボードで **PR URL** と **完了日** を記録
