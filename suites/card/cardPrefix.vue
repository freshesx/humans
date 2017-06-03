<script>
  import Element from '../../utils/Element'
  import cardBody from './cardBody'

  export default new Element({
    name: 'mn-card-prefix',
    mixins: [ cardBody ],
    data () {
      return {
        columnName: 'prefix'
      }
    }
  })
</script>
