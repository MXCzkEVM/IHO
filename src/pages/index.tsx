import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

import {
  Card,
} from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

function Page() {
  const items = [
    {
      img: <div className="text-160px lt-lg:text-120px i-line-md-sunny-filled-loop-to-moon-filled-alt-loop-transition" />,

      title: 'Simply Lock Moonchain',
      desc: 'Your wallet, your keys. Moonchain uses a fully transparent Ethereum Smart Contract, meaning your tokens stay on your wallet, ensuring decentralized security',
    },
    {
      img: <div className="text-160px lt-lg:text-120px i-material-symbols-devices-other" />,
      title: 'Select Your Miner',
      desc: 'Moonchain will be rolling out an entire catalogue of Hardware miners. Choose the Hardware that suits your needs. ',
    },
    {
      img: <div className="text-160px lt-lg:text-120px i-iconamoon-delivery-fast-fill" />,
      title: 'Receive Your Hardware',
      desc: 'Free Hardware, Delivered Free to your door!',
    },
  ]
  return (
    <>
      <div className="max-w-1400px mx-auto px-48px lt-lg:mx-84px">
        <div className="py-80px lt-lg:py-40px w-full">
          <div className="-mx-38px">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <div className="lg:px-10 flex flex-row gap-6 lt-lg:flex-col-reverse">
                    <div className="flex justify-center flex-1 flex-col lt-lg:text-center font-600 font-normal">
                      <div className="text-28px font-600 lt-lg:text-18px">Moonchain initial hardware offering (IHO)</div>
                      <div className="text-56px font-600 line-height-60px lt-lg:hidden my-16px">Welcome to the future of free mining hardware!</div>
                      <div className="text-28px font-600 line-height-32px lt-lg:hidden">CHOOSE, LOCK, and MINE REWARDS</div>
                      <div className="mt-48px">
                        <Button disabled>COMING SOON</Button>
                      </div>
                    </div>
                    <div className="flex flex-1">
                      <img className="w-full object-cover" src="https://blueberryring.com/wp-content/uploads/2024/10/Samsung-Galaxy-Ring.webp" />
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div className="py-80px lt-lg:py-40px w-full">
          <div className="">
            <div className=" text-28px font-600 line-height-36px mb-40px lt-lg:text-18px">How to participate in IHO?</div>
            <div className="flex justify-between lt-lg:justify-center flex-wrap gap-12 lt-lg:gap-6 font-500 line-height-20px">
              {items.map(item => (
                <Card key={item.title} className="p-24px w-320px h-340px lt-lg:h-300px flex-col items-center">
                  {item.img}
                  <div className="mt-18px text-center text-12px">
                    {item.title}
                    :
                    {' '}
                    {item.desc}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="py-80px lt-lg:py-40px">
            <div className="">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is moonchain IHO?</AccordionTrigger>
                  <AccordionContent>
                    Moonchain Initial Hardware Offering (IHO) is a revolutionary mining concept combining cutting-edge hardware with your own decentralized wallet. We're offering mining hardware at no cost—just choose your desired Hardware, lock your Moonchain and start mining. It's never been easier or more rewarding to mine. Don't miss out—join the future of mining today!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do i lock moonchain to get my free hardware?</AccordionTrigger>
                  <AccordionContent>
                    Simply visit
                    {' '}
                    <a href="https://iho.moonchain.com/">iho.moonchain.com</a>
                    {' '}
                    choose your desired mining Hardware, lock the corresponding amount of Moonchain for the lock period and fill out the order form. Simple!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Why would you give away free mining hardware?</AccordionTrigger>
                  <AccordionContent>
                    We're giving away free mining hardware because we believe the crypto mining industry is overdue for a revolution. Mining must be transparent, decentralized, and accessible to all. By removing barriers and offering hardware for free, we’re empowering more people to join the mining revolution, accelerating the global adoption of Moonchain and blockchain technology. This is your chance to be part of something transformative—join the revolution now!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How should i choose the right hardware for me?</AccordionTrigger>
                  <AccordionContent>
                    Choose hardware that aligns with your needs and lifestyle. Whether you're looking for a wearable device to track and boost your activity levels or prefer a more stationary setup, it's essential to also consider mining efficiency, lock amounts, and electricity usage. Make sure your hardware is optimized for both performance and sustainability to maximize your returns. The right choice today can lead to significant rewards tomorrow—hardware is strictly limited, don’t miss out!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>How do the locks work on my wallet?</AccordionTrigger>
                  <AccordionContent>
                    Moonchain locks are securely stored in your wallet, ensuring peace of mind. We leverage Ethereum smart contracts, which are fully auditable and transparent. We invite everyone to review the contracts themselves—rest assured, they do exactly what they promise. At Moonchain, transparency is our foundation, and we stand by it fully. Don't miss the opportunity to be part of a fully transparent ecosystem.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Page
