import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function RoomDetail() {

  // const [data, setdata] = useState(null)

  let roomdata = useSelector((state) => {
    return state.json
  })
  console.log(roomdata);

  return (
    <div>
      <table>
        {roomdata.RoomDetail && roomdata.RoomDetail.map((el, i) => {
          return (
            <div key={el.id}>
              <tr>

                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.roomno}</td>
                <td>{el.chackin}</td>
                <td>{el.chackout}</td>
                <td><button>Edit</button></td>
                <td><button>Delete</button></td>
              </tr>
            </div>
          )
        })}
      </table>

    </div>
  )
}
