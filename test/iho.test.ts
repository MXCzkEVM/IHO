import { isAddress } from 'ethers'
import { contracts, provider, signer } from 'harsta/runtime'
import { fixture, initial } from 'harsta/tests'

await initial()
await fixture(['IHO'])

describe('erc20 transparent and erc20 uups', () => {
  it('provider get block number', async () => {
    const blockNumber = await provider.getBlockNumber()
    expect(blockNumber).toBeTypeOf('number')
  })
  it('deployed iho contract', async () => {
    const iho = contracts.IHO.resolve('signer')
    const address = await iho.getAddress()
    expect(isAddress(address)).toBeTruthy()
    expect(await signer.getAddress()).toBe(await iho.getVerifier())
    expect(await signer.getAddress()).toBe(await iho.owner())
  })
  it('iho function create call', async () => {
    // TODO
  })
})
