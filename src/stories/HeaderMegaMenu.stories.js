import HeaderMegaMenu from './HeaderMegaMenu.vue';

export default {
  title: 'SecretNetwork/HeaderMegaMenu',
  component: HeaderMegaMenu,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeaderMegaMenu },
  template: '<header-mega-menu v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
