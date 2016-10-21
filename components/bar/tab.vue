<template>
  <div class="bar-tab-lists">
    <div class="bar-tab-items">
      <slot></slot>
    <div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    mounted: function () {
      $('.bar-tab-items').children().each(function () {
        $(this).click(function () {
          $('.bar-tab-items').children().each(function () {
            $(this).removeClass('is-active')
          })
          $(this).addClass('is-active')
        })
      })
    }
  }
</script>
