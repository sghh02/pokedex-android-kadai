# Issue #15: ユニットテスト

ボーナス課題です。主要なロジックが壊れていないことを、自動で確認できるようにします。

Issue #3 と #5 で「テストが通ること」を受け入れ条件に入れていました。
ここではそれを ViewModel まで広げ、**テストしやすい設計になっているか**を点検します。

## 1. この章でやること

- `PokemonDao` のテスト（in-memory データベース）
- `PokemonRepository` のテスト（API・DAO をフェイクに差し替える）
- ViewModel のテスト（状態遷移が期待どおりか）

## 2. 着手前に読む

- [Issue #15](https://github.com/sghh02/pokedex-android-kadai/issues/15) — **実装内容と受け入れ条件の正はこちら**。この章はそれを読む順番と、つまずきやすい点を補うものです
- [実装仕様](https://sghh02.github.io/pokedex-android-kadai/#04_実装仕様) — 評価基準

## 3. つまずきどころ

- テストが書きにくいなら、**それは設計のサイン**です。依存が直接 `new` されていないか、インターフェース越しに受け取れているかを見直してください
- モックライブラリに頼りすぎないこと。フェイク実装（インターフェースを手で実装したクラス）のほうが読みやすく、壊れにくいです
- 「通信が失敗したらDBの値を返す」のような**フォールバックの分岐こそテストする価値があります**。正常系だけのテストは、ほとんど何も守りません

## 4. チェックリスト

- [ ] [Issue #15](https://github.com/sghh02/pokedex-android-kadai/issues/15) の受け入れ条件をすべて満たした
- [ ] `./gradlew test` がすべて成功する
- [ ] 通信失敗時のフォールバックがテストで確認されている

---

## 課題提出

この章には提出課題があります。

1. [Issue #15](https://github.com/sghh02/pokedex-android-kadai/issues/15) の受け入れ条件をすべて満たす
2. Fork した自分のリポジトリで `feature/15-unit-test` ブランチを作成し、**自分の Fork の `main`** への PR を作成する（base が `sghh02/pokedex-android-kadai` のままになっていないか必ず確認する）
3. [AIプログラムレビュー](https://ai.studio/apps/84d224cb-7de1-44fb-995b-9a5917d25603?fullscreenApplet=true) を実行して自己点検する
4. メンターに PR の URL を添えてレビューを依頼する
5. LGTM をもらったら、進捗ダッシュボードで **PR URL** と **完了日** を記録
