<template>
  <page>
    <mn-section>
      <mn-letter>
        <mn-letter-body>
          <h1>Textarea</h1>
        </mn-letter-body>
      </mn-letter>
    </mn-section>

    <mn-form :validate="$v" @success="success">
      <!-- radio item -->
      <mn-section>
        <mn-section-note>Profile</mn-section-note>
        <mn-card>
          <mn-card-item>
            <mn-card-body>
              <mn-textarea v-model="models.note" placeholder="Add some note" :max-length="300"></mn-textarea>
            </mn-card-body>
          </mn-card-item>
        </mn-card>
        <mn-section-note>
          <mn-helper :validate="$v.models.note">
            <mn-helper-item name="required">Need to write some</mn-helper-item>
            <mn-helper-item name="maxLength">Need to be less then 300</mn-helper-item>
          </mn-helper>
        </mn-section-note>
      </mn-section>

      <mn-section>
        <mn-section-btn>
          <mn-btn theme="primary" margin ref="submit">Submit</mn-btn>
        </mn-section-btn>
      </mn-section>
    </mn-form>
  </page>
</template>

<script>
  import core from 'vue-human/suites/core'
  import textarea from 'vue-human/suites/textarea'
  import page from '../base/page'
  import required from 'vuelidate/lib/validators/required'
  import maxLength from 'vuelidate/lib/validators/maxLength'
  import Message from 'vue-human/utils/Message'

  export default {
    components: {
      ...core.map(),
      ...textarea.map(),
      page
    },
    validations: {
      models: {
        note: { required, maxLength: maxLength(300) }
      }
    },
    data () {
      return {
        models: {
          note: undefined
        }
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
        }, 3000)
      }
    }
  }
</script>
