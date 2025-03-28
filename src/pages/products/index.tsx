import { getProduct } from '@/api'
import { Else, If, Then, useAsyncState } from '@hairy/react-lib'
import { Card, List } from 'antd'
import Meta from 'antd/es/card/Meta'
import { motion } from 'motion/react'
import { useRouter } from 'next/router'

function Page() {
  const router = useRouter()
  const [{ value = [], loading }] = useAsyncState(
    () => getProduct(),
    [],
    { immediate: true },
  )

  return (
    <div className="px-7.5 lg:px-15">
      <If cond={!loading}>
        <Then>
          <motion.div className="lt-lg:hidden flex gap-10 flex-wrap">
            {value.map((product: any) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                onClick={() => router.push(`/products/${product.id}`)}
              >
                <Card
                  hoverable
                  className="w-80"
                  cover={<img className="object-cover h-50 p-1" alt="example" src={product.image} />}
                >
                  <Meta title={product.name} description={product.description} />
                </Card>
              </motion.div>

            ))}
          </motion.div>
          <List
            className="lg:hidden"
            itemLayout="horizontal"
            dataSource={[...value, ...value, ...value, ...value]}
            renderItem={(product: any, index) => (
              <List.Item key={index} onClick={() => router.push(`/products/${product.id}`)}>
                <List.Item.Meta
                  avatar={<img className="object-cover h-24 p-1 rounded-lg" alt="example" src={product.image} />}
                  title={product.name}
                  description={product.description}
                />
              </List.Item>
            )}
          />
        </Then>
        <Else>
          <div className="flex-center mt-45">

            <div className="i-eos-icons-bubble-loading text-18 text-white text-op-50" />
          </div>
        </Else>
      </If>
    </div>
  )
}

export default Page
