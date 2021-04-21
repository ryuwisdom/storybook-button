<template>
  <div class="date-content">
    <span>{{ date }}</span>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: 'price',
  props: {
    projectDate: {
      type: String,
      required: true
    }
  },
  computed: {
    date() {
      return this.checkTime(this.projectDate)
    }
  },
  methods: {
    checkTime(date) {
      const currentTime = moment.utc(new Date()).local(),
            localTime = moment.utc(date).local()
      const cd = currentTime.format('MM-DD'),
            ld = localTime.format('MM-DD')
      return cd === ld ? localTime.format('HH:mm') : localTime.format('MM-DD')
    }
  }
}
</script>
<style lang="scss" scoped>
.date-content {
  width: 100px;
  font-size: 10px;
  font-weight: normal;
  color : #808996;
  text-align: right;
}
</style>
