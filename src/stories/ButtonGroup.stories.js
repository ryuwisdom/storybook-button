import BonnieButton from '@/components/buttons/BonnieButton.vue';
import BonnieIcon from '@/components/buttons/BonnieIcon.vue';

export default {
  component: BonnieButton,
  title: 'components/ButtonGroup',
  parameters: {
    backgrounds: {
      values: [
        { name: 'white', value: '#ffffff' },
        { name: 'Xangle background color', value: '#dde1e6' },
        { name: 'dark mode', value: '#1e2637' },
      ],
    },
  },
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'regular', 'large'] },
    },
  },
};

export const bonnie_button = (arg, { argTypes }) => ({
  components: { BonnieButton },
  props: Object.keys(argTypes),
  template: ` <div class="button-container">
  <bonnie-button v-bind="$props"></bonnie-button>
  <bonnie-button v-bind="$props" outline="purple"></bonnie-button>
  <bonnie-button v-bind="$props" outline="gray"></bonnie-button>
  <bonnie-button v-bind="$props" outline="white"></bonnie-button>
  </div>
  `,
});

export const bonnie_icon = (arg, { argTypes }) => ({
  components: { BonnieButton, BonnieIcon },
  props: Object.keys(argTypes),
  template: `
    <div class="button-container">
     <bonnie-button v-bind="$props"> 
    <bonnie-icon></bonnie-icon>
    </bonnie-button> 
    </div>`,
});

export const bonnie_combination = (arg, { argTypes }) => ({
  components: { BonnieButton, BonnieIcon },
  props: Object.keys(argTypes),
  template: `
  <div class="button-container">
    <bonnie-button v-bind="$props">
    <bonnie-icon></bonnie-icon>
    </bonnie-button>
    </div>
    `,
});

bonnie_button.args = {
  primary: true,
  label: 'Button',
  backgroundColor: '#524fde',
};
bonnie_icon.args = {
  primary: true,
  iconName: 'home',
  // color: 'yellow',
  backgroundColor: '#524fde',
};
bonnie_combination.args = {
  primary: true,
  label: 'Button',
  iconName: 'poll',
  // color: 'yellow',
  backgroundColor: '#524fde',
};
