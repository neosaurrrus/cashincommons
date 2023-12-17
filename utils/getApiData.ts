import { ApiEndpoint } from "@/types"

export async function getApiData(endpoint: ApiEndpoint) {
    const res = await fetch(`${process.env.API_URL}${endpoint}?apikey=${process.env.API_ANON_KEY}&order=ReportedDate.desc&limit=50`, {
    })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }