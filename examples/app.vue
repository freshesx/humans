<template>
  <mn-rows>
    <mn-row>
      <mn-scroller
        save
        bottom
        scrollToTop
        @pull-up="pullUp"
        @drag-down="dragDown">
        <router-view></router-view>
      </mn-scroller>
    </mn-row>
  </mn-rows>
</template>

<script>
  export default {
    methods: {
      pullUp: function () {
        console.log('The end.')
      },
      dragDown: function (distance) {
        if (distance > 20) console.log('The start.')
      }
    }
  }
</script>
