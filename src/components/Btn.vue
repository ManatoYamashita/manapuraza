<style scoped>
  button {
    --primary-gradient: linear-gradient(135deg, #4399BB 0%, #6EACF7 100%);
    --hover-shadow: 0 8px 20px rgba(67, 153, 187, 0.4);
    --default-shadow: 0 4px 15px rgba(67, 153, 187, 0.3);
    
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem 1.5rem;
    background: var(--primary-gradient);
    color: white;
    font-weight: 600;
    border-radius: 2rem;
    border: none;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: var(--default-shadow);
    cursor: pointer;
    position: relative; /* ツールチップの基準要素にする */
  }

  button:hover {
    transform: translateY(-3px);
    box-shadow: var(--hover-shadow);
  }

  .icon {
    font-size: 1rem;
  }

  /* ラベル（主要ラベルのみ） */
  .label {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
  }

  /* ツールチップ（副ラベル） */
  .tooltip {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%) translateY(4px);
    background: rgba(20, 20, 20, 0.95);
    color: #fff;
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 0.85rem;
    line-height: 1;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.15s ease, transform 0.15s ease;
    z-index: 10;
  }

  .tooltip::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: rgba(20, 20, 20, 0.95);
  }

  button:hover .tooltip,
  button:focus-visible .tooltip {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  /* カテゴリー別のスタイル */
  button.animation {
    background: linear-gradient(135deg, rgba(255, 107, 107, 0.9) 0%, rgba(255, 142, 83, 0.9) 100%);
    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
  }

  button.animation:hover {
    box-shadow: 0 8px 20px rgba(255, 107, 107, 0.4);
  }

  button.programming {
    background: linear-gradient(135deg, rgba(67, 153, 187, 0.9) 0%, rgba(110, 172, 247, 0.9) 100%);
    box-shadow: 0 4px 15px rgba(67, 153, 187, 0.3);
  }

  button.programming:hover {
    box-shadow: 0 8px 20px rgba(67, 153, 187, 0.4);
  }

  button.graphics {
    background: linear-gradient(135deg, rgba(106, 17, 203, 0.9) 0%, rgba(158, 117, 240, 0.9) 100%);
    box-shadow: 0 4px 15px rgba(106, 17, 203, 0.3);
  }

  button.graphics:hover {
    box-shadow: 0 8px 20px rgba(106, 17, 203, 0.4);
  }

  button.video {
    background: linear-gradient(135deg, rgba(0, 201, 255, 0.9) 0%, rgba(146, 254, 157, 0.9) 100%);
    box-shadow: 0 4px 15px rgba(0, 201, 255, 0.3);
  }

  button.video:hover {
    box-shadow: 0 8px 20px rgba(0, 201, 255, 0.4);
  }

  /* シンプルバリアント */
  button.simple {
    background: #ffffff;
    color: #333333;
    border: 1px solid #DDDDDD;
    box-shadow: none;
    border-radius: 10px;
    transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  }

  button.simple:hover {
    transform: none;
    box-shadow: none;
    background: #F7F7F7;
    border-color: #CCCCCC;
  }

  button.simple:focus-visible {
    outline: 2px solid #4399BB;
    outline-offset: 2px;
  }

  /* プライマリ/セカンダリ（シンプル） */
  button.primary {
    background: var(--primary-color, #4399BB);
    color: #ffffff;
    border: 1px solid var(--primary-color, #4399BB);
    box-shadow: none;
    border-radius: 10px;
  }

  button.primary:hover {
    transform: none;
    box-shadow: none;
    filter: brightness(0.95);
  }

  button.secondary {
    background: transparent;
    color: var(--primary-color, #4399BB);
    border: 1px solid var(--primary-color, #4399BB);
    box-shadow: none;
    border-radius: 10px;
  }

  button.secondary:hover {
    transform: none;
    box-shadow: none;
    background: rgba(67, 153, 187, 0.06);
  }
</style>

<template>
  <button @click="handleClick" :aria-label="alt" :class="[category, variant]">
    <font-awesome-icon v-if="icon" :icon="icon" class="icon" />
    <span class="label">{{ text }}</span>
    <span v-if="subText" class="tooltip" role="tooltip">{{ subText }}</span>
    <font-awesome-icon v-if="showArrow" :icon="['fas', 'arrow-right']" class="icon" />
  </button>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: 'View More'
  },
  subText: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: ''
  },
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: ''
  },
  icon: {
    type: Array,
    default: null
  },
  alt: {
    type: String,
    default: 'button link(view more)'
  },
  showArrow: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    default: '',
    validator: (value) => {
      return ['', 'animation', 'programming', 'graphics', 'video'].includes(value)
    }
  },
  variant: {
    type: String,
    default: '',
    validator: (value) => {
      return ['', 'simple', 'primary', 'secondary'].includes(value)
    }
  }
})

const handleClick = () => {
  const url = props.href || props.link
  if (url) {
    if (props.target === '_blank') {
      window.open(url, '_blank')
    } else {
      window.location.href = url
    }
  }
}
</script>
