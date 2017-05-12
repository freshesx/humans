<template>
  <mn-container>
    <mn-section>
      <mn-card>
        <mn-card-item>
          <mn-card-body>
            <mn-btn theme="primary" @click="onOpenActionSheet" block>Open Action Sheet</mn-btn>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
    </mn-section>

    <mn-action-sheet :show.sync="showActionSheet">
      <mn-card>
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
  </mn-container>
</template>

<script>
  import core from 'vue-human/suites/core'
  import actionSheet from 'vue-human/suites/actionSheet'

  export default {
    components: {
      ...core.map(),
      ...actionSheet.map()
    },
    data () {
      return {
        showActionSheet: false
      }
    },
    methods: {
      onOpenActionSheet () {
        this.showActionSheet = true
      }
    }
  }
</script>
