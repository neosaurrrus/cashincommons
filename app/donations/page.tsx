import { ApiEndpoint } from '@/types'
import {getData} from '@/utils/getData'


export default async function Donations() {
    const donationsResponse = await getData(ApiEndpoint.GET_DONATIONS)
    const {title, body}  = donationsResponse[0]

    return (
        <>
            <h1>Donations</h1>
            {title}
            {body}
        </>
    )
}

