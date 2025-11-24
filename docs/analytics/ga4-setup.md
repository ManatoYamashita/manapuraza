# Google Analytics 4 (GA4) Setup Guide

Google Analytics 4をGoogle Tag Manager (GTM)経由で設定するベストプラクティスガイド。
サブドメイン対応、クロスドメイントラッキング、プライバシー保護を考慮した完全な設定手順。

## 前提条件

- Google Tag Manager (GTM) 導入済み（GTM-WGJHG7ZD）
- Google Analytics アカウント保有
- サイトの管理者権限

## GA4プロパティの作成

### 1. Google Analytics にアクセス

1. [Google Analytics](https://analytics.google.com/) にアクセス
2. 左下の「管理」をクリック
3. 「プロパティを作成」を選択

### 2. プロパティ設定

**基本情報:**
- **プロパティ名:** `MANAPURAZA.COM`
- **レポートのタイムゾーン:** `日本`
- **通貨:** `日本円（¥）`

**業種とビジネスの規模:**
- **業種:** `アート・エンターテイメント` または `テクノロジー`
- **ビジネスの規模:** `小規模 - 従業員数 1～10名`

**ビジネス目標:**
- ☑ トラフィックとエンゲージメントの測定
- ☑ ユーザー行動の分析
- ☑ コンバージョンの測定

### 3. データストリームの作成

1. 「ウェブ」を選択
2. 設定:
   - **ウェブサイトのURL:** `https://manapuraza.com`
   - **ストリーム名:** `MANAPURAZA.COM - Web`
3. 「ストリームを作成」をクリック

### 4. 測定IDの確認

データストリーム作成後、以下の形式の測定IDが表示されます:

```
G-XXXXXXXXXX
```

この測定IDを控えておきます（後でGTMで使用）。

## GTM での GA4 設定

### ステップ1: GA4 設定タグの作成

1. **GTMコンテナにアクセス**
   - [Google Tag Manager](https://tagmanager.google.com/) を開く
   - `GTM-WGJHG7ZD` コンテナを選択

2. **新しいタグを作成**
   - 左メニュー「タグ」→「新規」
   - タグ名: `GA4 - Configuration`

3. **タグの設定**
   - タグタイプ: `Google アナリティクス: GA4 設定`
   - **測定ID:** `G-XXXXXXXXXX`（先ほど取得したID）

4. **詳細設定**
   ```
   ☑ 拡張測定機能を有効にする（推奨）
     - ページビュー
     - スクロール
     - 離脱クリック
     - サイト内検索
     - 動画エンゲージメント
     - ファイルのダウンロード
   ```

5. **クロスドメイン トラッキング設定**

   サブドメイン対応のため、以下を設定:

   **設定フィールド:**

   | フィールド名 | 値 | 説明 |
   |------------|-----|------|
   | `cookie_domain` | `auto` | 自動的にドメインを検出 |
   | `cookie_flags` | `SameSite=None;Secure` | クロスドメイン対応 |
   | `linker` | `{"domains":["manapuraza.com","*.manapuraza.com"]}` | サブドメイン間の連携 |

   **GTM設定画面での入力例:**
   ```
   フィールド名: cookie_domain
   値: auto

   フィールド名: cookie_flags
   値: SameSite=None;Secure

   フィールド名: linker
   値: {"domains":["manapuraza.com","*.manapuraza.com"]}
   ```

6. **トリガー設定**
   - トリガー: `All Pages`（すべてのページ）
   - トリガータイプ: `ページビュー - すべてのページ`

7. **保存**

### ステップ2: カスタムイベントの設定（推奨）

ポートフォリオサイトとして有用なイベントを設定:

#### 2-1. 外部リンククリック イベント

**タグ名:** `GA4 - Event - External Link Click`

**タグタイプ:** `Google アナリティクス: GA4 イベント`

**設定:**
- **設定タグ:** `GA4 - Configuration`（先ほど作成したタグ）
- **イベント名:** `external_link_click`
- **イベント パラメータ:**

  | パラメータ名 | 値 |
  |------------|-----|
  | `link_url` | `{{Click URL}}` |
  | `link_text` | `{{Click Text}}` |
  | `link_domain` | `{{Click Element}} の hostname` |

**トリガー:**
1. 新しいトリガーを作成
   - トリガー名: `External Links`
   - トリガータイプ: `クリック - リンクのみ`
   - 待機時間: `2000ミリ秒`
   - 有効化の条件: `Page Hostname が manapuraza.com と等しい`
   - 配信のタイミング: `Click URL が ^https?://(?!.*manapuraza\.com) と正規表現に一致する`

#### 2-2. 動画再生イベント（YouTube）

**タグ名:** `GA4 - Event - Video Play`

**設定:**
- **設定タグ:** `GA4 - Configuration`
- **イベント名:** `video_start`
- **イベント パラメータ:**

  | パラメータ名 | 値 |
  |------------|-----|
  | `video_title` | `{{Video Title}}` |
  | `video_url` | `{{Video URL}}` |
  | `video_provider` | `youtube` |

**トリガー:**
- トリガータイプ: `YouTube 動画`
- キャプチャ: `開始`

#### 2-3. お問い合わせフォーム送信

**タグ名:** `GA4 - Event - Form Submit`

**設定:**
- **設定タグ:** `GA4 - Configuration`
- **イベント名:** `form_submit`
- **イベント パラメータ:**

  | パラメータ名 | 値 |
  |------------|-----|
  | `form_name` | `contact_form` |
  | `form_destination` | `{{Page Path}}` |

**トリガー:**
- トリガータイプ: `フォームの送信`
- 有効化の条件: `Page Path が /contact を含む`

#### 2-4. 言語切り替えイベント

**タグ名:** `GA4 - Event - Language Switch`

**設定:**
- **設定タグ:** `GA4 - Configuration`
- **イベント名:** `language_switch`
- **イベント パラメータ:**

  | パラメータ名 | 値 |
  |------------|-----|
  | `new_language` | `{{Click Element}} の data-language 属性` |
  | `previous_language` | `{{Previous Language}}` |

**実装:**
1. Vue コンポーネントで `dataLayer.push` を使用
2. GTM でカスタムイベントをトリガー

### ステップ3: プライバシー設定（重要）

#### IP匿名化とデータ保持設定

**GA4 管理画面での設定:**

1. **データ設定 > データ収集**
   - ☑ Google のシグナルを有効にする（オプション）
   - ☑ 拡張計測機能を有効にする

2. **データ設定 > データ保持**
   - **イベントデータの保持:** `14か月`（推奨）
   - ☑ 新しいアクティビティでユーザーデータの保持期間をリセットする

3. **データ設定 > データフィルタ**
   - **内部トラフィックの除外:**
     1. 「データフィルタを作成」
     2. フィルタ名: `Internal Traffic`
     3. フィルタの状態: `有効`
     4. フィルタの操作: `除外`
     5. 一致タイプ: `IPアドレス`
     6. IP アドレス: あなたの開発環境のIPアドレス

#### GTM でのプライバシー設定

**同意モード（Consent Mode）の実装:**

```javascript
// index.html の GTM スクリプトの前に追加
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// デフォルトで全て拒否
gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'wait_for_update': 500
});

// ユーザーが同意した場合に有効化
// gtag('consent', 'update', {
//   'analytics_storage': 'granted'
// });
```

**Cookie バナーとの連携:**
- ユーザーが分析Cookieを許可した場合のみ `analytics_storage: 'granted'` を実行
- 拒否した場合は `denied` のまま（GA4はCookieレストラッキングを使用）

## サブドメイン対応の詳細設定

### クロスドメイントラッキングの仕組み

GA4は以下の設定で自動的にサブドメイン間のユーザーを追跡します:

```javascript
// GTM の GA4 設定タグで自動的に処理される
cookie_domain: 'auto'  // .manapuraza.com として設定される
linker: {"domains":["manapuraza.com","*.manapuraza.com"]}
```

### サブドメインの例

もし以下のようなサブドメインを追加する場合:

- `blog.manapuraza.com`
- `shop.manapuraza.com`
- `api.manapuraza.com`（トラッキング不要）

**設定方法:**

1. **GTM の GA4 設定タグを編集**
   - `linker` フィールドはそのまま（`*.manapuraza.com` でカバー）

2. **除外するサブドメイン（APIなど）:**
   - GTM トリガーで除外:
     ```
     トリガー条件: Page Hostname が api.manapuraza.com と等しくない
     ```

### リファラーの除外設定

GA4 管理画面で設定:

1. **データストリーム > 詳細設定 > タグ設定を行う**
2. **すべて表示 > 参照元除外リストを設定**
3. 除外するドメイン:
   ```
   manapuraza.com
   *.manapuraza.com
   ```

これにより、サブドメイン間の遷移が「参照元」として記録されなくなります。

## 検証とテスト

### リアルタイムレポートでの確認

1. **GA4 管理画面にアクセス**
2. 左メニュー「レポート」→「リアルタイム」
3. 自分のサイトにアクセスしてデータが表示されることを確認

### GTM プレビューモードでのテスト

1. **GTM でプレビューを開始**
   - 右上「プレビュー」ボタン
   - サイトURLを入力して「Connect」

2. **確認項目:**
   - ✅ `GA4 - Configuration` タグが発火している
   - ✅ `pageview` イベントが送信されている
   - ✅ カスタムイベント（外部リンククリックなど）が正しく動作

3. **GA4 DebugView での確認**
   - GA4 管理画面「設定」→「DebugView」
   - プレビューモードでの操作がリアルタイムで表示される

### クロスドメイン トラッキングのテスト

もしサブドメインがある場合:

1. メインドメイン（`manapuraza.com`）にアクセス
2. サブドメイン（`blog.manapuraza.com`）へ遷移
3. GA4 リアルタイムレポートで「1ユーザー」として認識されているか確認
4. URL に `_gl=` パラメータが付与されていることを確認

## コンバージョンの設定

ポートフォリオサイトで重要なコンバージョン:

### 1. 外部リンククリック（作品ページへの遷移）

**GA4 管理画面:**
1. 「設定」→「イベント」
2. 「イベントを作成」
3. カスタムイベント名: `portfolio_click`
4. 一致する条件:
   - パラメータ: `event_name`
   - 演算子: `次と等しい`
   - 値: `external_link_click`
   - AND
   - パラメータ: `link_url`
   - 演算子: `次を含む`
   - 値: `github.com` または `youtube.com`

5. 「コンバージョン」としてマーク

### 2. お問い合わせフォーム送信

1. 「設定」→「イベント」
2. `form_submit` イベントを見つける
3. 「コンバージョンとしてマーク」をON

### 3. SNSリンククリック

1. カスタムイベント: `social_click`
2. 条件: `link_url` に `twitter.com`, `github.com`, `linkedin.com` を含む
3. 「コンバージョンとしてマーク」

## 定期的な確認項目

### 週次確認

- [ ] トラフィックの異常な増減
- [ ] エラーページ（404）へのアクセス
- [ ] 外部リンククリック数
- [ ] ユーザーのデバイス分布

### 月次確認

- [ ] ページ別パフォーマンス
- [ ] ユーザー属性（地域、言語、デバイス）
- [ ] コンバージョン率
- [ ] 平均エンゲージメント時間

### 四半期確認

- [ ] 目標達成率の評価
- [ ] GA4設定の見直し
- [ ] 新しいイベントの追加検討
- [ ] データ品質の監査

## トラブルシューティング

### データが表示されない

**原因1:** GTM タグが発火していない
- **解決策:** GTM プレビューモードで確認、トリガー設定を見直す

**原因2:** 測定IDが間違っている
- **解決策:** GA4 データストリームで測定IDを再確認

**原因3:** AdBlocker が有効
- **解決策:** テスト時は AdBlocker を無効化

### サブドメイン間でユーザーが分離される

**原因:** クロスドメイン設定が不完全
- **解決策:**
  1. GTM の `linker` 設定を確認
  2. `cookie_domain: auto` が設定されているか確認
  3. 参照元除外リストにドメインを追加

### イベントが重複して記録される

**原因:** GTM タグが複数回発火
- **解決策:**
  1. トリガーの条件を厳密化
  2. タグの配信順序を確認
  3. 「このタグは1ページにつき1回のみ配信」を有効化

## セキュリティとプライバシー

### GDPR / Cookie法対応

1. **Cookie バナーの実装**
   - ユーザーの明示的な同意を取得
   - 同意前は `analytics_storage: denied`

2. **プライバシーポリシーの更新**
   - Google Analytics 使用の明記
   - データ収集項目の説明
   - オプトアウト方法の提示

3. **データ処理契約**
   - Google とのデータ処理契約を確認
   - GA4 管理画面「データ設定」→「データ処理契約」

### 個人情報の除外

GA4 に個人情報を送信しないように注意:

- ❌ メールアドレス
- ❌ 電話番号
- ❌ 氏名
- ❌ IPアドレス（GA4は自動的に匿名化）

## 参考リソース

- [GA4 公式ドキュメント](https://support.google.com/analytics/answer/9304153)
- [GTM ヘルプセンター](https://support.google.com/tagmanager)
- [クロスドメイン トラッキング ガイド](https://support.google.com/analytics/answer/10071811)
- [Google アナリティクス用語集](https://support.google.com/analytics/topic/9355906)

## 更新履歴

- 2025-11-25: 初版作成（GA4 + GTM + サブドメイン対応完全ガイド）
