<template>
  <div :class="classes" @click="click" v-selected>
    <mn-icon :name="this.icon" v-if="this.icon"></mn-icon>
    <p v-if="this.title">{{ this.title }}</p>
  </div>
</template>

<script>
  import $ from 'jquery'
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
    },
    directives: {
      selected: function (el) {
        $(el).click(function () {
          $(this).addClass('is-active')
          $(this).siblings().removeClass('is-active')
        })
      }
    }
  }
</script>
