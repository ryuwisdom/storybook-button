import TextButton from '@/components/button/TextButton.vue';
import IconButton from '@/components/button/IconButton.vue';
import IconTextButton from '@/components/button/IconTextButton.vue';

export default {
  title: 'Bonnie/Button',
  component: TextButton,
  parameters: {
    backgrounds: {
      values: [
        {name: 'white', value: '#ffffff'},
        {name: 'Xangle background color', value: '#dde1e6'},
        {name: 'dark mode', value: '#1e2637'},
      ]
    }
  },
  argTypes: {
    backgroundColor: {control: 'color'},
    size: {
      control: {type: 'select', options: ['small', 'regular', 'large']},
    },
  },
};


export const text_button = (args, {argTypes}) => ({
  components: {TextButton},
  props: Object.keys(argTypes),
  template: `<div class="button-container">
    <text-button v-bind="$props" />
    <text-button v-bind="$props" outline="purple" />
    <text-button v-bind="$props" outline="gray"/>
    <text-button v-bind="$props" outline="white"/>
    </div>`,
});


export const icon_button = (args, {argTypes}) => ({
  components: {IconButton},
  props: Object.keys(argTypes),
  template: `<div class="button-container">
  <icon-button v-bind="$props" icon="left"/>
  <icon-button v-bind="$props" icon="right"/>
  <icon-button v-bind="$props" icon="chart"/>
  </div>`,
});


export const icon_text_button = (args, {argTypes}) => ({
  components: {IconTextButton},
  props: Object.keys(argTypes),
  template: '<icon-text-button v-bind="$props" />',
});


text_button.args = {
  primary: true,
  label: 'Button',
};

icon_button.args = {
  primary: true,
  backgroundColor: '#ffffff',
  darkMode: false,
};

icon_text_button.args = {
  primary: true,
  label: '크앵크앵',
};


