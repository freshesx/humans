<template>
  <div class="card-group">
    <div class="card-group-note">
      <strong>Select</strong>
    </div>
    <div class="card">
      <div class="card-lists">
        <div class="card-item is-arrow">
          <div class="card-item-addon">
            <label class="form-label">Language</label>
          </div>
          <div class="card-item-body">
            <mn-form-select :options="options" v-model="data"></mn-form-select>
          </div>
        </div>
      </div>
    </div>
  </div>
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
