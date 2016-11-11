<template>
  <mn-popup :show="show" :classes="{ [`${cssPrefix}popup-toastr`]: true }" :masked="false" animation="slideInUp">
    <mn-card class="m-b-0 scoped-card-shadow" @click.native.prevent="click">
      <mn-card-item>
        <mn-icon :name="icon"></mn-icon>
        <small>{{ description }}</small>
      </mn-card-item>
    </mn-card>
  </mn-popup>
</template>

<script>
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
      }
    },
    data () {
      return {
        show: false,
        description: 'You have a message',
        icon: 'chatbubbles',
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
