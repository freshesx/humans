export default {
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    close () {
      this.isShow = false
      this.$emit('close')
      return this
    },
    show () {
      this.isShow = true
      this.$emit('show')
      return this
    }
  }
}
