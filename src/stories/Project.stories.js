import Base from '@/components/disclosure/Base.vue';
import XLogo from '@/components/disclosure/XLogo.vue';
import XName from '@/components/disclosure/XName.vue';
import XPrice from '@/components/disclosure/XPrice.vue';
import XChange from '@/components/disclosure/XChange.vue';
// import XMarketCap from '@/components/project/XMarketCap.vue'
// import XSearchInput from '@/components/project/XSearchInput.vue'
// import XSpartLine from '@/components/project/XSpartLine.vue'
// import XRow from '@/components/project/XRow.vue';
// import XTable from '@/components/project/XTable.vue';

export default {
  title: 'project/bonnie project',
  component: Base,
};

const PROJECT_LIST_DATA = require('@/assets/data/projectList.json');
const SPARTLINE_LIST_DATA = require('@/assets/data/sparklineList.json');
const PROJECT_ITEM = PROJECT_LIST_DATA[0];
const NAME = PROJECT_ITEM.slug;
const LOGO = SPARTLINE_LIST_DATA[`${NAME}`].logo;
const PRICE = PROJECT_ITEM.current_price.USD;
const CHANGE_1H = PROJECT_ITEM.percent_change_1h.USD;
const CHANGE_24H = PROJECT_ITEM.percent_change_24h.USD;
const CHANGE_7D = PROJECT_ITEM.percent_change_7d.USD;
const MARKET_CAP = PROJECT_ITEM.market_cap.USD;
const SPART_LINE = SPARTLINE_LIST_DATA[`${NAME}`].url;

console.log(PROJECT_ITEM);
console.log(
  LOGO,
  NAME,
  PRICE,
  CHANGE_1H,
  CHANGE_24H,
  CHANGE_7D,
  MARKET_CAP,
  SPART_LINE
);

export const logo = (arg, { argTypes }) => ({
  components: { XLogo },
  props: Object.keys(argTypes),
  template: `
    <x-logo v-bind="$props"/>`,
});
export const name = (arg, { argTypes }) => ({
  components: { XName },
  props: Object.keys(argTypes),
  template: `
    <x-name v-bind="$props"/>`,
});
logo.args = {
  projectLogo: `${LOGO}`,
};
name.args = {
  projectName: `${NAME}`,
};
export const price = (arg, { argTypes }) => ({
  components: { XPrice },
  props: Object.keys(argTypes),
  template: `
    <x-price v-bind="$props"/>`,
});
price.args = {
  projectPrice: PRICE,
};
// export const change = (arg, { argTypes }) => ({
//   components: { XChange },
//   props: Object.keys(argTypes),
//   template: `
//   <div>
//     <x-change v-bind="$props" standard="1H"/>
//     <x-change v-bind="$props" standard="24H"/>
//     <x-change v-bind="$props" standard="7D"/>
//     </div>`,
// });
