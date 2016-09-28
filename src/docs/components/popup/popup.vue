<template>
  <mn-popup :show.sync="show">
    <div class="card m-b-1">
      <div class="card-block is-center-text">
        <small>This photo will be deleted from iCloud Photo Library on all your devices.</small>
      </div>
      <div class="card-btns">
        <button class="is-red-text">Delete Photo</button>
      </div>
    </div>
    <div class="card m-b-0">
      <div class="card-btns">
        <button class="is-blue-text" @click="cancel"><strong>Cancel</strong></button>
      </div>
    </div>
  </mn-popup>
</template>

<script>
  export default {
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      cancel () {
        this.show = false
      }
    }
  }
</script>
