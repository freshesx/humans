export default [
  {
    name: 'cover',
    title: '图片'
  },
  {
    name: 'id',
    title: 'ID',
    width: '120px'
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
    sort: 'desc'
  },
  {
    name: 'tags',
    title: '标签',
    width: '500px'
  },
  {
    name: 'year',
    title: '上映时间'
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
