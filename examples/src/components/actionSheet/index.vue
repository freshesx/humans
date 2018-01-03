<template>
  <div>
    <button @click="openActionSheet">Open Action Sheet</button>

    <mn-action-sheet :visible.sync="showActionSheet">
      <mn-card rounded>
        <mn-card-item>
          <mn-card-body class="has-center-text">
            <small>是否将这个照片从您的设备中删除</small>
          </mn-card-body>
        </mn-card-item>
        <mn-card-btns>
          <button class="has-red-text">删除照片</button>
        </mn-card-btns>
      </mn-card>
    </mn-action-sheet>
  </div>
</template>

<script>
  import { actionSheet } from '@humans/action-sheet'
  import { card } from '@humans/card'

  export default {
    components: Object.assign({}, actionSheet, card),
    data () {
      return {
        showActionSheet: false
      }
    },
    methods: {
      openActionSheet () {
        this.showActionSheet = true
      }
    }
  }
</script>
