# モバイルアプリ開発 最終課題

カントー地方のポケモン図鑑アプリを **Android ネイティブ（Kotlin + Jetpack Compose）** で実装します。
全16 Issue。必須要件までおよそ16日、加点と提出物まで含めて26日前後の想定です。

## このリポジトリに入っているもの

ビルドが通る状態のプロジェクト雛形が同梱されています。Fork して開けばすぐ実装に入れます。

```
app/                     Android アプリ本体（MainActivity だけの状態）
gradle/libs.versions.toml  使うライブラリ一式（Room / Retrofit / Coil ほか）
docs/                    設計書（下のリンク先の実体）
素材/                    画面モックとアイコン
```

## 設計書

### 📘 [設計書を開く](https://sghh02.github.io/pokedex-android-kadai/)

要件定義・基本設計・詳細設計・実装仕様・環境構築ガイドが1つのページに入っています。
左の目次から文書を切り替えられます。上から順に読んでいけば、
何を作るのか、どう作るのか、どこから手をつけるのかが分かります。

| 文書 | 何が書いてあるか |
| --- | --- |
| [01 要件定義](https://sghh02.github.io/pokedex-android-kadai/#01_要件定義) | なぜ作るのか、誰のためのものか、どこまでを対象にするか |
| [02 基本設計](https://sghh02.github.io/pokedex-android-kadai/#02_基本設計) | 画面の一覧と遷移図、PokeAPI とのやりとり、テーブル構成 |
| [03 詳細設計](https://sghh02.github.io/pokedex-android-kadai/#03_詳細設計) | 機能ごとのシーケンス図と Kotlin の実装例 |
| [04 実装仕様](https://sghh02.github.io/pokedex-android-kadai/#04_実装仕様) | 実装範囲、共通ルール、技術スタック、評価基準、スケジュール |
| [05 環境構築ガイド](https://sghh02.github.io/pokedex-android-kadai/#05_環境構築ガイド) | Fork から最初のビルド、プルリクエストの出し方まで |

## 進め方

1. このリポジトリを **Fork** する
2. clone して Android Studio で開き、**Run** を押す（雛形は同梱済み。作る必要はありません）
3. [Issues](https://github.com/sghh02/pokedex-android-kadai/issues) を `#1` から順に実装する
4. Issue ごとにブランチを切り、プルリクエストを作成する
5. メンターに PR の URL を添えてレビューを依頼する
6. LGTM をもらったら、その Issue は完了

各 Issue には受け入れ条件が付いています。すべて満たしてからレビューを依頼してください。

> **Issue は Fork にコピーされません**（GitHub の仕様です）。
> 自分の Fork の Issues タブは空のままで問題ありません。実装タスクは
> [このリポジトリの Issues](https://github.com/sghh02/pokedex-android-kadai/issues) を見てください。
>
> また、Fork から PR を作ると **base repository は初期状態でこのリポジトリ**になります。
> **自分の Fork に変更してから** Create pull request を押してください。
> 詳しくは [環境構築ガイド 8. プルリクエストを出す](https://sghh02.github.io/pokedex-android-kadai/#8-プルリクエストを出す) にあります。

| Issue | やること | 目安 | 累計 |
| --- | --- | --- | --- |
| #1 | 環境構築 | 1日 | 1 |
| #2 | PokeAPI 疎通確認 | 1日 | 2 |
| #3 | Room データベース構築 | 2日 | 4 |
| #4 | PokeApiService と DTO 実装 | 2日 | 6 |
| #5 | PokemonRepository 実装 | 3日 | 9 |
| #6 | スプラッシュ画面 | 0.5日 | 9.5 |
| #7 | ポケモン一覧画面 | 2日 | 11.5 |
| #8 | ポケモン詳細画面 | 1.5日 | 13 |
| #9 | 画面遷移 | 1日 | 14 |
| #10 | オフライン対応 | 2日 | 16 |
| #11 | ローディングとエラーハンドリング | 1.5日 | 17.5 |
| #12 | 検索機能 | 1.5日 | 19 |
| #13 | 詳細情報の拡張 | 2日 | 21 |
| #14 | 設定画面と更新 | 1.5日 | 22.5 |
| #15 | ユニットテスト | 2日 | 24.5 |
| #16 | 提出物の準備 | 1日 | 25.5 |

**必須要件（#1〜#10）まででおよそ16日**、加点要件とテスト・提出物まで含めて26日前後です。
`#5` の Repository が山場で、Flow の扱いと151件の並列取得をここで作り込みます。
詰まったら早めに相談してください。

`#1` 〜 `#10` が必須要件（70点）、`#11` 〜 `#14` が加点要件（+30点）、
`#15` がボーナス、`#16` が提出物です。

## 技術スタック

Kotlin / Jetpack Compose / ViewModel + StateFlow / Room / Retrofit / Coil / Navigation Compose。
`minSdk` は **26**（Android 8.0）。

## 素材

- [画面素材](素材/画面素材) — 画面モック（HTML）とスクリーンショット
- [launcher_icon](素材/launcher_icon) — アプリアイコン
- [Figma デザイン](https://www.figma.com/design/b0kI8aTikCubCeKQdcSKEC/%E3%83%9D%E3%82%B1%E3%83%A2%E3%83%B3%E5%9B%B3%E9%91%91%28%E3%82%AB%E3%83%B3%E3%83%88%E3%83%BC%E5%9C%B0%E6%96%B9%29%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3?node-id=3-40&t=c3mklPkvnhvy8Sp5-1) — 画面レイアウト
