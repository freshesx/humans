<template>
  <ul class="mn-side-bar-menu" :class="{ 'is-root': level > 0 }">
    <li v-for="(item, key) in menu" :key="key">
      <div class="mn-side-bar-link"
        :class="{
          'is-link': item.push || item.link || item.external,
          'is-active': item.push && matchActive(item.push)
        }"
        @click="onOpen($event, item)">
        <div class="mn-side-bar-title">{{ item.name }}</div>
        <div class="mn-side-bar-badge">
          <mn-tag v-if="item.badge"
            :name="item.badge.theme"
            :bg="item.badge.bg"
            :text="item.badge.text"
            :size="item.badge.size">{{ item.badge.content }}</mn-tag>
        </div>
      </div>
      <!-- Children -->
      <mn-side-bar-menu :menu="item.children"
        :level="level + 1" v-if="item.children"></mn-side-bar-menu>
    </li>
  </ul>
</template>

<script>
  import Element from '../../utils/Element'
  import sideBarMenu from './sideBarMenu'
  import tag from '../tag/tag'

  export default new Element({
    name: 'mn-side-bar-menu',
    components: {
      'mn-side-bar-menu': sideBarMenu,  // For Recursive Components
      ...tag.insert()
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
      },

      /**
       * 打开链接，可以是外部链接，普通链接或 router 链接
       * @method onOpen
       *
       * @param  {Event}          event
       * @param  {Object}         item
       * @param  {String}         item.external 外部链接，新建标签页打开
       * @param  {String}         item.link     普通链接，在当前页面打开
       * @param  {String|Object}  item.push     $router 链接，大部分情况采用当前方案

       * @return {undefined}
       */
      onOpen (event, item) {
        if (item.external) window.open(item.external)
        else if (item.link) window.location.href = item.link
        else if (item.push) this.$router.push(item.push)
      }
    }
  })
</script>

<style lang="scss">
  ul.mn-side-bar-menu {
    list-style: none;
    padding: 0;
    margin: 0;

    > li {
    }
  }

  .mn-side-bar-link {
    display: flex;
    padding: 1rem 1rem;
    justify-content: space-between;

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

  .mn-side-bar-title {
  }

  .mn-side-bar-badge {
    flex-shrink: 0;
  }

  ul.mn-side-bar-menu.is-root {
    .mn-side-bar-link {
      padding: 0.5rem 1rem 0.5rem 2rem;
    }

    .mn-side-bar-title {
      font-size: 0.875rem;
      color: #666;
    }
  }
</style>
