import { ApiEndpoint } from '@/types'
import {getData} from '@/utils/getData'



export default async function Donations() {
    const data = await getData(ApiEndpoint.GET_DONATIONS)

    return (
        <>
            <h1>Donations</h1>
            {data.data[0].title}
            {data.data[0].body}

        </>
    )
}