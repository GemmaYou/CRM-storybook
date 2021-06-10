import { action } from "@storybook/addon-actions";
import Avatar from './Avatar';

export default {
  title: 'CRM/Avatar/Avatar',
  excludeStories: /.*Data$/,
};

export const actionsData = {
  clickAdd: action( "clickAdd" ),
  clickDelete: action( "clickDelete" ),
};

export const avatarData = {
  pic: false,
};

const Template = ( args, { argTypes } ) => ( {
  props: Object.keys( argTypes ),
  components: { Avatar },
  template: '<avatar :avatar="$props" @clickAdd="clickAdd" @clickDelete="clickDelete" />',
  methods: actionsData,
} );

export const Default = Template.bind( {} );
Default.args = avatarData;

export const withPic = Template.bind( {} );
withPic.args = Object.assign( {}, avatarData, { pic: true } );

