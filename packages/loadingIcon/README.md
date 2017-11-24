# @humans/loadingIcon

### Base usage

Base usage use the humans universal usage.

### Set custom icon in loading-icon globally

``` javascript
import options from '@humans/options'
import customIcon from './customIcon.vue'

// Global use customIcon
options.set('loading', customIcon)
```

### Set custom icon in the specified loading-icon

``` vue
<template>
  <mn-loading-icon :icon="customIcon"></mn-loading-icon>
</template>

<script>
  import customIcon from './customIcon.vue'
  import loadingIcon from '@humans/loadingIcon'

  export default {
    components: {
      ...loadingIcon.map()
    },
    data () {
      return {
        customIcon
      }
    }
  }
</script>
```

### Create many different loading-icons with custom icon by Mixins

``` javascript
// appLoadingIcon.vue
import customIcon from './customIcon.vue'
import loadingIcon from '@humans/loadingIcon'

export default {
  name: 'app-loading-icon',
  mixins: [
    loadingIcon['mn-loading-icon']
  ],
  props: {
    icon: {
      type: Object,
      default () {
        const Component = Vue.extend(customIcon)
        return new Component().$mount()
      }
    }
  }
}
```

``` vue
<template>
  <app-loading-icon></app-loading-icon>
</template>

<script>
  import appLoadingIcon from './appLoadingIcon.vue'

  export default {
    components: {
      appLoadingIcon
    }
  }
</script>
```
