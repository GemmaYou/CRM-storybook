import TwoButton from './TwoButton';

export default {
  title: "CRM/Button/TwoButton",
  excludeStories: /.*Data$/,
};

export const twoButtonData = {
  title: 'title',
  hoverTitle:'hoverTitle',
  icon: true,
  clicked: false,
};

const Template = ( args, { argTypes } ) => ( {
  props: Object.keys( argTypes ),
  components: { TwoButton },
  template: '<twoButton :buttons="$props"/>',
} );

export const Default = Template.bind( {} );
Default.args = twoButtonData;

export const Clicked = Template.bind( {} );
Clicked.args = Object.assign( {}, twoButtonData, { clicked: true } );

export const WithCloseButton = Template.bind( {} );
WithCloseButton.args = Object.assign( {}, twoButtonData, { hoverTitle:'', icon: false } );

