import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route, Link,useParams, Redirect } from 'react-router-dom'
import axios from 'axios'


const Paged = () => {
    const [total, setTotal] = useState(0);
    const perPage = 2
    const params = useParams()
    const page = params.page ? params.page : '/'
    const [list, setList] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/posts?_page=${page}&_limit=${perPage}`).then(
      (res) => {
        setList(res.data)
        setTotal(parseInt(res.headers['x-total-count'], 10))
      }
    )
  }, [page])

  return (
    <div>
      <Navigation total={total} perPage={perPage} page={page}/>
      {list.map((el,id) => <h3 key={id + 1}>{el.title}</h3>)}
    </div>
  )
}

const createArray = (num) => {
  const arr = Array(num)
  const arrKeys = arr.keys()
  const arrValue = Array.from(arrKeys)
  const mapped = arrValue.map((val) => (val + 1))

  return mapped
}

const createArray2 = (num) => {
  const arr = []

  for (let val = 1; val <= num; val++) {
    arr.push(val)
  }

  return arr
}

const Navigation = ({ total, perPage, page }) => {

  const totalPage = ((total === 0) ? 1 : Math.ceil(total / perPage))
  const arr = createArray2(totalPage)
  return (
    <div>
      {
        arr.map((val) => (
          <Link
            key={val}
            to={(val === 1) ? '/' : `/${val}` }
          >
            <button type="button" className="btn"
              style={{background: ((`${val}` === page) ? 'red' : 'blue')}}
            >
              {val}
            </button>
          </Link>
          ))
      }
    </div>
  )
}

const Paginated = () => {

return (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/1" />
        </Route>
        <Route path="/:page">
          <Paged />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
  )
}

export default Paginated
