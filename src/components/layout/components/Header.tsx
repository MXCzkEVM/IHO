import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ConnectButton } from '@rainbow-me/rainbowkit'

function Header() {
  return (
    <header className="py-20px items-center flex px-24px">
      <div className="flex-center gap-12px">
        <a href="https://swap.moonchain.com/">
          <img className="w-140px mr-12px" src="https://explorer.moonchain.com/assets/configs/network_logo_dark.svg" />
        </a>
        <ul className="lt-lg:hidden flex space-x-4 text-sm text-foreground">
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
      <div className="flex gap-12px">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="lg:hidden text-24px i-material-symbols-format-list-bulleted" />
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
        <ConnectButton chainStatus={{ smallScreen: 'none' }} accountStatus={{ smallScreen: 'full' }} />
        {/* <AppearanceSwitch className="text-24px" />
        <LanguageSwitch className="text-24px" /> */}
      </div>
    </header>
  )
}

export default Header
