import HeaderNav from './HeaderNav.vue';

export default {
  title: 'SecretNetwork/HeaderNav',
  component: HeaderNav,
  argTypes: {
    
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeaderNav },
  template: '<header-nav v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
};
