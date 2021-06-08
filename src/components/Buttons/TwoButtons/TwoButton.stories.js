import TwoButton from './TwoButton';
import { buttonData, actionsData } from "../OneButton/Button.stories";

const paddedList = () => {
  return {
    template: '<div style="padding: 10px;"><story/></div>'
  };
};

export default {
  title: "CRM/Button/TwoButton",
  excludeStories: /.*Data$/,
  decorators: [paddedList],
};

export const defaultData = [
  { ...buttonData, label: true, title: "結案", backgroundColor: "#0EB857", hoverButtonColor: '#0EB857' },
  { ...buttonData, label: false, icon: true, fontAwesomeIcon: 'faTrashAlt', backgroundColor: "Transparent", hoverButtonColor: 'Transparent'},
];

export const doneData = [
  { ...buttonData, label: true, title: "已結案", backgroundColor: "#7ED9A5", hoverButtonColor: '#7ED9A5' },
  { ...buttonData, label: false, icon: true, fontAwesomeIcon: 'faTrashAlt', backgroundColor: "#EBEBEB", hoverButtonColor: '#EBEBEB' },
];

export const withCloseData = [
  { ...buttonData, label: true, title: "16筆結果", hoverButtonColor: '#0EB857', hoverButtonColor: '#00a7f2' },
  { ...buttonData, label: true, title: `&#215;`, backgroundColor: "#006999", hoverButtonColor: '#00a7f2' },
];

// default TaskList state
export const Default = () => ({
  components: { TwoButton },
  template: `<twoButton :buttons="buttons" @click-onebutton="clickOnebutton" class="separateButton"/>`,
  props: {
    buttons: {
      default: () => defaultData
    }
  },
  methods: actionsData
});

export const DoneDataButton = () => ({
  components: { TwoButton },
  template: `<twoButton :buttons="buttons" @click-onebutton="clickOnebutton" class="separateButton"/>`,
  props: {
    buttons: {
      default: () => doneData
    }
  },
  methods: actionsData
});

export const withCloseButton = () => ({
  components: { TwoButton },
  template: `<twoButton :buttons="buttons" @click-onebutton="clickOnebutton" class="withCloseButton"/>`,
  props: {
    buttons: {
      default: () => withCloseData
    }
  },
  methods: actionsData
});
