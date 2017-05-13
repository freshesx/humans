<template>
  <mn-container>
    <mn-section>
      <mn-letter>
        <mn-letter-body>
          <h1>Vue Human</h1>
        </mn-letter-body>
      </mn-letter>
    </mn-section>

    <mn-columns>
      <mn-column tablet="4" desktop="3"
        v-for="(item, itemIndex) in menu" :key="itemIndex">
        <mn-section>
          <mn-section-note>
            {{ item.name }}
          </mn-section-note>
          <mn-card>
            <mn-card-item type="link" @click="$router.push(child.push)"
              v-for="(child, childIndex) in item.children" :key="childIndex">
              <mn-card-body>
                {{ child.name }}
              </mn-card-body>
              <mn-card-suffix>
                <small>{{ child.small }}</small>
              </mn-card-suffix>
            </mn-card-item>
          </mn-card>
        </mn-section>
      </mn-column>
    </mn-columns>
  </mn-container>
</template>

<script>
  import core from 'vue-human/suites/core'
  import menu from '../base/menu'

  export default {
    mixins: [ menu ],
    components: {
      ...core.map()
    }
  }
</script>
