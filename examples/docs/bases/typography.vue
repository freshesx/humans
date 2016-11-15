<template>
  <transition name="has-slide">
    <mn-rows>
      <mn-row>
        <mn-scroller>
          <div class="section">

            <mn-letter>
              <h1>Typograhpy</h1>
              <small>Headings, paragraph, list, etc.</small>
            </mn-letter>

            <mn-card>
              <mn-card-item>
                <h3 class="card-title">Headings</h3>
              </mn-card-item>
              <mn-card-item v-for="content in contents">
                <demo-heading slot="body" :level="content.level">{{ content.title }}</demo-heading>
                <small slot="help">{{ content.description }}</small>
              </mn-card-item>
            </mn-card>

          </div>
        </mn-scroller>
      </mn-row>
    </mn-rows>
  </transition>
</template>

<script>
  import DemoHeading from './heading'

  export default {
    components: {
      DemoHeading
    },
    data () {
      return {
        contents: [
          { level: 1, title: 'h1', description: 'size: 36px, weight: 200' },
          { level: 2, title: 'h2', description: 'size: 30px, weight: 300' },
          { level: 3, title: 'h3', description: 'size: 24px, weight: 400' },
          { level: 4, title: 'h4', description: 'size: 18px, weight: 400' },
          { level: 5, title: 'h5', description: 'size: 16px, weight: 600' },
          { level: 6, title: 'h6', description: 'size: 14px, weight: 700' }
        ]
      }
    }
  }
</script>
