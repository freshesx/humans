<script>
  import MnRadioIcon from '../radio/radio-icon'
  import checkmarkOutline from './checkmark-outline.json'
  import circleOutline from './circle-outline.json'

  export default {
    name: 'mn-check-icon',
    mixins: [ MnRadioIcon ],
    props: {
      active: {
        type: [String, Object],
        default: () => checkmarkOutline
      },
      unactive: {
        type: [String, Object],
        default: () => circleOutline
      }
    },
    computed: {
      checked () {
        return this.value.includes(this.data)
      }
    }
  }
</script>
