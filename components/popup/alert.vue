<template>
  <mn-popup :show="show" position="center">
    <div class="card m-b-0" style="width: 280px; margin: 0 auto;">
      <div class="card-block is-center-text">
        <h4>{{ title }}</h4>
        <small>{{ description }}</small>
      </div>
      <div class="card-btns is-column">
        <button class="is-blue-text" @click="cancel">{{ cancelText }}</button>
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
        title: 'Alert',
        description: 'Can\'t use it.',
        cancelText: 'Cancel'
      }
    }
  }
</script>
