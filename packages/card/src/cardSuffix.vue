<script>
  import cardBody from './cardBody.vue'

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
