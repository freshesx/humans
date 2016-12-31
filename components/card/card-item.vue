<template>
  <div
    :class="[`${cssPrefix}card-item`, typeClass, { 'is-focus': focus }]"
    @click="click">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        validator: val => ['link', 'arrow', 'cursor'].includes(val)
      }
    },
    data () {
      return {
        focus: false
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
      typeClass () {
        return { [`is-${this.type}`]: !!this.type }
      }
    },
    methods: {
      click ($event) {
        this.$emit('click', $event, this)
        if (this.type) {
          this.focus = true
          setTimeout(() => {
            this.focus = false
          }, 150)
        }
      }
    }
  }
</script>
