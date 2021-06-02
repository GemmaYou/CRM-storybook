// src/components/Task.stories.js
import { action } from "@storybook/addon-actions";
import Task from "./Task";
export default {
  title: "Task",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  argTypes: {
    state: {
        control: {
          type: 'inline-radio',
          options: ['Task_INBOX', 'TASK_PINNED', 'TASK_ARCHIVED'],
        },
    },
  },
};
export const actionsData = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask")
};

export const taskData = {
  id: "1",
  title: "Test Task",
  state: "Task_INBOX",
  updated_at: new Date(2019, 0, 1, 9, 0)
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Task },
    template: `
        <task :task="$props" 
          @archive-task="onArchiveTask"
          @pin-task="onPinTask" />
    `,
    methods: actionsData
});

// Default Task State
export const Default = Template.bind({});
Default.args = taskData;

// Pinned Task State
export const Pinned = Template.bind({});
Pinned.args = Object.assign({}, taskData, {state: "TASK_PINNED"});

// Archived Task State
export const Archived = Template.bind({});
Archived.args = Object.assign({}, taskData, {state: "TASK_ARCHIVED"});

// const taskTemplate = `<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`;

// default task state
// export const Default = () => ({
//   components: { Task },
//   template: taskTemplate,
//   props: {
//     task: {
//       default: () => taskData
//     }
//   },
//   methods: actionsData
// });
// // pinned task state
// export const Pinned = () => ({
//   components: { Task },
//   template: taskTemplate,
//   props: {
//     task: {
//       default: () => ({
//         ...taskData,
//         state: "TASK_PINNED"
//       })
//     }
//   },
//   methods: actionsData
// });
// // archived task state
// export const Archived = () => ({
//   components: { Task },
//   template: taskTemplate,
//   props: {
//     task: {
//       default: () => ({
//         ...taskData,
//         state: "TASK_ARCHIVED"
//       })
//     }
//   },
//   methods: actionsData
// });
