<template>
  <mn-card-wrapper>
    <strong slot="header">Switch</strong>
    <template slot="footer">
      <mn-icon name="information-circled" :scale="0.9"></mn-icon>
      Add some help for your user.
    </template>
    <mn-card slot="body">
      <mn-card-item>
        <template slot="body">Switch boolean</template>
        <template slot="help">progress</template>
        <mn-form-switch slot="action" v-model="checked"></mn-form-switch>
      </mn-card-item>
      <mn-card-item>
        <template slot="body">Switch boolean</template>
        <template slot="help">loading...</template>
        <mn-form-switch slot="action" v-model="checked2" :disabled="true"></mn-form-switch>
      </mn-card-item>
    </mn-card>
  </mn-card-wrapper>
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
