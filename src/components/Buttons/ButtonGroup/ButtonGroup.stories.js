import ButtonGroup from './ButtonGroup';
import { buttonData, actionsData } from "../OneButton/Button.stories";

const paddedList = () => {
  return {
    template: '<div style="padding: 10px;"><story/></div>'
  };
};

export default {
  title: "CRM/Button/ButtonGroup",
  excludeStories: /.*Data$/,
  decorators: [paddedList],
};

export const defaultData = [
  { ...buttonData, label: false, title: '列表' , icon: true, fontAwesomeIcon: 'faList', backgroundColor: "#EBEBEB", hoverButtonColor: '#C6E5F2'},
  { ...buttonData, label: false, title: '時間軸模式' , icon: true, fontAwesomeIcon: 'faClock', backgroundColor: "#EBEBEB", hoverButtonColor: '#C6E5F2'},
  { ...buttonData, label: false, title: '類型模式' , icon: true, fontAwesomeIcon: 'faBorderAll', backgroundColor: "#EBEBEB", hoverButtonColor: '#C6E5F2'},
];

// default TaskList state
export const Default = () => ({
  components: { ButtonGroup },
  template: `<buttonGroup :buttons="buttons" @click-onebutton="clickOnebutton" class="buttonGroup"/>`,
  props: {
    buttons: {
      default: () => defaultData
    }
  },
  methods: actionsData
});
