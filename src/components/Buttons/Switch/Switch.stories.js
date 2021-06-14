import { action } from "@storybook/addon-actions";
import switchButton from "./Switch";

export default {
  title: "CRM/Button/Switch",
  excludeStories: /.*Data$/,
};

export const defaultData = {
    switch: true,
};

const Template = ( args, { argTypes } ) => ( {
  props: Object.keys( argTypes ),
  components: { switchButton },
  template: `<switchButton :switchButton="$props" />`,
} );

export const Default = Template.bind({});
Default.args = defaultData;