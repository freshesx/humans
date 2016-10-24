<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      },
      icon: {
        type: String
      }
    }
  }
</script>
