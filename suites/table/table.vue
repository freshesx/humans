<template>
  <div class="mn-table" :class="{ [`is-${size}`]: !!size }">

    <!-- 表格头 -->
    <div class="mn-table-hd" :class="{ 'is-shadow': scrollTop > 1 }">
      <div class="mn-table-hd-contents" :style="{ transform: `translateX(${scrollLeft * -1}px)` }">
        <mn-table-header-column
          :title="column.title"
          :sort="column.sort"
          :highlight="column.highlight"
          :width="column.width"
          @changeSort="onSort(arguments[0], column, arguments[1])"
          @changeHighlight="onHighlight(column, arguments[0])"
          v-for="(column, key) in columns"
          :key="key"></mn-table-header-column>
      </div>
    </div>

    <!-- 表格加载 -->
    <div class="mn-table-loading" v-if="items === undefined">
      <mn-loading-icon></mn-loading-icon> 努力加载中
    </div>

    <!-- 表格主体 -->
    <div class="mn-table-bd" style="height: 400px;" v-else @scroll="onScroll">
      <div class="mn-table-bd-contents">
        <div class="mn-table-bd-row" v-for="item in items">
          <div class="mn-table-bd-col" :class="{ 'is-highlight': column.highlight }" v-for="column in columns" :style="[ calcWidth(column.width) ]">
            <!-- 组件自留的列展示方式 -->
            <div class="mn-table-bd-actions" v-if="column.name === '$action'">
              <mn-btn class="mn-table-bd-btn"
                :icon="button.icon"
                :theme="button.theme || 'secondary-link'"
                size="sm"
                v-for="(button, buttonIndex) in column.actions"
                :key="buttonIndex">{{ button.title }}</mn-btn>
            </div>
            <!-- 用户定义的列展示方式 -->
            <div v-else-if="$scopedSlots.hasOwnProperty(column.name)">
              <slot :name="column.name" :item="item"></slot>
            </div>
            <!-- 默认展示方式 -->
            <div v-else>{{ item[column.name] }}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Element from '../../utils/Element'
  import isUndefined from 'lodash/isUndefined'
  import tableHeaderColumn from './tableHeaderColumn'

  export default new Element({
    name: 'mn-table',
    components: {
      ...tableHeaderColumn.inject()
    },
    props: {
      // undefined 为加载状态、空数组为无数据、非空数组展示内容
      items: Array,
      choices: {
        type: Array,
        default () {
          return []
        }
      },
      columns: {
        type: Array,
        default () {
          return []
        }
      },
      size: String
    },
    data () {
      return {
        scrollLeft: 0,
        scrollTop: 0
      }
    },
    methods: {
      emitActions () {

      },
      emitChoices () {

      },
      onScroll (event) {
        this.scrollLeft = event.srcElement.scrollLeft
        this.scrollTop = event.srcElement.scrollTop
      },
      calcWidth (width) {
        if (isUndefined(width)) {
          return { width: '120px' }
        }

        if (/^\d+&/.test(width)) {
          return { flex: width }
        }

        return {
          width: width
        }
      },
      onSort (sortName, column, event) {
        this.$emit('changeSort', sortName, column, event)
      },
      onHighlight (column, event) {
        this.$emit('changeHighlight', !column.highlight, column, event)
      }
    }
  })
</script>

<style lang="scss">
  $highlight-bg: rgba(#007aff, 0.15);

  .mn-table-hd {
    position: relative;
    width: 100%;
    height: 3.5rem;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    background: #fff;
    z-index: 100;
    overflow: hidden;
    transition-duration: 500ms;

    &.is-shadow {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }

  .mn-table-hd-contents {
    position: absolute;
    display: flex;
    flex-wrap: nowrap;
  }

  .mn-table-hd-col {
    padding: 1rem 1rem;
    font-weight: 500;
    transition-duration: 500ms;

    &.is-highlight {
      background: $highlight-bg;
    }
  }

  .mn-table-loading {
    background: #fff;
    text-align: center;
    margin: 0 auto;
    padding: 6rem 0;
    border-radius: 0.25rem;
    color: #999;
  }

  .mn-table-bd {
    background: #fff;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    overflow: hidden;
    position: relative;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    overflow: scroll;
  }

  .mn-table-bd-contents {
    position: absolute;
  }

  .mn-table-bd-row {
    display: flex;
    transition-duration: 500ms;

    &:nth-child(odd) {
      background: rgba(0, 0, 0, 0.03);
    }
  }

  .mn-table-bd-col {
    display: flex;
    padding: 0.75rem 1rem;
    align-items: center;
    transition-duration: 500ms;

    &.is-highlight {
      background: $highlight-bg;
    }
  }

  .mn-table-bd-actions {
    transition-duration: 500ms;
  }

  .mn-table-bd-btn {
    padding-left: 0 !important;
    padding-right: 0 !important;

    & + & {
      margin-left: 0.5rem;
    }
  }

  .mn-table.is-sm {
    .mn-table-bd-col {
      padding: 0.25rem 1rem;
    }
  }
</style>
