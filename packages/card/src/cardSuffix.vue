<script>
  import cardBody from './cardBody.vue'

  /**
   * Card suffix component
   */
  export default {
    name: 'mn-card-suffix',
    mixins: [ cardBody ],
    data () {
      return {
        columnName: 'suffix'
      }
    }
  }
</script>
