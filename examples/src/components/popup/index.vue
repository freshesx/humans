<template>
  <div>
    <button @click="onOpenActionSheet">Action Sheets</button>

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
      }
    }
  })
</script>
