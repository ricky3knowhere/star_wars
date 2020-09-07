/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import axios from 'axios'

function CreatePost(props) {
  const [userId, setUserId] = useState()
  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const idChange = (e) => {
    setUserId(e.target.value)
  }

  const titleChange = (e) => {
    setTitle(e.target.value)
  }

  const bodyChange = (e) => {
    setBody(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/posts',{ userId, title, body })
      .then((res) => {
        props.onCreated(res.data)
      })
  }
  return (
    <div>
      <h3>Form Input</h3>
      <form>
        User ID : {userId}<br />
        <input name="userId" onChange={idChange} /><br /><br />

        Title : {title}<br />
        <input name="title"  onChange={titleChange}/><br /><br />

        Body : {body}<br />
        <input name="body" onChange={bodyChange}/><br /><br />
        <button type="submit" onClick={handleClick}>Insert</button>
      </form>
      <br />
      <hr />
      <br />
    </div>
  )
}

export default CreatePost
