import { Else, If, Then } from '@hairy/react-lib'
import { Button } from '@heroui/button'
import { ConnectButton as RainbowConnectButton, useConnectModal } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'

export interface ConnectButtonProps {
  status?: boolean
}

export function ConnectButton({ status = true }: ConnectButtonProps) {
  const { openConnectModal, connectModalOpen } = useConnectModal()
  const { isConnecting, isConnected } = useAccount()
  return (
    <>
      <If cond={isConnected}>
        <Then>
          <If cond={status}>
            <div className="rainbow-wrapper">
              <RainbowConnectButton chainStatus={{ smallScreen: 'none' }} />
            </div>
          </If>
        </Then>
        <Else>
          <Button
            onPress={openConnectModal}
            className="w-full dark:bg-gray-200 dark:text-black"
            color="primary"
            isLoading={isConnecting || connectModalOpen}
          >
            Login
          </Button>
        </Else>
      </If>
    </>
  )
}
