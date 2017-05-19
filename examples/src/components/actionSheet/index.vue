<template>
  <div>
    <page>
      <mn-letter>
        <mn-letter-body><h1>Action Sheet</h1></mn-letter-body>
      </mn-letter>

      <mn-section>
        <mn-card>
          <mn-card-item>
            <mn-card-body>
              <mn-btn theme="primary" @click="onOpenActionSheet" block>Open Action Sheet</mn-btn>
            </mn-card-body>
          </mn-card-item>
        </mn-card>
      </mn-section>
    </page>

    <mn-action-sheet :show.sync="showActionSheet">
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
  import actionSheet from 'vue-human/suites/actionSheet'
  import page from '../base/page'

  export default {
    components: {
      ...actionSheet.map(),
      page
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
