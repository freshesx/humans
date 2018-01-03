<template>
  <div>
    <mn-card>
      <mn-radio-item :data="option.value"
        v-model="models.sex"
        v-for="(option, key) in sexOptions"
        :key="key"
      >
        <mn-card-prefix action>
          <mn-radio-icon :data="option.value"
            :value="models.sex"
          ></mn-radio-icon>
        </mn-card-prefix>
        <mn-card-body>
          {{ option.label }}
        </mn-card-body>
      </mn-radio-item>
    </mn-card>

    <div>
      <mn-radio :data="option.value"
        v-model="models.sex"
        v-for="(option, key) in sexOptions"
        :key="key"
      >{{ option.label }}</mn-radio>
    </div>

    <div>
      <mn-radio-tag :data="option.value"
        v-model="models.sex"
        v-for="(option, key) in sexOptions"
        :key="key"
      >{{ option.label }}</mn-radio-tag>
    </div>
  </div>
</template>

<script>
  import { radio } from '@humans/radio'
  import { card } from '@humans/card'

  export default {
    components: {
      ...radio,
      ...card
    },
    data () {
      return {
        icons: {
          information: require('vue-human-icons/js/ios/information-outline')
        },
        models: {
          sex: 'Male'
        },
        sexOptions: [
          { label: 'Male', value: 'Male' },
          { label: 'Female', value: 'Female' }
        ]
      }
    }
  }
</script>
