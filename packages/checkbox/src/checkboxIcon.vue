<script>
  import { radio } from '@humans/radio'
  import activeIcon from 'vue-human-icons/js/ios/checkmark-outline'
  import unactiveIcon from 'vue-human-icons/js/ios/circle-outline'

  export default {
    name: 'mn-checkbox-icon',
    mixins: [
      radio['mn-radio-icon']
    ],
    props: {
      active: {
        default: () => activeIcon
      },
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
