<script>
  import Element from '../../util/Element'
  import CardPrefix from './card-prefix'

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
