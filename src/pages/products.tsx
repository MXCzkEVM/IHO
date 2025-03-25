import { getProduct } from '@/api'
import { useAsyncState } from '@hairy/react-lib'
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'

function Page() {
  const [{ value = [] }] = useAsyncState(
    () => getProduct(),
    [],
    { immediate: true },
  )
  return (
    <div className="flex gap-10 flex-wrap w-full px-12">
      {value.map((product: any) => (
        <Card
          key={product.id}
          hoverable
          className="w-80"
          cover={<img className="object-cover h-50" alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title={product.name} description={product.description} />
        </Card>
      ))}
    </div>
  )
}

export default Page
