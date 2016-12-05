<template>
  <mn-popup :show="show" :classes="[`${cssPrefix}popup-dialog`]">
    <mn-card class="has-none-margin-bottom">
      <mn-card-item>
        <div class="has-center-text">
          <h4>{{ title }}</h4>
          <small>{{ description }}</small>
        </div>
      </mn-card-item>
      <mn-card-btns type="column">
        <button class="has-blue-text" @click="cancel">{{ cancelText }}</button>
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
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    },
    data () {
      return {
        show: false,
        title: 'Alert',
        description: '',
        cancelText: 'Close'
      }
    }
  }
</script>
