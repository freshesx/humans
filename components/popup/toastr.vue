<template>
  <mn-popup :show="show" animation="slideInUp" :css="css" :masked="false">
    <mn-card class="m-b-0 scoped-card-shadow" @click.native.prevent="click">
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
        duration: 2000,
        css: {
          'max-width': '500px',
          top: '1rem',
          right: '1rem',
          bottom: 'auto',
          left: '1rem'
        }
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

<style lang="scss" scoped>
  .scoped-card-shadow {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
</style>
