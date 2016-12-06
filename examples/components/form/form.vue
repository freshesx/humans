<template>
  <mn-form :models="models" :rules="rules" v-model="validation" @submit="submit">
    <mn-card-wrapper>
      <strong slot="header">FRESH ID and password</strong>
      <mn-card slot="body">
        <mn-card-item>
          <mn-form-label slot="addon" :validate="validation.username">FRESH ID</mn-form-label>
          <mn-form-text slot="body" v-model="models.username" placeholder="Phone / Email / Username"></mn-form-text>
        </mn-card-item>
        <mn-card-item>
          <mn-form-label slot="addon" :validate="validation.password">Password</mn-form-label>
          <mn-form-text slot="body" v-model="models.password" placeholder="Password"></mn-form-text>
        </mn-card-item>
      </mn-card>
      <template slot="footer">
        Your FRESH ID (Phone, Email or username).
        <mn-form-helper :validate="validation.username"></mn-form-helper>
        <mn-form-helper :validate="validation.password"></mn-form-helper>
      </template>
    </mn-card-wrapper>
    <mn-btn type="primary" block :loading="validation.$loading">Submit</mn-btn>
  </mn-form>
</template>

<script>
  export default {
    data () {
      return {
        validation: {},
        models: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { type: 'string', required: true },
            { min: 4, max: 100 }
          ],
          password: [
            { type: 'string', required: true },
            { min: 6, max: 20 }
          ]
        }
      }
    },
    methods: {
      submit () {
        this.$human.toastr({ show: true, description: '数据验证成功' })
      }
    }
  }
</script>
