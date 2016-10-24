<template>
  <div :class="classes" @click="click">
    <mn-icon :name="this.tab.icon" v-if="this.tab.icon"></mn-icon>
    <p v-if="this.tab.title">{{ this.tab.title }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: ''
      },
      tab: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
        required: true
      }
    },
    computed: {
      classes () {
        let classes = {}
        classes['tabItem'] = true
        classes['is-active'] = this.$parent.current === this.index
        return Object.assign({}, classes)
      }
    },
    methods: {
      click: function () {
        this.$emit('tab-item-click')
      }
    }
  }
</script>
