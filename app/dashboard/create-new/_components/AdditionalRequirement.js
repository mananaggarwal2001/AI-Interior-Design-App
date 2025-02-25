"use client"
import { Textarea } from '../../../../components/ui/textarea'
const AdditionalRequirement = ({addtionalInformation}) => {
    return (
        <div className='mt-4'>
            <label className='text-gray-600 font-semibold' htmlFor="">Enter Additional Requirements (Optional)</label>
            <Textarea className='mt-3 resize-none h-20' onChange={(e) => addtionalInformation(e.target.value)} />
        </div>
    )
}

export default AdditionalRequirement
