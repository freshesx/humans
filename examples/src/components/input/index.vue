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
            <mn-card-body action>
              <mn-input v-model="models.username" placeholder="Username" size="lg"></mn-input>
            </mn-card-body>
          </mn-card-item>

          <mn-card-item>
            <mn-card-prefix>
              <mn-label>Password</mn-label>
            </mn-card-prefix>
            <mn-card-body action>
              <mn-input type="password" v-model="models.password" placeholder="Password" size="lg"></mn-input>
            </mn-card-body>
          </mn-card-item>

          <mn-card-item>
            <mn-card-prefix>
              <mn-label>Code</mn-label>
            </mn-card-prefix>
            <mn-card-body action>
              <mn-input v-model="models.code" placeholder="Code" size="lg" hide-clear></mn-input>
            </mn-card-body>
            <mn-card-suffix>
              <mn-btn theme="warning" size="sm">Send code</mn-btn>
            </mn-card-suffix>
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
  import input from 'vue-human/suites/input'

  export default {
    components: {
      ...input.map()
    },
    data () {
      return {
        models: {
          username: undefined,
          password: undefined,
          code: undefined
        }
      }
    }
  }
</script>
