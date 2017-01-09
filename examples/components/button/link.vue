<script>
  import Normal from './normal'

  export default {
    mixins: [ Normal ],
    data () {
      return {
        title: '<a> link',
        buttonName: 'mn-link'
      }
    },
    methods: {
      click () {
        console.log('Click hyper link')
      }
    }
  }
</script>
