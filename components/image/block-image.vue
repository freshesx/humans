<script>
  import Image from './image'
  import $ from 'jquery'
  import { readyAndResize } from '../util/dom'

  export default {
    mixins: [ Image ],
    methods: {
      setDefaultHeight () {
        const scale = this.getViewImage().scale
        const height = scale
          ? $(this.$el).width() / scale
          : 'auto'

        $(this.$el).height(height)
      }
    },
    mounted () {
      readyAndResize(() => {
        this.setDefaultHeight()
      })
    },
    data () {
      return {
        isBlock: true
      }
    }
  }
</script>
