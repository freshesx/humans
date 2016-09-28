<template>
  <mn-popup :show.sync="show" center>
    <div class="card m-b-0">
      <div class="card-block is-center-text">
        Are you sure?
      </div>
      <div class="card-btns is-column">
        <button class="is-green-text">OK</button>
        <button @click="cancel">Cancel</button>
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
