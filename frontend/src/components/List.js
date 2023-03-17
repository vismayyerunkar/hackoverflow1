import React, { useEffect, useState } from 'react'
import '../styles/List.css'
import axios from 'axios';


const List = () => {


  const [orders, setOrders] = useState([]);
  const [activeDetail, setActiveDetail] = useState();

  useEffect(() => {
    axios.get("http://172.17.29.30:5000/api/v1/u/getOrderList", {
      headers: {
        token: localStorage.getItem('token')
      }
    }).then((res) => {
      console.log(res.data.orders);
      setOrders(res.data.orders);
    });

  }, []);

  console.log(activeDetail)


  return (
    <div className='list'>
      <h2>Marketplace</h2>
      <span className='listcontent'>

        {
          orders.map((order) => {
            return (
              <span>{order.name}
                <button onClick={()=>setActiveDetail(order)} type="button" className="btn btn-primary listbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  View
                </button>
              </span>
            )
          })
        }




        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Marketplace</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <span className='modaldata'>{activeDetail?.name}</span>
                <span className='modaldata'>{activeDetail?.address}</span>
                <span className='modaldata'>₹ {activeDetail?.price}</span>
                {/* <span className='modaldata'>Address</span> */}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>




      </span>
    </div>
  )
}

export default List
