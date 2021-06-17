import { action } from "@storybook/addon-actions";
import Breadscrumb from "./Breadscrumb";

// const paddedList = () => {
//   return {
//     template: '<div style="padding: 50px 0;"><story/></div>'
//   };
// };

export default {
  title: "CRM/Breadscrumb",
  excludeStories: /.*Data$/,
//   decorators: [paddedList],
};

export const defaultData = {
  active: 'Profile',
  location: [
    { title: 'Home',
      link: '#',
    },
    { title: 'Mypage',
      link: '#',
    },
    { title: 'Profile',
      link: '#',
    }
  ],
};

const Template = ( args, { argTypes } ) => ( {
  props: Object.keys( argTypes ),
  components: { Breadscrumb },
  template: `<breadscrumb :breadscrumb="$props" />`,
} );

export const Default = Template.bind({});
Default.args = defaultData;