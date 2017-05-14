<template>
  <div class="mn-datetime-picker" @scroll="onScroll">
    <div class="mn-datetime-picker-contents">
      <div class="mn-datetime-picker-item" :class="{ 'is-active': key === index }" v-for="(item, key) in options" :key="key">{{ item.label }}</div>
    </div>
    <!-- :style="{ transform: `translateY(${top}px)` }" -->
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-datetime-picker',
    props: {
      value: null,
      options: {
        type: Array,
        default: val => {
          return []
        }
      }
    },
    data () {
      return {
        index: 0
      }
    },
    computed: {
      top () {
        return (this.index - 2) * 36 * -1
      }
    },
    methods: {
      updateIndex (newValue) {
        const item = this.options.filter(item => item.value === newValue)[0]
        if (item && this.options.includes(item)) {
          this.index = this.options.indexOf(item)
        }
      },

      onScroll (event) {
        console.log(event)
      }
    },
    watch: {
      value (newValue) {
        this.updateIndex(newValue)
      }
    },
    mounted () {
      this.updateIndex(this.value)
    }
  })
</script>

<style lang="scss">
  .mn-datetime-picker {
    position: relative;
    width: 100%;
    text-align: center;
    height: 180px;
    overflow: hidden;
    -webkit-mask-box-image: linear-gradient(0deg, transparent, transparent 5%, #fff 20%, #fff 80%, transparent 95%, transparent);
    overflow: scroll;
  }

  .mn-datetime-picker-contents {
    position: absolute;
    width: 100%;
    top: 36px * 2;
  }

  .mn-datetime-picker-item {
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    padding: 0 0.5rem;

    &.is-active {
      text-align: right;
    }
  }
</style>
