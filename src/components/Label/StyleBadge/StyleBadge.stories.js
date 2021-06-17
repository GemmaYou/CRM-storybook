import StyleBadge from './StyleBadge';

export default {
  title: 'CRM/Label/StyleBadge',
  excludeStories: /.*Data$/,
  argTypes: {
    backgroundColor: {
      control: { type: 'color' }
    },
    fontAwesomeIcon: {
      control: {
        type: 'select',
        options: [ 'faBriefcase', 'faCar' ]
      }
    },
  },
};

export const badgeData = {
  fontAwesomeIcon: 'faCar',
  color: false,
  checked: false,
};

const Template = ( args, { argTypes } ) => ( {
  props: Object.keys( argTypes ),
  components: { StyleBadge },
  template: '<styleBadge :styleBadge="$props" />',
} );

export const Default = Template.bind( {} );
Default.args = badgeData;

export const Color = Template.bind( {} );
Color.args = {
  fontAwesomeIcon: '',
  color: true,
  checked: false,
};

export const ColorChecked = Template.bind( {} );
ColorChecked.args = {
  fontAwesomeIcon: '',
  color: true,
  checked: true,
};

// export const ClickedTab = Template.bind( {} );
// ClickedTab.args = Object.assign( {}, labelData, { onClick: true } );
