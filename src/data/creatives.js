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
import manapurazaImg from '@/assets/creatives-thumb/prog/manapuraza.webp';
import dcchanNetImg from '@/assets/creatives-thumb/prog/dcchan-ai.webp';
import numeronGameImg from '@/assets/creatives-thumb/prog/numeron.webp';
import amausyrupImg from '@/assets/creatives-thumb/prog/amau.webp';
import pomjpBetaImg from '@/assets/creatives-thumb/prog/office-tsuyuki.webp';
import tcudcBotImg from '@/assets/creatives-thumb/prog/dcchan-twitterbot.webp';
import sekiKenImg from '@/assets/creatives-thumb/prog/sekilab.webp';
import tcuAlmniImg from '@/assets/creatives-thumb/prog/tcu-alumni.webp';
import killerdie2023Img from '@/assets/creatives-thumb/prog/killerdie.webp';
import populationTodohukenImg from '@/assets/creatives-thumb/prog/population-todohuken.webp';
import sysbWtmImg from '@/assets/creatives-thumb/prog/wtm.webp';
import dumManapurazaImg from '@/assets/creatives-thumb/prog/dum.webp';
import flickgameImg from '@/assets/creatives-thumb/prog/flickgame-wagiri.webp';
import tcuAnimationImg from '@/assets/creatives-thumb/prog/tcu-animation.webp';
import stoTcuImg from '@/assets/creatives-thumb/prog/tcu-sto.webp';
import textLayoutImg from '@/assets/creatives-thumb/prog/textlayout.webp';
import cococareerImg from '@/assets/creatives-thumb/prog/cococareer-lp.webp';
// グラフィックス作品
import pixivGalleryImg from '@/assets/creatives-thumb/graphics/illustration.webp';
// ビデオ / アニメーション作品
import manapurazaYoutubeImg from '@/assets/creatives-thumb/video/ytb-manapuraza.webp';
import tcuDcYoutubeImg from '@/assets/creatives-thumb/video/ytb-tcudc.webp';

