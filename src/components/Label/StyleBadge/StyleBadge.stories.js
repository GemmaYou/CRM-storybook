import StyleBadge from './StyleBadge';

export default {
  title: 'CRM/Label/StyleBadge',
  excludeStories: /.*Data$/,
  argTypes: {
    backgroundColor: {
      control: { type: 'color' }
    },
  },
};

export const badgeData = {
  label: 'faCar',
  color: '',
};

const Template = ( args, { argTypes } ) => ( {
  props: Object.keys( argTypes ),
  components: { StyleBadge },
  template: '<styleBadge :styleBadge="$props" />',
} );

export const Default = Template.bind( {} );
Default.args = badgeData;

// export const ClickedTab = Template.bind( {} );
// ClickedTab.args = Object.assign( {}, labelData, { onClick: true } );
