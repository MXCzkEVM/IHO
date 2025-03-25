import { getUser } from '@/api'
import { defineAsyncStorePlain } from '@hairy/react-lib'

export const useStoreUser = defineAsyncStorePlain(
  async () => {
    const customer = await getUser()
    return {
      firstName: customer.first_name,
      lastName: customer.last_name,
      address: customer.billing?.address_1,
      region: customer.billing?.country,
      email: customer.billing?.email,
      phone: customer.billing?.phone,
    }
  },
  { persistant: 'user' },
)
