<template>
  <page>
    <mn-letter>
      <mn-letter-body><h1>Input</h1></mn-letter-body>
    </mn-letter>

    <mn-form>
      <mn-section>
        <mn-card>
          <mn-card-item>
            <mn-card-prefix>
              <mn-label>Username</mn-label>
            </mn-card-prefix>
            <mn-card-body>
              <mn-input v-model="models.username" placeholder="Username"></mn-input>
            </mn-card-body>
          </mn-card-item>

          <mn-card-item>
            <mn-card-prefix>
              <mn-label>Password</mn-label>
            </mn-card-prefix>
            <mn-card-body>
              <mn-input type="password" v-model="models.password" placeholder="Password"></mn-input>
            </mn-card-body>
          </mn-card-item>
        </mn-card>

        <mn-section-btn>
          <mn-btn theme="primary">Sumbit</mn-btn>
        </mn-section-btn>
      </mn-section>
    </mn-form>
  </page>
</template>

<script>
  import core from 'vue-human/suites/core'
  import input from 'vue-human/suites/input'
  import page from '../base/page'

  export default {
    components: {
      ...core.map(),
      ...input.map(),
      page
    },
    data () {
      return {
        models: {
          username: undefined,
          password: undefined,
          year: 18
        }
      }
    }
  }
</script>
