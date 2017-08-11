<template>
  <page>
    <mn-section>
      <mn-letter>
        <mn-letter-body>
          <h1>Radio</h1>
        </mn-letter-body>
      </mn-letter>
    </mn-section>

    <mn-form :validate="$v" @success="success">
      <!-- radio item -->
      <mn-section>
        <mn-section-note>What do you like?</mn-section-note>
        <mn-card>
          <mn-radio-item :data="option.value"
            v-model="models.sex"
            v-for="(option, key) in sexOptions" :key="key">
            <mn-card-prefix action>
              <mn-radio-icon :data="option.value"
                :value="models.sex"></mn-radio-icon>
            </mn-card-prefix>
            <mn-card-body>{{ option.label }}</mn-card-body>
            <mn-card-suffix>
              <mn-icon :name="icons.information"
                @click.native.stop="onOpenTip"></mn-icon>
            </mn-card-suffix>
          </mn-radio-item>
        </mn-card>
        <mn-section-note>
          <mn-helper :validate="$v.models.sex">
            <mn-helper-item name="required">Must choose one</mn-helper-item>
          </mn-helper>
        </mn-section-note>
      </mn-section>
      <!-- radio -->
      <mn-section>
        <mn-section-note>What do you like?</mn-section-note>
        <mn-card>
          <mn-card-item>
            <mn-card-prefix>
              <mn-label>Like?</mn-label>
            </mn-card-prefix>
            <mn-card-body>
              <mn-radio :data="option.value"
                v-model="models.sex"
                v-for="(option, key) in sexOptions"
                :key="key">{{ option.label }}</mn-radio>
            </mn-card-body>
          </mn-card-item>
        </mn-card>
        <mn-section-note>
          <mn-helper :validate="$v.models.sex">
            <mn-helper-item name="required">Must choose one</mn-helper-item>
          </mn-helper>
        </mn-section-note>
      </mn-section>

      <mn-section>
        <mn-section-note>单选标签</mn-section-note>
        <mn-card>
          <mn-card-item>
            <mn-card-body>
              <mn-radio-tag :data="option.value"
                v-model="models.sex"
                v-for="(option, key) in sexOptions"
                :key="key">{{ option.label }}</mn-radio-tag>
            </mn-card-body>
          </mn-card-item>
        </mn-card>
      </mn-section>

      <mn-section>
        <mn-section-btn>
          <mn-btn theme="primary" margin block ref="submit">Submit</mn-btn>
        </mn-section-btn>
      </mn-section>
    </mn-form>
  </page>
</template>

<script>
  import radio from 'vue-human/suites/radio'
  import required from 'vuelidate/lib/validators/required'
  import Message from 'vue-human/utils/Message'

  export default {
    components: {
      ...radio.map()
    },
    validations: {
      models: {
        sex: { required }
      }
    },
    data () {
      return {
        icons: {
          information: require('vue-human-icons/js/ios/information-outline')
        },
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
          Message.create({
            type: 'success',
            message: 'Success to validate.'
          }).show()
          form.loading = false
          this.$refs.submit.loading = false
        }, 5000)
      },
      onOpenTip () {
        Message.create({
          type: 'warning',
          title: 'Warning',
          message: 'Show some information'
        }).show()
      }
    }
  }
</script>
