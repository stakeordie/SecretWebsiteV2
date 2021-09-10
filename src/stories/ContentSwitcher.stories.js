import ContentSwitcher from './ContentSwitcher.vue';

export default {
  title: 'SecretNetwork/ContentSwitcher',
  component: ContentSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ContentSwitcher },
  template: '<content-switcher v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
