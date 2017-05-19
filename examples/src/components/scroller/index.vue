<template>
  <page>
    <mn-section>
      <mn-letter>
        <mn-letter-body>
          <h1>Scroller <small>滚动条</small></h1>
        </mn-letter-body>
      </mn-letter>
    </mn-section>

    <mn-section>
      <mn-card>
        <mn-card-item>
          <mn-card-body>
            建议在手机版测试一下，在 mn-scroller 底下时启动 popup mask，
            然后判断 touch 模式下，滚动条是否滚动。
          </mn-card-body>
        </mn-card-item>
        <mn-card-item type="link" @click="onOpenConfirm">
          <mn-card-body>
            点击打开 popup 以测试
          </mn-card-body>
        </mn-card-item>
      </mn-card>
    </mn-section>

    <mn-section>
      <mn-card>
        <mn-card-item v-for="(item, key) in 20" :key="key" type="arrow">
          <mn-card-body>Row {{ item }}</mn-card-body>
        </mn-card-item>
      </mn-card>
    </mn-section>
  </page>
</template>

<script>
  import Confirm from 'vue-human/utils/Confirm'

  export default {
    methods: {
      onOpenConfirm () {
        Confirm.create({ description: '观察你的滚动条' }).show()
      }
    }
  }
</script>
