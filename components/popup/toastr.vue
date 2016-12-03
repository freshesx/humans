<template>
  <mn-popup :show="show" :classes="[`${cssPrefix}popup-toastr`]" :masked="false" animation="slideInUp">
    <div :class="[`${cssPrefix}popup-toastr-box`, `is-${type}`]" @click.prevent="click">
      <span><mn-icon :name="iconName"></mn-icon></span>
      {{ description }}
    </div>
  </mn-popup>
</template>

<script>
  const toastrTypes = {
    default: 'ios-chatbubble',
    primary: 'ios-checkmark-outline',
    warning: 'ios-information-outline',
    error: 'ios-close-outline'
  }

  export default {
    methods: {
      cancel () {
        this.show = false
        this.$emit('cancel')
      },
      click () {
        this.show = false
        this.$emit('click')
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
      iconName () {
        return this.icon || toastrTypes[this.type]
      }
    },
    data () {
      return {
        show: false,
        description: 'You have a message',
        icon: undefined,
        type: 'default',  // 'default', 'primary', 'warning', 'error'
        autoClose: true,
        duration: 2000
      }
    },
    mounted: function () {
      // automatic close after 2s
      if (this.autoClose) {
        setTimeout(() => {
          this.cancel()
        }, this.duration)
      }
    }
  }
</script>
