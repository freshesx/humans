<template>
  <div class="mn-table-paginate">
    <!-- 共多少条文字，每页显示多少条，第几页，上一页，下一页 -->
    <div class="mn-table-paginate-descript">
      共 {{ total }} 条数据
    </div>
    <select class="mn-table-paginate-select" :value="count" @change="onCount">
      <option :value="item" v-for="item in countOptions">每页 {{ item }} 条</option>
    </select>
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

  export default new Element({
    name: 'mn-table-paginate',
    props: {
      start: {
        type: Number,
        default: 0
      },
      total: {
        type: Number,
        default: 0
      },
      count: {
        type: Number,
        default: 20
      },
      countOptions: {
        type: Array,
        default () {
          return [ 20, 50, 100 ]
        }
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
    computed: {
      totalPages () {
        if (this.total === 0) return 1
        return Math.ceil(this.total / this.count)
      },
      currentPage () {
        return Math.ceil((this.start + 1) / this.count)
      }
    },
    methods: {
      onPrev () {
        if (this.currentPage > 1) {
          this.$emit('change', this.start - this.count, this.count)
        }
      },
      onNext () {
        if (this.currentPage < this.totalPages) {
          this.$emit('change', this.start + this.count, this.count)
        }
      },
      onCount (event) {
        this.$emit('change', 0, parseInt(event.target.value))
      },
      onPage (event) {
        const start = (parseInt(event.target.value) - 1) / this.count
        this.$emit('change', start, this.count)
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
    padding: 0 1rem;
    border-radius: 0.25rem;
    background: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    white-space: nowrap;
    text-decoration: none;
    vertical-align: middle;
    transition-duration: 500ms;
    margin-left: 0.5rem;
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

    &.is-active {
      background: #ccc;
    }
  }
</style>
