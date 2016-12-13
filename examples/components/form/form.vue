<template>
  <mn-form :models="models" :rules="rules" v-model="validation" @success="success">
    <!-- FRESH ID and password -->
    <mn-card-wrapper>
      <mn-card-note>FRESH ID and password</mn-card-note>
      <mn-card>
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
      <mn-card-note>
        Your FRESH ID (Phone, Email or username).
        <mn-form-helper :validate="validation.username"></mn-form-helper>
        <mn-form-helper :validate="validation.password"></mn-form-helper>
      </mn-card-note>
    </mn-card-wrapper>
    <!-- sex -->
    <mn-card-wrapper>
      <mn-card-note>Choose your sex</mn-card-note>
      <mn-form-radio-card :options="sexOptions" v-model="models.sex"></mn-form-radio-card>
      <mn-card-note>
        <mn-form-helper :validate="validation.sex"></mn-form-helper>
      </mn-card-note>
    </mn-card-wrapper>
    <!-- Like -->
    <mn-card-wrapper>
      <mn-card-note>What do you like?</mn-card-note>
      <mn-form-checkbox-card :options="likeOptions" v-model="models.like"></mn-form-checkbox-card>
      <mn-card-note>
        <mn-form-helper :validate="validation.like"></mn-form-helper>
      </mn-card-note>
    </mn-card-wrapper>
    <!-- Note -->
    <mn-card-wrapper>
      <mn-card-note>Notes</mn-card-note>
      <mn-card>
        <mn-card-item>
          <mn-card-body>
            <mn-form-textarea v-model="models.note" placeholder="Add some note" :max-length="300"></mn-form-textarea>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
      <mn-card-note>
        <mn-form-helper :validate="validation.note"></mn-form-helper>
      </mn-card-note>
    </mn-card-wrapper>
    <!-- Policy -->
    <mn-card-wrapper>
      <mn-card>
        <mn-card-item>
          <mn-card-body>Agree Terms & Policy</mn-card-body>
          <mn-card-suffix action>
            <mn-form-switch :data="true" v-model="models.policy"></mn-form-switch>
          </mn-card-suffix>
        </mn-card-item>
      </mn-card>
      <mn-card-note>
        <mn-form-helper :validate="validation.policy"></mn-form-helper>
      </mn-card-note>
    </mn-card-wrapper>

    <mn-btn type="primary" margin block :loading="validation.$loading">Submit</mn-btn>
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
          policy: true,
          note: undefined
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
