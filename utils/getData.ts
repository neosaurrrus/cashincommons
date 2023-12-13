import { ApiEndpoint } from "@/types"

const baseUrl = process.env.API_URL || ''
export async function getData(endpoint: ApiEndpoint) {
    const res = await fetch(baseUrl + endpoint)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }