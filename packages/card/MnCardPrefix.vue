<script>
  import MnCardBody from './MnCardBody.vue'

  /**
   * Card prefix component
   */
  export default {
    name: 'MnCardPrefix',
    mixins: [ MnCardBody ],
    data () {
      return {
        columnName: 'prefix'
      }
    }
  }
</script>
