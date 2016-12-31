<template>
  <input
    :class="[ `${cssPrefix}form-switch-control` ]"
    type="checkbox"
    :checked="data === value"
    @change="onInput">
</template>

<script>
  export default {
    name: 'mn-switch',
    props: {
      value: {},
      data: {}
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    },
    methods: {
      onInput (event) {
        this.$emit('input', event.target.checked ? this.data : undefined)
      }
    }
  }
</script>
