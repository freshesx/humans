<template>
  <mn-popup :show="show" center>
    <div class="card m-b-0" style="width: 280px; margin: 0 auto;">
      <div class="card-block is-center-text">
        <h4>Allow "Calendar" to access your location while you use the app?</h4>
        <small>Your location is used to estimate travel times to events and improve location searches.</small>
      </div>
      <div class="card-btns is-column">
        <button class="is-blue-text" @click="cancel">Don't Allow</button>
        <button class="is-blue-text">Allow</button>
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
