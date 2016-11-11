<template>
  <mn-rows>
    <mn-row>
      <mn-scroller
        save
        bottom
        scrollToTop
        @pull-up="pullUp"
        @drag-down="dragDown"
        :pause="pause">
        <router-view></router-view>
        <mn-icon slot="topContent" name="load-c" spin></mn-icon>
      </mn-scroller>
    </mn-row>
  </mn-rows>
</template>

<script>
  export default {
    data () {
      return {
        pause: false
      }
    },
    methods: {
      pullUp: function () {
        console.log('The end.')
      },
      dragDown: function (distance) {
        this.pause = true
        console.log('The start.')
        setTimeout(() => {
          this.pause = false
        }, 2000)
      }
    }
  }
</script>
