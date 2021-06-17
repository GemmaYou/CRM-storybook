import IconTag from './IconTag';

export default {
  title: 'CRM/Label/WithIcon',
  excludeStories: /.*Data$/,
  argTypes: {
    backgroundColor: {
      control: { type: 'color' }
    },
  },
};

export const iconTagData = {
  label: 'label',
};

const Template = ( args, { argTypes } ) => ( {
  props: Object.keys( argTypes ),
  components: { IconTag },
  template: '<iconTag :iconTag="$props" />',
} );

export const Default = Template.bind( {} );
Default.args = iconTagData;

// export const ClickedTab = Template.bind( {} );
// ClickedTab.args = Object.assign( {}, labelData, { onClick: true } );
