<template>
  <div class="mn-table-view">
    <div class="mn-table-view-control"
      :class="{ 'is-active': isActive(option) }"
      v-for="(option, key) in options"
      :key="key"
      @click="onClick(option, $event)">
      <mn-icon :name="option.icon" :scale="0.8"></mn-icon>
    </div>
  </div>
</template>

<script>
  import Element from '../../utils/Element'
  import isUndefined from 'lodash/isUndefined'

  export default new Element({
    name: 'mn-table-view',
    props: {
      size: String,
      options: {
        type: Array,
        default () {
          return [
            {
              name: 'md',
              icon: require('vue-human-icons/js/android/expand'),
              default: true
            },
            {
              name: 'sm',
              icon: require('vue-human-icons/js/android/contract')
            }
          ]
        }
      }
    },
    methods: {
      isActive (option, event) {
        if (this.size === option.name) return true
        // 如果 size 为空，则取默认
        if (isUndefined(this.size) && option.default) return true
      },
      onClick (option, event) {
        this.$emit('update:size', option.name)
      }
    }
  })
</script>

<style lang="scss">
  .mn-table-view {
    display: flex;
  }

  .mn-table-view-control {
    width: 2.25rem;
    height: 2.25rem;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    cursor: pointer;
    transition-duration: 500ms;
    background: rgba(0, 0, 0, 0.075);

    &:first-child {
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }
    &:last-child {
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    }

    &.is-active {
      background: rgba(0, 0, 0, 0.2);
    }
  }
</style>
