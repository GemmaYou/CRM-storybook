import Checkbox from './Checkbox';

export default {
  title: 'CRM/CheckboxAndRadio/Checkbox',
  excludeStories: /.*Data$/,
};

export const checkboxData = {
  label: 'checkbox',
  checked: false,
  disabled: false,
};

const Template = ( args, { argTypes } ) => ( {
  props: Object.keys( argTypes ),
  components: { Checkbox },
  template: '<checkbox :checkbox="$props" />',
} );

export const Enable = Template.bind( {} );
Enable.args = checkboxData;

export const Disable = Template.bind( {} );
Disable.args = Object.assign( {}, checkboxData, { disabled: true } );

