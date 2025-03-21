import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Deletdata } from '../Slice/Slice'

export default function RoomDetail() {

  // const [data, setdata] = useState(null)
  const dis = useDispatch()
  let roomdata = useSelector((state) => {
    return state.json.roomdetail
  })
  console.log(roomdata);

  return (
    <div>
      <table>
        {roomdata && roomdata.map((el, i) => {
          return (
            <div key={el.id}>
              <tr>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.roomno}</td>
                <td>{el.chackin}</td>
                <td>{el.chackout}</td>
                <td><button>Edit</button></td>
                <td><button onClick={() => { dis(Deletdata(el.id)) }}>Delete</button></td>
              </tr>
            </div>
          )
        })}
      </table>

    </div>
  )
}
