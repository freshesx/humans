<template>
  <mn-popup :show="show" animation="slideInUp" @close="cancel" :classes="[ `${cssPrefix}filter-bar-popup` ]" :zIndex="zIndex">
    <mn-form-radio-card :class="[ 'm-b-0', `${cssPrefix}filter-bar-card` ]" :options="filterOptions" v-model="filters"></mn-form-radio-card>
  </mn-popup>
</template>

<script>
  export default {
    methods: {
      cancel () {
        this.$emit('cancel')
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    },
    data () {
      return {
        show: false,
        zIndex: 4000,
        filterOptions: [
          { label: '综合排序', value: 'smart' },
          { label: '信用', value: 'credit' },
          { label: '价格由高到低', value: 'desc' },
          { label: '价格由低到高', value: 'asc' }
        ],
        filters: 'smart'
      }
    }
  }
</script>