export const creativesData = {
 
   // プログラミング / Web 作品
   programming: [
//   東京都市大学 学生団体連合 本部
//  {
//    id: 'sto-tcu',
//    title: 'creatives.prog.tcuSto.title',
//    description: 'creatives.prog.tcuSto.description',
//    url: 'https://www.sto.tcu.ac.jp/',
//    thumbnail: stoTcuImg
//  },
// キラキラ大学生研究会 1周年記念
//  {
//    id: 'killerdie-2023',
//    title: 'creatives.prog.killerDie.title',
//    description: 'creatives.prog.killerDie.description',
//    url: 'https://killerdie-2023.netlify.app/',
//    thumbnail: killerdie2023Img
//  },
// 東京都市大学 同好会連合 本部
// {
//   id: 'tcu-acc',
//   title: 'creatives.prog.17.title',
//   description: 'creatives.prog.17.description',
//   url: 'https://www.comm.tcu.ac.jp/tcu-acc/',
//   thumbnail: '/assets/creatives-thumb/prog/tcu-acc.webp'
// },
     {
       id: 'manapuraza',  // MANAOURAZA.com
       title: 'creatives.prog.manapuraza.title',
       description: 'creatives.prog.manapuraza.description',
       url: 'https://manapuraza.com',
       thumbnail: manapurazaImg
     },
     {
       id: 'dcchan-net',  // でじこんちゃん.net
       title: 'creatives.prog.dcchanAi.title',
       description: 'creatives.prog.dcchanAi.description',
       url: 'https://でじこんちゃん.net/',
       thumbnail: dcchanNetImg
     },
     {
       id: 'numeron-game',  // NUMERON
       title: 'creatives.prog.numeron.title',
       description: 'creatives.prog.numeron.description',
       url: 'https://tmana.sub.jp/numeron/dirs/src/numeron.html',
       thumbnail: numeronGameImg
     },
     {
       id: 'amausyrup',  // 天羽しろっぷ 非公式ファンサイト
       title: 'creatives.prog.amauSyrup.title',
       description: 'creatives.prog.amauSyrup.description',
       url: 'https://amausyrup.net',
       thumbnail: amausyrupImg
     },
     {
       id: 'officeTsuyuki',  // オフィス露木 コーポレートサイト
       title: 'creatives.prog.officeTsuyuki.title',
       description: 'creatives.prog.officeTsuyuki.description',
       url: 'https://office-tsuyuki.pom.jp',
       thumbnail: pomjpBetaImg
     },
     {
       id: 'tcudc-bot',  // でじこんちゃん TwitterBot
       title: 'creatives.prog.dcchanBot.title',
       description: 'creatives.prog.dcchanBot.description',
       url: 'https://tmana.sub.jp/tcudc-bot/dc-chan_twitterBot22_document.html',
       thumbnail: tcudcBotImg
     },
     {
       id: 'seki-ken',  // 東京都市大学 関研究室 情報セキュリティ
       title: 'creatives.prog.sekiLab.title',
       description: 'creatives.prog.sekiLab.description',
       url: 'https://www.comm.tcu.ac.jp/seki-ken',
       thumbnail: sekiKenImg
     },
     {
       id: 'tcu-alumni',  // 東京都市大学 校友会 Demoサイト
       title: 'creatives.prog.tcuAlumni.title',
       description: 'creatives.prog.tcuAlumni.description',
       url: 'https://tcu-alumni.vercel.app',
       thumbnail: tcuAlmniImg
     },
     {
       id: 'population-todohuken',  // 都道府県人工総計
       title: 'creatives.prog.populationGraph.title',
       description: 'creatives.prog.populationGraph.description',
       url: 'https://population-todohuken.vercel.app/',
       thumbnail: populationTodohukenImg
     },
     {
       id: 'sysb-wtm',  // 天気行動提案アプリWTM
       title: 'creatives.prog.wtmApp.title',
       description: 'creatives.prog.wtmApp.description',
       url: 'https://github.com/ManatoYamashita/SysB_wtm',
       thumbnail: sysbWtmImg
     },
     {
       id: 'dum-manapuraza',  // DownUnderMountain TAPブログ
       title: 'creatives.prog.downUnder.title',
       description: 'creatives.prog.downUnder.description',
       url: 'https://dum.manapuraza.com',
       thumbnail: dumManapurazaImg
     },
     {
       id: 'flickgame',  // フリックゲーム WAGIRI!!
       title: 'creatives.prog.wagiri.title',
       description: 'creatives.prog.wagiri.description',
       url: 'https://flickgame.tcu-dc.net/',
       thumbnail: flickgameImg
     },
     {
       id: 'tcu-animation',  // 都市大アニメーション
       title: 'creatives.prog.tcuAnimation.title',
       description: 'creatives.prog.tcuAnimation.description',
       url: 'https://tcu-animation.jp/',
       thumbnail: tcuAnimationImg
     },
     {
       id: 'text-layout',  // 文章自動レイアウトWebApp
       title: 'creatives.prog.textLayout.title',
       description: 'creatives.prog.textLayout.description',
       url: 'https://text-layout.manapuraza.com/',
       thumbnail: textLayoutImg
     },
     {
       id: 'cococareer-lp',  // Cococareer LP
       title: 'creatives.prog.cococareer-lp.title',
       description: 'creatives.prog.cococareer-lp.description',
       url: 'https://cococareer-lp.vercel.app/',
       thumbnail: cococareerImg
     },
   ],

    // グラフィックス作品
    graphics: [
      {
        id: 'pixiv-gallery',  // Pixiv
        title: 'creatives.graphics.pixiv.title',
        description: 'creatives.graphics.pixiv.description',
        url: 'https://www.pixiv.net/users/87914659',
        thumbnail: pixivGalleryImg
      },
    ],
 
   // ビデオ / アニメーション作品
   video: [
     {
       id: 'manapuraza-youtube',  // manapuraza YouTubeチャンネル
       title: 'creatives.video.tcuDcChannel.title',
       description: 'creatives.video.tcuDcChannel.description',
       url: 'https://www.youtube.com/@manapuraza',
       thumbnail: manapurazaYoutubeImg
     },
     {
       id: 'tcu-dc-youtube',  // デジコン YouTubeチャンネル
       title: 'creatives.video.personalChannel.title',
       description: 'creatives.video.personalChannel.description',
       url: 'https://www.youtube.com/@tcu_dc',
       thumbnail: tcuDcYoutubeImg
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








