<template>
  <transition :name="transition || 'has-slide-in-bottom'">
    <div class="mn-datetime" v-if="visible" :style="{ zIndex }">
      <mn-card class="has-none-margin-bottom" :theme="theme" rounded>
        <mn-card-item>
          <mn-card-body>
            <p class="mn-datetime-time" v-if="showHours">{{ formatTime(currentAt) }}</p>
            <p class="mn-datetime-date" v-if="showDate">{{ formatDate(currentAt) }}</p>
          </mn-card-body>
          <mn-card-suffix>
            {{ title }}
          </mn-card-suffix>
        </mn-card-item>
        <mn-card-item style="height: 91px;">
          <mn-card-body>
            <div class="mn-datetime-input">
              <div class="mn-datetime-item" v-if="showDate">
                <select v-model="models.fullYear">
                  <option :value="option.value" v-for="option in fullYearOptions">{{ option.label }}</option>
                </select>
              </div>
              <div class="mn-datetime-item" v-if="showDate">
                <select v-model="models.month">
                  <option :value="option.value" v-for="option in monthOptions">{{ option.label }}</option>
                </select>
              </div>
              <div class="mn-datetime-item" v-if="showDate">
                <select v-model="models.date">
                  <option :value="option.value" v-for="option in dateOptions">{{ option.label }}</option>
                </select>
              </div>
              <div class="mn-datetime-item" v-if="showHours">
                <select v-model="models.hours">
                  <option :value="option.value" v-for="option in hoursOptions">{{ option.label }}</option>
                </select>
              </div>
              <div v-if="showHours && showMintues">:</div>
              <div class="mn-datetime-item" v-if="showHours && showMintues">
                <select v-model="models.minutes">
                  <option :value="option.value" v-for="option in minutesOptions">{{ option.label }}</option>
                </select>
              </div>
              <div v-if="showHours && showMintues && showSeconds">:</div>
              <div class="mn-datetime-item" v-if="showHours && showMintues && showSeconds">
                <select v-model="models.seconds">
                  <option :value="option.value" v-for="option in secondsOptions">{{ option.label }}</option>
                </select>
              </div>
            </div>
          </mn-card-body>
        </mn-card-item>
        <mn-card-btns type="column">
          <button class="has-red-text" @click="onCancel">{{ cancelText }}</button>
          <button class="has-blue-text" @click="onConfirm">{{ confirmText }}</button>
        </mn-card-btns>
      </mn-card>
    </div>
  </transition>
</template>

