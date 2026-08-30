# モバイルアプリ開発 最終課題

カントー地方のポケモン図鑑アプリを **Android ネイティブ（Kotlin + Jetpack Compose）** で実装します。
全16 Issue、4週間で完成する構成です。

## 設計書

**すべての設計書はこちらにまとまっています。**

### 📘 [設計書を開く](https://claude.ai/code/artifact/02591d66-b87e-44f1-98d1-bc85ac2c19d3)

要件定義・基本設計・詳細設計・実装仕様・環境構築ガイドが1つのページに入っています。
左の目次から文書を切り替えられます。上から順に読んでいけば、
何を作るのか、どう作るのか、どこから手をつけるのかが分かります。

| 文書 | 何が書いてあるか |
| --- | --- |
| [01 要件定義](https://claude.ai/code/artifact/02591d66-b87e-44f1-98d1-bc85ac2c19d3#01_要件定義) | なぜ作るのか、誰のためのものか、どこまでを対象にするか |
| [02 基本設計](https://claude.ai/code/artifact/02591d66-b87e-44f1-98d1-bc85ac2c19d3#02_基本設計) | 画面の一覧と遷移図、PokeAPI とのやりとり、テーブル構成 |
| [03 詳細設計](https://claude.ai/code/artifact/02591d66-b87e-44f1-98d1-bc85ac2c19d3#03_詳細設計) | 機能ごとのシーケンス図と Kotlin の実装例 |
| [04 実装仕様](https://claude.ai/code/artifact/02591d66-b87e-44f1-98d1-bc85ac2c19d3#04_実装仕様) | 実装範囲、共通ルール、技術スタック、評価基準、スケジュール |
| [05 環境構築ガイド](https://claude.ai/code/artifact/02591d66-b87e-44f1-98d1-bc85ac2c19d3#05_環境構築ガイド) | Fork から最初のビルドを通すまで |

## 進め方

1. このリポジトリを **Fork** する
2. [環境構築ガイド](https://claude.ai/code/artifact/02591d66-b87e-44f1-98d1-bc85ac2c19d3#05_環境構築ガイド) に沿って、clone からビルドが通るまで進める
3. Issues を `#1` から順に実装する
4. Issue ごとにブランチを切り、プルリクエストを作成する
5. メンターに PR の URL を添えてレビューを依頼する
6. LGTM をもらったら、その Issue は完了

各 Issue には受け入れ条件が付いています。すべて満たしてからレビューを依頼してください。

| 週 | Issue | やること |
| --- | --- | --- |
| 1週目 | #1 〜 #2 | 環境構築 |
| 2週目 | #3 〜 #5 | データレイヤー |
| 3週目 | #6 〜 #10 | UIレイヤー（ここまでで必須要件を満たす） |
| 4週目 | #11 〜 #16 | 機能拡張・提出 |

`#1` 〜 `#10` が必須要件（70点）、`#11` 〜 `#14` が加点要件（+30点）、
`#15` がボーナス、`#16` が提出物です。

## 技術スタック

Kotlin / Jetpack Compose / ViewModel + StateFlow / Room / Retrofit / Coil / Navigation Compose。
`minSdk` は **26**（Android 8.0）。

## 素材

- [画面素材](素材/画面素材) — 画面モック（HTML）とスクリーンショット
- [launcher_icon](素材/launcher_icon) — アプリアイコン
- [Figma デザイン](https://www.figma.com/design/b0kI8aTikCubCeKQdcSKEC/%E3%83%9D%E3%82%B1%E3%83%A2%E3%83%B3%E5%9B%B3%E9%91%91%28%E3%82%AB%E3%83%B3%E3%83%88%E3%83%BC%E5%9C%B0%E6%96%B9%29%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3?node-id=3-40&t=c3mklPkvnhvy8Sp5-1) — 画面レイアウト
