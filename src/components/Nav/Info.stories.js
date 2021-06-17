import { action } from "@storybook/addon-actions";
import Info from './Info';

export default {
  title: 'CRM/NavbarInfo',
  excludeStories: /.*Data$/,
};

export const actionsData = {
  clickOnebutton: action( "clickOnebutton" ),
};

export const infoData = {
  name: "管理員 Administrator",
  pic: false,
};

const Template = ( args, { argTypes } ) => ( {
  props: Object.keys( argTypes ),
  components: { Info },
  template: '<info :info="$props" @click-onebutton="clickOnebutton" />',
  methods: actionsData,
} );

export const Default = Template.bind( {} );
Default.args = infoData;
