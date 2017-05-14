<template>
  <page>
    <mn-letter>
      <mn-letter-body><h1>Message</h1></mn-letter-body>
    </mn-letter>

    <mn-section>
      <mn-card v-for="(type, key) in types" :key="key">
        <mn-card-item>
          <mn-card-body>
            {{ type }}
          </mn-card-body>
          <mn-card-suffix action>
            <mn-btn theme="primary" @click="onOpenMessage(type)" size="sm">
              Open message
            </mn-btn>
          </mn-card-suffix>
        </mn-card-item>
      </mn-card>
    </mn-section>
  </page>
</template>

<script>
  import core from 'vue-human/suites/core'
  import page from '../base/page'
  import Message from 'vue-human/utils/Message'

  export default {
    components: {
      ...core.map(),
      page
    },
    data () {
      return {
        types: ['Default', 'Primary', 'Warning', 'Error']
      }
    },
    methods: {
      onOpenMessage (type) {
        Message.create({ type: type.toLowerCase(), message: 'new' }).show()
      }
    }
  }
</script>
