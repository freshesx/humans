<template>
  <mn-popup :show="show" :classes="[`${cssPrefix}popup-toastr`]" :masked="false" animation="slideInUp">
    <mn-card :style="{ 'max-width': '600px', 'margin': '0 auto', 'box-shadow': '0 0 6px rgba(0,0,0,0.3)' }">
      <mn-card-item :style="{ 'padding': '0.3rem 1rem' }">
        <mn-card-prefix>
          <mn-icon :class="[`has-${currentType.color}-text`]" :name="iconName"></mn-icon>
        </mn-card-prefix>
        <mn-card-body>
          <h4><small>{{ title || currentType.text }}</small></h4>
        </mn-card-body>
        <mn-card-suffix @click.native="close">
          <mn-icon name="ios-close-empty"></mn-icon>
        </mn-card-suffix>
      </mn-card-item>
      <mn-card-item :style="{ 'padding': '1rem 1rem' }">
        <mn-card-body>
          {{ description }}
        </mn-card-body>
      </mn-card-item>
    </mn-card>
  </mn-popup>
</template>

<script>
  const toastrTypes = {
    default: { text: 'Message', icon: 'ios-chatbubble', color: 'black' },
    primary: { text: 'Success', icon: 'ios-checkmark', color: 'green' },
    warning: { text: 'Warning', icon: 'ios-information', color: 'orange' },
    error: { text: 'Error', icon: 'ios-close', color: 'pink' }
  }

  export default {
    methods: {
      close () {
        this.show = false
        this.$emit('close')
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
      currentType () {
        return toastrTypes[this.type]
      },
      iconName () {
        return this.icon || this.currentType.icon
      }
    },
    data () {
      return {
        show: false,
        title: undefined,
        description: 'You have a message',
        icon: undefined,
        type: 'default',  // 'default', 'primary', 'warning', 'error'
        autoClose: true,
        duration: 3000
      }
    },
    mounted: function () {
      // automatic close after 2s
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.duration)
      }
    }
  }
</script>
