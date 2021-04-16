import BaseButton from '@/components/button/BaseButton.vue';
import TextButton from '@/components/button/TextButton.vue';
import IconButton from '@/components/button/IconButton.vue';
import IconTextButton from '@/components/button/IconTextButton.vue';

export default {
  title: 'CrossAngle/Button',
  component: BaseButton,
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
    size: {
      control: {type: 'select', options: ['small','regular', 'large']},
    },
  },
};


export const text_button = (args, {argTypes}) => ({
  components: {TextButton},
  props: Object.keys(argTypes),
  template: `
    <div class="button-container">
    <text-button v-bind="$props"/>
    <text-button v-bind="$props" outline="purple"/>
    <text-button v-bind="$props" outline="gray"/>
    <text-button v-bind="$props" outline="white"/>
    </div>`,
});


export const icon_button = (args, {argTypes}) => ({
  components: {IconButton},
  props: Object.keys(argTypes),
  template: `
    <div class="button-container">
    <icon-button v-bind="$props" icon="chart"/>
    </div>`,
});


export const icon_text_button = (args, {argTypes}) => ({
  components: {IconTextButton},
  props: Object.keys(argTypes),
  template: `
    <div class="button-container">
    <icon-text-button v-bind="$props" icon="chart"/>
    <icon-text-button v-bind="$props" outline="purple" icon="chart"/>
    <icon-text-button v-bind="$props" outline="gray" icon="chart"/>
    <icon-text-button v-bind="$props" outline="white" icon="chart"/>
    </div>`,
});

export const buttons = (args, {argTypes}) => ({
  components: {IconTextButton},
  props: Object.keys(argTypes),
  template: `
    <div class="button-container">
    <text-button v-bind="$props" outline="white">
      <icon-button v-bind="$props" icon="chart"/>
      </text-button>
    </div>`,

});


text_button.args = {
  primary: true,
  label: 'Button',
  backgroundColor: '#524fde',
};

icon_button.args = {
  primary: true,
  darkMode: false,
  outlined: true,
};

icon_text_button.args = {
  primary: true,
  label: 'Button',
  backgroundColor: '#524fde'
};
buttons.args = {
  primary: true,
  label: 'Button',
  backgroundColor: '#524fde'
};


