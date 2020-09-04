import React,{useEffect, useState}from 'react'
import axios from 'axios'

function CreatePost(){

  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/posts').then(
     (data) => setList(data.data)
    )
  }, []);

  const deleteData = (id) => {
    axios.delete('http://localhost:5000/posts/' + id).then(
      (data) => {
        if(data.status === 200){
          const undeleted = list.filter((post) => (post.id !== id))
          setList(undeleted)
        }
      }
    )  
  }

  return (
  
  <div>
  <h3>List Post</h3>
  
  <ul>
    {
      list.map((e) => {
      return( 
        <li>
        <h4>{e.title}</h4>
        <p>{e.body}</p>
        <button onClick={() => deleteData(e.id)}>Delete</button>
        </li>
        )
      })
    }
  </ul>

  </div>
  
  )
}

export default CreatePost
