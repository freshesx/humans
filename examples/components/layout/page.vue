<template>
  <transition name="has-slide">
    <mn-rows>
      <mn-row fixed>
        <mn-nav-bar>
          <div slot="prefix" @click="$router.go(-1)">
            <mn-icon name="ios-arrow-back"></mn-icon>Back
          </div>
          <div slot="body">
            <mn-icon :name="icon"></mn-icon>
            {{ title }}
          </div>
        </mn-nav-bar>
      </mn-row>
      <mn-row>
        <mn-scroller>
          <slot></slot>
        </mn-scroller>
      </mn-row>
    </mn-rows>
  </transition>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: 'Human UI'
      },
      icon: {
        type: String,
        default: 'ios-color-filter'
      }
    }
  }
</script>
