<template>
  <div class="mn-table-group">
    <div class="mn-table-group-prefix" v-if="$slots.action || $slots.view">
      <div class="mn-table-group-action">
        <slot name="action"></slot>
      </div>
      <div class="mn-table-group-view">
        <slot name="view"></slot>
      </div>
    </div>
    <div class="mn-table-group-body">
      <slot></slot>
    </div>
    <div class="mn-table-group-suffix" v-if="$slots.info || $slots.paginate">
      <div class="mn-table-group-info">
        <slot name="info"></slot>
      </div>
      <div class="mn-table-group-paginate">
        <slot name="paginate"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  /**
   * 表格组
   * @module /suites/table/tableGroup
   *
   * @slot default                       - 表格插槽，居中显示
   * @slot action                        - 操作功能区插槽，目前位于左上角
   * @slot view                          - 调整表格视图相关的功能插槽，目前位于右上角
   * @slot info                          - 信息插槽，目前位于左下角，暂时不使用
   * @slot paginate                      - 页码插槽，目前位于右下角
   */
  export default new Element({
    name: 'mn-table-group'
  })
</script>

<style lang="scss">
  @import "../../scss/mixins/media";

  .mn-table-group {
    border-radius: 0.25rem;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  .mn-table-group-prefix,
  .mn-table-group-suffix {
    background: #fff;
    border-bottom: solid 1px rgba(0, 0, 0, 0.05);

    @include min-screen(tablet) {
      display: flex;
      align-items: center;
    }
  }

  .mn-table-group-suffix {
    border: none;
    border-top: solid 1px rgba(0, 0, 0, 0.05);
  }

  .mn-table-group-action {
    flex: 1;
    display: flex;
    border-bottom: solid 1px rgba(0, 0, 0, 0.05);
    padding: 0.5rem 1rem;
    align-items: center;

    @include min-screen(tablet) {
      border: none;
    }
  }

  .mn-table-group-view {
    display: flex;
    padding: 0.5rem 1rem;
    align-items: center;

    > div {
      margin-right: 0.5rem;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .mn-table-group-body {

  }

  .mn-table-group-info {
    flex: 1;
  }

  .mn-table-group-paginate {
    padding: 0.5rem 1rem;
    align-items: center;
  }
</style>
