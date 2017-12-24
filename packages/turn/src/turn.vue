<template>
  <div
    class="mn-turn"
    :class="{ [`is-${theme}`]: !!theme, 'is-checked': data === value }"
    @click="onInput"></div>
</template>

<script>
  export default {
    name: 'mn-turn',
    props: {
      value: null,
      data: null,
      theme: {
        type: String,
        default: 'primary'
      }
    },
    methods: {
      onInput (event) {
        this.$emit('input', this.value === undefined ? this.data : undefined)
      }
    }
  }
</script>
