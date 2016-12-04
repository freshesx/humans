<template>
  <mn-card>
    <mn-card-item v-for="option in options" @click.native.prevent="onClick($event, option.value)">
      <template slot="body">
        {{ option.label }}
      </template>
      <template slot="action">
        <mn-form-checkbox :checked="getChecked(option)"></mn-form-checkbox>
      </template>
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
      }
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
