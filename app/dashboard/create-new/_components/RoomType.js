import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select.jsx"
function RoomType({selectedRoomType}) {
  return (
    <div>
      <label htmlFor="" className='text-gray-600 font-semibold'>Select Room Type</label>
      <Select onValueChange={(value)=>selectedRoomType(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Room Type Of Your Choice" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Living Room">Living Room</SelectItem>
          <SelectItem value="Bed Room">Bed Room</SelectItem>
          <SelectItem value="Kitchen">Kitchen</SelectItem>
          <SelectItem value="Industrial">Industrial</SelectItem>
          <SelectItem value="Bathroom">Bathroom</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default RoomType
