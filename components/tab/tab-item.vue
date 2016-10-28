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
    data () {
      return {
        defaultClasses: this.$human.cssPrefix
      }
    },
    computed: {
      classes () {
        let classes = {}
        classes['is-active'] = this.$parent.current === this.index
        classes[`${this.$human.cssPrefix}tab-item`] = true
        return Object.assign({}, classes)
        // Add css prefix
      }
    },
    methods: {
      click: function () {
        this.$emit('tab-item-click')
        if (this.tab.link) {
          this.tab.$router.push({ path: this.tab.link })
          // if have ':link', add router.push
        }
        this.$parent.flag = this.tab._uid
        // show this item's content, tracking by _uid
      }
    },
    mounted: function () {
      if (this.$parent.current === this.index) {
        this.$parent.flag = this.tab._uid
      }
    }
  }
</script>
