import Tag from './Label';

export default {
  title: 'CRM/Label/OnlyWords',
  excludeStories: /.*Data$/,
  argTypes: {
    backgroundColor: {
      control: { type: 'color' }
    },
  },
};

export const labelData = {
  label: 'label',
};

const Template = ( args, { argTypes } ) => ( {
  props: Object.keys( argTypes ),
  components: { Tag },
  template: '<tag :tag="$props" />',
} );

export const Default = Template.bind( {} );
Default.args = labelData;

// export const ClickedTab = Template.bind( {} );
// ClickedTab.args = Object.assign( {}, labelData, { onClick: true } );
