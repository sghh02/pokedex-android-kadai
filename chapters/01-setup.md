# Issue #1: 環境構築とビルド確認

Fork したプロジェクトがビルドでき、手元の端末で動くところまでを確認します。

**プロジェクトの雛形とビルド設定は同梱済みです。** 新規プロジェクトを作る必要はありません。
ここでつまずくと以降の全部が止まるので、1日かけてでも確実に通してください。

## 1. この章でやること

- 課題リポジトリを Fork して clone する
- Android Studio の **Open** で clone したディレクトリを開く（New Project ではありません）
- Gradle の同期が終わってから **Run** を押す
- `./gradlew assembleDebug` がコマンドラインからも通ることを確認する

## 2. 着手前に読む

- [Issue #1](https://github.com/sghh02/pokedex-android-kadai/issues/1) — **実装内容と受け入れ条件の正はこちら**。この章はそれを読む順番と、つまずきやすい点を補うものです
- [環境構築ガイド](https://sghh02.github.io/pokedex-android-kadai/#05_環境構築ガイド) — Fork から最初のビルドまでの手順
- [実装仕様](https://sghh02.github.io/pokedex-android-kadai/#04_実装仕様) — 2.3 実装の共通ルール。どの Issue でも先に読み返す

## 3. つまずきどころ

- **依存ライブラリのバージョンは変えないでください。** `gradle/libs.versions.toml` の組み合わせは噛み合わせて用意してあります。新しいほうがよさそうに見えても、上げると別の場所が壊れます
- Gradle の同期は初回だけ数分かかります。終わる前に Run を押すと意味不明なエラーになるので待つこと
- push できない場合はほぼ認証です。Personal Access Token の設定まで済ませてから次に進んでください

## 4. チェックリスト

- [ ] [Issue #1](https://github.com/sghh02/pokedex-android-kadai/issues/1) の受け入れ条件をすべて満たした
- [ ] エミュレータまたは実機で `Pokédex` と表示されるところまで自分の目で見た
- [ ] 自分の Fork に push できた

---

## 課題提出

この章には提出課題があります。

1. [Issue #1](https://github.com/sghh02/pokedex-android-kadai/issues/1) の受け入れ条件をすべて満たす
2. Fork した自分のリポジトリで `feature/01-setup` ブランチを作成し、**自分の Fork の `main`** への PR を作成する（base が `sghh02/pokedex-android-kadai` のままになっていないか必ず確認する）
3. 以下の **PRレビュー** を実行する
4. レビューコメントをすべてコピーして、PR のコメントに貼る
5. メンターに PR の URL を添えてレビューを依頼する
6. LGTM をもらったら、進捗ダッシュボードで **PR URL** と **完了日** を記録
