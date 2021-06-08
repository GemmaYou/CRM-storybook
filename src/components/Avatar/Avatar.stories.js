import Avatar from './Avatar';

export default {
  title: 'CRM/Avatar/Avatar',
  excludeStories: /.*Data$/,
  argTypes: {
    backgroundColor: {
      control: { type: 'color' }
    },
  },
};

export const labelData = {
  pic: 'label',
};

const Template = ( args, { argTypes } ) => ( {
  props: Object.keys( argTypes ),
  components: { Avatar },
  template: '<avatar :avatar="$props" />',
} );

export const Default = Template.bind( {} );
Default.args = labelData;

// export const ClickedTab = Template.bind( {} );
// ClickedTab.args = Object.assign( {}, labelData, { onClick: true } );
