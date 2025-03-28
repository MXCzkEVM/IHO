import { getProductId } from '@/api'
import { Button } from '@/components/ui/button'
import {  useAsyncState, useWhenever } from '@hairy/react-lib'
import { whenever } from '@hairy/utils'
import {  Progress, Tag } from 'antd'
import { useRouter } from 'next/router'

function Page() {
  const router = useRouter()

  const [{ value: detail, loading }, fetch] = useAsyncState(
    async () => whenever(router.query.id, id => getProductId({ id: +id })),
    [router],
  )
  useWhenever(router.query.id, fetch)
  return (
    <div className="container mx-auto">
      <div className="mb-8 ">
        {/* <span>Store.</span> */}
        {/* <span>Explore other products.</span> */}
      </div>
      <div className="flex">
        <div className="flex gap-12px mr-46px">
          <div className="size-372px rounded-lg overflow-hidden border">
            <img
              className="object-cover p-1"
              alt="example"
              src="https://img.youpin.mi-img.com/shop-fe/7cd235a2_01dd_420f_8ef5_5683c1d39d54.jpeg@base@tag=imgScale&F=webp"
            />
          </div>
          <div className="flex-col h-full justify-between">
            <div className="size-74px">
              <img src="https://img.youpin.mi-img.com/shop-fe/7cd235a2_01dd_420f_8ef5_5683c1d39d54.jpeg@base@tag=imgScale&F=webp&h=166&w=166" />
            </div>
            <div className="size-74px">
              <img src="https://img.youpin.mi-img.com/shop-fe/af046c77_b72e_4732_acd4_7d81c423692c.jpeg@base@tag=imgScale&F=webp&h=166&w=166" />
            </div>
            <div className="size-74px">
              <img src="https://img.youpin.mi-img.com/shop-fe/867c491f_fef0_4129_bc27_0663a4650507.jpeg@base@tag=imgScale&F=webp&h=166&w=166" />
            </div>
            <div className="size-74px">
              <img src="https://img.youpin.mi-img.com/shop-fe/867c491f_fef0_4129_bc27_0663a4650507.jpeg@base@tag=imgScale&F=webp&h=166&w=166" />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-12px mb-28px">
            <span>黄鹂智声Oleap Archer通话降噪AI耳机 单耳机版 黑色</span>
            <Tag>筹款中</Tag>
          </div>
          <div className="mb-8px">
            Virtual Reality Reimagined
          </div>
          <div className="mb-12px">Get it FREE by staking 200,000 Moonchain Tokens</div>
          <div>Delivery Progress</div>
          <div className="">
            <Progress
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
              percent={80}
            />
          </div>
          <div className="text-12px text-gray w-fit">
            <span>89 more orders needed for dispatch</span>
          </div>
          <div className="text-12px text-gray mb-24px">
            *Limit: 1 item per wallet
          </div>

          <Button>STAKE NOW</Button>
          <Button>TO CART</Button>
        </div>
      </div>
      {/* <If cond={!loading}>
        <Then>

        </Then>
        <Else>
          <div className="flex-center mt-45">
            <div className="i-eos-icons-bubble-loading text-18 text-white text-op-50" />
          </div>
        </Else>
      </If> */}
    </div>
  )
}

export default Page
