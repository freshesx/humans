<template>
  <div class="mn-table">

    <!-- 表格头 -->
    <div class="mn-table-hd">
      <div class="mn-table-hd-col" v-for="(column, key) in columns" :key="key" :style="[ calcWidth(column.width) ]">
        {{ column.title }}
      </div>
    </div>

    <!-- 表格加载 -->
    <div class="mn-table-loading" v-if="items === undefined">
      <mn-loading-icon></mn-loading-icon> 努力加载中
    </div>

    <!-- 表格主体 -->
    <div class="mn-table-bd" style="height: 400px;" v-else>
      <mn-scroller>
        <div class="mn-table-bd-col" v-for="item in items">
          <div class="mn-table-bd-cell" v-for="column in columns" :style="[ calcWidth(column.width) ]">
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
      </mn-scroller>
    </div>

  </div>
</template>

<script>
  import Element from '../../utils/Element'
  import isUndefined from 'lodash/isUndefined'

  export default new Element({
    name: 'mn-table',
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
      }
    },
    methods: {
      emitActions () {

      },
      emitChoices () {

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
      }
    }
  })
</script>

<style lang="scss">
  .mn-table-hd {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    // background: #007aff;
    // color: rgba(255, 255, 255, 1);
    // color: rgba(#007aff, 0.6);
    background: #fff;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
  }

  .mn-table-hd-col {
    padding: 0.75rem 1rem;
    font-weight: 500;

    & + & {
      border-left: solid 2px rgba(255, 255, 255, 0.3);
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
  }

  .mn-table-bd-col {
    display: flex;
    transition-duration: 500ms;
    & + & {
      // border-top: solid 1px rgba(0, 0, 0, 0.08);
    }
    &:nth-child(even) {
      background: rgba(#007aff, 0.05);
    }
    &:hover {
      background: rgba(#007aff, 0.1);
    }
  }

  .mn-table-bd-cell {
    padding: 0.75rem 1rem;
    & + & {
      // border-left: solid 1px rgba(0, 0, 0, 0.1);
    }
  }

  .mn-table-bd-actions {
    opacity: 0;
    transition-duration: 500ms;
  }

  .mn-table-bd-btn {
    padding-left: 0 !important;
    padding-right: 0 !important;

    & + & {
      margin-left: 0.5rem;
    }
  }

  .mn-table-bd-col:hover {
    .mn-table-bd-actions {
      opacity: 1;
    }
  }
</style>
