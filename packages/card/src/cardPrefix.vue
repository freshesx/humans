<script>
  import cardBody from './cardBody.vue'

  /**
   * Card prefix component
   */
  export default {
    name: 'mn-card-prefix',
    mixins: [ cardBody ],
    data () {
      return {
        columnName: 'prefix'
      }
    }
  }
</script>
