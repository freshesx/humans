<template>
  <div
    class="mn-turn"
    :class="{ [`is-${theme}`]: !!theme, 'is-checked': data === value }"
    @click.prevent.stop="click"></div>
</template>

<script>
  export default {
    name: 'mn-turn',
    props: {
      /**
       * The value can be a string, number, boolean, array, object or anything.
       * The value is equal undefined or given this.data.
       */
      value: null,
      /**
       * If the value is setted, the value is data.
       */
      data: {
        default: true
      },
      /**
       * Pass string to change theme, you can define any theme in your css code.
       * `is-primary` is default. for example, you can set `is-success`.
       */
      theme: {
        type: String,
        default: 'primary'
      }
    },
    methods: {
      click (event) {
        this.$emit('input', this.value === undefined ? this.data : undefined)
      }
    }
  }
</script>
