import { useState } from 'react'
import RoomBook from './Components/RoomBook'
import RoomDetail from './Components/RoomDetail'
import { Route, Routes } from 'react-router-dom'
import RoomList from './Components/RoomList'
import Navbar from './Components/NAvbar'
import { Provider } from 'react-redux'
import { Store } from './Store/Store'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={Store}>
        <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<RoomList />}></Route>
          <Route path='/Detail' element={<RoomDetail />}></Route>
          <Route path='/Roombook' element={<RoomBook />}></Route>

        </Routes>
      </Provider>
    </>
  )
}

export default App
