<template>
  <mn-popup :show="show" animation="slideInUp" position="top" :masked="false">
    <div class="card m-b-1" style="max-width: 500px; margin: 0 auto;">
      <div class="card-block">
        <mn-icon :name="icon"></mn-icon>
        <small>{{ description }}</small>
      </div>
    </div>
  </mn-popup>
</template>

<script>
  export default {
    methods: {
      cancel () {
        this.show = false
        this.$emit('cancel')
      }
    },
    data () {
      return {
        show: false,
        description: 'You have a message',
        icon: 'chatbubbles'
      }
    },
    mounted: function () {
      setTimeout(() => {
        this.show = false
      }, 2000)
      // automatic close after 2s
    }
  }
</script>
