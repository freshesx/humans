<template>
  <div class="card-group">
    <div class="card-group-note">
      <strong>Radio input</strong>
    </div>
    <div class="card">
      <div class="card-lists">
        <div class="card-item">
          <div class="card-item-addon">
            <label class="form-label">Radio one</label>
          </div>
          <div class="card-item-body">
            <input class="form-radio-control" type="radio" value="one" v-model="radio">
          </div>
        </div>
        <div class="card-item">
          <div class="card-item-addon">
            <label class="form-label">Radio two</label>
          </div>
          <div class="card-item-body">
            <input class="form-radio-control" type="radio" value="two" v-model="radio">
          </div>
        </div>
      </div>
    </div>
    <div class="card-group-note">
      <mn-icon name="help-circled" :scale="0.9"></mn-icon>
      Add some help for your user.
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio: 'one'
      }
    }
  }
</script>
