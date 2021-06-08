import Radio from './Radio';

export default {
  title: 'CRM/CheckboxAndRadio/Radio',
  excludeStories: /.*Data$/,
};

export const radioData = {
  label: 'radio',
  checked: false,
  disabled: false,
};

const Template = ( args, { argTypes } ) => ( {
  props: Object.keys( argTypes ),
  components: { Radio },
  template: '<radio :radio="$props" />',
} );

export const Enable = Template.bind( {} );
Enable.args = radioData;

export const Disable = Template.bind( {} );
Disable.args = Object.assign( {}, radioData, { disabled: true } );

