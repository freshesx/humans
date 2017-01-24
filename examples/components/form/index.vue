<template>
  <docs-layout-page>
    <mn-section>
      <mn-letter>
        <mn-letter-body>
          <h1>Form</h1>
          <small>From and validation</small>
        </mn-letter-body>
      </mn-letter>

      <mn-card-wrapper>
        <mn-card-note>Other form example</mn-card-note>
        <mn-card>
          <mn-card-item type="link" @click="$router.push('radio')">
            <mn-card-body>Radio</mn-card-body>
          </mn-card-item>
        </mn-card>
      </mn-card-wrapper>

      <mn-form :validate="$v" @success="success">
        <!-- FRESH ID and password -->
        <mn-card-wrapper>
          <mn-card-note>FRESH ID and password</mn-card-note>
          <mn-card>
            <mn-card-item>
              <mn-card-prefix>
                <mn-label :validate="$v.models.username">FRESH ID</mn-label>
              </mn-card-prefix>
              <mn-card-body>
                <mn-input v-model="models.username" placeholder="Phone / Email / Username"></mn-input>
              </mn-card-body>
            </mn-card-item>
            <mn-card-item>
              <mn-card-prefix>
                <mn-label :validate="$v.models.password">Password</mn-label>
              </mn-card-prefix>
              <mn-card-body>
                <mn-input type="password" v-model="models.password" placeholder="Password"></mn-input>
              </mn-card-body>
            </mn-card-item>
            <mn-card-item>
              <mn-card-prefix>
                <mn-label :validate="$v.models.year">year</mn-label>
              </mn-card-prefix>
              <mn-card-body>
                <mn-input type="number" v-model="models.year" placeholder="Year"></mn-input>
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
              <mn-card-suffix @click.native.stop.prevent="openRadioInfo"><mn-icon :name="iosInformation"></mn-icon></mn-card-suffix>
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
          <mn-card>
            <mn-check-item :data="option.value" :disabled="key === 1" v-model="models.like" v-for="(option, key) in likeOptions">
              <mn-card-prefix action>
                <mn-check-icon :data="option.value" :value="models.like"></mn-check-icon>
              </mn-card-prefix>
              <mn-card-body>{{ option.label }}</mn-card-body>
            </mn-check-item>
          </mn-card>
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
                <mn-textarea v-model="models.note" placeholder="Add some note" :max-length="300"></mn-textarea>
              </mn-card-body>
            </mn-card-item>
          </mn-card>
          <mn-card-note>
            <mn-helper :validate="$v.models.note">
              <mn-helper-item name="maxLength">Need to be less then 300</mn-helper-item>
            </mn-helper>
          </mn-card-note>
        </mn-card-wrapper>
        <!-- counter -->
        <mn-card-wrapper>
          <mn-card-note>Choose your counter</mn-card-note>
          <mn-card>
            <mn-card-item>
              <mn-card-body>
                <mn-label>Counter</mn-label>
              </mn-card-body>
              <mn-card-suffix>
                <mn-counter v-model="models.counter"></mn-counter>
              </mn-card-suffix>
            </mn-card-item>
          </mn-card>
        </mn-card-wrapper>
        <!-- Policy -->
        <mn-card-wrapper>
          <mn-card>
            <mn-card-item>
              <mn-card-body>Agree Terms & Policy</mn-card-body>
              <mn-card-suffix action>
                <mn-switch :data="true" v-model="models.policy"></mn-switch>
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
                <mn-label :validate="$v.models.city">City</mn-label>
              </mn-card-prefix>
              <mn-card-body>
                <mn-select :options="cityOptions" v-model="models.city"></mn-select>
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

    </mn-section>
  </docs-layout-page>
</template>

<script>
  import {
    required,
    minLength,
    maxLength } from 'vuelidate/lib/validators'
  import lodash from 'lodash'
  import message from 'vue-human/util/message'
  import iosInformation from 'vue-human-icons/js/ios/information'

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
        iosInformation,
        models: {
          username: undefined,
          password: undefined,
          year: 22,
          sex: 'Male',
          like: [],
          policy: true,
          note: undefined,
          city: undefined,
          counter: 2
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
          message({
            show: true,
            type: 'primary',
            description: '数据验证成功'
          })
          form.loading = false
          this.$refs.submit.loading = false
        }, 5000)
      },
      openRadioInfo () {
        message({ show: true, type: 'warning', title: 'Some radio', description: 'Show radio information' })
      }
    }
  }
</script>
