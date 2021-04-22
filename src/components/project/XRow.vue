<template>
  <div class="row-content">
    <x-logo :project-logo="item.logo"></x-logo>
    <x-name :project-name="item.name"></x-name>
    <x-price :project-price="item.current_price.USD"></x-price>
    <x-change :project-change="item.percent_change_1h.USD"></x-change>
    <x-change :project-change="item.percent_change_24h.USD"></x-change>
    <x-change :project-change="item.percent_change_7d.USD"></x-change>
    <x-market-cap :project-market-cap="item.market_cap.USD"></x-market-cap>
    <x-volume :project-volume="item.volume_24h.USD"></x-volume>
    <x-spark-line :spark-line-image="item.sparkline"></x-spark-line>
  </div>
</template>

<script>
import XLogo from '@/components/disclosure/XLogo.vue';
import XName from '@/components/disclosure/XName.vue';
import XPrice from '@/components/disclosure/XPrice.vue';
import XChange from '@/components/disclosure/XChange.vue';
import XMarketCap from '@/components/project/XMarketCap.vue'
import XVolume from "@/components/project/XVolume";
import XSparkLine from '@/components/project/XSparkLine.vue'

export default {
  name: 'row',
  components: {XVolume, XMarketCap, XName, XLogo, XPrice, XChange, XSparkLine},
  props: {
    item: {
      type: Object,
      default: () => ({
        current_price: {USD: 0}, percent_change_1h: {USD: 0}, percent_change_24h: {USD: 0},
        percent_change_7d: {USD: 0}, market_cap: {USD: 0}, volume_24h: {USD: 0}
      }),
    }
  },

  created() {
    // console.log(this.item);
  },
};
</script>
<style lang="scss" scoped>
.row-content {
  width: 600px;
  height: 47px;
  padding: 0px 12px;
  display: flex;
  align-items: center;
  border: 1px solid #dfdfdf;
}
</style>
