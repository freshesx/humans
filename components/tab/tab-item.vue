<template>
  <div :class="classes" @click="click">
    <mn-icon :name="this.tab.icon" v-if="this.tab.icon"></mn-icon>
    <p v-if="this.tab.title">{{ this.tab.title }}</p>
  </div>
</template>

<script>
  export default {
    props: {
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
        this.tab.$router.push({ path: this.tab.link })
        this.$parent.flag = this.tab._uid
      }
    },
    mounted: function () {
      if (this.$parent.current === this.index) {
        this.$parent.flag = this.tab._uid
      }
    }
  }
</script>
