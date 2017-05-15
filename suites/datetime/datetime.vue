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
      <mn-card-item style="height: 91px;">
        <mn-card-body>
          <div class="mn-datetime-input">
            <div class="mn-datetime-item">
              <select v-model="models.fullYear">
                <option :value="option.value" v-for="option in fullYearOptions">{{ option.label }}</option>
              </select>
            </div>
            <div class="mn-datetime-item">
              <select v-model="models.month">
                <option :value="option.value" v-for="option in monthOptions">{{ option.label }}</option>
              </select>
            </div>
            <div class="mn-datetime-item">
              <select v-model="models.date">
                <option :value="option.value" v-for="option in dateOptions">{{ option.label }}</option>
              </select>
            </div>
            <div class="mn-datetime-item">
              <select v-model="models.hours">
                <option :value="option.value" v-for="option in hoursOptions">{{ option.label }}</option>
              </select>
            </div>
            <div class="mn-datetime-item">
              <select v-model="models.minutes">
                <option :value="option.value" v-for="option in minutesOptions">{{ option.label }}</option>
              </select>
            </div>
            <div class="mn-datetime-item">
              <select v-model="models.seconds">
                <option :value="option.value" v-for="option in secondsOptions">{{ option.label }}</option>
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
  import { isLunarMonth, isLeapYear, isFebruary } from './dateChecker'

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
    data () {
      return {
        datetime: '2017-05-15 19:19:00',
        models: {
          fullYear: 2017,
          month: 0,    // 0 - 11
          date: 1,
          hours: 0,    // 0 - 23
          minutes: 0,  // 0 - 59
          seconds: 0    // 0 - 59
        }
      }
    },
    methods: {
      updateModels (datetime) {
        const at = new Date(datetime)
        this.models.fullYear = at.getFullYear()
        console.log(this.models.fullYear)
        this.models.month = at.getMonth()
        this.models.date = at.getDate()
        this.models.hours = at.getHours()
        this.models.minutes = at.getMinutes()
        this.models.seconds = at.getSeconds()
      },
      parseDoubleNumber (number) {
        return number < 10 ? '0' + number : number
      },
      checkSomeDate () {
        if (isLunarMonth(this.models.month) && this.models.date > 30) {
          this.models.date = 30
        }

        // 平年 2 月份
        if (!isLeapYear(this.models.fullYear) &&
          isFebruary(this.models.month) && this.models.date > 28) {
          this.models.date = 28
        }

        // 闰年 2 月份
        if (isLeapYear(this.models.fullYear) &&
          isFebruary(this.models.month) && this.models.date > 29) {
          this.models.date = 29
        }
      }
    },
    watch: {
      datetime (newValue) {
        this.updateModels(newValue)
      },
      'models.fullYear' () {
        this.checkSomeDate()
      },
      'models.month' () {
        this.checkSomeDate()
      }
    },
    computed: {
      fullYearOptions () {
        const options = []

        for (let i = 1970; i <= 2050; i++) {
          options.push({ label: i + '年', value: i })
        }

        return options
      },
      monthOptions () {
        const options = []

        for (let i = 0; i <= 11; i++) {
          options.push({ label: (i + 1) + '月', value: i })
        }

        return options
      },
      dateOptions () {
        const options = []
        // 默认大月份
        let max = 31

        // 小月份
        if (isLunarMonth(this.models.month)) {
          max = 30
        }

        // 平年 2 月
        if (!isLeapYear(this.models.fullYear) && isFebruary(this.models.month)) {
          max = 28
        }

        // 闰年 2 月
        if (isLeapYear(this.models.fullYear) && isFebruary(this.models.month)) {
          max = 29
        }

        for (let i = 1; i <= max; i++) {
          options.push({ label: i + ' 日', value: i })
        }

        return options
      },
      hoursOptions () {
        const options = []

        for (let i = 0; i <= 23; i++) {
          options.push({ label: this.parseDoubleNumber(i), value: i })
        }

        return options
      },
      minutesOptions () {
        const options = []

        for (let i = 0; i <= 59; i++) {
          options.push({ label: this.parseDoubleNumber(i), value: i })
        }

        return options
      },
      secondsOptions () {
        const options = []

        for (let i = 0; i <= 59; i++) {
          options.push({ label: this.parseDoubleNumber(i), value: i })
        }

        return options
      }
    },
    mounted () {
      this.updateModels(this.datetime)
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
    flex: 1 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    > select {
      border: none;
      background: transparent;
      font-size: 1.5rem;
      font-weight: 300;
      appearance: none;
    }
  }
</style>
