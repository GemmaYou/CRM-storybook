import SelectTree from './SelectTree';

export default {
  title: 'CRM/Dropdown/SelectTree',
  excludeStories: /.*Data$/,
  argTypes: {
    backgroundColor: {
      control: { type: 'color' }
    },
  },
};

// export const selectTreeData = {
//   options: [10, 20, 30, 40],
// };

export const selectTreeData = {
  value:null,
  optionsMechanism:[{
     id: 'fruits',
     label: 'Fruits',
     children: [ {
       id: '432673427163429080',
       label: 'Apple 🍎',
       isNew: true,
     }, {
       id: 'grapes',
       label: 'Grapes 🍇',
     }, {
       id: 'pear',
       label: 'Pear 🍐',
     }, {
       id: 'strawberry',
       label: 'Strawberry 🍓',
     }, {
       id: 'watermelon',
       label: 'Watermelon 🍉',
     } ],
   }, {
     id: 'vegetables',
     label: 'Vegetables',
     children: [ {
       id: 'corn',
       label: 'Corn 🌽',
     }, {
       id: 'carrot',
       label: 'Carrot 🥕',
     }, {
       id: 'eggplant',
       label: 'Eggplant 🍆',
     }, {
       id: 'tomato',
       label: 'Tomato 🍅',
     } ],
 }],
}

const Template = ( args, { argTypes } ) => ( {
  props: Object.keys( argTypes ),
  components: { SelectTree },
  template: '<selectTree :selectTree="$props" />',
} );

export const Default = Template.bind( {} );
Default.args = selectTreeData;
