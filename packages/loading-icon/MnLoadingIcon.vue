<script>
/**
 * Loading icon
 */
export default {
  name: 'MnLoadingIcon',
  props: {
    /**
     * Developer can make a custom icon to replace default icon
     */
    icon: {
      type: Object  // need a vue element
    }
  },
  render (h) {
    return h(
      'span',
      {
        class: {
          'mn-loading-icon': true
        }
      },
      [
        // Render custom icon or default icon
        this.icon ? h(this.icon) : h(
          'span',
          {
            class: {
              'mn-loading-icon-default': true
            }
          }
        )
      ]
    )
  }
}
</script>
