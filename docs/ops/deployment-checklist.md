# デプロイメント チェックリスト

## 開発環境とプロダクション環境の統一性確保

### 🔍 事前チェック項目

#### 1. **CSS読み込み統一性**
- [ ] `src/main.js`のloadMainCSS関数で環境分岐が正しく動作する
- [ ] 開発環境: `/src/assets/main.css` の動的読み込み
- [ ] プロダクション環境: 静的インポートによる確実な読み込み
- [ ] フォールバック機能が適切に設定されている

#### 2. **Console ログ設定**
- [ ] 重要なエラーログ（console.error）はプロダクションでも残る
- [ ] デバッグログ（console.debug, console.trace）は削除される
- [ ] MetaBall関連の初期化ログが適切に出力される

#### 3. **Three.js モジュール統一性**
- [ ] MarchingCubes の動的インポートにエラーハンドリング実装済み
- [ ] OrbitControls の条件付き読み込みが環境に関わらず安定動作
- [ ] 環境変数（DEV/PROD）に基づく適切なログ出力

#### 4. **ビルド設定確認**
- [ ] `vite.config.js` の terserOptions が適切に設定されている
- [ ] chunk分割設定（vendor, vendor_three, etc）が正しく動作
- [ ] sourcemap生成が有効になっている

### 🧪 テスト実行

#### 両環境での動作確認
```bash
# 開発環境
npm run dev
# http://localhost:5173/ でアクセス

# プロダクション環境
npm run build
npm run preview
# http://localhost:4173/ でアクセス
```

#### 必須チェック項目
- [ ] MetaBallアニメーションが両環境で正常動作
- [ ] ウィンドウリサイズ時の球形保持が正常動作
- [ ] CSS スタイルが両環境で同等に適用される
- [ ] コンソールログで初期化プロセスが確認できる
- [ ] エラーが発生していない

### 🚀 デプロイメント実行

#### GitHub Actions による自動デプロイ
- [ ] mainブランチへのプッシュが完了
- [ ] GitHub Actions のビルドが成功
- [ ] FTPデプロイが正常完了

#### 本番環境での最終確認
- [ ] デプロイされたサイトでMetaBallが正常動作
- [ ] 全ページでレイアウトが正しく表示される
- [ ] 両言語（日本語・英語）での動作確認
- [ ] レスポンシブデザインの動作確認

### 🔧 トラブルシューティング

#### CSS読み込み問題
```javascript
// プロダクション環境でCSS読み込み失敗時のフォールバック
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.fontFamily = 'system-ui, sans-serif';
```

#### Three.jsモジュール読み込み問題
```javascript
// MarchingCubes読み込み失敗時
console.error('MetaBall: Failed to load MarchingCubes:', error);
throw new Error('MetaBall initialization failed: MarchingCubes module unavailable');
```

### 📋 今回の修正内容（v2.0.0）

1. **CSS動的読み込みの環境対応**
   - `import.meta.env.DEV/PROD` による条件分岐実装
   - プロダクション環境での静的インポート採用

2. **Console ログ設定改善**
   - `drop_console: false` に変更
   - 重要ログの保持、詳細ログのみ削除

3. **Three.js初期化の環境統一**
   - エラーハンドリング強化
   - 環境情報を含むログ出力

4. **テスト環境整備**
   - 開発・プロダクション両環境での並行テスト実行可能

### 📊 パフォーマンス指標

#### ビルド結果目標値
- [ ] Total JS bundle size < 800KB (gzipped)
- [ ] CSS bundle size < 20KB (gzipped)  
- [ ] Three.js chunk < 120KB (gzipped)
- [ ] 初期描画時間 < 2秒

---

## 開発者向け追加情報

### 環境変数確認コマンド
```javascript
console.log('Environment:', import.meta.env.MODE);
console.log('DEV:', import.meta.env.DEV);
console.log('PROD:', import.meta.env.PROD);
```

### デバッグ時の有用なブラウザ設定
- デベロッパーツールでソースマップを有効化
- ネットワークタブでチャンク読み込み順序を確認
- コンソールで初期化ログを監視
