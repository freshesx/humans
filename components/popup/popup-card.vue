<script>
  import Element from '../../util/element'
  import MnCard from '../card/card'

  export default new Element({
    name: 'mn-popup-card',
    mixins: [ MnCard ],
    data () {
      return {
        isNoneMobileNarrow: true
      }
    }
  })
</script>
