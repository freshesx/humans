<template>
  <div class="section">
    <div class="letter">
      <div class="letter-body">
        <h1>Icons</h1>
        <small>icons</small>
      </div>
    </div>

    <div class="card">
      <div class="card-lists">
        <div class="card-item">
          <div class="card-item-addon">
            <label class="form-label">Search</label>
          </div>
          <div class="card-item-body">
            <input class="form-control" type="text" placeholder="Input icon name" v-model="searchName">
          </div>
        </div>
      </div>
    </div>

    <div class="cols">
      <div class="col is-sm-4" v-for="(icon, key) in searchIcons">
        <div class="scope-tile">
          <div>
            <mn-icon :name="key"></mn-icon>
          </div>
          <p>{{ key }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import icons from '../../../components/icon/icons.json'
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
