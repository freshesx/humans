<template>
  <mn-card-wrapper>
    <strong slot="header">Select</strong>
    <mn-card slot="body">
      <mn-card-item type="arrow">
        <label slot="addon" class="form-label">Language</label>
        <mn-form-select slot="body" :options="options" v-model="data"></mn-form-select>
      </mn-card-item>
    </mn-card>
  </mn-card-wrapper>
</template>

<script>
  const options = [{
    label: 'select language', value: null
  }, {
    label: 'English', value: 'en-US'
  }, {
    label: '简体中文', value: 'zh-CN'
  }]

  export default {
    data () {
      return {
        options,
        data: null
      }
    }
  }
</script>
