export default [
  {
    name: 'cover',
    title: '封面'
  },
  {
    name: 'title',
    title: '影片名称',
    width: '180px',
    sort: 'sortable'
  },
  {
    name: 'rating',
    title: '评分',
    sort: 'desc',
    highlight: true
  },
  {
    name: 'director',
    title: '导演'
  },
  {
    name: 'actor',
    title: '主演',
    width: '200px'
  },
  {
    name: 'tags',
    title: '标签',
    width: '200px'
  },
  {
    name: 'year',
    title: '年份'
  },
  {
    name: '$action',
    width: '180px',
    actions: [
      {
        icon: require('vue-human-icons/js/ios/gear'),
        name: 'edit',
        title: '查看'
      },
      {
        icon: require('vue-human-icons/js/ios/trash'),
        name: 'remove',
        title: '删除'
      }
    ]
  }
]
