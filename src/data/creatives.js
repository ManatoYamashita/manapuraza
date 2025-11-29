/**
 * ポートフォリオ作品データファイル
 * 
 * 各作品カテゴリごとに、作品情報を一元管理するファイルです。
 * title: 翻訳キー（i18nで管理）
 * description: 説明文の翻訳キー
 * url: 作品のURL
 * thumbnail: 作品のサムネイル画像パス
 * id: 作品の識別子（ファイル名として使用）
 */

// 画像のインポート
import manapurazaImg from '@/assets/creatives-thumb/dev/manapuraza.webp';
import dcchanNetImg from '@/assets/creatives-thumb/dev/dcchan-ai.webp';
import numeronGameImg from '@/assets/creatives-thumb/dev/numeron.webp';
import pomjpBetaImg from '@/assets/creatives-thumb/dev/office-tsuyuki.webp';
import tcudcBotImg from '@/assets/creatives-thumb/dev/dcchan-twitterbot.webp';
import sekiKenImg from '@/assets/creatives-thumb/dev/sekilab.webp';
import sysbWtmImg from '@/assets/creatives-thumb/dev/wtm.webp';
import dumManapurazaImg from '@/assets/creatives-thumb/dev/dum.webp';
import flickgameImg from '@/assets/creatives-thumb/dev/flickgame-wagiri.webp';
import tcuAnimationImg from '@/assets/creatives-thumb/dev/tcu-animation.webp';
import textLayoutImg from '@/assets/creatives-thumb/dev/textlayout.webp';
import kkamiyaImg from '@/assets/creatives-thumb/dev/k-kamiya.webp'
// グラフィックス作品
import pixivGalleryImg from '@/assets/creatives-thumb/illustration/pixiv.webp';
// ビデオ / アニメーション作品
import manapurazaYoutubeImg from '@/assets/creatives-thumb/video/youtube-manapuraza.webp';
import tcuDcYoutubeImg from '@/assets/creatives-thumb/video/youtube-tcudc.webp';

