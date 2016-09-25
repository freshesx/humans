<template>
  <label class="form-switch" :class="classes" @click.prevent="onClick">
    <input type="checkbox" name="nihao">
  </label>
</template>

<script>
  export default {
    methods: {
      onClick () {
        this.isChecked = !this.isChecked
      }
    },
    computed: {
      classes () {
        return {
          'is-checked': this.isChecked
        }
      }
    },
    data () {
      return {
        isChecked: false
      }
    }
  }
</script>
