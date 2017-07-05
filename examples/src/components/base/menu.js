import Vue from 'vue'

export default [
  {
    name: Vue.t('examples.menus.core'),
    badge: {
      theme: 'gray-darkest',
      content: 'core',
      size: 'sm'
    },
    children: [
      {
        name: 'Button',
        small: Vue.t('examples.submenus.core.button'),
        push: { name: 'button' }
      },
      {
        name: 'Icon',
        small: Vue.t('examples.submenus.core.icon'),
        push: { name: 'icon' }
      },
      {
        name: 'Scroller',
        small: Vue.t('examples.submenus.core.scroller'),
        push: { name: 'scroller' }
      },
      {
        name: 'Container',
        small: Vue.t('examples.submenus.core.container'),
        push: { name: 'container' }
      },
      {
        name: 'Column',
        small: Vue.t('examples.submenus.core.column'),
        push: { name: 'column' }
      },
      {
        name: 'Card',
        small: Vue.t('examples.submenus.core.card'),
        push: { name: 'card' },
        badge: {
          content: 'H!',
          size: 'sm',
          theme: 'pink'
        }
      }
    ]
  },
  {
    name: Vue.t('examples.menus.popup'),
    children: [
      // @todo update to custom popup docs
      // {
      //   name: 'Popup',
      //   small: Vue.t('examples.submenus.popup.popup'),
      //   push: { name: 'popup' }
      // },
      {
        name: 'Message',
        small: Vue.t('examples.submenus.popup.message'),
        push: { name: 'message' }
      },
      {
        name: 'Confirm',
        small: Vue.t('examples.submenus.popup.confirm'),
        push: { name: 'confirm' }
      },
      {
        name: 'Alert',
        small: Vue.t('examples.submenus.popup.alert'),
        push: { name: 'alert' }
      },
      {
        name: 'LoadingMask',
        small: Vue.t('examples.submenus.popup.loadingMask'),
        push: { name: 'loadingMask' }
      },
      {
        name: 'Modal',
        small: Vue.t('examples.submenus.popup.modal'),
        push: { name: 'modal' }
      },
      {
        name: 'ActionSheet',
        small: Vue.t('examples.submenus.popup.actionSheet'),
        push: { name: 'actionSheet' }
      }
    ]
  },
  {
    name: Vue.t('examples.menus.form'),
    children: [
      {
        name: 'Form',
        small: Vue.t('examples.submenus.form.form'),
        push: { name: 'form' }
      },
      {
        name: 'Input',
        small: Vue.t('examples.submenus.form.input'),
        push: { name: 'input' }
      },
      {
        name: 'Radio',
        small: Vue.t('examples.submenus.form.radio'),
        push: { name: 'radio' }
      },
      {
        name: 'Check',
        small: Vue.t('examples.submenus.form.check'),
        push: { name: 'check' }
      },
      {
        name: 'Select',
        small: Vue.t('examples.submenus.form.select'),
        push: { name: 'select' }
      },
      {
        name: 'Turn',
        small: Vue.t('examples.submenus.form.turn'),
        push: { name: 'turn' }
      },
      {
        name: 'Textarea',
        small: Vue.t('examples.submenus.form.textarea'),
        push: { name: 'textarea' }
      },
      {
        name: 'Counter',
        small: Vue.t('examples.submenus.form.counter'),
        push: { name: 'counter' }
      },
      {
        name: 'Datetime',
        small: Vue.t('examples.submenus.form.datetime'),
        push: { name: 'datetime' }
      }
    ]
  },
  {
    name: Vue.t('examples.menus.components'),
    children: [
      {
        name: 'Image',
        small: Vue.t('examples.submenus.core.image'),
        push: { name: 'image' }
      },
      {
        name: 'Paginate',
        small: Vue.t('examples.submenus.components.paginate'),
        push: { name: 'paginate' }
      },
      {
        name: 'Cell',
        small: Vue.t('examples.submenus.components.cell'),
        push: { name: 'cell' }
      },
      {
        name: 'Carousel',
        small: Vue.t('examples.submenus.components.carousel'),
        push: { name: 'carousel' }
      },
      {
        name: 'Tag',
        small: Vue.t('examples.submenus.components.tag'),
        push: { name: 'tag' }
      },
      {
        name: 'Search Bar',
        small: Vue.t('examples.submenus.components.searchBar'),
        push: { name: 'searchBar' }
      },
      {
        name: 'Rate',
        small: Vue.t('examples.submenus.components.rate'),
        push: { name: 'rate' }
      },
      {
        name: 'Tab Bar',
        small: Vue.t('examples.submenus.components.tabBar'),
        push: { name: 'tabBar' }
      },
      {
        name: 'Nav Bar',
        small: Vue.t('examples.submenus.components.navBar'),
        push: { name: 'navBar' }
      },
      {
        name: 'Menu',
        small: Vue.t('examples.submenus.components.menu'),
        push: { name: 'menu' }
      },
      {
        name: 'Slide Bar',
        small: Vue.t('examples.submenus.components.slideBar'),
        push: { name: 'slideBar' }
      }
    ]
  }
]
