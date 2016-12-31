<template>
  <mn-form :validate="$v" @success="success">
    <!-- FRESH ID and password -->
    <mn-card-wrapper>
      <mn-card-note>FRESH ID and password</mn-card-note>
      <mn-card>
        <mn-card-item>
          <mn-card-prefix>
            <mn-form-label :validate="$v.models.username">FRESH ID</mn-form-label>
          </mn-card-prefix>
          <mn-card-body>
            <mn-form-text v-model="models.username" placeholder="Phone / Email / Username"></mn-form-text>
          </mn-card-body>
        </mn-card-item>
        <mn-card-item>
          <mn-card-prefix>
            <mn-form-label :validate="$v.models.password">Password</mn-form-label>
          </mn-card-prefix>
          <mn-card-body>
            <mn-form-text type="password" v-model="models.password" placeholder="Password"></mn-form-text>
          </mn-card-body>
        </mn-card-item>
        <mn-card-item>
          <mn-card-prefix>
            <mn-form-label :validate="$v.models.yaer">year</mn-form-label>
          </mn-card-prefix>
          <mn-card-body>
            <mn-form-text type="number" v-model="models.year" placeholder="Year"></mn-form-text>
          </mn-card-body>
          <mn-card-suffix v-if="$v.models.year.$pending">
            <mn-loading-icon></mn-loading-icon>
          </mn-card-suffix>
        </mn-card-item>
      </mn-card>
      <mn-card-note>
        Your FRESH ID (Phone, Email or username).
        <mn-helper :validate="$v.models.username">
          <mn-helper-item name="required">Require FRESH ID</mn-helper-item>
          <mn-helper-item name="minLength">FRESH ID need to be more than 4</mn-helper-item>
          <mn-helper-item name="maxLength">FRESH ID need to be less then 100</mn-helper-item>
        </mn-helper>
        <mn-helper :validate="$v.models.password">
          <mn-helper-item name="required">Require password</mn-helper-item>
          <mn-helper-item name="minLength">Password need to be more than 6</mn-helper-item>
          <mn-helper-item name="maxLength">Password need to be less then 20</mn-helper-item>
        </mn-helper>
        <mn-helper :validate="$v.models.year">
          <mn-helper-item name="required">Require year</mn-helper-item>
          <mn-helper-item name="integer">Year must use integer</mn-helper-item>
        </mn-helper>
      </mn-card-note>
    </mn-card-wrapper>
    <!-- sex -->
    <mn-card-wrapper>
      <mn-card-note>Choose your sex</mn-card-note>
      <mn-card>
        <mn-radio-item :data="option.value" v-model="models.sex" v-for="option in sexOptions">
          <mn-card-prefix action>
            <mn-radio-icon :data="option.value" :value="models.sex"></mn-radio-icon>
          </mn-card-prefix>
          <mn-card-body>{{ option.label }}</mn-card-body>
          <mn-card-suffix muted><small>Helper information</small></mn-card-suffix>
          <mn-card-suffix @click.native.stop.prevent="openRadioInfo"><mn-icon name="ios-information"></mn-icon></mn-card-suffix>
        </mn-radio-item>
      </mn-card>
      <mn-card-note>
        <mn-helper :validate="$v.models.sex">
          <mn-helper-item name="required">Must choose one</mn-helper-item>
        </mn-helper>
      </mn-card-note>
    </mn-card-wrapper>
    <!-- Like -->
    <mn-card-wrapper>
      <mn-card-note>What do you like?</mn-card-note>
      <mn-form-checkbox-card :options="likeOptions" v-model="models.like"></mn-form-checkbox-card>
      <mn-card-note>
        <mn-helper :validate="$v.models.like">
          <mn-helper-item name="required">Must choose one</mn-helper-item>
        </mn-helper>
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
        <mn-helper :validate="$v.models.note">
          <mn-helper-item name="maxLength">Need to be less then 300</mn-helper-item>
        </mn-helper>
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
        <mn-helper :validate="$v.models.policy">
          <mn-helper-item name="required">Must agree</mn-helper-item>
        </mn-helper>
      </mn-card-note>
    </mn-card-wrapper>
    <!-- City -->
    <mn-card-wrapper>
      <mn-card>
        <mn-card-item type="link">
          <mn-card-prefix>
            <mn-form-label :validate="$v.models.city">City</mn-form-label>
          </mn-card-prefix>
          <mn-card-body>
            <mn-form-select :options="cityOptions" v-model="models.city"></mn-form-select>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
      <mn-card-note>
        <mn-helper :validate="$v.models.city">
          <mn-helper-item name="required">Must choose one</mn-helper-item>
        </mn-helper>
      </mn-card-note>
    </mn-card-wrapper>

    <mn-btn type="primary" margin block ref="submit">Submit</mn-btn>
  </mn-form>
</template>

<script>
  import {
    required,
    minLength,
    maxLength } from 'vuelidate/lib/validators'
  import lodash from 'lodash'

  export default {
    validations: {
      models: {
        username: {
          required,
          minLength: minLength(4),
          maxLength: maxLength(100)
        },
        password: {
          required,
          minLength: minLength(6),
          maxLength: maxLength(20)
        },
        year: {
          required,
          integer (val) {
            // Test asynchronous validation
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                console.log('Integer asynchronous resolve.')
                resolve(lodash.isSafeInteger(val))
              }, 5000)
            })
          }
        },
        sex: { required },
        like: { required },
        policy: { required },
        note: { maxLength: maxLength(300) },
        city: { required }
      }
    },
    data () {
      return {
        models: {
          username: undefined,
          password: undefined,
          year: 22,
          sex: undefined,
          like: [],
          policy: true,
          note: undefined,
          city: undefined
        },
        sexOptions: [
          { label: 'Male', value: 'Male' },
          { label: 'Female', value: 'Female' }
        ],
        likeOptions: [
          { label: 'Football', value: 'Football' },
          { label: 'Basketball', value: 'Basketball' },
          { label: 'Volleyball', value: 'Volleyball' }
        ],
        cityOptions: [
          { label: 'Choose your city', value: undefined },
          { label: 'Shanghai', value: 'Shanghai' },
          { label: 'Suzhou', value: 'Suzhou' },
          { label: 'Hangzhou', value: 'Hangzhou' }
        ]
      }
    },
    methods: {
      success ($event, form) {
        form.loading = true
        this.$refs.submit.loading = true

        setTimeout(() => {
          this.$human.toastr({
            show: true,
            type: 'primary',
            description: '数据验证成功'
          })
          form.loading = false
          this.$refs.submit.loading = false
        }, 5000)
      },
      openRadioInfo () {
        this.$human.toastr({ show: true, description: 'Show radio information' })
      }
    }
  }
</script>
