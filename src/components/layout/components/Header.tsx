import { SettingsDialog } from '@/components'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { If } from '@hairy/react-lib'
import { useOverlayInject } from '@overlastic/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'

function Header() {
  const openSettingsDialog = useOverlayInject(SettingsDialog)
  const { isConnected } = useAccount()
  return (
    <header className="py-7.5 items-center flex px-7.5 lg:px-15 relative z1">
      {/* <div className="absolute w-50 h-75 bg-white blur-50 transform -translate-y-50% -translate-x-50%" /> */}

      <div className="flex-center gap-6 relative z1">
        <a href="https://swap.moonchain.com/">
          <img className="w-35 mr-3" src="https://raw.githubusercontent.com/MXCzkEVM/metadata/refs/heads/main/emblem-dark.svg" />
        </a>
        <ul className="lt-lg:hidden flex space-x-8 text-sm text-foreground">
          <li className="font-ddin font-semibold uppercase">
            <a href="https://nft.moonchain.com/" target="_blank" rel="noreferrer" className="group rounded transition duration-300 ease-in-out">
              NFT Marketplaces
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-foreground"></span>
            </a>
          </li>
          <li className="font-ddin font-semibold uppercase">
            <a href="https://jannowitz.moonchain.com/" target="_blank" rel="noreferrer" className="group rounded transition duration-300 ease-in-out">
              Bridge
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-foreground"></span>
            </a>
          </li>
          <li className="font-ddin font-semibold uppercase">
            <a href="https://mining.matchx.io/" target="_blank" rel="noreferrer" className="group rounded transition duration-300 ease-in-out">
              Mining
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-foreground"></span>
            </a>
          </li>
          <li className="font-ddin font-semibold uppercase">
            <a href="https://explorer.moonchain.com/" target="_blank" rel="noreferrer" className="group rounded transition duration-300 ease-in-out">
              Explorer
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-foreground"></span>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1"></div>
      <div className="flex-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="lg:hidden text-6 i-material-symbols-format-list-bulleted" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <a href="https://nft.moonchain.com/" target="_blank" rel="noreferrer" className="group rounded transition duration-300 ease-in-out">
                NFT Marketplaces
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-foreground"></span>
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="https://explorer.moonchain.com/" target="_blank" rel="noreferrer" className="group rounded transition duration-300 ease-in-out">
                Explorer
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-foreground"></span>
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="https://mining.matchx.io/" target="_blank" rel="noreferrer" className="group rounded transition duration-300 ease-in-out">
                Mining
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-foreground"></span>
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="https://jannowitz.moonchain.com/" target="_blank" rel="noreferrer" className="group rounded transition duration-300 ease-in-out">
                Bridge
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-foreground"></span>
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="lg:hidden">
          <ConnectButton chainStatus={{ smallScreen: 'none' }} accountStatus={{ smallScreen: 'avatar' }} />
        </div>
        <div className="lt-lg:hidden">
          <ConnectButton chainStatus={{ smallScreen: 'none' }} />
        </div>
        <If cond={isConnected}>
          <div font-size="5" className="cursor-pointer i-lucide-settings" onClick={openSettingsDialog} />
        </If>
        {/* <AppearanceSwitch className="text-6" />
        <LanguageSwitch className="text-6" /> */}
      </div>
    </header>
  )
}

export default Header
