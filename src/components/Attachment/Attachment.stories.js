import { action } from "@storybook/addon-actions";
import Attachment from './Attachment';

export default {
  title: 'CRM/Attachment',
  excludeStories: /.*Data$/,
};

export const actionsData = {
  clickOnebutton: action( "clickOnebutton" ),
};

export const attachmentData = {
  title: "會議記錄.jpeg",
  size: "195KB",
};

const Template = ( args, { argTypes } ) => ( {
  props: Object.keys( argTypes ),
  components: { Attachment },
  template: '<attachment :attachment="$props" @click-onebutton="clickOnebutton" />',
  methods: actionsData,
} );

export const Default = Template.bind( {} );
Default.args = attachmentData;
