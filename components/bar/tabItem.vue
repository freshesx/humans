<template>
  <div :class="classes" @click="routerGo()">
    <mn-icon :name="this.icon" v-if="this.icon"></mn-icon>
    <p v-if="this.title">{{ this.title }}</p>
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
      active: {
        type: Boolean,
        default: false
      },
      thisRouter: {
        type: Object
      },
      thisLink: {
        type: String,
        default: ''
      }
    },
    computed: {
      classes () {
        let classes = {}
        classes['tabItem'] = true
        classes['is-active'] = this.active
        return Object.assign({}, classes)
      }
    },
    methods: {
      routerGo: function (event) {
        if (this.thisRouter && this.thisLink) {
          this.thisRouter.push({ path: this.thisLink })
        }
        this.$emit('click')
      }
    }
  }
</script>
