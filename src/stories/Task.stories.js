import Task from '@/components/task/Task.vue';

import {action} from "@storybook/addon-actions";

export default {
  title : 'Tasklist example/Task',
  component : Task,
  excludeStories: /.*Data$/,
}

export const actionsData = {
  onPinTask : action('pin-task'),
  onArchiveTask : action('archive-task'),
}
const Template = (args, {argTypes}) => ({
  components : {Task},
  props: Object.keys(argTypes),
  methods: actionsData,
  template: '<task v-bind:style="$props" @pin-task="onPinTask" @archive-task="onArchiveTask"/>'
})

export const Default =  Template.bind({});
Default.args = {
  task : {
    id: '1',
    title: 'Test task',
    state: 'TASK_INBOX',
    updatedAt : new Date(2021,1,1,0,0)
  }
}

export const Pinnded = Template.bind({});
Pinnded.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED'
  }
}
export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED'
  }
}


