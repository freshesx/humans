<script>
import MnCardBody from './MnCardBody.vue'

/**
 * Card suffix component
 */
export default {
  name: 'MnCardSuffix',
  mixins: [ MnCardBody ],
  data () {
    return {
      columnName: 'suffix'
    }
  }
}
</script>
