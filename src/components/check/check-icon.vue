<script>
  import MnRadioIcon from '../radio/radio-icon'

  export default {
    name: 'mn-check-icon',
    mixins: [ MnRadioIcon ],
    props: {
      active: {
        type: String,
        default: 'checkmark-outline'
      },
      unactive: {
        type: String,
        default: 'circle-outline'
      }
    },
    computed: {
      checked () {
        return this.value.includes(this.data)
      }
    }
  }
</script>
