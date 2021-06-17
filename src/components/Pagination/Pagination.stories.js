import { action } from "@storybook/addon-actions";
import { separateData } from '../Buttons/ButtonGroup/ButtonGroup.stories';
import Pagination from "./Pagination";

// const paddedList = () => {
//   return {
//     template: '<div style="padding: 50px 0;"><story/></div>'
//   };
// };

export default {
  title: "CRM/Pagination",
  excludeStories: /.*Data$/,
  // decorators: [paddedList],
};

// export const actionsData = {
//   changeSelect: action( "changeSelect" ),
// };

export const defaultData = {
  dataLength: 36,
  perPage: 10,
  dropdown: {
    title: '前往',
    options: [1, 2, 3, 4],
  },
  buttons: {
    ...separateData,
    separate: true,
  }
};

const Template = ( args, { argTypes } ) => ( {
  props: Object.keys( argTypes ),
  components: { Pagination },
  template: `<pagination :pagination="$props"/>`,
  // methods: actionsData,
} );

export const Default = Template.bind({});
Default.args = defaultData;

