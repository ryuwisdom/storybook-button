import BonnieButton from '@/components/buttons/BonnieButton.vue';
import BonnieIcon from '@/components/buttons/BonnieIcon.vue';


export default {
  component: BonnieButton,
  title: 'components/ButtonGroup',
}

export const bonnie_button = (arg, {argTypes}) => ({
  components : {BonnieButton},
  props: Object.keys(argTypes),
  template: '<bonnie-button v-bind="$props">text</bonnie-button>'

})

export const bonnie_icon = (arg, {argTypes}) => ({
  components : {BonnieButton, BonnieIcon},
  props: Object.keys(argTypes),
  template: '<bonnie-button v-bind="$props"><bonnie-icon/></bonnie-button>'
})

export const bonnie_combination = (arg, {argTypes}) => ({
  components : {BonnieButton, BonnieIcon},
  props: Object.keys(argTypes),
  template:`
    <bonnie-button v-bind="$props">
    <bonnie-icon>pets</bonnie-icon>
    <bonnie-icon>done</bonnie-icon>
    <bonnie-icon>note</bonnie-icon>
    </bonnie-button>
    `
})



// 요구사항 정의

// BonnieButton(v-btn)과 BonnieIcon(v-icon) 컴포넌트 생성

// BonnieButton(v-btn) 기능
// props값으로 style 속성 조절할 수 있도록

// BonnieIcon(v-icon) 기능
// <template>{{name}}</template>
// name material Design Icon tag(ex- <span class="material-icons-outlined">pets</span>)를 값으로 받아 렌더

// 실제 적용시 vuetify처럼 조합이 가능하게
