import { action } from "@storybook/addon-actions";
import ButtonGroup from './ButtonGroup';
import { tooltipData } from "../../Tooltip/Tooltip.stories";
import { buttonData } from "../OneButton/Button.stories";

const paddedList = () => {
  return {
    template: '<div style="padding: 50px 0;"><story/></div>'
  };
};

export default {
  title: "CRM/Button/ButtonGroup",
  excludeStories: /.*Data$/,
  decorators: [paddedList],
};

export const defaultData = {
  separate: false,
  tooltips:[
    { ...tooltipData,
      tooltip: '列表',
      data: {
        ...buttonData,
        label: false,
        primary: false,
        icon: true,
        fontAwesomeIcon: 'faList'
      }
    },
    { ...tooltipData,
      tooltip: '時間軸模式',
      data: {
        ...buttonData,
        label: false,
        primary: false,
        icon: true,
        fontAwesomeIcon: 'faClock'
      }
    },
    { ...tooltipData,
      tooltip: '類型模式',
      data: {
        ...buttonData,
        label: false,
        primary: false,
        icon: true,
        fontAwesomeIcon: 'faBorderAll'
      }
    },
  ]
};

export const separateData = {
  separate: true,
  tooltips:[
    { ...tooltipData,
      tooltip: '',
      data: {
        ...buttonData,
        label: false,
        primary: false,
        icon: true,
        fontAwesomeIcon: 'faStepBackward'
      }
    },
    { ...tooltipData,
      tooltip: '',
      data: {
        ...buttonData,
        label: false,
        primary: false,
        icon: true,
        fontAwesomeIcon: 'faCaretLeft'
      }
    },
    { ...tooltipData,
      tooltip: '',
      data: {
        ...buttonData,
        label: false,
        primary: false,
        icon: true,
        fontAwesomeIcon: 'faCaretRight'
      }
    },
    { ...tooltipData,
      tooltip: '',
      data: {
        ...buttonData,
        label: false,
        primary: false,
        icon: true,
        fontAwesomeIcon: 'faStepForward'
      }
    },
  ]
};

const Template = ( args, { argTypes } ) => ( {
  props: Object.keys( argTypes ),
  components: { ButtonGroup },
  template: `<buttonGroup :buttons="$props" />`,
  // methods: actionsData,
} );

export const Default = Template.bind({});
Default.args = defaultData;

export const Separate = Template.bind({});
Separate.args = separateData;
