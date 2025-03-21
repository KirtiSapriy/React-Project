import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { data } from 'react-router-dom';
import { AddRoomBook } from '../Slice/Slice';

export default function RoomBook() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [roomno, setRoomno] = useState("")
    const [chackin, setChackin] = useState("")
    const [chackout, setChackout] = useState("")

    const des = useDispatch()

    console.log(name
        , email
        , roomno
        , chackin
        , chackout);

    const Submit = (p) => {
        p.preventDefault()

        des(AddRoomBook({
            name
            , email
            , roomno
            , chackin
            , chackout
        }))

        setName("")
        setEmail("")
        setRoomno("")
        setChackout("")
        setChackin("")

    }
    return (
        <div>
            <h4>RooBook</h4>

            <form action="" onSubmit={Submit}>

                <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)} placeholder='Entar name' />
                <input type="text" value={email} name='email' onChange={(e) => setEmail(e.target.value)} placeholder='Entar Email' />
                <input type="text" value={roomno} name='roomno' onChange={(e) => setRoomno(e.target.value)} placeholder='Entar Room number' />
                <span>Chackin</span><input name='chackin' onChange={(e) => setChackout(e.target.value)} value={chackin} type="date" />
                <span>Chackout</span><input name='chackout' onChange={(e) => setChackin(e.target.value)} value={chackout} type="date" />
                <button>Submit</button>

            </form>
        </div>
    )
}
