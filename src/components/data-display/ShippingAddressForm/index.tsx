import type { FormInstance, FormProps, InputProps } from 'antd'
import type { ChangeEvent } from 'react'
import { putUser } from '@/api'
import { useStoreUser } from '@/store'
import { useAsyncCallback, useWhenever } from '@hairy/react-lib'
import { isEqual } from '@hairy/utils'
import { Button, Form, Input, Select, Spin } from 'antd'
import { useMemo } from 'react'
import { defaultAddress, regions } from './config'
import { findMobilePrefix, parsePhone } from './utils'

export interface FieldType {
  firstName?: string
  lastName?: string
  address?: string
  region?: string
  email?: string
  phone?: string
}

export function ShippingAddressForm() {
  const [{ value: user, loading }, _, resetUser] = useStoreUser()
  const [loadFinish, onFinish] = useAsyncCallback(async (_values: Required<FieldType>) => {
    const values = { ..._values }

    const address = {
      ...defaultAddress,
      first_name: values.firstName,
      last_name: values.lastName,
      address_1: values.address,
      country: values.region,
      phone: values.phone,
      email: values.email,
    }

    const response = await putUser({
      first_name: values.firstName,
      last_name: values.lastName,
      shipping: address,
      billing: address,
    })
    const customer = await response.json()
    resetUser({
      firstName: customer.first_name,
      lastName: customer.last_name,
      address: customer.billing?.address_1,
      region: customer.billing?.country,
      email: customer.billing?.email,
      phone: customer.billing?.phone,
    })
  })

  const [form] = Form.useForm<FieldType>()
  const phone = Form.useWatch('phone', form)
  const region = Form.useWatch('region', form)
  const data = useWatches(form)
  const prefix = useMemo(() => findMobilePrefix(region), [region])
  const parsed = useMemo(() => parsePhone(phone, region, prefix), [phone, region])
  const equal = useMemo(() => isEqual(user, data), [user, data])
  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo)
  }

  useWhenever(user, () => form.setFieldsValue(user!), { immediate: true })
  return (
    <Spin spinning={loading}>
      <Form
        name="basic"
        wrapperCol={{ span: 24 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish as any}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form}
        layout="vertical"
      >
        <div className="flex gap-8px">
          <Form.Item<FieldType>
            label="firstName"
            className="flex-1"
            name="firstName"
            rules={[{ required: true, message: 'Please input your first name' }]}
          >
            <Input placeholder="Please input your first name" />
          </Form.Item>
          <Form.Item<FieldType>
            label="LastName"
            className="flex-1"
            name="lastName"
            rules={[{ required: true, message: 'Please input your last name' }]}
          >
            <Input placeholder="Please input your last name" />
          </Form.Item>
        </div>
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please input your email' },
            { type: 'email', message: 'Please input the correct Email format' },
          ]}
        >
          <Input placeholder="Please input your email" />
        </Form.Item>
        <div className="flex gap-8px">
          <Form.Item<FieldType>
            className="w-150px"
            label="Country/Region"
            name="region"
            rules={[{ required: true, message: 'Please select your country' }]}
          >
            <Select
              placeholder="Country-Region"
              onChange={() => form.validateFields(['phone'])}
              showSearch
              options={regions.map(n => ({ label: n.name, value: n.countryCode }))}
            />
          </Form.Item>
          <Form.Item<FieldType>
            label="Phone No"
            name="phone"
            className="flex-1"
            rules={[
              { required: true, message: 'Please input your phone number' },
              {
                validator: (_, value) => {
                  if (!value || parsed.verify)
                    return Promise.resolve()
                  const error = new Error('Please input the correct format for the phone number')
                  return Promise.reject(error)
                },
              },
            ]}
          >
            <InputPhoneNumber prefix={prefix} parsed={parsed} placeholder="Phone No" />
          </Form.Item>
        </div>
        <Form.Item<FieldType>
          label="Receiving address"
          name="address"
          className="flex-1"
          rules={[{ required: true, message: 'Please enter your shipping address' }]}
        >
          <Input.TextArea placeholder="Please enter your shipping address" count={{ max: 200 }} />
        </Form.Item>
        <Form.Item className="flex justify-end mb-0">
          <Button disabled={equal} loading={loadFinish}>
            Save
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  )
}
export interface InputPhoneNumberProps extends InputProps {
  parsed?: ReturnType<typeof parsePhone>
}

export function InputPhoneNumber(props: InputPhoneNumberProps) {
  const { parsed, onChange } = props

  function onTriggerChange(e: ChangeEvent<HTMLInputElement>) {
    onChange?.(e)
  }
  return <Input {...props} onChange={onTriggerChange} value={parsed?.show} />
}

function useWatches(form: FormInstance<FieldType>) {
  const phone = Form.useWatch('phone', form)
  const region = Form.useWatch('region', form)
  const firstName = Form.useWatch('firstName', form)
  const lastName = Form.useWatch('lastName', form)
  const address = Form.useWatch('address', form)
  const email = Form.useWatch('email', form)

  return {
    firstName,
    lastName,
    address,
    region,
    email,
    phone,
  }
}
