<template>
  <mn-card>
    <mn-card-item v-for="option in options" @click.native.prevent="onClick($event, option.value)">
      <mn-card-body>{{ option.label }}</mn-card-body>
      <mn-card-suffix action>
        <mn-form-radio-card-icon :checked="option.value === value"></mn-form-radio-card-icon>
      </mn-card-suffix>
    </mn-card-item>
  </mn-card>
</template>

<script>
  export default {
    props: {
      value: {},
      options: {
        type: Array,
        required: true
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    },
    methods: {
      onClick (event, value) {
        this.$emit('input', value)
      }
    }
  }
</script>
