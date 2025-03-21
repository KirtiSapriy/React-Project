import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteData, GetRoomData, setid } from '../Slice/Slice'
import { useNavigate } from 'react-router-dom'

export default function RoomDetail() {

  const dispacth = useDispatch()
  const naviget = useNavigate()
  useEffect(() => {
    dispacth(GetRoomData())
  }, [dispacth])
  const data = useSelector((state) => {
    return state.json
  })

  const edit = (id) => {
    dispacth(setid(id))
    naviget('/Roombook')
  }

  return (
    <div><center>
      <h1>RoomDetail</h1>

      <div>
        <table border={1}>
          <thead>
            <tr>
              <td>Name</td>
              <td>email</td>
              <td>room no</td>
              <td>Chackin</td>
              <td>Chakout</td>
              <td colSpan={2}>Actio</td>

            </tr>

          </thead>
          <tbody>
            {data.roomdetail && data.roomdetail.map((el) => {
              return <tr key={el.id}>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.roomno}</td>
                <td>{el.chackin}</td>
                <td>{el.chackout}</td>
                <td><button onClick={() => edit(el.id)}>Edit</button></td>
                <td><button onClick={() => dispacth(DeleteData(el.id))}>Delete</button></td>
              </tr>
            })}

          </tbody>
        </table>
      </div></center>
    </div>
  )
}
