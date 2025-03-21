import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const JsonLink = `http://localhost:5000/roomDetail`


export const AddRoomBook = createAsyncThunk("AddData", async (addData) => {
    const res = await axios.post(JsonLink, addData)
    return res.data
})
export const GetRoomData = createAsyncThunk("GetRoomData", async () => {
    let res = await axios.get(JsonLink)
    return res.data

})
export const DeleteData = createAsyncThunk("DeleteData", async (id) => {
    await axios.delete(`${JsonLink}/${id} `)
    return id

})
export const EditData = createAsyncThunk("EditData", async (data) => {
    console.log(data.id);
    await axios.put(`${JsonLink}/${data.id}`, data)
    return data
})


export const Slcie = createSlice({
    name: "HotelManegment",
    initialState: { roomdetail: null, loading: true, id: null },
    reducers: {
        setid: (state, action) => {
            state.id = action.payload
        }
    },
    extraReducers: ((builder) => {
        builder.addCase(GetRoomData.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(GetRoomData.fulfilled, (state, action) => {
            state.loading = false
            state.roomdetail = action.payload
        })
        builder.addCase(AddRoomBook.fulfilled, (state, action) => {
            state.roomdetail.push(action.payload)
        })
        builder.addCase(DeleteData.fulfilled, (state, action) => {
            state.roomdetail = state.roomdetail.filter((el) => el.id != action.payload)

        })
        builder.addCase(EditData.fulfilled, (state, action) => {
            state.roomdetail.map((el) => el.id == action.payload.id ? el = action.payload : el)
        })
    })
})
export const { setid } = Slcie.actions
export default Slcie.reducer
