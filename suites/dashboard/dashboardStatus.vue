<template>
  <div class="mn-dashboard-status">
    <div class="mn-dashboard-status-item" :class="{ 'is-active': matchActive(item.push) }" @click="onOpen(item)" v-for="item in statusMenu">
      <div class="mn-dashboard-status-icon"><mn-icon :name="item.icon" :scale="1.2"></mn-icon></div>
      <div class="mn-dashboard-status-title">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
  import Element from '../../utils/Element'
  import icon from '../icon/icon'

  export default new Element({
    name: 'mn-dashboard-status',
    components: {
      ...icon.inject()
    },
    props: {
      show: Boolean,
      menu: {
        type: Array,
        default: val => {
          return []
        }
      }
    },
    computed: {
      statusMenu () {
        return [ ...this.menu, ...this.moreMenu ]
      }
    },
    data () {
      return {
        moreMenu: [
          {
            name: '更多',
            icon: require('vue-human-icons/js/ios/keypad'),
            method: 'openSide'
          }
        ]
      }
    },
    methods: {
      matchActive (push) {
        let name = push ? push.name : undefined
        return this.$route.matched.filter(item => item.name === name).length > 0
      },
      onOpen (item) {
        if (item.method && item.method === 'openSide') {
          this.$emit('update:show', true)
        }
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars.scss";
  @import "../../scss/mixins/media.scss";

  .mn-dashboard-status {
    display: flex;
    height: 50px;
    background: #fff;
    border-top: solid 1px #e5e5e5;

    @include min-screen(desktop) {
      display: none;
    }
  }

  .mn-dashboard-status-item {
    flex: 1;
  }

  .mn-dashboard-status-icon {
    text-align: center;
    padding: 0.2rem 0;
    color: rgba(0, 0, 0, 0.5);
  }

  .mn-dashboard-status-title {
    text-align: center;
    font-size: 0.75rem;
    color: rgba(0, 0, 0, 0.5);
  }

  .mn-dashboard-status-item.is-active {
    .mn-dashboard-status-icon {
      color: rgba(0, 0, 0, 1);
    }

    .mn-dashboard-status-title {
      color: rgba(0, 0, 0, 1);
    }
  }
</style>
