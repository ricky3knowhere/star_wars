/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react'
import axios from 'axios'

function CreatePost(props){

  const { posts, onDeleted } = props

  console.log(posts)
  const deleteData = (id) => {
    axios.delete('http://localhost:3000/posts/' + id).then(
      (data) => {
        if(data.status === 200){
          const undeleted = posts.filter((post) => (post.id !== id))
          onDeleted(undeleted)
        }
      }
    )
  }

  return (

    <div>
      <h3>List Post</h3>

      <ul>
        {
          posts.map((e) => {
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
