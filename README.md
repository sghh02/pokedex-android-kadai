# ポケモン図鑑アプリ 最終課題

カントー地方のポケモン図鑑アプリを **Android ネイティブ（Kotlin + Jetpack Compose）** で実装する課題です。
全16 Issue・4週間で完成する構成になっています。

## 進め方

1. このリポジトリを **Fork** する
2. Fork したリポジトリの Issues を `#1` から順に実装する
3. Issue ごとにプルリクエストを作成する
4. メンターに PR の URL を添えてレビューを依頼する
5. LGTM をもらったら、その Issue は完了

各 Issue は受け入れ条件をすべて満たした時点で完了です。
レビュー依頼時は、受け入れ条件のチェックが埋まっていることを確認してください。

| 週 | Issue | フェーズ |
| --- | --- | --- |
| 1週目 | #1 〜 #2 | 環境構築 |
| 2週目 | #3 〜 #5 | データレイヤー |
| 3週目 | #6 〜 #10 | UIレイヤー（必須要件を満たす） |
| 4週目 | #11 〜 #16 | 機能拡張・提出 |

`#1` 〜 `#10` が必須要件（70点）、`#11` 〜 `#14` が加点要件（+30点）、`#15` がボーナス、`#16` が提出物です。

## まず読むもの

| 順番 | 見るもの | 何があるか |
| --- | --- | --- |
| 1 | [Issues](../../issues) | 実装タスク16件と受け入れ条件。`#1` から順に着手する |
| 2 | [環境構築ガイド](docs/05_環境構築ガイド.md) | プロジェクト作成から最初のビルドを通すまで |
| 3 | [実装仕様](docs/04_実装仕様.md) | 実装スコープ・共通ルール・技術スタック・評価基準 |

## 設計書

必要になったときに参照します。通読しなくても着手できます。

| ドキュメント | 何が書いてあるか |
| --- | --- |
| [01 要件定義](docs/01_要件定義.md) | 目的、ターゲットユーザー、機能要件、非機能要件 |
| [02 基本設計](docs/02_基本設計.md) | システム構成、画面設計、インターフェース設計、テスト計画 |
| [03 詳細設計](docs/03_詳細設計.md) | 型定義、機能ごとのシーケンス図と Kotlin の実装例 |

01・02 の末尾には、要件定義・基本設計という工程そのものの解説を付録として収録しています。
[最終課題_全文.md](docs/最終課題_全文.md) は上記すべてを1ファイルに結合したものです。

実装タスクは Issues が唯一の情報源です。設計書に重複して置いていません。

## 技術スタック

Kotlin / Jetpack Compose / ViewModel + StateFlow / Room / Retrofit / Coil / Navigation Compose。
`minSdk` は **26**（Android 8.0）。

依存の具体的な書き方は[環境構築ガイド](docs/05_環境構築ガイド.md)、選定の方針は[実装仕様](docs/04_実装仕様.md)にあります。

## 素材

- [画面素材](docs/素材/画面素材) — 画面モック（HTML）とスクリーンショット
- [launcher_icon](docs/素材/launcher_icon) — アプリアイコン
- [Figma デザイン](https://www.figma.com/design/b0kI8aTikCubCeKQdcSKEC/%E3%83%9D%E3%82%B1%E3%83%A2%E3%83%B3%E5%9B%B3%E9%91%91%28%E3%82%AB%E3%83%B3%E3%83%88%E3%83%BC%E5%9C%B0%E6%96%B9%29%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3?node-id=3-40&t=c3mklPkvnhvy8Sp5-1) — 画面レイアウト

## 参考リンク

- [PokeAPI 公式ドキュメント](https://pokeapi.co/docs/v2)
- [Android アプリ アーキテクチャ ガイド](https://developer.android.com/topic/architecture)
- [Jetpack Compose 公式ドキュメント](https://developer.android.com/develop/ui/compose/documentation)
- [Room 公式ガイド](https://developer.android.com/training/data-storage/room)
