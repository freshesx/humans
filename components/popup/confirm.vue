<template>
  <mn-popup :show="show" :css="css">
    <mn-card class="m-b-0">
      <mn-card-item>
        <div class="is-center-text">
          <h4>{{ title }}</h4>
          <small>{{ description }}</small>
        </div>
      </mn-card-item>
      <mn-card-btns type="column">
        <button class="is-blue-text" @click="cancel">{{ cancelText }}</button>
        <button class="is-blue-text" @click="confirm">{{ confirmText }}</button>
      </mn-card-btns>
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
      confirm () {
        this.show = false
        this.$emit('confirm')
      }
    },
    data () {
      return {
        show: false,
        title: 'Confirm',
        description: '',
        cancelText: 'Cancel',
        confirmText: 'OK',
        css: {
          width: '280px',
          top: '45%',
          right: 'auto',
          bottom: 'auto',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }
      }
    }
  }
</script>
