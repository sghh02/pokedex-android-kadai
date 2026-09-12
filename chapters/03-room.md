# Issue #3: Room データベース構築

オフラインでも図鑑を開けるよう、ローカルの保存先を用意します。

ここで作る DAO は Issue #5 の Repository が使う土台です。
スキーマを後から変えるとマイグレーションが必要になるので、実装仕様のテーブル定義どおりに作ってください。

## 1. この章でやること

- `PokemonEntity` を定義する（`id` / `name` / `name_ja` / `image_url` / `height` / `weight` / `type1` / `type2` / `created_at`）
- `name` `name_ja` `type1` `type2` にインデックスを張る
- `PokemonDao` を実装する（全件取得は `Flow`、ID指定の1件取得、部分一致検索、図鑑番号検索、一括 upsert、件数取得）
- 詳細キャッシュ用に `PokemonDetailCacheEntity` と `DetailCacheDao` も定義する
- `AppDatabase` に両方の Entity と Dao を登録する

## 2. 着手前に読む

- [Issue #3](https://github.com/sghh02/pokedex-android-kadai/issues/3) — **実装内容と受け入れ条件の正はこちら**。この章はそれを読む順番と、つまずきやすい点を補うものです
- [実装仕様](https://sghh02.github.io/pokedex-android-kadai/#04_実装仕様) — テーブル定義。カラム名と型はここに合わせる

## 3. つまずきどころ

- **`types` を JSON 文字列で持たないこと。** `type1` `type2` の2カラムに分けます。JSON にすると絞り込み検索ができなくなります
- `height` `weight` は API の生値（デシメートル・ヘクトグラム）を**そのまま**保存します。m・kg への変換は表示するときに行います（Issue #8）
- `last_accessed` のインデックスは、キャッシュを古い順に消すためのものです（Issue #13 で効いてきます）
- 一覧取得を `List` ではなく `Flow` で返すこと。ここを間違えると Issue #5 の設計が成立しません

## 4. チェックリスト

- [ ] [Issue #3](https://github.com/sghh02/pokedex-android-kadai/issues/3) の受け入れ条件をすべて満たした
- [ ] in-memory データベースを使った DAO のテストが `./gradlew test` で通る

---

## 課題提出

この章には提出課題があります。

1. [Issue #3](https://github.com/sghh02/pokedex-android-kadai/issues/3) の受け入れ条件をすべて満たす
2. Fork した自分のリポジトリで `feature/03-room` ブランチを作成し、**自分の Fork の `main`** への PR を作成する（base が `sghh02/pokedex-android-kadai` のままになっていないか必ず確認する）
3. [AIプログラムレビュー](https://ai.studio/apps/84d224cb-7de1-44fb-995b-9a5917d25603?fullscreenApplet=true) を実行して自己点検する
4. メンターに PR の URL を添えてレビューを依頼する
5. LGTM をもらったら、進捗ダッシュボードで **PR URL** と **完了日** を記録
