import { Modal as AntModal } from 'antd'

const showModal = () => (
  AntModal.confirm({
    title: 'Do you want to delete movie from watchlist?',
    onOk() {},
    onCancel() {}
  })
)

export default showModal
