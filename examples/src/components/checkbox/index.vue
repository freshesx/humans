<template>
  <div>
    <mn-card>
      <mn-checkbox-item :data="option.value"
        v-model="models.like"
        v-for="(option, key) in likeOptions"
        :key="key"
      >
        <mn-card-prefix action>
          <mn-checkbox-icon :data="option.value"
            :value="models.like"
          ></mn-checkbox-icon>
        </mn-card-prefix>
        <mn-card-body>{{ option.label }}</mn-card-body>
      </mn-checkbox-item>
    </mn-card>

    <div>
      <mn-checkbox :data="option.value"
        v-model="models.like"
        v-for="(option, key) in likeOptions"
        :key="key"
      >{{ option.label }}</mn-checkbox>
    </div>

    <div>
      <mn-checkbox-tag :data="option.value"
        v-model="models.like"
        v-for="(option, key) in likeOptions"
        :key="key"
      >{{ option.label }}</mn-checkbox-tag>
    </div>
  </div>
</template>

<script>
  import checkbox from '@humans/checkbox'
  import card from '@humans/card'

  export default {
    components: Object.assign({}, checkbox, card),
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
    }
  }
</script>
