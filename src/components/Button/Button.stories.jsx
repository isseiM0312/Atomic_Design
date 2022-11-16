import Button from './Button';
const Template = (args) => <Button {...args} />

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    color: {
      options: ['primary', 'default', 'danger'],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'base', 'lg'],
      control: { type: 'select' },
    },
    backgroundColor: {
      control: { type: 'color' },
    },
  },
};

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
  color: 'default'
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger',
  color: 'danger',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  color: 'primary',
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  children: 'Small',
  color: 'primary',
  size: 'sm',
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  ...PrimarySmall.args,
  children: 'Large',
  size: 'lg',
};

