import Textareas from './Textarea';

export default {
  title: 'CRM/Input/Textarea',
  excludeStories: /.*Data$/,
};

const Template = ( args, { argTypes } ) => ( {
  props: Object.keys( Textareas ),
  components: { Textareas },
  template: '<textareas />',
} );

export const Default = Template.bind( {} );
// Default.args = textareaData;

// export const withPic = Template.bind( {} );
// withPic.args = Object.assign( {}, inputData, { pic: true } );