<script>
  import Element from '../../utils/Element'
  import Message from '../../utils/Message'
  import layerMixin from '../layer/layerMixin'
  import shadeMixin from '../layer/shadeMixin'
  import card from '../card/card'
  import cardItem from '../card/cardItem'
  import cardBody from '../card/cardBody'
  import cardPrefix from '../card/cardPrefix'
  import cardSuffix from '../card/cardSuffix'
  import cardBtns from '../card/cardBtns'
  import {
    isLunarMonth,
    isLeapYear,
    isFebruary,
    formatDoubleNumber,
    parseDatetime } from './dateChecker'
  import options from './options'

  export default new Element({
    name: 'mn-datetime',
    components: {
      ...card.insert(),
      ...cardItem.insert(),
      ...cardBody.insert(),
      ...cardPrefix.insert(),
      ...cardSuffix.insert(),
      ...cardBtns.insert()
    },
    mixins: [
      layerMixin,
      shadeMixin,
      options
    ],
    props: {
      theme: String,
      default: {
        type: [String, Date, Object],
        default () { return new Date() }
      },
      min: {
        type: [String, Date, Object],
        default: '1970-01-01 00:00:00'
      },
      max: {
        type: [String, Date, Object],
        default: '2049-12-31 23:59:59'
      },
      title: {
        type: String,
        default () { return this.$t('mn.datetime.title') }
      },
      cancelText: {
        type: String,
        default () { return this.$t('mn.popup.cancelText') }
      },
      confirmText: {
        type: String,
        default () { return this.$t('mn.popup.confirmText') }
      },
      smallerText: {
        type: String,
        default () { return this.$t('mn.datetime.smallerText') }
      },
      biggerText: {
        type: String,
        default () { return this.$t('mn.datetime.biggerText') }
      },
      showDate: {
        type: Boolean,
        default: true
      },
      showHours: {
        type: Boolean,
        default: true
      },
      showMintues: {
        type: Boolean,
        default: true
      },
      showSeconds: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        currentAt: undefined, // 初始开始时间
        minAt: undefined,
        maxAt: undefined,
        models: {
          fullYear: 2017,
          month: 0,
          date: 1,
          hours: 0,
          minutes: 0,
          seconds: 0
        }
      }
    },
    computed: {
      isDateType () {
        return this.showDate && !this.showHours
      },

      isTimeType () {
        return !this.showDate && this.showHours
      }
    },
    methods: {
      onClosePopup  () {
        this.onCancel()
      },

      onCancel () {
        this.emit('cancel')
      },

      onConfirm () {
        // 开始时间是否大于等于结束时间，则错误
        if (this.minAt > this.currentAt) {
          Message.create({ type: 'error', message: this.smallerText }).show()
          return
        }

        if (this.currentAt > this.maxAt) {
          Message.create({ type: 'error', message: this.biggerText }).show()
          return
        }

        this.emit('confirm')
      },

      emit (name) {
        this.hide()
        this.$emit(name, this.formatDisplay(this.currentAt), this.currentAt)
      },

      formatDisplay (at) {
        let displayDate = ''
        let displayTime = ''
        const fullYear = at.getFullYear()
        const month = at.getMonth() + 1
        const date = at.getDate()
        const hours = at.getHours()
        const minutes = at.getMinutes()
        const seconds = at.getSeconds()

        if (this.showDate) {
          displayDate = `${fullYear}-${formatDoubleNumber(month)}-${date}`
        }

        if (this.showDate && this.showHours) {
          displayDate += ' '
        }

        if (this.showHours) {
          displayTime += formatDoubleNumber(hours)
        }

        if (this.showHours && this.showMintues) {
          displayTime += ':'
          displayTime += formatDoubleNumber(minutes)
        }

        if (this.showHours && this.showMintues && this.showSeconds) {
          displayTime += ':'
          displayTime += formatDoubleNumber(seconds)
        }

        return displayDate + displayTime
      },

      formatTime (at) {
        const display = []
        const hours = formatDoubleNumber(at.getHours())
        const minutes = formatDoubleNumber(at.getMinutes())
        const seconds = formatDoubleNumber(at.getSeconds())

        if (this.showHours) {
          display.push(hours)
        }

        if (this.showHours && this.showMintues) {
          display.push(minutes)
        }

        if (this.showHours && this.showMintues && this.showSeconds) {
          display.push(seconds)
        }

        return display.join(':')
      },

      formatDate (at) {
        const month = this.$t(`mn.datetime.months.${at.getMonth()}`)
        const date = this.$t(`mn.datetime.dates.${at.getDate()}`)
        const week = this.$t(`mn.datetime.weeks.${at.getDay()}`)
        return `${at.getFullYear()} ${month}${date} ${week}`
      },

      updateModels (at) {
        this.models = {
          fullYear: at.getFullYear(),
          month: at.getMonth(),
          date: at.getDate(),
          hours: at.getHours(),
          minutes: at.getMinutes(),
          seconds: at.getSeconds()
        }
      },

      updateAt (models) {
        const at = new Date()
        at.setFullYear(models.fullYear)
        at.setMonth(models.month, models.date)
        at.setDate(models.date)
        at.setHours(models.hours)
        at.setMinutes(models.minutes)
        at.setSeconds(models.seconds)
        return at
      },

      checkSpecialDate () {
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
      },

      whenShadeCallHiding () {
        this.onCancel()
      }
    },
    watch: {
      models: {
        deep: true,
        handler (newValue) {
          this.checkSpecialDate()
          this.currentAt = this.updateAt(newValue)
        }
      }
    },
    created () {
      // if (!this.showMintues) {
      //   this.currentAt.setMinutes(0)
      // }
      //
      // if (!this.showSeconds) {
      //   this.currentAt.setSeconds(0)
      // }
      this.currentAt = parseDatetime(this.default)
      this.minAt = parseDatetime(this.min)
      this.maxAt = parseDatetime(this.max)

      this.updateModels(this.currentAt)
    }
  })
</script>

<style lang="scss">
  @import "../../scss/mixins/media";

  .mn-datetime {
    position: fixed;
    top: 50%;
    right: 0.5rem;
    left: 0.5rem;
    height: 240px;
    margin-top: -120px;

    @include min-screen(tablet) {
      width: 400px;
      right: auto;
      left: 50%;
      margin-left: -200px;
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
