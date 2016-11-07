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
        <mn-form-switch slot="action" data="A" v-model="data.radio"></mn-form-switch>
      </mn-card-item>
      <mn-card-item>
        <template slot="body">Switch boolean</template>
        <template slot="help">loading...</template>
        <mn-form-switch slot="action" data="B" v-model="data.radio"></mn-form-switch>
      </mn-card-item>
      <mn-card-item>
        <template slot="body">Switch boolean</template>
        <template slot="help">loading...</template>
        <mn-form-switch slot="action" data="C" v-model="data.radio2"></mn-form-switch>
      </mn-card-item>
    </mn-card>
  </mn-card-wrapper>
</template>

<script>
  export default {
    watch: {
      data (newValue) {
        console.log(newValue)
      }
    },
    data () {
      return {
        data: {
          radio: undefined,
          radio2: undefined
        }
      }
    }
  }
</script>
