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
import manapurazaImg from '@/assets/works-thumbnail/prog/manapuraza.webp';
import dcchanNetImg from '@/assets/works-thumbnail/prog/dcchan-ai.webp';
import numeronGameImg from '@/assets/works-thumbnail/prog/numeron.webp';
import amausyrupImg from '@/assets/works-thumbnail/prog/amau.webp';
import pomjpBetaImg from '@/assets/works-thumbnail/prog/office-tsuyuki.webp';
import tcudcBotImg from '@/assets/works-thumbnail/prog/dcchan-twitterbot.webp';
import sekiKenImg from '@/assets/works-thumbnail/prog/sekilab.webp';
import tcuAlmniImg from '@/assets/works-thumbnail/prog/tcu-alumni.webp';
import killerdie2023Img from '@/assets/works-thumbnail/prog/killerdie.webp';
import populationTodohukenImg from '@/assets/works-thumbnail/prog/population-todohuken.webp';
import sysbWtmImg from '@/assets/works-thumbnail/prog/wtm.webp';
import dumManapurazaImg from '@/assets/works-thumbnail/prog/dum.webp';
import flickgameImg from '@/assets/works-thumbnail/prog/flickgame-wagiri.webp';
import tcuAnimationImg from '@/assets/works-thumbnail/prog/tcu-animation.webp';
import stoTcuImg from '@/assets/works-thumbnail/prog/tcu-sto.webp';
import textLayoutImg from '@/assets/works-thumbnail/prog/textlayout.webp';
import pixivGalleryImg from '@/assets/works-thumbnail/graphics/illustration.webp';
import manapurazaYoutubeImg from '@/assets/works-thumbnail/video/ytb-manapuraza.webp';
import tcuDcYoutubeImg from '@/assets/works-thumbnail/video/ytb-tcudc.webp';
// 他の画像も同様にインポート

export const worksData = {
 
   // プログラミング / Web 作品
   programming: [
     {
       id: 'manapuraza',
       title: 'works.prog.manapuraza.title',
       description: 'works.prog.manapuraza.description',
       url: 'https://manapuraza.com',
       thumbnail: manapurazaImg
     },
     {
       id: 'dcchan-net',
       title: 'works.prog.dcchanAi.title',
       description: 'works.prog.dcchanAi.description',
       url: 'https://でじこんちゃん.net/',
       thumbnail: dcchanNetImg
     },
     {
       id: 'numeron-game',
       title: 'works.prog.numeron.title',
       description: 'works.prog.numeron.description',
       url: 'https://tmana.sub.jp/numeron/dirs/src/numeron.html',
       thumbnail: numeronGameImg
     },
     {
       id: 'amausyrup',
       title: 'works.prog.amauSyrup.title',
       description: 'works.prog.amauSyrup.description',
       url: 'https://amausyrup.net',
       thumbnail: amausyrupImg
     },
     {
       id: 'pomjp-beta',
       title: 'works.prog.officeTsuyuki.title',
       description: 'works.prog.officeTsuyuki.description',
       url: 'https://pomjp-beta.vercel.app/',
       thumbnail: pomjpBetaImg
     },
     {
       id: 'tcudc-bot',
       title: 'works.prog.dcchanBot.title',
       description: 'works.prog.dcchanBot.description',
       url: 'https://tmana.sub.jp/tcudc-bot/dc-chan_twitterBot22_document.html',
       thumbnail: tcudcBotImg
     },
     {
       id: 'seki-ken',
       title: 'works.prog.sekiLab.title',
       description: 'works.prog.sekiLab.description',
       url: 'https://www.comm.tcu.ac.jp/seki-ken',
       thumbnail: sekiKenImg
     },
     {
       id: 'tcu-almni',
       title: 'works.prog.tcuAlumni.title',
       description: 'works.prog.tcuAlumni.description',
       url: 'https://tcu-almni.vercel.app/',
       thumbnail: tcuAlmniImg
     },
     {
       id: 'killerdie-2023',
       title: 'works.prog.killerDie.title',
       description: 'works.prog.killerDie.description',
       url: 'https://killerdie-2023.netlify.app/',
       thumbnail: killerdie2023Img
     },
     {
       id: 'population-todohuken',
       title: 'works.prog.populationGraph.title',
       description: 'works.prog.populationGraph.description',
       url: 'https://population-todohuken.vercel.app/',
       thumbnail: populationTodohukenImg
     },
     {
       id: 'sysb-wtm',
       title: 'works.prog.wtmApp.title',
       description: 'works.prog.wtmApp.description',
       url: 'https://github.com/ManatoYamashita/SysB_wtm',
       thumbnail: sysbWtmImg
     },
     {
       id: 'dum-manapuraza',
       title: 'works.prog.downUnder.title',
       description: 'works.prog.downUnder.description',
       url: 'https://dum.manapuraza.com',
       thumbnail: dumManapurazaImg
     },
     {
       id: 'flickgame',
       title: 'works.prog.wagiri.title',
       description: 'works.prog.wagiri.description',
       url: 'https://flickgame.tcu-dc.net/',
       thumbnail: flickgameImg
     },
     {
       id: 'tcu-animation',
       title: 'works.prog.tcuAnimation.title',
       description: 'works.prog.tcuAnimation.description',
       url: 'https://tcu-animation.jp/',
       thumbnail: tcuAnimationImg
     },
     {
       id: 'sto-tcu',
       title: 'works.prog.tcuSto.title',
       description: 'works.prog.tcuSto.description',
       url: 'https://www.sto.tcu.ac.jp/',
       thumbnail: stoTcuImg
     },
     {
       id: 'text-layout',
       title: 'works.prog.textLayout.title',
       description: 'works.prog.textLayout.description',
       url: 'https://text-layout.manapuraza.com/',
       thumbnail: textLayoutImg
     }
     // コメントアウトされていた作品は必要に応じて追加できます
     // {
     //   id: 'tcu-acc',
     //   title: 'works.prog.17.title',
     //   description: 'works.prog.17.description',
     //   url: 'https://www.comm.tcu.ac.jp/tcu-acc/',
     //   thumbnail: '/assets/works-thumbnail/prog/tcu-acc.webp'
     // },
   ],

    // グラフィックス作品
    graphics: [
      {
        id: 'pixiv-gallery',
        title: 'works.graphics.pixiv.title',
        description: 'works.graphics.pixiv.description',
        url: 'https://www.pixiv.net/users/87914659',
        thumbnail: pixivGalleryImg
      }
      // 他のグラフィックス作品をここに追加
    ],
 
   // ビデオ / アニメーション作品
   video: [
     {
       id: 'manapuraza-youtube',
       title: 'works.video.tcuDcChannel.title',
       description: 'works.video.tcuDcChannel.description',
       url: 'https://www.youtube.com/@manapuraza',
       thumbnail: manapurazaYoutubeImg
     },
     {
       id: 'tcu-dc-youtube',
       title: 'works.video.personalChannel.title',
       description: 'works.video.personalChannel.description',
       url: 'https://www.youtube.com/@tcu_dc',
       thumbnail: tcuDcYoutubeImg
     }
   ]
 };