import { useExtendOverlay } from '@overlastic/react'
import { Modal, Tabs } from 'antd'
import { ShippingAddressForm } from '../data-display'

export function SettingsDialog() {
  const { visible, resolve } = useExtendOverlay({
    duration: 500,
  })

  const items = [
    {
      title: 'Address',
      child: <ShippingAddressForm />,
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
