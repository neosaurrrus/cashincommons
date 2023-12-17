import { ApiEndpoint } from '@/types'
import {getApiData} from '@/utils/getApiData'

export default async function Donations() {
    const donationsResponse = await getApiData(ApiEndpoint.GET_DONATIONS)
 
    console.log(donationsResponse.length)
    console.log(donationsResponse[0])

    function renderDonations() {
        return donationsResponse.map((donation) => {
            return (
                <li className='flex bg-red-200 gap-2' key={donation.ECRef}>
                    <span>{donation.RegulatedEntityName}</span>
                    <span>{donation.DonorName}</span>
                    <span>{donation.DonorStatus}</span>
                    <span>£{donation.Value}</span>
                    <span>{donation.ReportedDate}</span>
                </li>
            )
        })
    }
    return (
        <>
            <h1>Donations</h1>  
            <ul className='flex flex-col gap-2'>
                {renderDonations()}
            </ul>
        </>
    )
}


// EC REf
// Regulated Entity
// Value
// reported Date
// DonorName
//DonorStatus
