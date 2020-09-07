import React, { useEffect, useState }from 'react'
import './App.css'
import axios from 'axios'
import CreatePost from './components/CreatePost'
import ListPost from './components/ListPost'
import Uppercase from './components/Uppercase'
import Wrapper from './components/Wrapper'
import Paginated from './components/pages/Paginated'

function App() {

  const [list, setList] = useState([])
  const click = () => alert('click')
  const attr = { name: 'Ishiki' }

  useEffect(() => {
    axios.get('http://localhost:3000/posts?page=1&limit=1').then(
      (data) => setList(data.data)
    )
  }, [])

  const handleOnCreated = (data) => {
    setList(list.concat([{id: data.id, title: data.title}]))
  }

  const handleOnDelete = (data) => {
    setList(data)
  }
  return (
    <div className="App">
      <CreatePost onCreated={handleOnCreated}/>
      <ListPost posts={list} onDeleted={handleOnDelete}/>
      {/* <Uppercase click={click} component={Wrapper} attr={attr}>This is content for Uppercase</Uppercase> */}
    <Paginated />

     </div>
  )
}

export default App
