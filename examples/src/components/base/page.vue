<template>
  <mn-page>
    <mn-scroller :close-top-height="closeTopHeight">
      <mn-container fluid>
        <slot></slot>
      </mn-container>
    </mn-scroller>
  </mn-page>
</template>

<script>
  export default {
    data () {
      return {
        closeTopHeight (event, scroller) {
          console.log('closeTopHeight')
          this.topHeightTransitionDuration = 500
          if (this.topHeight > 40) {
            this.topHeight = 40
          } else {
            this.topHeight = 0
          }
          setTimeout(() => {
            // scroller.topHeightEndTransition()
            this.topHeight = 0
          }, 2000)
        }
      }
    }
  }
</script>
