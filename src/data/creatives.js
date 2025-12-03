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

   // アニメーション作品
   animation: [
     {
       id: 'tcu-animation',  // 世田谷区オリジナルアニメ「新BOPへようこそ！」
       title: 'creatives.animation.tcuAnimation.title',
       description: 'creatives.animation.paragraph',
       url: 'https://tcu-animation.jp',
       thumbnail: tcuAnimationImg,
       tags: ['Animation', 'Director', 'Setagaya Ward', 'Official'],

       detail: {
         images: [tcuAnimationImg],
         descriptionMarkdown: 'creatives.animation.tcuAnimation.detailDescription',

         youtube: {
           mobile: 'https://www.youtube.com/embed/Q9Uuyhjic2M?loop=1&playsinline=1&controls=0&autoplay=1&mute=1&playlist=Q9Uuyhjic2M',
           desktop: 'https://www.youtube.com/embed/Q9Uuyhjic2M?loop=1&playsinline=1&controls=0&autoplay=1&mute=1&playlist=Q9Uuyhjic2M'
         },

         productionYear: '2024~2025',

         credits: [
           'creatives.animation.tcuAnimation.description.production',
           'creatives.animation.tcuAnimation.description.director',
           'creatives.animation.tcuAnimation.description.animationProduction',
           'creatives.animation.tcuAnimation.description.productionSupport',
           'creatives.animation.tcuAnimation.description.voiceActors',
           'creatives.animation.tcuAnimation.description.websiteProduction'
         ],

         cta: [
           {
             href: 'https://youtu.be/zLuemAdQlMs?si=YaSzwIwY0uxHelyu',
             target: '_blank',
             icon: ['fas', 'play'],
             text: 'creatives.animation.tcuAnimation.watchMain',
             subText: 'creatives.animation.tcuAnimation.watchSub',
             variant: 'primary'
           },
           {
             href: 'https://tcu-animation.jp',
             target: '_blank',
             icon: ['fas', 'globe'],
             text: 'creatives.animation.tcuAnimation.siteMain',
             subText: 'creatives.animation.tcuAnimation.siteSub',
             variant: 'secondary'
           }
         ]
       }
     }
   ],
 
   // プログラミング / Web 作品
   development: [
     {
       id: 'manapuraza',  // MANAOURAZA.com
       title: 'creatives.dev.manapuraza.title',
       description: 'creatives.dev.manapuraza.description',
       url: 'https://github.com/ManatoYamashita/manapuraza',
       thumbnail: manapurazaImg,
       tags: ['Vue.js', 'Vite', 'Three.js', 'Portfolio'],

       detail: {
         images: [manapurazaImg],
         descriptionMarkdown: 'creatives.dev.manapuraza.detailDescription',
         cta: [
           {
             href: 'https://github.com/ManatoYamashita/manapuraza',
             target: '_blank',
             icon: ['fas', 'arrow-up-right-from-square'],
             text: 'creatives.common.viewProject',
             subText: 'creatives.common.github',
             variant: 'primary'
           }
         ]
       }
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

/**
 * 詳細ページのデフォルト値（fallback）
 */
export const detailDefaults = {
  images: [],  // 空の場合は thumbnail を使用
  descriptionMarkdown: '',  // 空の場合は description を使用
  youtube: null,
  productionYear: '',
  credits: [],
  cta: [
    {
      href: '',  // url を使用
      target: '_blank',
      icon: ['fas', 'arrow-up-right-from-square'],
      text: 'creatives.common.viewProject',
      subText: '',
      variant: 'primary'
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
//   f. 作品データの`detail`（オプション）は、詳細ページ用の追加データです。
//     - `images`: 作品画像の配列（1枚以上）
//     - `descriptionMarkdown`: Markdown形式の詳細説明文の翻訳キー
//     - `youtube`: { mobile: 'URL', desktop: 'URL' } (Animation作品のみ)
//     - `productionYear`: 制作年
//     - `credits`: クレジット情報の翻訳キー配列
//     - `cta`: CTAボタンの配列
// 3. `/locales/ja.json`に作品データの`title`と`description`を追加
//   a. 作品データの`title`は、作品のタイトルとして使用されます。
//   b. 作品データの`description`は、作品の説明として使用されます。
//   c. 作品データの`detailDescription`（オプション）は、詳細ページ用のMarkdown形式の説明文です。
// 4. `/locales/en.json`に作品データの`title`と`description`を追加
//   a. 作品データの`title`は、作品のタイトルとして使用されます。
//   b. 作品データの`description`は、作品の説明として使用されます。
//   c. 作品データの`detailDescription`（オプション）は、詳細ページ用のMarkdown形式の説明文です。








