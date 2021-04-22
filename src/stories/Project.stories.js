/*
1. projectList.json에는 프로젝트 기본 정보가 있습니다. sparklineList.json에는 프로젝트의 로고와 스파크라인을 있으며 slug을 통해 2개의 데이터를 조인하여 테이블을 구성합니다.
2. 로고, 가격, 변동율 등은 기존에 만들었던 컴퍼넌트를 재활용해보세요. 모두 USD 기준으로 처리합니다.
3. 마켓캡과 거래량은 @crossangle/decimal-standards 이것을 통해 처리해주세요.
4. 표시되는 필드는 로고, 프로젝트 이름, 가격, 1시간, 24시간, 7일 변동율, 마켓캡, 거래량, 스파트라인 순입니다.
5. 프로젝트 이름을 입력할 수 있는 입력창을 하나 만들고 검색 버튼을 만들어 해당되는 조건에 대해 필터링이 될 수 있도록 해주세요.
*/

import Base from '@/components/disclosure/Base.vue';
import XLogo from '@/components/disclosure/XLogo.vue';
import XName from '@/components/disclosure/XName.vue';
import XPrice from '@/components/disclosure/XPrice.vue';
import XChange from '@/components/disclosure/XChange.vue';
import XMarketCap from '@/components/project/XMarketCap.vue';
import XVolume from '@/components/project/XVolume.vue';
import XSearchInput from '@/components/project/XSearchInput.vue'
import XSparkLine from '@/components/project/XSparkLine.vue'
import XRow from '@/components/project/XRow.vue';
import XTable from '@/components/project/XTable.vue';

export default {
  title: 'project/bonnie project',
  component: Base,
};

const PROJECT_LIST_DATA = require('@/assets/data/projectList.json');
const SPARKLINE_LIST_DATA = require('@/assets/data/sparklineList.json');
const PROJECT_ITEM = PROJECT_LIST_DATA[0];
const NAME = PROJECT_ITEM.slug;
const LOGO = SPARKLINE_LIST_DATA[`${NAME}`].logo;
const PRICE = PROJECT_ITEM.current_price.USD;
const CHANGE_1H = PROJECT_ITEM.percent_change_1h.USD;
const CHANGE_24H = PROJECT_ITEM.percent_change_24h.USD;
const CHANGE_7D = PROJECT_ITEM.percent_change_7d.USD;
const MARKET_CAP = PROJECT_ITEM.market_cap.USD;
const VOLUME = PROJECT_ITEM.volume_24h.USD
const SPARKLINE = SPARKLINE_LIST_DATA[`${NAME}`].url;

// console.log(
//   LOGO,
//   NAME,
//   PRICE,
//   CHANGE_1H,
//   CHANGE_24H,
//   CHANGE_7D,
//   MARKET_CAP,
//   VOLUME,
//   SPARKLINE,
// );

export const logo = (arg, {argTypes}) => ({
  components: {XLogo},
  props: Object.keys(argTypes),
  template: `
    <x-logo v-bind="$props"/>`,
});
export const name = (arg, {argTypes}) => ({
  components: {XName},
  props: Object.keys(argTypes),
  template: `
    <x-name v-bind="$props"/>`,
});

export const price = (arg, {argTypes}) => ({
  components: {XPrice},
  props: Object.keys(argTypes),
  template: `
    <x-price v-bind="$props"/>`,
});

export const change = (arg, {argTypes}) => ({
  components: {XChange},
  props: Object.keys(argTypes),
  template: `
    <div>
    <x-change v-bind="$props"/>
    </div>`,
});
export const marketCap = (arg, {argTypes}) => ({
  components: {XMarketCap},
  props: Object.keys(argTypes),
  template: `
    <div>
    <x-market-cap v-bind="$props"/>
    </div>
  `,
});
export const volume = (arg, {argTypes}) => ({
  components: {XVolume},
  props: Object.keys(argTypes),
  template: `
    <div>
    <x-volume v-bind="$props"/>
    </div>`,
});
export const sparkLine = (arg, {argTypes}) => ({
  components: {XSparkLine},
  props: Object.keys(argTypes),
  template: `
    <x-spark-line v-bind="$props"/>`,
});

export const row = (arg, {argTypes}) => ({
  components: {XRow},
  props: Object.keys(argTypes),
  template: `
    <x-row :item="$props"/>`,
});

export const search_input = (arg, {argTypes}) => ({
  components: {XSearchInput},
  props: Object.keys(argTypes),
  template: `
    <x-search-input :item="$props"/>`,
});

logo.args = {
  projectLogo: `${LOGO}`,
};
name.args = {
  projectName: `${NAME}`,
};
price.args = {
  projectPrice: PRICE,
};
change.args = {
  projectChange: 0
};
marketCap.args = {
  projectMarketCap: MARKET_CAP
};
volume.args = {
  projectVolume: VOLUME
};

sparkLine.args = {
  sparkLineImage: `${SPARKLINE}`,
  dataList: PROJECT_LIST_DATA,
};
row.args = {
  logo: SPARKLINE_LIST_DATA[`${NAME}`].logo,
  name: PROJECT_ITEM.slug,
  current_price: PROJECT_ITEM.current_price,
  percent_change_1h: PROJECT_ITEM.percent_change_1h,
  percent_change_24h: PROJECT_ITEM.percent_change_24h,
  percent_change_7d: PROJECT_ITEM.percent_change_7d,
  market_cap: PROJECT_ITEM.market_cap,
  volume_24h: PROJECT_ITEM.volume_24h,
  sparkline: SPARKLINE_LIST_DATA[`${NAME}`].url
};

search_input.args = {
  projectName: `${NAME}`,
  dataList : PROJECT_LIST_DATA

}

export const table = (arg, {argTypes}) => ({
  components: {
    XTable,
    XRow,
    XLogo,
    XName,
    XPrice,
    XChange,
    XVolume,
    XMarketCap,
    XSparkLine,
  },
  props: Object.keys(argTypes),
  template: `
    <x-table v-bind="$props"></x-table>`
})

table.args = {
  dataList: PROJECT_LIST_DATA,

}

import ProjectView from '@/views/ProjectView.vue';

export const project_view = (arg, {argTypes})=> ({
  components : {ProjectView},
  props: Object.keys(argTypes),
  template : `
  <project-view v-bind="$props"></project-view>
  `
})

project_view.args = {
  dataList : PROJECT_LIST_DATA,
  imageItems : SPARKLINE_LIST_DATA
}



