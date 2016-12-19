<template>
  <mn-card>
    <mn-card-item v-for="option in options" @click.native.prevent="onClick($event, option.value)">
      <mn-card-prefix action v-if="!suffix">
        <mn-form-checkbox-card-icon :checked="getChecked(option)"></mn-form-checkbox-card-icon>
      </mn-card-prefix>
      <mn-card-body>{{ option.label }}</mn-card-body>
      <mn-card-suffix action v-if="suffix">
        <mn-form-checkbox-card-icon :checked="getChecked(option)"></mn-form-checkbox-card-icon>
      </mn-card-suffix>
    </mn-card-item>
  </mn-card>
</template>

<script>
  import lodash from 'lodash'

  export default {
    props: {
      value: {
        type: Array,
        required: true
      },
      options: {
        type: Array,
        required: true
      },
      suffix: Boolean
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    },
    methods: {
      onClick (event, value) {
        let oldValue = lodash.clone(this.value)

        if (oldValue.includes(value)) {
          // Remove some
          lodash.pull(oldValue, value)
        } else {
          // Add some
          oldValue.push(value)
        }

        this.$emit('input', oldValue)
      },
      getChecked (option) {
        return this.value.includes(option.value)
      },
      getIconName (option) {
        return this.getChecked(option)
          ? 'ios-checkmark-outline'
          : 'ios-circle-outline'
      }
    }
  }
</script>
