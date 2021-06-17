import NumberBadge from './NumberBadge';

export default {
  title: 'CRM/Label/NumberBadge',
  excludeStories: /.*Data$/,
  argTypes: {
    backgroundColor: {
      control: { type: 'color' }
    },
  },
};

export const badgeData = {
  label: '99+',
};

const Template = ( args, { argTypes } ) => ( {
  props: Object.keys( argTypes ),
  components: { NumberBadge },
  template: '<numberBadge :numberBadge="$props" />',
} );

export const Default = Template.bind( {} );
Default.args = badgeData;

// export const ClickedTab = Template.bind( {} );
// ClickedTab.args = Object.assign( {}, labelData, { onClick: true } );
