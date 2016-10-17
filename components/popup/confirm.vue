<template>
  <mn-popup :show="show" position="center">
    <div class="card m-b-0" style="width: 280px; margin: 0 auto;">
      <div class="card-block is-center-text">
        <h4>{{ title }}</h4>
        <small>{{ description }}</small>
      </div>
      <div class="card-btns is-column">
        <button class="is-blue-text" @click="cancel">{{ cancelText }}</button>
        <button class="is-blue-text" @click="confirm">{{ confirmText }}</button>
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
      },
      confirm () {
        this.show = false
        this.$emit('confirm')
      }
    },
    data () {
      return {
        show: false,
        title: 'Confirm?',
        description: 'your location is used to ?',
        cancelText: 'Cancel',
        confirmText: 'OK'
      }
    }
  }
</script>
