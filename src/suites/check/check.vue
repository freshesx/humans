<script>
  import Element from '../../utils/Element'
  import radioElement from '../radio/radio'

  export default new Element({
    name: 'mn-check',
    mixins: [ radioElement ],
    props: {
      active: {
        default () { return require('vue-human-icons/js/ios/checkmark-outline') }
      },
      unactive: {
        default () { return require('vue-human-icons/js/ios/circle-outline') }
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
  })
</script>
