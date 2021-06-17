import { action } from "@storybook/addon-actions";
import Tooltip from './Tooltip';
import { buttonData } from "../Buttons/OneButton/Button.stories";


const paddedList = () => {
  return {
    template: '<div style="padding: 50px 0;"><story/></div>'
  };
};

export default {
  title: 'CRM/Tooltip',
  excludeStories: /.*Data$/,
  decorators: [paddedList],
};

export const actionsData = {
  clickOnebutton: action( "clickOnebutton" ),
};

export const tooltipData = {
  tooltip: 'tooltip',
  data: {
    ...buttonData,
    label: false,
    primary: false,
    icon: true
  },
};

const Template = ( args, { argTypes } ) => ( {
  props: Object.keys( argTypes ),
  components: { Tooltip },
  template: '<tooltip :tooltip="$props" @click-onebutton="clickOnebutton" />',
  methods: actionsData,
} );

export const Primary = Template.bind( {} );
Primary.args = tooltipData;
