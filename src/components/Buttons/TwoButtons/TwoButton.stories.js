import TwoButton from './TwoButton';

// const paddedList = () => {
//   return {
//     template: '<div style="padding: 10px;"><story/></div>'
//   };
// };

export default {
  title: "CRM/Button/TwoButton",
  excludeStories: /.*Data$/,
  // decorators: [paddedList],
};

export const twoButtonData = {
  title: 'title',
  hoverTitle:'hoverTitle',
  icon: true,
};

const Template = ( args, { argTypes } ) => ( {
  props: Object.keys( argTypes ),
  components: { TwoButton },
  template: '<twoButton :buttons="$props"/>',
} );

export const Default = Template.bind( {} );
Default.args = twoButtonData;

export const WithCloseButton = Template.bind( {} );
WithCloseButton.args = Object.assign( {}, twoButtonData, { hoverTitle:'', icon: false } );

