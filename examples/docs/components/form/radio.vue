<template>
  <mn-card-wrapper>
    <strong slot="header">Radio input</strong>
    <mn-card slot="body">
      <mn-card-item>
        <label slot="addon" class="form-label">Radio one</label>
        <input slot="body" class="form-radio-control" type="radio" value="one" v-model="radio">
      </mn-card-item>
      <mn-card-item>
        <label slot="addon" class="form-label">Radio two</label>
        <input slot="body" class="form-radio-control" type="radio" value="two" v-model="radio">
      </mn-card-item>
    </mn-card>
    <template slot="footer">
      <mn-icon name="help-circled" :scale="0.9"></mn-icon>
      Add some help for your user.
    </template>
  </mn-card-wrapper>
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
