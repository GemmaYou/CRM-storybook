import Tab from './Tab';

export default {
  title: 'CRM/Tab/Tab',
  excludeStories: /.*Data$/,
  argTypes: {
    backgroundColor: {
      control: { type: 'color' }
    },
  },
};

export const tabData = {
  label: 'tab',
  onClick: false,
};

const Template = ( args, { argTypes } ) => ( {
  props: Object.keys( argTypes ),
  components: { Tab },
  template: '<tab :tab="$props" />',
} );

export const Default = Template.bind( {} );
Default.args = tabData;

export const ClickedTab = Template.bind( {} );
ClickedTab.args = Object.assign( {}, tabData, { onClick: true } );
