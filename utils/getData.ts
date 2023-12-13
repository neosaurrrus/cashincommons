import { ApiEndpoint } from "@/types"

export async function getData(endpoint: ApiEndpoint) {
    const res = await fetch(endpoint)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }