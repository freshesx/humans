<template>
  <mn-popup :show="show" animation="slideInUp" @close="cancel" :classes="['filter-bar-popup']" :zIndex="zIndex">
    <mn-card :class="[ 'm-b-0', 'filter-bar-card' ]">
      <mn-card-item>
        <template slot="addon">综合排序</template>
        <input slot="body" class="form-radio-control" type="radio" value="smart" v-model="sortWay">
      </mn-card-item>
      <mn-card-item arrow>
        信用
      </mn-card-item>
      <mn-card-item arrow>
        价格由高到低
      </mn-card-item>
      <mn-card-item arrow>
        价格由低到高
      </mn-card-item>
    </mn-card>
  </mn-popup>
</template>

<script>
  export default {
    methods: {
      cancel () {
        this.$emit('cancel')
      }
    },
    data () {
      return {
        show: false,
        zIndex: 4000,
        sortWay: 'smart'
      }
    }
  }
</script>
