<template>
  <ul class="mn-dashboard-menu">
    <li v-for="(item, key) in menu" :key="key">
      <div class="mn-dashboard-link" :class="{ 'is-link': item.push, 'is-active': matchActive(item.push) }">
        <div class="mn-dashboard-body">{{ item.name }}</div>
        <div class="mn-dashboard-action"></div>
      </div>
      <!-- Children -->
    </li>
  </ul>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-dashboard-menu',
    props: {
      menu: {
        type: Array,
        default: val => {
          return []
        }
      }
    },
    methods: {
      matchActive (push) {
        let name = push ? push.name : undefined
        return this.$route.matched.filter(item => item.name === name).length > 0
      }
    }
  })
</script>

<style lang="scss">
  ul.mn-dashboard-menu {
    list-style: none;
    padding: 0;
    margin: 0;

    > li {
    }
  }

  .mn-dashboard-link {
    display: flex;
    padding: 1rem 1rem;

    &.is-link {
      cursor: pointer;
      &:hover {
        background: rgba(0, 0, 0, 0.06);
      }
    }

    &.is-active {
      background: rgba(0, 0, 0, 0.06);
    }
  }

  .mn-dashboard-body {
  }

  .mn-dashboard-action {
    flex-shrink: 0;
  }
</style>
