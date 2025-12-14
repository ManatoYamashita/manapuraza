import type { CreativesData, Creative, CreativeCategory } from '~/types';

/**
 * ポートフォリオ作品データ管理用Composable
 *
 * 既存のVue 3 creatives.jsをNuxt 3 + TypeScriptに移行
 * 静的インポートでViteバンドリングに対応
 */

// 画像の静的インポート（Nuxt 3パス形式: ~/assets/）
// NOTE: 実際の移行時には既存のcreatives.jsから全画像インポートをコピーする必要がある
import tcuAnimationImg from '~/assets/creatives-thumb/animation/tcu-animation.webp';
import manapurazaImg from '~/assets/creatives-thumb/dev/manapuraza.webp';
// import dcchanNetImg from '~/assets/creatives-thumb/dev/dcchan-ai.webp';  // TODO: 未使用
// import numeronGameImg from '~/assets/creatives-thumb/dev/numeron.webp';  // TODO: 未使用
import pixivGalleryImg from '~/assets/creatives-thumb/illustration/pixiv.webp';
import manapurazaYoutubeImg from '~/assets/creatives-thumb/video/youtube-manapuraza.webp';

export const useCreatives = () => {
  /**
   * 全作品データ（型安全）
   */
  const creativesData: CreativesData = {
    // アニメーション作品
    animation: [
      {
        id: 'tcu-animation',
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
        id: 'manapuraza',
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
              icon: ['fab', 'github'],
              text: 'creatives.dev.manapuraza.github',
              variant: 'primary'
            }
          ]
        }
      },
      // TODO: 既存creatives.jsから他の作品データをコピー
    ],

    // イラスト作品
    illustration: [
      {
        id: 'pixiv',
        title: 'creatives.illustration.pixiv.title',
        description: 'creatives.illustration.pixiv.description',
        url: 'https://www.pixiv.net/users/81491298',
        thumbnail: pixivGalleryImg,
        tags: ['Illustration', 'Pixiv', 'Digital Art']
      }
      // TODO: 既存creatives.jsから他の作品データをコピー
    ],

    // 映像作品
    video: [
      {
        id: 'youtube-manapuraza',
        title: 'creatives.video.youtubeManapuraza.title',
        description: 'creatives.video.youtubeManapuraza.description',
        url: 'https://www.youtube.com/@manapuraza',
        thumbnail: manapurazaYoutubeImg,
        tags: ['YouTube', 'Video', 'Channel']
      }
      // TODO: 既存creatives.jsから他の作品データをコピー
    ]
  };

  /**
   * カテゴリとIDで特定の作品を取得
   */
  const getCreativeById = (category: CreativeCategory, id: string): Creative | null => {
    return creativesData[category]?.find(item => item.id === id) || null;
  };

  /**
   * カテゴリの全作品を取得
   */
  const getAllCreatives = (category: CreativeCategory): Creative[] => {
    return creativesData[category] || [];
  };

  /**
   * 全カテゴリの全作品を取得
   */
  const getAllCreativesFlat = (): Creative[] => {
    return [
      ...creativesData.animation,
      ...creativesData.development,
      ...creativesData.illustration,
      ...creativesData.video
    ];
  };

  return {
    creativesData,
    getCreativeById,
    getAllCreatives,
    getAllCreativesFlat
  };
};
