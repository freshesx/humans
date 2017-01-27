<template>
  <docs-layout-page>
    <mn-section>
      <mn-letter>
        <h1>Check</h1>
      </mn-letter>

      <mn-form :validate="$v" @success="success">
        <!-- check item -->
        <mn-card-wrapper>
          <mn-card-note>What do you like?</mn-card-note>
          <mn-card>
            <mn-check-item :data="option.value" v-model="models.like" v-for="(option, key) in likeOptions">
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
        <!-- check -->
        <mn-card-wrapper>
          <mn-card-note>What do you like?</mn-card-note>
          <mn-card>
            <mn-card-item>
              <mn-card-prefix>
                <mn-label>Like?</mn-label>
              </mn-card-prefix>
              <mn-card-body>
                <mn-check :data="option.value" v-model="models.like" v-for="option in likeOptions">{{ option.label }}</mn-check>
              </mn-card-body>
            </mn-card-item>
          </mn-card>
          <mn-card-note>
            <mn-helper :validate="$v.models.like">
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

  export default {
    validations: {
      models: {
        like: { required }
      }
    },
    data () {
      return {
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
