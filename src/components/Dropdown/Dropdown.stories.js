import { action } from "@storybook/addon-actions";
import Dropdown from './Dropdown';

export default {
  title: 'CRM/Dropdown',
  excludeStories: /.*Data$/,
  argTypes: {
    backgroundColor: {
      control: { type: 'color' }
    },
  },
};

export const actionsData = {
  changeSelect: action( "changeSelect" ),
};

export const dropdownData = {
  title: '顯示筆數',
  options: [10, 20, 30, 40],
};

const Template = ( args, { argTypes } ) => ( {
  props: Object.keys( argTypes ),
  components: { Dropdown },
  template: '<dropdown :dropdown="$props" @changeSelect="changeSelect"/>',
  methods: actionsData,
} );

export const Default = Template.bind( {} );
Default.args = dropdownData;
