<template>
  <div class="card-group">
    <div class="card-group-note">
      <strong>Switch</strong>
    </div>
    <div class="card">
      <div class="card-lists">
        <div class="card-item">
          <div class="card-item-body">Switch boolean</div>
          <div class="card-item-help">
            progress
          </div>
          <div class="card-item-action">
            <mn-form-switch v-model="checked"></mn-form-switch>
          </div>
        </div>
        <div class="card-item">
          <div class="card-item-body">Switch boolean</div>
          <div class="card-item-help">
            loading...
          </div>
          <div class="card-item-action">
            <mn-form-switch v-model="checked2" :disabled="true"></mn-form-switch>
          </div>
        </div>
      </div>
    </div>
    <div class="card-group-note">
      <mn-icon name="question" scale="0.8"></mn-icon>
      Add some help for your user.
    </div>
  </div>
</template>

<script>
  export default {
    watch: {
      checked (newValue) {
        console.log(newValue)
      }
    },
    data () {
      return {
        checked: true,
        checked2: false
      }
    }
  }
</script>