export const creativesData = {
 
   // プログラミング / Web 作品
   development: [
     {
       id: 'manapuraza',  // MANAOURAZA.com
       title: 'creatives.dev.manapuraza.title',
       description: 'creatives.dev.manapuraza.description',
       url: 'https://github.com/ManatoYamashita/manapuraza',
       thumbnail: manapurazaImg,
       tags: ['Vue.js', 'Vite', 'Three.js', 'Portfolio']
     },
     {
       id: 'dcchan-net',  // でじこんちゃん.net
       title: 'creatives.dev.dcchanAi.title',
       description: 'creatives.dev.dcchanAi.description',
       url: 'https://でじこんちゃん.net/',
       thumbnail: dcchanNetImg,
       tags: ['Next.js', 'AI', 'Vercel', 'Chatbot']
     },
     {
       id: 'numeron-game',  // NUMERON
       title: 'creatives.dev.numeron.title',
       description: 'creatives.dev.numeron.description',
       url: 'https://tmana.sub.jp/numeron/dirs/src/numeron.html',
       thumbnail: numeronGameImg,
       tags: ['Vanilla JS', 'Game', 'Logic']
     },
     {
       id: 'officeTsuyuki',  // オフィス露木 コーポレートサイト
       title: 'creatives.dev.officeTsuyuki.title',
       description: 'creatives.dev.officeTsuyuki.description',
       url: 'https://office-tsuyuki.pom.jp',
       thumbnail: pomjpBetaImg,
       tags: ['HTML', 'CSS', 'JavaScript', 'Corporate']
     },
     {
       id: 'tcudc-bot',  // でじこんちゃん TwitterBot
       title: 'creatives.dev.dcchanBot.title',
       description: 'creatives.dev.dcchanBot.description',
       url: 'https://tmana.sub.jp/tcudc-bot/dc-chan_twitterBot22_document.html',
       thumbnail: tcudcBotImg,
       tags: ['Python', 'Twitter API', 'Bot']
     },
     {
       id: 'seki-ken',  // 東京都市大学 関研究室 情報セキュリティ
       title: 'creatives.dev.sekiLab.title',
       description: 'creatives.dev.sekiLab.description',
       url: 'https://www.comm.tcu.ac.jp/seki-ken',
       thumbnail: sekiKenImg,
       tags: ['WordPress', 'Security', 'Research']
     },
     {
       id: 'sysb-wtm',  // 天気行動提案アプリWTM
       title: 'creatives.dev.wtmApp.title',
       description: 'creatives.dev.wtmApp.description',
       url: 'https://github.com/ManatoYamashita/SysB_wtm',
       thumbnail: sysbWtmImg,
       tags: ['HTML', 'CSS', 'JavaScript', 'Weather API']
     },
     {
       id: 'dum-manapuraza',  // DownUnderMountain TAPブログ
       title: 'creatives.dev.downUnder.title',
       description: 'creatives.dev.downUnder.description',
       url: 'https://dum.manapuraza.com',
       thumbnail: dumManapurazaImg,
       tags: ['WordPress', 'Blog', 'TAP']
     },
     {
       id: 'flickgame',  // フリックゲーム WAGIRI!!
       title: 'creatives.dev.wagiri.title',
       description: 'creatives.dev.wagiri.description',
       url: 'https://flickgame.tcu-dc.net/',
       thumbnail: flickgameImg,
       tags: ['Vanilla JS', 'Game', 'Mobile']
     },
     {
       id: 'tcu-animation',  // 都市大アニメーション
       title: 'creatives.dev.tcuAnimation.title',
       description: 'creatives.dev.tcuAnimation.description',
       url: 'https://tcu-animation.jp/',
       thumbnail: tcuAnimationImg,
       tags: ['Next.js', 'SEO', 'Animation Site']
     },
     {
       id: 'text-layout',  // 文章自動レイアウトWebApp
       title: 'creatives.dev.textLayout.title',
       description: 'creatives.dev.textLayout.description',
       url: 'https://text-layout.manapuraza.com/',
       thumbnail: textLayoutImg,
       tags: ['Vanilla JS', 'Tool', 'Typography']
     },
     {
      id: 'k-kamiya', // 割烹神谷公式サイト
      title: 'creatives.dev.k-kamiya.title',
      description: 'creatives.dev.k-kamiya.description',
      url: 'https://www.k-kamiya.net',
      thumbnail: kkamiyaImg,
      tags: ['HTML', 'CSS', 'JavaScript', 'Restaurant']
     }
   ],

    // グラフィックス作品
    illustration: [
      {
        id: 'pixiv-gallery',  // Pixiv
        title: 'creatives.illustration.pixiv.title',
        description: 'creatives.illustration.pixiv.description',
        url: 'https://www.pixiv.net/users/87914659',
        thumbnail: pixivGalleryImg,
        tags: ['Digital Art', 'Illustration', 'Pixiv']
      },
    ],

   // ビデオ / アニメーション作品
   video: [
    {
      id: 'tcu-dc-youtube',  // デジコン YouTubeチャンネル
      title: 'creatives.video.tcuDcChannel.title',
      description: 'creatives.video.tcuDcChannel.description',
      url: 'https://www.youtube.com/@tcu_dc',
      thumbnail: tcuDcYoutubeImg,
      tags: ['YouTube', 'Animation', 'Club']
    },
    {
      id: 'manapuraza-youtube',  // manapuraza YouTubeチャンネル
      title: 'creatives.video.personalChannel.title',
      description: 'creatives.video.personalChannel.description',
      url: 'https://www.youtube.com/@manapuraza',
      thumbnail: manapurazaYoutubeImg,
      tags: ['YouTube', 'Vlog', 'Personal']
    }
   ]
};

// データ追加方法
// 1. 画像ファイルを`assets/creatives-thumb/[category]/`に追加
// 2. 作品データを`creatives.js`（このファイル）の`creativesData.[category]{}`に追加
//   a. 作品データの`id`は、作品の識別子として使用されます。
//   b. 作品データの`title`は、作品のタイトルとして使用されます。
//   c. 作品データの`description`は、作品の説明として使用されます。
//   d. 作品データの`url`は、作品のURLとして使用されます。
//   e. 作品データの`thumbnail`は、作品のサムネイル画像パスとして使用されます。（creatives.jpの冒頭で1で追加した画像をimport）
// 3. `/locales/ja.json`に作品データの`title`と`description`を追加
//   a. 作品データの`title`は、作品のタイトルとして使用されます。
//   b. 作品データの`description`は、作品の説明として使用されます。
// 4. `/locales/en.json`に作品データの`title`と`description`を追加
//   a. 作品データの`title`は、作品のタイトルとして使用されます。
//   b. 作品データの`description`は、作品の説明として使用されます。








