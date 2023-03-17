import React from 'react'

const List2 = (props) => {
    let btn = "lent";
    let btnclr = "green";
    if(props.borrowed === "true"){
        btn = "borrowed";
        btnclr="red";
    }

  return (
    <div className='list'>
        <h2>Transactions</h2>
        <span className='listcontent'>
           
     
<span>Transaction 1 
<button type="button" className="btn btn-primary listbtn2" data-bs-toggle="modal" data-bs-target="#exampleModal2">
View
</button>
{/* Modal */}
<div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
<div className="modal-content">
  <div className="modal-header">
    <h1 className="modal-title fs-5" id="exampleModalLabel">Transactions</h1>
    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
  </div>
  <div className="modal-body">
    <span className='modaldata'>Anish Ghogare</span>
    <span className='modaldata'>Mumbai</span>
    <span className='modaldata'>1000 Rs</span>
    <span className='modaldata'> <button style={{color:"white", backgroundColor:btnclr, borderRadius:"10px", border:"none", width:"100px"}}>{btn}</button> </span>
  </div>
  <div className="modal-footer">
    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="button" className="btn btn-primary">Save changes</button>
  </div>
</div>
</div>
</div>

</span>

<span>Transaction 2
<button type="button" className="btn btn-primary listbtn2" data-bs-toggle="modal" data-bs-target="#exampleModal2">
View
</button>

</span>

<span>Transaction 3 
<button type="button" className="btn btn-primary listbtn2" data-bs-toggle="modal" data-bs-target="#exampleModal2">
View
</button>

</span>

        
        </span>
    </div>
  )
}

export default List2


