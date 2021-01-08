import { countryAPI } from '@/api'
import * as mutations from './mutation-types'

export const actions = {
  getAllCountries: async ({ commit }) => {
    try {
      const response = await countryAPI.get('/all')
      commit(mutations.getCountries, response.data)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
}
