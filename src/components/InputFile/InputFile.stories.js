import InputFile from './InputFile';

export default {
  title: 'CRM/Input/InputFile',
  excludeStories: /.*Data$/,
};

export const inputFileData = {
  label: '上傳檔案',
};

const Template = ( args, { argTypes } ) => ( {
  props: Object.keys( argTypes ),
  components: { InputFile },
  template: '<inputFile :inputFile="$props" />',
} );

export const Default = Template.bind( {} );
Default.args = inputFileData;

