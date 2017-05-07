<script>
  import Element from '../../util/Element'
  import column from './column'

  export default new Element({
    name: 'mn-col',
    mixins: [ column ],
    mounted () {
      console.warn('建议使用最新 mn-column 和 mn-columns 组件；并且将 mobile="three" 的表达方式改为 mobile="3"。')
    }
  })
</script>
