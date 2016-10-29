<template>
  <mn-popup :show="show" animation="slideInDown" @close="cancel">
    <mn-card class="m-b-1">
      <mn-card-item>
        <small class="is-center-text">This photo will be deleted from iCloud Photo Library on all your devices.</small>
      </mn-card-item>
      <div class="card-btns">
        <button class="is-red-text">Delete Photo</button>
      </div>
    </mn-card>
    <mn-card class="m-b-0">
      <div class="card-btns">
        <button class="is-blue-text" @click="cancel"><strong>Cancel</strong></button>
      </div>
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
