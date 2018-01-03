<script>
  import { radio } from '@humans/radio'
  import activeIcon from 'vue-human-icons/js/ios/checkmark-outline'
  import unactiveIcon from 'vue-human-icons/js/ios/circle-outline'

  export default {
    name: 'mn-checkbox',
    mixins: [
      radio['mn-radio']
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
    },
    methods: {
      click () {
        if (!this.disabled) {
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
