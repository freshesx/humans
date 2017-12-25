<script>
  import radio from '@humans/radio'

  export default {
    name: 'mn-checkbox-tag',
    mixins: [
      radio['mn-radio-tag']
    ],
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
