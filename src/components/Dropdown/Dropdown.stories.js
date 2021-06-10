import Dropdown from './Dropdown';

export default {
  title: 'CRM/Dropdown/Dropdown',
  excludeStories: /.*Data$/,
  argTypes: {
    backgroundColor: {
      control: { type: 'color' }
    },
  },
};

export const dropdownData = {
  options: [10, 20, 30, 40],
};

const Template = ( args, { argTypes } ) => ( {
  props: Object.keys( argTypes ),
  components: { Dropdown },
  template: '<dropdown :dropdown="$props" />',
} );

export const Default = Template.bind( {} );
Default.args = dropdownData;
