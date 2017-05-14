<template>
  <mn-popup class="mn-datetime" :show="isShow">
    <mn-card class="has-one-margin-bottom">
      <mn-card-item>
        <mn-card-prefix>
          <p class="mn-datetime-time">01:56</p>
          <p class="mn-datetime-date">2017年12月17日 周一</p>
        </mn-card-prefix>
        <mn-card-body>
          <div class="has-center-text"></div>
        </mn-card-body>
        <mn-card-suffix v-if="false">
          <p class="mn-datetime-time">01:56</p>
          <p class="mn-datetime-date">2017年12月17日 周一</p>
        </mn-card-suffix>
      </mn-card-item>
      <mn-card-item class="has-none-padding-x">
        <mn-card-body>
          <div class="mn-datetime-input">
            <div class="mn-datetime-item">
              <mn-datetime-picker :options="monthOptions" v-model="models.month"></mn-datetime-picker>
            </div>
            <div class="mn-datetime-item">
              <mn-datetime-picker :options="dateOptions"></mn-datetime-picker>
            </div>
            <div class="mn-datetime-item">
              <mn-datetime-picker :options="hourOptions"></mn-datetime-picker>
            </div>
            <div class="mn-datetime-item">
              <mn-datetime-picker :options="minOptions"></mn-datetime-picker>
            </div>
            <div class="mn-datetime-line"></div>
          </div>
        </mn-card-body>
      </mn-card-item>
      <mn-card-btns type="column">
        <button class="has-red-text">Cancel</button>
        <button class="has-blue-text">Confirm</button>
      </mn-card-btns>
    </mn-card>
  </mn-popup>
</template>

<script>
  import Element from '../../utils/Element'
  import popup from '../popup/popup'
  import popupManager from '../popup/popupManager'
  import card from '../card/card'
  import cardItem from '../card/cardItem'
  import cardBody from '../card/cardBody'
  import cardPrefix from '../card/cardPrefix'
  import cardSuffix from '../card/cardSuffix'
  import cardBtns from '../card/cardBtns'
  import datetimePicker from './datetimePicker'

  export default new Element({
    name: 'mn-datetime',
    components: {
      ...popup.inject(),
      ...card.inject(),
      ...cardItem.inject(),
      ...cardBody.inject(),
      ...cardPrefix.inject(),
      ...cardSuffix.inject(),
      ...cardBtns.inject(),
      [datetimePicker.name]: datetimePicker
    },
    mixins: [
      /**
       * Add isShow, close(), show() mixins
       */
      popupManager
    ],
    props: {
      // value: {
      //   type: null,
      //   default: undefined,
      //   required: true
      // },
      // readonly: {
      //   type: Boolean,
      //   default: false
      // },
      // disabled: {
      //   type: Boolean,
      //   default: false
      // }
    },
    data () {
      return {
        models: {
          month: 12
        }
      }
    },
    computed: {
      monthOptions () {
        const options = []

        for (let i = 1; i <= 12; i++) {
          options.push({ label: i, value: i })
        }

        return options
      },
      dateOptions () {
        const options = []

        for (let i = 1; i <= 31; i++) {
          options.push({ label: i, value: i })
        }

        return options
      },
      hourOptions () {
        const options = []

        for (let i = 0; i <= 23; i++) {
          options.push({ label: i, value: i })
        }

        return options
      },
      minOptions () {
        const options = []

        for (let i = 0; i <= 59; i++) {
          options.push({ label: i, value: i })
        }

        return options
      }
    }
  })
</script>

<style lang="scss">
  .mn-datetime {
    width: 400px;
    top: 45%;
    right: auto;
    bottom: auto;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .mn-datetime-date,
  .mn-datetime-time {
    margin: 0;
    padding: 0;
  }

  .mn-datetime-date {
    font-size: 0.875rem;
    color: rgba(0, 0, 0, 0.6);
  }

  .mn-datetime-time {
    font-size: 1.6rem;
  }

  .mn-datetime-input {
    display: flex;
    width: 100%;
    position: relative;
  }

  .mn-datetime-item {
    position: relative;
    flex: 1;
    text-align: center;
    z-index: 20010;
  }

  .mn-datetime-line {
    position: absolute;
    width: 100%;
    height: 42px;
    border-top: solid 1px #ddd;
    border-bottom: solid 1px #ddd;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20000;
  }
</style>
