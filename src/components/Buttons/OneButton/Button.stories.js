import { action } from "@storybook/addon-actions";
import OneButton from './Button';

export default {
  title: 'CRM/Button/OneButton',
  excludeStories: /.*Data$/,
  argTypes: {
    backgroundColor: {
      control: { type: 'color' }
    },
    hoverButtonColor: {
      control: { type: 'color' }
    },
    color: {
      control: { type: 'color' }
    },
    hoverWordColor: {
      control: { type: 'color' }
    },
    title: {
      control: { type: 'text' }
    },
    hoverTitle: {
      control: { type: 'text' }
    },
    fontAwesomeIcon: {
      control: {
        type: 'select',
        options: ['faSearch', 'faPen', 'faTrashAlt', 'faClock', 'faList', 'faBorderAll', 'faBuilding', 'faStepForward', 'faStepBackward', 'faCaretLeft', 'faCaretRight']
      }
    },
  },
};

export const actionsData = {
  clickOnebutton: action( "clickOnebutton" ),
};

export const buttonData = {
  label: true,
  title: '',
  primary: true,
  backgroundColor: '',
  hoverButtonColor: '',
  round: false,
  color: '',
  hoverWordColor: '',
  icon: false,
  fontAwesomeIcon: 'faSearch',
  disabled: false,
};

const Template = ( args, { argTypes } ) => ( {
  props: Object.keys( argTypes ),
  components: { OneButton },
  template: '<oneButton :button="$props" @click-onebutton="clickOnebutton" />',
  methods: actionsData,
} );

export const Primary = Template.bind( {} );
Primary.args = Object.assign( {}, buttonData, { title: 'test', hoverButtonColor: '#0096d9' } );

export const Secondary = Template.bind( {} );
Secondary.args = Object.assign( {}, buttonData, { title: 'test', primary: false } );

export const Round = Template.bind( {} );
Round.args = Object.assign( {}, buttonData, { primary: false, round: true } );

export const Icon = Template.bind( {} );
Icon.args = Object.assign( {}, buttonData, { label: false, primary: false, icon: true } );
