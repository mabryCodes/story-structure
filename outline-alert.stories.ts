import config, {Template} from './generated/config'

export const OutlineAlertVariant = Template.bind({});
OutlineAlertVariant.args = {
  statusType: 'success',
  story: '<p>This is a success alert.</p>',
}

export default config

