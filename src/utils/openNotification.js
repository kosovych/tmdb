import { notification } from 'antd'

export const openNotification = ({
  message, description, type, onClose
}) => {
  notification[type]({
    message,
    description,
    onClose
  })
}
