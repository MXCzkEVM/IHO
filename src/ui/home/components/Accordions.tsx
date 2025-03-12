import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { motion } from 'motion/react'

export function Accordions() {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      initial="hidden"
      whileInView="visible"
      className="mx-37.5 py-20 lt-md:mx-6 text-auto-clamp"
    >
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What is moonchain IHO?
          </AccordionTrigger>
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
    </motion.div>
  )
}
