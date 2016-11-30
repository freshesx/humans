<template>
  <mn-card-wrapper>
    <strong slot="header">Select</strong>
    <mn-card slot="body">
      <mn-card-item type="arrow">
        <mn-form-label slot="addon">Language</mn-form-label>
        <mn-form-select slot="body" :options="options" v-model="model.language"></mn-form-select>
      </mn-card-item>
    </mn-card>
  </mn-card-wrapper>
</template>

<script>
  export default {
    watch: {
      'model.language' () {
        console.log(this.model)
      }
    },
    data () {
      return {
        options: [
          { label: 'select language', value: null },
          { label: 'English', value: 'en-US' },
          { label: '简体中文', value: 'zh-CN' }
        ],
        model: {
          language: undefined
        }
      }
    }
  }
</script>
