<template>
  <transition name="has-slide">
    <mn-rows>
      <mn-row fixed>
        <mn-nav-bar>
          <mn-btn :class="'has-none-padding-all'" slot="prefix" @click="$router.go(-1)">
            <mn-icon :name="backSvg"></mn-icon> Back
          </mn-btn>
          <div slot="body">
            <mn-icon :name="titleSvg"></mn-icon>
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
  import iosArrowBack from './ios-arrow-back.json'
  import iosColorFilter from './ios-color-filter.json'

  export default {
    props: {
      title: {
        type: String,
        default: 'Human UI'
      },
      titleSvg: {
        type: Object,
        default: () => { return iosColorFilter }
      },
      backSvg: {
        type: Object,
        default: () => { return iosArrowBack }
      }
    }
  }
</script>
