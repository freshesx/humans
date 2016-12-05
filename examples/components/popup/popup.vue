<template>
  <mn-popup :show="show" animation="slideInDown" @close="cancel">
    <mn-card class="has-one-margin-bottom">
      <mn-card-item>
        <div class="has-center-text">
          <small>This photo will be deleted from iCloud Photo Library on all your devices.</small>
        </div>
      </mn-card-item>
      <mn-card-btns>
        <button class="has-red-text">Delete Photo</button>
      </mn-card-btns>
    </mn-card>
    <mn-card class="has-none-margin-bottom">
      <mn-card-btns>
        <button class="has-blue-text" @click="cancel"><strong>Cancel</strong></button>
      </mn-card-btns>
    </mn-card>
  </mn-popup>
</template>

<script>
  export default {
    methods: {
      cancel () {
        this.show = false
      }
    },
    data () {
      return {
        show: false
      }
    },
    mounted () {
      this.show = true
    }
  }
</script>
