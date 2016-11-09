<template>
  <mn-rows>
    <mn-row>
      <mn-scroller save @pull-up="pullUp" @drag-down="dragDown" button>
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
      dragDown: function () {
        console.log('The start.')
      }
    }
  }
</script>
