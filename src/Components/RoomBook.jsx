import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { data, useNavigate } from 'react-router-dom';
import { AddRoomBook, EditData, GetRoomData, setid } from '../Slice/Slice';

export default function RoomBook() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [roomno, setRoomno] = useState("")
    const [chackin, setChackin] = useState("")
    const [chackout, setChackout] = useState("")

    const des = useDispatch()
    const nav = useNavigate()

    let { id, roomdetail } = useSelector((state) => {
        return state.json
    })

    useEffect(() => {
        des(GetRoomData())

        if (id != null) {
            const data = roomdetail.find(el => el.id == id)
            if (data) {
                setName(data.name)
                setEmail(data.email)
                setRoomno(data.roomno)
                setChackin(data.chackin)
                setChackout(data.chackout)
            }
        }

    }, [des, id])

    const Submit = (p) => {
        p.preventDefault()
        if (id != null) {
            des(EditData({
                id
                , name
                , email
                , roomno
                , chackin
                , chackout
            }))
        }
        else {
            des(AddRoomBook({
                name
                , email
                , roomno
                , chackin
                , chackout
            }))
        }
        setName("")
        setEmail("")
        setRoomno("")
        setChackout("")
        setChackin("")
        des(setid(null))

        nav('/detail')

    }
    return (
        <div>
            <h4>RoomBook</h4>

            <form action="" onSubmit={Submit}>
                room book form
                <fieldset >
                    <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)} placeholder='Entar name' /> <br />
                    <input type="text" value={email} name='email' onChange={(e) => setEmail(e.target.value)} placeholder='Entar Email' /> <br />
                    <input type="text" value={roomno} name='roomno' onChange={(e) => setRoomno(e.target.value)} placeholder='Entar Room number' /><br />
                    <span>Chackin</span><input name='chackin' onChange={(e) => setChackin(e.target.value)} value={chackin} type="date" /><br />
                    <span>Chackout</span><input name='chackout' onChange={(e) => setChackout(e.target.value)} value={chackout} type="date" /><br />
                    <button>Submit</button>
                </fieldset>
            </form>
        </div>
    )
}
