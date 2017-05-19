<template>
  <page>
    <mn-section>
      <mn-letter>
        <mn-letter-body>
          <h1>Check</h1>
        </mn-letter-body>
      </mn-letter>
    </mn-section>

    <mn-form :validate="$v" @success="success">
      <!-- check item -->
      <mn-section>
        <mn-section-note>What do you like?</mn-section-note>
        <mn-card>
          <mn-check-item :data="option.value"
            v-model="models.like"
            v-for="(option, key) in likeOptions" :key="key">
            <mn-card-prefix action>
              <mn-check-icon :data="option.value"
                :value="models.like"></mn-check-icon>
            </mn-card-prefix>
            <mn-card-body>{{ option.label }}</mn-card-body>
            <mn-card-suffix>
              <mn-icon :name="icons.information"
                @click.native.stop="onOpenTip"></mn-icon>
            </mn-card-suffix>
          </mn-check-item>
        </mn-card>
        <mn-section-note>
          <mn-helper :validate="$v.models.like">
            <mn-helper-item name="required">Must choose one</mn-helper-item>
          </mn-helper>
        </mn-section-note>
      </mn-section>
      <!-- check -->
      <mn-section>
        <mn-section-note>What do you like?</mn-section-note>
        <mn-card>
          <mn-card-item>
            <mn-card-prefix>
              <mn-label>Like?</mn-label>
            </mn-card-prefix>
            <mn-card-body>
              <mn-check :data="option.value"
                v-model="models.like"
                v-for="(option, key) in likeOptions"
                :key="key">{{ option.label }}</mn-check>
            </mn-card-body>
          </mn-card-item>
        </mn-card>
        <mn-section-note>
          <mn-helper :validate="$v.models.like">
            <mn-helper-item name="required">Must choose one</mn-helper-item>
          </mn-helper>
        </mn-section-note>

        <mn-section-btn>
          <mn-btn theme="primary" margin block ref="submit">Submit</mn-btn>
        </mn-section-btn>
      </mn-section>
    </mn-form>
  </page>
</template>

<script>
  import check from 'vue-human/suites/check'
  import required from 'vuelidate/lib/validators/required'
  import Message from 'vue-human/utils/Message'

  export default {
    components: {
      ...check.map()
    },
    validations: {
      models: {
        like: { required }
      }
    },
    data () {
      return {
        icons: {
          information: require('vue-human-icons/js/ios/information-outline')
        },
        models: {
          like: []
        },
        likeOptions: [
          { label: 'Football', value: 'Football' },
          { label: 'Basketball', value: 'Basketball' },
          { label: 'Volleyball', value: 'Volleyball' }
        ]
      }
    },
    methods: {
      success ($event, form) {
        form.loading = true
        this.$refs.submit.loading = true
        setTimeout(() => {
          Message.create({
            type: 'primary',
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
