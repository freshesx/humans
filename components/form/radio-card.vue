<template>
  <mn-card>
    <mn-card-item v-for="option in options" @click.native.prevent="onClick($event, option.value)">
      <template slot="body">
        {{ option.label }}
      </template>
      <template slot="action">
        <mn-icon :class="[`${cssPrefix}form-radio-checkmark`]" name="ios-checkmark-empty" :scale="2" v-if="option.value === value"></mn-icon>
      </template>
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
