import TextButton from '@/components/TextButton.vue';
import IconButton from '@/components/IconButton.vue';
import IconTextButton from '@/components/IconTextButton.vue';

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
      control: {type: 'select', options: ['small', 'medium', 'large']},
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
  template: '<icon-button v-bind="$props" />',
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
  iconSize: false,
  //label: 'Bonnie',
};

icon_text_button.args = {
  primary: true,
  label: '크앵크앵',
};


