<template>
  <div class="section">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Popup</h3>
      </div>
      <div class="card-block">
        <mn-btn class="is-primary is-block" @click.prevent="openPopup">Open popup</mn-btn>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import PopupClass from './popup'

  export default {
    methods: {
      openPopup () {
        const Popup = Vue.extend(PopupClass)
        this.popup = new Popup({
          el: document.createElement('div')
        })
        this.popup.$appendTo(document.body)
        this.popup.$set('show', true)
      }
    }
  }
</script>
