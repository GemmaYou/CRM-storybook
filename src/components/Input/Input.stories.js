import InputText from './Input';

export default {
  title: 'CRM/Input/Input-text',
  excludeStories: /.*Data$/,
};

export const inputData = {
  placeholder: '請輸入',
};

const Template = ( args, { argTypes } ) => ( {
  props: Object.keys( argTypes ),
  components: { InputText },
  template: '<inputText :inputText="$props" />',
} );

export const Default = Template.bind( {} );
Default.args = inputData;

// export const withPic = Template.bind( {} );
// withPic.args = Object.assign( {}, inputData, { pic: true } );
