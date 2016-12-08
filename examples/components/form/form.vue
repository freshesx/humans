<template>
  <mn-form :models="models" :rules="rules" v-model="validation" @success="success">
    <!-- FRESH ID and password -->
    <mn-card-wrapper>
      <strong slot="header">FRESH ID and password</strong>
      <mn-card slot="body">
        <mn-card-item>
          <mn-card-prefix>
            <mn-form-label :validate="validation.username">FRESH ID</mn-form-label>
          </mn-card-prefix>
          <mn-card-body>
            <mn-form-text v-model="models.username" placeholder="Phone / Email / Username"></mn-form-text>
          </mn-card-body>
        </mn-card-item>
        <mn-card-item>
          <mn-card-prefix>
            <mn-form-label :validate="validation.password">Password</mn-form-label>
          </mn-card-prefix>
          <mn-card-body>
            <mn-form-text type="password" v-model="models.password" placeholder="Password"></mn-form-text>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
      <template slot="footer">
        Your FRESH ID (Phone, Email or username).
        <mn-form-helper :validate="validation.username"></mn-form-helper>
        <mn-form-helper :validate="validation.password"></mn-form-helper>
      </template>
    </mn-card-wrapper>
    <!-- sex -->
    <mn-card-wrapper>
      <strong slot="header">Choose your sex</strong>
      <mn-form-radio-card slot="body" :options="sexOptions" v-model="models.sex"></mn-form-radio-card>
      <template slot="footer">
        <mn-form-helper :validate="validation.sex"></mn-form-helper>
      </template>
    </mn-card-wrapper>
    <!-- Like -->
    <mn-card-wrapper>
      <strong slot="header">What do you like?</strong>
      <mn-form-checkbox-card slot="body" :options="likeOptions" v-model="models.like"></mn-form-checkbox-card>
      <template slot="footer">
        <mn-form-helper :validate="validation.like"></mn-form-helper>
      </template>
    </mn-card-wrapper>
    <!-- Policy -->
    <mn-card-wrapper>
      <mn-card slot="body">
        <mn-card-item>
          <mn-card-body>Agree Terms & Policy</mn-card-body>
          <mn-card-suffix action>
            <mn-form-switch :data="true" v-model="models.policy"></mn-form-switch>
          </mn-card-suffix>
        </mn-card-item>
      </mn-card>
      <template slot="footer">
        <mn-form-helper :validate="validation.policy"></mn-form-helper>
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
          username: undefined,
          password: undefined,
          sex: undefined,
          like: [],
          policy: true
        },
        rules: {
          username: [
            { type: 'string', required: true },
            { min: 4, max: 100 }
          ],
          password: [
            { type: 'string', required: true },
            { min: 6, max: 20 }
          ],
          sex: { type: 'string', required: true },
          like: { type: 'array', required: true },
          policy: { type: 'boolean', required: true }
        },
        sexOptions: [
          { label: 'Male', value: 'Male' },
          { label: 'Female', value: 'Female' }
        ],
        likeOptions: [
          { label: 'Football', value: 'Football' },
          { label: 'Basketball', value: 'Basketball' },
          { label: 'Volleyball', value: 'Volleyball' }
        ]
      }
    },
    methods: {
      success () {
        this.$human.toastr({
          show: true,
          type: 'primary',
          description: '数据验证成功'
        })
      }
    }
  }
</script>
