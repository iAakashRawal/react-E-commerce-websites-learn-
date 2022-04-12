import React, { useEffect, useState } from "react"
import '../App.css'
const UsingFetch = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products/")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
        console.log(data);
      })
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="con container bgimg ">
    <h1 className="p-2 mb-2 myhead">Shopping Cart</h1>
        <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav me-auto">
                {
                   users.map((myelemh ) => (
                    // console.log(myelemh.category)                   
                      <a className="nav-link" href="">{myelemh.category}</a>                    
                   ))
                }            
              </ul>
              <form className="d-flex">                            
                <button className="btn btn-primary" type="button">Search</button>
              </form>
            </div>
          </div>
        </nav>
        </div>
        <div className="row ps-2">
        {
            /* users.map((myelem ,idx) => (
                <p key={idx}>{myelem.name}</p>
            )) */

            /* users.map((myelem ) => (
              //console.log(myelem.category)
              <div>
                <img src={myelem.image}></img>
                <p>{myelem.category}</p>
              </div>
            )) */
            //console.log(users[1].id)
            users.map((myelem ) => (
                <div className="col-3 img_body mt-5 img_body">
                <div className="con m-2 mb-5 p-3 hst">
                    <img className="img-fluid myimg zm ms-3" src={myelem.image} />
                    <h5 className="mt-2"><b>${myelem.price}</b></h5>
                    <button type="button" className="btn btn-warning">Purchase Product</button>                  
                    <p className="">{myelem.category}</p>
                    <p>{myelem.title}</p>  
                </div>
                </div>                
            ))
            
        }

        </div>
      </div>

  )
}

export default UsingFetch
