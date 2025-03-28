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
  }

  button:hover {
    transform: translateY(-3px);
    box-shadow: var(--hover-shadow);
  }

  .icon {
    font-size: 1rem;
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
</style>

<template>
  <button @click="handleClick" :aria-label="alt" :class="category">
    <font-awesome-icon v-if="icon" :icon="icon" class="icon" />
    {{ text }}
    <font-awesome-icon v-if="showArrow" :icon="['fas', 'arrow-right']" class="icon" />
  </button>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: 'Sign up'
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
    default: ''
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
