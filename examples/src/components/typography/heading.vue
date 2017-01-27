<script>
  export default {
    props: {
      level: {
        type: Number,
        required: true
      }
    },
    render (createElement) {
      return createElement(
        'h' + this.level,   // tag name 标签名称
        this.$slots.default // 子组件中的阵列
      )
    }
  }
</script>
