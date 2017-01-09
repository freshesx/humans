<script>
  import MnRadio from '../radio/radio'
  import checkmarkOutline from './checkmark-outline.json'
  import circleOutline from './circle-outline.json'

  export default {
    name: 'mn-check',
    mixins: [ MnRadio ],
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
    },
    methods: {
      click () {
        if (!this.disabled) {
          this.$emit(
            'input',
            this.value.includes(this.data)
              ? this.value.filter(item => item !== this.data)
              : [ ...this.value, this.data ]
          )
        }
      }
    }
  }
</script>
