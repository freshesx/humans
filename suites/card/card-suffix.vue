<script>
  import Element from '../../utils/Element'
  import CardPrefix from './cardPrefix'

  export default new Element({
    name: 'mn-card-suffix',
    mixins: [ CardPrefix ],
    data () {
      return {
        typeName: 'suffix'
      }
    }
  })
</script>
