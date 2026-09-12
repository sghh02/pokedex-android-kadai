# Issue #2: PokeAPI 疎通確認

画面を作る前に、**外部APIから実際にデータが取れること**だけを先に確かめます。

UI と通信を同時に作ると、表示が出ないときに「通信が失敗しているのか、描画が間違っているのか」
が切り分けられなくなります。だから通信だけを先に、Logcat で確認します。

## 1. この章でやること

- Retrofit と Kotlinx Serialization をセットアップする（依存は追加済み）
- `baseUrl` は定数として一箇所に定義する
- `GET /api/v2/pokemon?limit=151&offset=0` に対応する DTO を定義する
- `HttpLoggingInterceptor` を組み込み、取得件数を Logcat に出す

## 2. 着手前に読む

- [Issue #2](https://github.com/sghh02/pokedex-android-kadai/issues/2) — **実装内容と受け入れ条件の正はこちら**。この章はそれを読む順番と、つまずきやすい点を補うものです
- [環境構築ガイド](https://sghh02.github.io/pokedex-android-kadai/#05_環境構築ガイド) — 7. 疎通確認のコード例
- [詳細設計](https://sghh02.github.io/pokedex-android-kadai/#03_詳細設計) — 4.1.3 Retrofit と OkHttp の組み立て（AppContainer）

## 3. つまずきどころ

- この章では**画面表示はしません**。Logcat に151件と出れば合格です
- `HttpLoggingInterceptor` はリリースビルドで無効にすること。本番ログに通信内容が全部出ます
- `baseUrl` をハードコードしない。あとで検索置換する羽目になります

## 4. チェックリスト

- [ ] [Issue #2](https://github.com/sghh02/pokedex-android-kadai/issues/2) の受け入れ条件をすべて満たした
- [ ] Logcat で151件が取れていることを確認した
- [ ] ベースURLが定数になっている

---

## 課題提出

この章には提出課題があります。

1. [Issue #2](https://github.com/sghh02/pokedex-android-kadai/issues/2) の受け入れ条件をすべて満たす
2. Fork した自分のリポジトリで `feature/02-api` ブランチを作成し、**自分の Fork の `main`** への PR を作成する（base が `sghh02/pokedex-android-kadai` のままになっていないか必ず確認する）
3. [AIプログラムレビュー](https://ai.studio/apps/84d224cb-7de1-44fb-995b-9a5917d25603?fullscreenApplet=true) を実行して自己点検する
4. メンターに PR の URL を添えてレビューを依頼する
5. LGTM をもらったら、進捗ダッシュボードで **PR URL** と **完了日** を記録
