<script>
  import cardBody from './cardBody.vue'

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
