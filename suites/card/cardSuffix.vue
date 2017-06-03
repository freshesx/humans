<script>
  import Element from '../../utils/Element'
  import cardBody from './cardBody'

  export default new Element({
    name: 'mn-card-suffix',
    mixins: [ cardBody ],
    data () {
      return {
        columnName: 'suffix'
      }
    }
  })
</script>
