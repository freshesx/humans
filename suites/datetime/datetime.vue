<template>
  <mn-popup class="mn-datetime" :show="isShow">
    <mn-card class="has-none-margin-bottom" rounded>
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
      <mn-card-item style="height: 91px; padding-left: 0; padding-right: 0;">
        <mn-card-body>
          <div class="mn-datetime-input">
            <div class="mn-datetime-item">
              <select>
                <option :value="option.value" v-for="option in yearOptions">{{ option.label }}</option>
              </select>
            </div>
            <div class="mn-datetime-item">
              <select v-model="models.month">
                <option :value="option.value" v-for="option in monthOptions">{{ option.label }}</option>
              </select>
            </div>
            <div class="mn-datetime-item">
              <select>
                <option :value="option.value" v-for="option in dateOptions">{{ option.label }}</option>
              </select>
            </div>
            <div class="mn-datetime-item">
              <select>
                <option :value="option.value" v-for="option in hourOptions">{{ option.label }}</option>
              </select>
            </div>
            <div class="mn-datetime-item">
              <select>
                <option :value="option.value" v-for="option in minOptions">{{ option.label }}</option>
              </select>
            </div>
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
      yearOptions () {
        const options = []

        for (let i = 1970; i <= 2050; i++) {
          options.push({ label: i, value: i })
        }

        return options
      },
      monthOptions () {
        const options = []

        for (let i = 1; i <= 12; i++) {
          options.push({ label: i + '月', value: i })
        }

        return options
      },
      dateOptions () {
        const options = []

        for (let i = 1; i <= 31; i++) {
          options.push({ label: i + ' 日', value: i })
        }

        return options
      },
      hourOptions () {
        const options = []

        for (let i = 0; i <= 23; i++) {
          options.push({ label: '0' + i, value: i })
        }

        return options
      },
      minOptions () {
        const options = []

        for (let i = 0; i <= 59; i++) {
          options.push({ label: '0' + i, value: i })
        }

        return options
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/mixins/media";

  .mn-datetime {
    top: 45%;
    right: 0.5rem;
    bottom: auto;
    left: 0.5rem;
    transform: translateY(-50%);

    @include min-screen(tablet) {
      width: 400px;
      top: 45%;
      right: auto;
      left: 50%;
      transform: translate(-50%, -50%);
    }
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
    justify-content: space-between;
  }

  .mn-datetime-item {
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0.2rem;

    > select {
      border: none;
      background: transparent;
      font-size: 1.5rem;
      font-weight: 300;
    }
  }
</style>
