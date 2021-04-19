import Base from '@/components/disclosure/Base.vue';
import Row from '@/components/disclosure/Row.vue';
import Table from '@/components/disclosure/Table.vue';
import Logo from '@/components/disclosure/Logo.vue';
import Name from '@/components/disclosure/Name.vue';
import Title from '@/components/disclosure/Title.vue';
import Price from '@/components/disclosure/Price.vue';
import Change from '@/components/disclosure/Change.vue';
import Date from '@/components/disclosure/Date.vue';

export default {
  title : 'table Components/Disclosure',
  component : Base,

}
const DISCLOSURE_DATA = require('@/assets/data/disclosure.json')
console.log(DISCLOSURE_DATA )
const DISCLOSURE_ITEM = DISCLOSURE_DATA[1]
const LOGO = DISCLOSURE_ITEM.logos['64']
const NAME = DISCLOSURE_ITEM.slug
const TITLE = DISCLOSURE_ITEM.title
const PRICE = DISCLOSURE_ITEM.current_price
const CHANGE = DISCLOSURE_ITEM.percent_change
const DATE = DISCLOSURE_ITEM.timestamp

console.log(CHANGE)
export const logo = (arg, {argTypes}) => ({
  components: {Logo},
  props: Object.keys(argTypes),
  template: `<Logo v-bind="$props"/>`,
});
export const name = (arg, {argTypes}) => ({
  components: {Name},
  props: Object.keys(argTypes),
  template: `<Name v-bind="$props"/>`,
});
export const title = (arg, {argTypes}) => ({
  components: {Title},
  props: Object.keys(argTypes),
  template: `<Title v-bind="$props"/>`,
});
export const price = (arg, {argTypes}) => ({
  components: {Price},
  props: Object.keys(argTypes),
  template: `<Price v-bind="$props"/>`,
});
export const change = (arg, {argTypes}) => ({
  components: {Change},
  props: Object.keys(argTypes),
  template: `<Change v-bind="$props"/>`,
});
export const date = (arg, {argTypes}) => ({
  components: {Date},
  props: Object.keys(argTypes),
  template: `<Date v-bind="$props"/>`,
});


logo.args = {
  projectLogo: `${LOGO}`
}
name.args = {
  projectName: `${NAME}`
}
title.args = {
  projectTitle: `${TITLE}`
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

// export const row = (arg, {argTypes}) => ({
//   components: {Table},
//   props: Object.keys(argTypes),
//   template: `<x-row columns="4">
//   <x-logo></x-logo>
//   <x-name></x-name>
//   <x-title></x-title>
//   <x-price></x-price>
//   <x-change></x-change>
//   <x-date></x-date>
//   </x-row>`,
// });
//
//
// export const table = (arg, {argTypes}) => ({
//   components: {Table},
//   props: Object.keys(argTypes),
//   template: `<x-table rows="8" columns="6">
//     <x-row v-for="i in disclosureList">
//       <x-logo></x-logo>
//       <x-name></x-name>
//       <x-title></x-title>
//       <x-price></x-price>
//       <x-change></x-change>
//       <x-date></x-date>
//     </x-row>
//   </x-table>`,
// });
