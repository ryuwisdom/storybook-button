import Base from '@/components/disclosure/Base.vue';
import XRow from '@/components/disclosure/XRow.vue';
import XTable from '@/components/disclosure/XTable.vue';
import XLogo from '@/components/disclosure/XLogo.vue';
import XName from '@/components/disclosure/XName.vue';
import XTitle from '@/components/disclosure/XTitle.vue';
import XPrice from '@/components/disclosure/XPrice.vue';
import XChange from '@/components/disclosure/XChange.vue';
import XDate from '@/components/disclosure/XDate.vue';


export default {
  title: 'table Components/Disclosure',
  component: Base,

}
const DISCLOSURE_DATA = require('@/assets/data/disclosure.json')
const DISCLOSURE_ITEM = DISCLOSURE_DATA[0]
const LOGO = DISCLOSURE_ITEM.logos['64']
const NAME = DISCLOSURE_ITEM.slug
const _TITLE = DISCLOSURE_ITEM.title
const PRICE = DISCLOSURE_ITEM.current_price
const CHANGE = DISCLOSURE_ITEM.percent_change
const DATE = DISCLOSURE_ITEM.timestamp

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
export const title = (arg, {argTypes}) => ({
  components: {XTitle},
  props: Object.keys(argTypes),
  template: `
    <x-title v-bind="$props"/>`,
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
    <x-change v-bind="$props"/>`,
});
export const date = (arg, {argTypes}) => ({
  components: {XDate},
  props: Object.keys(argTypes),
  template: `
    <x-date v-bind="$props"/>`,
});


export const row = (arg, {argTypes}) => ({
  components: {XRow},
  props: Object.keys(argTypes),
  template: `
    <x-row :item="$props.item">
    </x-row>`,
});



logo.args = {
  projectLogo: `${LOGO}`
}
name.args = {
  projectName: `${NAME}`
}
title.args = {
  projectTitle: `${_TITLE}`,
}
price.args = {
  projectPrice: PRICE
}
change.args = {
  projectChange: CHANGE
}
date.args = {
  projectDate: DATE
}
row.args = {
  item: DISCLOSURE_ITEM
}
export const table = (arg, {argTypes}) => ({
  components: {XTable, XRow, XLogo, XName, XTitle, XPrice, XChange, XDate},
  props: Object.keys(argTypes),
  template: `
    <x-table v-bind="$props">
    </x-table>
    `,
});

table.args = {
  dataList: DISCLOSURE_DATA,
  rows: 8,
  page: 0
}

import XDisclosure from "@/views/Disclosure"

export const disclosure = (arg, {argTypes}) => ({
  components: {XDisclosure},
  props: Object.keys(argTypes),
  template: `
    <x-disclosure v-bind="$props">
    </x-disclosure>
    `,
});
disclosure.args = {
  dataList: DISCLOSURE_DATA,
}
