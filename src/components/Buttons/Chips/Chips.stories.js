import Chip from './Chip.vue';

export default {
  title: 'Example/Chips',
  component: Chip,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Chip },
  template: '<chip @onClick="onClick" v-bind="$props" />',
});

export const Test = Template.bind({});
Test.args = {
  label: 'Test',
};
