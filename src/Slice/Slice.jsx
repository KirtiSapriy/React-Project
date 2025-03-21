import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'

const JsonLink = `http://localhost:3000/roomDetail`

export const AddRoomBook = createAsyncThunk("AddRoomBook", async (data) => {

    await axios.post(JsonLink, data)
    return data

})

export const GetRoomData = createAsyncThunk("GetRoomData", async () => {
    let res = await axios.get(JsonLink)
    return res
})
// 
// export const Deletdata = createAsyncThunk("Deletdata", async (id) => {

//     await axios.delete(`${JsonLink}/${id}`)
//     return id

// })

export const Slcie = createSlice({
    name: "Hotel Manegment",
    initialState: { roomdetail: [] },
    reducers: {
    },
    extraReducers: (builder => {
        builder.addCase(GetRoomData.fulfilled, (state, action) => {
            state.roomdetail = action.payload
        })
        builder.addCase(GetRoomData.pending, (state, action) => {
            // state.roomdetail.push(action.payload)
        })
        builder.addCase(AddRoomBook.fulfilled, (state, action) => {
            state.roomdetail.push(action.payload)
        })

        // builder.addCase(Deletdata.fulfilled, (state, action) => {

        //     let data = state.roomdetail.filter((el) => el.is != action.payload)
        //     state.roomdetail = data
        // })
    })
})

export default Slcie.reducer
