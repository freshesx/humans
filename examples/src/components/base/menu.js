export default {
  data () {
    return {
      menu: [
        {
          name: this.$t('examples.menus.core'),
          badge: {
            theme: 'gray-darkest',
            content: 5
          },
          children: [
            {
              name: 'Button',
              small: this.$t('examples.submenus.core.button'),
              push: { name: 'button' }
            },
            {
              name: 'Icon',
              small: this.$t('examples.submenus.core.icon'),
              push: { name: 'icon' }
            },
            {
              name: 'Scroller',
              small: this.$t('examples.submenus.core.scroller'),
              push: { name: 'scroller' }
            },
            {
              name: 'Container',
              small: this.$t('examples.submenus.core.container'),
              push: { name: 'container' }
            },
            {
              name: 'Column',
              small: this.$t('examples.submenus.core.column'),
              push: { name: 'column' }
            }
          ]
        },
        {
          name: this.$t('examples.menus.popup'),
          children: [
            // @todo update to custom popup docs
            // {
            //   name: 'Popup',
            //   small: this.$t('examples.submenus.popup.popup'),
            //   push: { name: 'popup' }
            // },
            {
              name: 'Message',
              small: this.$t('examples.submenus.popup.message'),
              push: { name: 'message' }
            },
            {
              name: 'Confirm',
              small: this.$t('examples.submenus.popup.confirm'),
              push: { name: 'confirm' }
            },
            {
              name: 'Alert',
              small: this.$t('examples.submenus.popup.alert'),
              push: { name: 'alert' }
            },
            {
              name: 'LoadingMask',
              small: this.$t('examples.submenus.popup.loadingMask'),
              push: { name: 'loadingMask' }
            },
            {
              name: 'Modal',
              small: this.$t('examples.submenus.popup.modal'),
              push: { name: 'modal' }
            },
            {
              name: 'ActionSheet',
              small: this.$t('examples.submenus.popup.actionSheet'),
              push: { name: 'actionSheet' }
            }
          ]
        },
        {
          name: this.$t('examples.menus.form'),
          children: [
            {
              name: 'Form',
              small: this.$t('examples.submenus.form.form'),
              push: { name: 'form' }
            },
            {
              name: 'Input',
              small: this.$t('examples.submenus.form.input'),
              push: { name: 'input' }
            },
            {
              name: 'Radio',
              small: this.$t('examples.submenus.form.radio'),
              push: { name: 'radio' }
            },
            {
              name: 'Check',
              small: this.$t('examples.submenus.form.check'),
              push: { name: 'check' }
            },
            {
              name: 'Select',
              small: this.$t('examples.submenus.form.select'),
              push: { name: 'select' }
            },
            {
              name: 'Switch',
              small: this.$t('examples.submenus.form.switch'),
              push: { name: 'switch' }
            },
            {
              name: 'Textarea',
              small: this.$t('examples.submenus.form.textarea'),
              push: { name: 'textarea' }
            },
            {
              name: 'Counter',
              small: this.$t('examples.submenus.form.counter'),
              push: { name: 'counter' }
            },
            {
              name: 'Datetime',
              small: this.$t('examples.submenus.form.datetime'),
              push: { name: 'datetime' }
            }
          ]
        },
        {
          name: this.$t('examples.menus.components'),
          children: [
            {
              name: 'Image',
              small: this.$t('examples.submenus.core.image'),
              push: { name: 'image' }
            },
            {
              name: 'Paginate',
              small: this.$t('examples.submenus.components.paginate'),
              push: { name: 'paginate' }
            },
            {
              name: 'Cell',
              small: this.$t('examples.submenus.components.cell'),
              push: { name: 'cell' }
            },
            {
              name: 'Carousel',
              small: this.$t('examples.submenus.components.carousel'),
              push: { name: 'carousel' }
            },
            {
              name: 'Tag',
              small: this.$t('examples.submenus.components.tag'),
              push: { name: 'tag' }
            }
          ]
        }
      ]
    }
  }
}
