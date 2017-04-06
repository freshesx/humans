<template>
  <div>
    <button @click="onOpenActionSheet">Action Sheets</button>
    <button @click="onOpenMessage">弹出一个消息</button>
    <button @click="onOpenConfirm">弹出一个确认框</button>

    <mn-action-card v-model="showActionSheet">
      <mn-card-item>
        <mn-card-body class="has-center-text">
          <small>是否将这个照片从您的设备中删除</small>
        </mn-card-body>
      </mn-card-item>
      <mn-card-btns>
        <button class="has-red-text">删除照片</button>
      </mn-card-btns>
    </mn-action-card>
  </div>
</template>

<script>
  import Element from 'vue-human/util/Element'
  import Message from 'vue-human/util/Message'
  import Confirm from 'vue-human/util/Confirm'
  import actionCardSuits from 'vue-human/components/action-card'
  import cardSuits from 'vue-human/components/card'

  export default new Element({
    name: 'p-popup',
    components: {
      ...actionCardSuits.map(),
      ...cardSuits.map()
    },
    data () {
      return {
        showActionSheet: false
      }
    },
    methods: {
      onOpenActionSheet () {
        this.showActionSheet = true
      },
      onOpenMessage () {
        Message.create({ message: 'Hello, world.' }).show()
      },
      onOpenConfirm () {
        Confirm.create().show()
      }
    }
  })
</script>
