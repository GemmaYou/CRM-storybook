import { action } from "@storybook/addon-actions";
import TabList from "./TabList";

// const paddedList = () => {
//   return {
//     template: '<div style="padding: 50px 0;"><story/></div>'
//   };
// };

export default {
  title: "CRM/Tab/TabList",
  excludeStories: /.*Data$/,
//   decorators: [paddedList],
};

export const defaultData = {
  // clicked: 'tab 1',
  data:[
    {
      label: 'tab 1',
      // onClick: false,
    },
    {
      label: 'tab 2',
      // onClick: false,
    },
    {
      label: 'tab3',
      // onClick: true,
    }
  ],
};

const Template = ( args, { argTypes } ) => ( {
  props: Object.keys( argTypes ),
  components: { TabList },
  template: `<tabList :tabList="$props" />`,
} );

export const Default = Template.bind({});
Default.args = defaultData;