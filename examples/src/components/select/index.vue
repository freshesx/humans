<template>
  <page>
    <mn-section>
      <mn-letter>
        <mn-letter-body>
          <h1>Select</h1>
        </mn-letter-body>
      </mn-letter>
    </mn-section>

    <mn-form :validate="$v" @success="success">
      <!-- radio item -->
      <mn-section>
        <mn-section-note>Choose your city</mn-section-note>
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
        <mn-section-note>
          <div>
            {{ models.city }}
          </div>
          <mn-helper :validate="$v.models.city">
            <mn-helper-item name="required">Must choose one</mn-helper-item>
          </mn-helper>
        </mn-section-note>
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
  import select from 'vue-human/suites/select'
  import required from 'vuelidate/lib/validators/required'
  import Message from 'vue-human/utils/Message'

  export default {
    components: {
      ...select.map()
    },
    validations: {
      models: {
        city: { required }
      }
    },
    data () {
      return {
        models: {
          city: undefined
        },
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
