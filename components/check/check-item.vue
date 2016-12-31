<script>
  import MnRadioItem from '../radio/radio-item'

  export default {
    name: 'mn-check-item',
    mixins: [ MnRadioItem ],
    methods: {
      click () {
        if (this.value.includes(this.data)) {
          this.$emit('input', this.value.filter(item => item !== this.data))
        } else {
          this.$emit('input', [ ...this.value, this.data ])
        }
      }
    }
  }
</script>
