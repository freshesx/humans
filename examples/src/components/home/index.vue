<template>
  <page>
    <mn-section>
      <mn-letter>
        <mn-letter-body>
          <h1>Freshes</h1>
        </mn-letter-body>
      </mn-letter>
    </mn-section>

    <mn-section>
      <mn-card>
        <mn-card-item>
          <mn-card-body>
            <div class="has-six-padding-y">
              <img src="https://raw.githubusercontent.com/HumanUI/vue-human/master/docs/vue-human.jpg" width="320" class="has-block" style="margin: 0 auto;">
            </div>
            <div style="text-align: center;">
              <a href="https://www.npmjs.com/package/vue-human" title="npm">
                <img src="https://badge.fury.io/js/vue-human.svg">
              </a>
              <span>
                <img :src="`https://img.shields.io/badge/案例版本-${version}-brightgreen.svg`">
              </span>
              <a href="https://minowu.gitbooks.io/vue-human" title="gitbook">
                <img src="https://img.shields.io/badge/gitbook-中文文档-brightgreen.svg">
              </a>
              <a href="https://gitter.im/HumanUI/Lobby" title="GITTER">
                <img src="https://img.shields.io/badge/gitter-chat-brightgreen.svg">
              </a>
              <span title="License MIT">
                <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg">
              </span>
            </div>
            <div style="text-align: center;">
              <a href="https://circleci.com/gh/HumanUI/vue-human/tree/master" title="CircleCI">
                <img src="https://circleci.com/gh/HumanUI/vue-human/tree/master.svg?style=svg">
              </a>
            </div>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
    </mn-section>
  </page>
</template>

<script>
  import menu from '../base/menu'

  export default {
    data () {
      return {
        menu,
        version: process.env.VERSION
      }
    }
  }
</script>
