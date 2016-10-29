<template>
  <mn-popup :show="show" animation="slideInUp" position="top" :masked="false">
    <mn-card class="m-b-1 scoped-card-shadow" style="max-width: 500px; margin: 0 auto;" @click.native.prevent="click">
      <mn-card-item>
        <mn-icon :name="icon"></mn-icon>
        <small>{{ description }}</small>
      </mn-card-item>
    </mn-card>
  </mn-popup>
</template>

<script>
  export default {
    methods: {
      cancel () {
        this.show = false
        this.$emit('cancel')
      },
      click () {
        this.show = false
        this.$emit('click')
      }
    },
    data () {
      return {
        show: false,
        description: 'You have a message',
        icon: 'chatbubbles',
        autoClose: true,
        duration: 2000
      }
    },
    mounted: function () {
      // automatic close after 2s
      if (this.autoClose) {
        setTimeout(() => {
          this.cancel()
        }, this.duration)
      }
    }
  }
</script>

<style lang="scss">
  .scoped-card-shadow {
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  }
</style>
