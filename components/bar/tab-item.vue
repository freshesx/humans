<template>
  <div :class="classes" @click="click">
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
      click: function (event) {
        this.$emit('click')
      }
    }
  }
</script>
