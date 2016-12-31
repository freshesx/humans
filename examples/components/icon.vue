<template>
  <transition name="has-slide">
    <mn-rows>
      <mn-row>
        <mn-scroller>
          <mn-section>
            <mn-letter>
              <h1>Icons</h1>
              <small>icons</small>
            </mn-letter>

            <mn-search-bar :class="[ 'has-two-margin-bottom', 'has-white-bg' ]">
              <mn-input v-model="searchName"></mn-input>
            </mn-search-bar>

            <mn-cols>
              <mn-col query="xs-6 sm-4" v-for="(icon, key) in searchIcons">
                <div class="scope-tile">
                  <div>
                    <mn-icon :name="key"></mn-icon>
                  </div>
                  <p>{{ key }}</p>
                </div>
              </mn-col>
            </mn-cols>
          </mn-section>
        </mn-scroller>
      </mn-row>
    </mn-rows>
  </transition>
</template>

<script>
  import icons from '../../components/icon/icons.json'
  import lodash from 'lodash'

  export default {
    computed: {
      searchIcons () {
        if (!this.searchName) {
          return this.icons
        }

        let icons = {}

        lodash.keys(this.icons).forEach((name) => {
          if (name.includes(this.searchName)) {
            icons[name] = (this.icons[name])
          }
        })

        return icons
      }
    },
    data () {
      return {
        icons,
        searchName: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .scope-tile {
    text-align: center;
    background: #fff;
    padding: 2rem 0;
    margin-bottom: 1rem;
    border-radius: 12px;
    > div {
      margin-bottom: 1rem;
    }
    p {
      font-size: 0.75rem;
      margin: 0;
    }
  }
</style>
