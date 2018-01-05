<script>
  import { radio } from '@humans/radio'
  import activeIcon from '@freshes/icons/js/ios/checkmark-outline'
  import unactiveIcon from '@freshes/icons/js/ios/circle-outline'

  export default {
    name: 'mn-checkbox-icon',
    mixins: [
      radio['mn-radio-icon']
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
    }
  }
</script>
