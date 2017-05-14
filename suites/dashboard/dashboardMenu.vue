<template>
  <ul class="mn-dashboard-menu" :class="{ 'is-root': level > 0 }">
    <li v-for="(item, key) in menu" :key="key">
      <div class="mn-dashboard-link"
        :class="{ 'is-link': item.push, 'is-active': item.push && matchActive(item.push) }"
        @click="$router.push(item.push)">
        <div class="mn-dashboard-body">{{ item.name }}</div>
        <div class="mn-dashboard-action">
          <mn-tag v-if="item.badge"
            :name="item.badge.theme"
            :bg="item.badge.bg"
            :text="item.badge.text"
            :size="item.badge.size">{{ item.badge.content }}</mn-tag>
        </div>
      </div>
      <!-- Children -->
      <mn-dashboard-menu :menu="item.children" :level="level + 1" v-if="item.children"></mn-dashboard-menu>
    </li>
  </ul>
</template>

<script>
  import Element from '../../utils/Element'
  import dashboardMenu from './dashboardMenu'
  import tag from '../tag/tag'

  export default new Element({
    name: 'mn-dashboard-menu',
    components: {
      [dashboardMenu.name]: dashboardMenu,  // For Recursive Components
      ...tag.inject()
    },
    props: {
      menu: {
        type: Array,
        default: val => {
          return []
        }
      },
      level: {
        type: Number,
        default: 0
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

  ul.mn-dashboard-menu.is-root {
    .mn-dashboard-link {
      padding: 0.5rem 1rem 0.5rem 2rem;
    }

    .mn-dashboard-body {
      font-size: 0.875rem;
      color: #666;
    }
  }
</style>
