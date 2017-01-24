<template>
  <docs-layout-page>
    <mn-section>
      <mn-letter>
        <h1>Radio</h1>
      </mn-letter>

      <mn-form :validate="$v" @success="success">
        <!-- radio item -->
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
        <!-- radio -->
        <mn-card-wrapper>
          <mn-card-note>Choose your sex</mn-card-note>
          <mn-card>
            <mn-card-item>
              <mn-card-prefix>
                <mn-label>Sex</mn-label>
              </mn-card-prefix>
              <mn-card-body>
                <mn-radio :data="option.value" v-model="models.sex" v-for="option in sexOptions">{{ option.label }}</mn-radio>
              </mn-card-body>
            </mn-card-item>
          </mn-card>
          <mn-card-note>
            <mn-helper :validate="$v.models.sex">
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
  import { required } from 'vuelidate/lib/validators'
  import message from 'vue-human/util/message'
  import iosInformation from 'vue-human-icons/js/ios/information'

  export default {
    validations: {
      models: {
        sex: { required }
      }
    },
    data () {
      return {
        iosInformation,
        models: {
          sex: 'Male'
        },
        sexOptions: [
          { label: 'Male', value: 'Male' },
          { label: 'Female', value: 'Female' }
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
