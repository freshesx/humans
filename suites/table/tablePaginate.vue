<template>
  <div class="mn-table-paginate">
    <select class="mn-table-paginate-select" :value="currentPage" @change="onPage">
      <option :value="item" v-for="item in totalPages">第 {{ item }} 页</option>
    </select>
    <div class="mn-table-paginate-btn" @click="onPrev">
      <mn-icon :name="icons.prev" :scale="0.8"></mn-icon>
    </div>
    <div class="mn-table-paginate-btn" @click="onNext">
      <mn-icon :name="icons.next" :scale="0.8"></mn-icon>
    </div>
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  /**
   * 表格分页功能
   * @module suites/table/tablePaginate
   * @example
   * <mn-table-paginate :currentPage="1" :totalPages="10" @changePage="onPage"></mn-table-paginate>
   *
   * @param {Number}     [currentPage=1]      - 当前页码
   * @param {Number}     [totalPages=1]       - 总页数
   */
  export default new Element({
    name: 'mn-table-paginate',
    props: {
      currentPage: {
        type: Number,
        default: 1
      },
      totalPages: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        icons: {
          prev: require('vue-human-icons/js/android/arrow-dropleft'),
          next: require('vue-human-icons/js/android/arrow-dropright')
        }
      }
    },
    methods: {
      // 上一页
      onPrev (event) {
        if (this.currentPage > 1) {
          this.emitChange(this.currentPage - 1, event)
        }
      },
      // 下一页
      onNext (event) {
        if (this.currentPage < this.totalPages) {
          this.emitChange(this.currentPage + 1, event)
        }
      },
      // 指定页码
      onPage (event) {
        this.emitChange(parseInt(event.target.value), event)
      },
      /**
       * 触发起始点和条数修改的事件
       * @event changePage
       * @prop  {Number}   currentPage   - 当前页码
       * @prop  {Event}    event         - DOM Event 对象
       */
      emitChange (currentPage, event) {
        this.$emit('changePage', currentPage, event)
      }
    }
  })
</script>

<style lang="scss">
  .mn-table-paginate {
    display: flex;
    align-items: center;
    height: 2.25rem;
  }

  .mn-table-paginate-select {
    font-size: 1rem;
    background: transparent;
    height: 2.25rem;
    border-radius: 0.25rem;
    background: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    white-space: nowrap;
    text-decoration: none;
    vertical-align: middle;
    transition-duration: 500ms;
    background: rgba(0, 0, 0, 0.075);
  }

  .mn-table-paginate-btn {
    width: 2.25rem;
    height: 2.25rem;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    cursor: pointer;
    transition-duration: 500ms;
    border-radius: 0.25rem;
    margin-left: 0.5rem;
    background: rgba(0, 0, 0, 0.075);

    &.is-active {
      background: #ccc;
    }
  }
</style>
