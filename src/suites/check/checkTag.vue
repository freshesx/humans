<script>
  import Element from '../../utils/Element'
  import radioTag from '../radio/radioTag'

  export default new Element({
    name: 'mn-check-tag',
    mixins: [ radioTag ],
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
