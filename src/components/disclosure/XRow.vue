<template>
  <div class="row-content">
    <x-logo :project-logo="item.logos['64']"></x-logo>
    <x-name :project-name="item.slug"></x-name>
    <x-title :project-title="item.title"></x-title>
    <x-price :project-price="item.current_price"></x-price>
    <x-change :project-change="item.percent_change"></x-change>
    <x-date :project-date="item.timestamp"></x-date>
  </div>
</template>

<script>
import XLogo from '@/components/disclosure/XLogo.vue';
import XName from '@/components/disclosure/XName.vue';
import XTitle from '@/components/disclosure/XTitle.vue';
import XPrice from '@/components/disclosure/XPrice.vue';
import XChange from '@/components/disclosure/XChange.vue';
import XDate from '@/components/disclosure/XDate.vue';

export default {
  name: 'row',
  components: {XLogo, XName, XTitle, XPrice, XChange, XDate},
  props:{
    item: {
      type: Object,
      default: () => {},
    },
  },

  created() {
    // console.log(this.item)
  }
}
</script>
<style lang="scss" scoped>
.row-content {
  width: 700px;
  height: 47px;
  padding: 0px 12px;
  display: flex;
  align-items: center;
  border: 1px solid #dfdfdf ;
  //border-bottom: 1px solid #dfdfdf ;

}
</style>
