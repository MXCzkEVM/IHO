import { useExtendOverlay } from '@overlastic/react'
import { Modal, Tabs } from 'antd'
import { FormShipping } from './form-shipping'

export function SettingsDialog() {
  const { visible, resolve } = useExtendOverlay({
    duration: 500,
  })

  const items = [
    {
      title: 'Address',
      child: <FormShipping />,
    },
  ]

  return (
    <Modal open={visible} title="Settings" onCancel={resolve} footer={null}>
      <Tabs
        items={
          items.map(item => ({
            children: item.child,
            label: item.title,
            key: item.title,
          }))
        }
      />
    </Modal>
  )
}
