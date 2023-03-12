// import axios from 'axios';
// import React, { useState,useEffect } from 'react';
// import Table from 'react-bootstrap/esm/Table';

// function Invoice() {
//     const[invoice,setInvoice] = useState([]);
//     const weddingId = sessionStorage.getItem("wedding_id");
//     useEffect(() => {
//         axios
//           .get(`http://localhost:3006/invoices/getInvoiceByWeddingId/${weddingId}`)  //getting details by using user id
//           .then((response) => {
//             setInvoice(response.data);
           
//           })
//           .catch((error) => console.error(error));
//       }, []);

//   return (
//     <div> <Table striped bordered hover>
//     <thead>
//       <tr>
//         <th>Hall charges</th>
//         <th>Catering Charges</th>
//         <th>Photograph Charges</th>
//         <th>Total</th>
//         <th>Payment</th>
        
        
//       </tr>
//     </thead>
//     <tbody>
      
//         <tr key={invoice.invoice_id}>
//           <td>{invoice.hallCharges}</td>
//           <td>{invoice.cateringCharges}</td>
//           <td>{invoice.photographyCharges}</td>
//           <td>{invoice.total}</td>  
//           <td><button className='btn btn-primary'>Pay</button></td>      
         
//         </tr>
      
//     </tbody>
//     </Table></div>
//   )
// }

// export default Invoice



import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/esm/Table';
import { useNavigate } from "react-router-dom";

function Invoice() {
    const [invoice, setInvoice] = useState([]);
    const weddingId = sessionStorage.getItem("wedding_id");
    let navigate = useNavigate();

    useEffect(() => {
        const fetchInvoice = async () => {
            try {
                const response = await axios.get(`http://localhost:3006/invoices/getInvoiceByWeddingId/${weddingId}`);
                setInvoice(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchInvoice();
    }, []);

    const handlepay=()=>{
      navigate("/paymentdetail");
     
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Hall charges</th>
                        <th>Catering Charges</th>
                        <th>Photograph Charges</th>
                        <th>Total</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {invoice && (
                        <tr key={invoice.invoice_id}>
                            <td>{invoice.hallCharges}</td>
                            <td>{invoice.cateringCharges}</td>
                            <td>{invoice.photographyCharges}</td>
                            <td>{invoice.total}</td>
                            <td><button className='btn btn-primary' onClick={()=>handlepay()}>Pay</button></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default Invoice;