import Chip from './Chip.vue';

export default {
  title: 'CRM/Button/Chips',
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

export const Default = Template.bind({});
Default.args = {
  label: 'Test',
};
