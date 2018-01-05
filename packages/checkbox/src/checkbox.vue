<script>
  import { radio } from '@humans/radio'
  import activeIcon from '@freshes/icons/js/ios/checkmark-outline'
  import unactiveIcon from '@freshes/icons/js/ios/circle-outline'

  export default {
    name: 'mn-checkbox',
    mixins: [
      radio['mn-radio']
    ],
    props: {
      /**
       * Active icon
       */
      active: {
        default: () => activeIcon
      },
      /**
       * Unactive icon
       */
      unactive: {
        default: () => unactiveIcon
      }
    },
    computed: {
      checked () {
        return this.value.indexOf(this.data) > -1
      }
    },
    methods: {
      click () {
        if (!this.disabled) {
          /**
           * @event input
           * @property {Array} data - ouput array
           */
          this.$emit(
            'input',
            this.value.indexOf(this.data) > -1
              ? this.value.filter(item => item !== this.data)
              : [ ...this.value, this.data ]
          )
        }
      }
    }
  }
</script>
