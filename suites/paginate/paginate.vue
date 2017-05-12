<template>
  <div class="mn-paginate" v-if="isShowPaginate">
    <button @click="onPrevPage" v-if="isShowPrevBtn">上一页</button>
    <select @change="onChangePage" :value="value">
      <option :value="item" v-for="item in total">{{ item }}</option>
    </select>
    <button @click="onNextPage" v-if="isShowNextBtn">下一页</button>
  </div>
</template>

<script>
  import Element from '../../util/Element'

  export default new Element({
    name: 'mn-paginate',
    props: {
      /**
       * 总页数
       */
      total: {
        type: Number,
        default: 1
      },

      /**
       * 当前页数
       */
      value: {
        type: Number,
        required: true
      }
    },
    computed: {
      /**
       * 是否显示页码，如果页码小于 1 则不显示
       */
      isShowPaginate () {
        return this.total > 1
      },

      /**
       * 是否显示上一页按钮
       */
      isShowPrevBtn () {
        return this.value > 1
      },

      /**
       * 是否显示下一页按钮
       */
      isShowNextBtn () {
        return this.value < this.total
      }
    },
    methods: {
      /**
       * 冒泡修改当前页数的方法
       */
      emitCurrent (currentPageNumber) {
        this.$emit('input', parseInt(currentPageNumber))
      },

      /**
       * 选择页码
       */
      onChangePage (event) {
        this.emitCurrent(event.target.value)
      },

      /**
       * 上一页按钮
       */
      onPrevPage () {
        if (this.value > 1) {
          this.emitCurrent(this.value - 1)
        }
      },

      /**
       * 下一页按钮
       */
      onNextPage () {
        if (this.value < this.total) {
          this.emitCurrent(this.value + 1)
        }
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars";

  .mn-paginate {
    display: flex;
    justify-content: center;
    user-select: none;

    > select,
    > button {
      font-size: 1rem;
      background: transparent;
      height: 2.5rem;
      padding: 0 1rem;
      border-radius: 5px;
      background: #ddd;
      color: #666;
      border: none;
      outline: none;
      cursor: pointer;
      white-space: nowrap;
      text-decoration: none;
      vertical-align: middle;
      transition-duration: 500ms;
      margin: 0 0.5rem;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        background: #999;
        color: #fff;
        transition-duration: 500ms;
      }
    }

    > button {
    }

    > select {
      min-width: 50px;
    }
  }
</style>
