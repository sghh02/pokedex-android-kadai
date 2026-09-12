# 最終課題の進め方

Android コースの最終課題です。カントー地方の151匹を収録した**ポケモン図鑑アプリ**を、
Kotlin + Jetpack Compose で最初から作ります。

ここまでの章は、Google 公式コースの Codelab を1つずつなぞってきました。
この課題には手順書がありません。あるのは**要件と設計書**だけです。
何をどう作るかは自分で決め、決めた理由を PR で説明します。実務に一番近い形です。

## 1. 何を作るか

- PokeAPI から151匹ぶんのデータを取得する
- Room に保存し、**オフラインでも図鑑を開ける**ようにする
- 一覧（2列グリッド）と詳細（画像・タイプ・身長・体重）を Compose で作る
- 検索・設定・自動更新まで作り込む（加点要件）

技術スタックは Kotlin / Jetpack Compose / ViewModel + StateFlow / Room / Retrofit /
Coil / Navigation Compose。`minSdk` は 26（Android 8.0）です。
ここまでの章で一度は触れたものばかりで、新しく覚える技術はありません。
**組み合わせて1つのアプリにするのが今回の課題**です。

## 2. 設計書を先に読む

実装を始める前に、設計書に目を通してください。

### 📘 [設計書を開く](https://sghh02.github.io/pokedex-android-kadai/)

| 文書 | 何が書いてあるか |
| --- | --- |
| [01 要件定義](https://sghh02.github.io/pokedex-android-kadai/#01_要件定義) | なぜ作るのか、誰のためか、どこまでを対象にするか |
| [02 基本設計](https://sghh02.github.io/pokedex-android-kadai/#02_基本設計) | 画面一覧と遷移図、PokeAPI とのやりとり、テーブル構成 |
| [03 詳細設計](https://sghh02.github.io/pokedex-android-kadai/#03_詳細設計) | 機能ごとのシーケンス図と Kotlin の実装例 |
| [04 実装仕様](https://sghh02.github.io/pokedex-android-kadai/#04_実装仕様) | 実装範囲、共通ルール、評価基準 |
| [05 環境構築ガイド](https://sghh02.github.io/pokedex-android-kadai/#05_環境構築ガイド) | Fork から最初のビルド、PR の出し方まで |

全部を暗記する必要はありません。ただし
[実装仕様 2.3 実装の共通ルール](https://sghh02.github.io/pokedex-android-kadai/#04_実装仕様)
だけは、どの Issue に着手するときも先に読み返してください。
アーキテクチャ・状態の公開の仕方・エラーの扱い・DI の方針がここに集まっています。

## 3. 全体の流れ

1. [課題リポジトリ](https://github.com/sghh02/pokedex-android-kadai) を **Fork** する
2. clone して Android Studio で開き、**Run** を押す（**雛形は同梱済み**。プロジェクトを作る必要はありません）
3. この先の章を **上から順に** 1つずつ実装する。各章が Issue 1つに対応します
4. 章ごとにブランチを切り、**自分の Fork** に PR を作る
5. メンターに PR の URL を添えてレビューを依頼する
6. LGTM をもらったら、進捗ダッシュボードに PR URL と完了日を記録する

> **Issue は Fork にコピーされません**（GitHub の仕様です）。自分の Fork の Issues タブが
> 空でも問題ありません。実装タスクは
> [課題リポジトリの Issues](https://github.com/sghh02/pokedex-android-kadai/issues) を見てください。
>
> **PR の base に注意。** Fork から PR を作ると、base は初期状態で `sghh02/pokedex-android-kadai`
> になっています。**自分の Fork に変更してから** Create pull request を押してください。

## 4. 章の構成と配点

| フェーズ | 章 | 位置づけ | 目安 |
| --- | --- | --- | --- |
| Phase 1 | Issue #1 〜 #10 | **必須要件（70点）** | 16日 |
| Phase 2 | Issue #11 〜 #14 | 加点要件（+30点） | 6.5日 |
| ボーナス | Issue #15 | ユニットテスト | 2日 |
| 提出物 | Issue #16 | README・デモ動画・振り返り | 1日 |

必須要件まででおよそ16日、提出物まで含めて26日前後を見ています。
**Issue #5（PokemonRepository）が山場**です。Flow の扱いと151件の並列取得を
ここで作り込みます。ここで2〜3日かかるのは想定どおりなので、
焦らず、詰まったら早めに相談してください。

## 5. 詰まったときに

- **まず設計書に戻る。** 詳細設計にはシーケンス図と Kotlin の実装例があります
- **エラーは全文を読む。** Logcat のスタックトレースは上から3行目までに原因が出ていることが多いです
- **AI に聞くときは、やりたいこと・試したこと・エラー全文を渡す。**
  「動きません」では答えは返ってきません（Unit 0 の質問フォーマットを使ってください）
- **1時間詰まったらメンターに聞く。** 1人で3日溶かすより、30分相談したほうが学べます

## 6. 素材

- [画面モックとスクリーンショット](https://github.com/sghh02/pokedex-android-kadai/tree/main/素材/画面素材)
- [アプリアイコン](https://github.com/sghh02/pokedex-android-kadai/tree/main/素材/launcher_icon)
- [Figma デザイン](https://www.figma.com/design/b0kI8aTikCubCeKQdcSKEC/%E3%83%9D%E3%82%B1%E3%83%A2%E3%83%B3%E5%9B%B3%E9%91%91%28%E3%82%AB%E3%83%B3%E3%83%88%E3%83%BC%E5%9C%B0%E6%96%B9%29%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3?node-id=3-40&t=c3mklPkvnhvy8Sp5-1)

---

## 完了記録

この章には提出課題はありません。
学習が完了したら、進捗ダッシュボードで **完了日** を記録してください。
