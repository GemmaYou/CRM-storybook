import Card from "./Card";

export default {
    title: 'CRM/Card',
    excludeStories: /.*Data$/,
};

export const cardData = {
  // label: 'label',
  title: 'TITLE',
  content: '內容',
  contact: {
    name: 'test',
    pic: false
  },
  time: {
    date: '21/06/09',
    time: '15:40'
  },
  owner: {
    name: 'Henry',
    dep: '業務部',
  },
  tag: {
    label: 'tab 1',
  },
};

const Template = ( args, { argTypes } ) => ( {
    props: Object.keys( argTypes ),
    components: { Card },
    template: '<card :card="$props" />',
} );

export const Default = Template.bind( {} );
Default.args = cardData;