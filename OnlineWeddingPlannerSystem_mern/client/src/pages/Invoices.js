 import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';



  
   

//import React from 'react'

function Invoices() {
    const [invoices, setInvoices] = useState([]);
    const [newInvoice, setNewInvoice] = useState({
      hallCharges: 0,
      cateringCharges: 0,
      photographyCharges: 0,
      total: 0,
    });
  
    useEffect(() => {
      // Fetch all invoices on component mount
      axios.get("http://localhost:3006/invoices/getAllInvoices")
        .then(res => setInvoices(res.data))
        .catch(err => console.error(err));
    }, []);
  
    const handleInputChange = e => {
      const { name, value } = e.target;
      setNewInvoice(prevInvoice => ({ ...prevInvoice, [name]: value }));
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      // Create new invoice
      axios.post("http://localhost:3006/invoices/createInvoice", newInvoice)
        .then(res => {
          setInvoices(prevInvoices => [...prevInvoices, res.data]);
          setNewInvoice({ hallCharges: 0, cateringCharges: 0, photographyCharges: 0, total: 0 });
        })
        .catch(err => console.error(err));
    };
  
    const handleDelete = invoice_id => {
      // Delete invoice by ID
      axios.delete(`http://localhost:3006/invoices/deleteInvoice/${invoice_id}`)
        .then(() => setInvoices(prevInvoices => prevInvoices.filter(invoice => invoice.invoice_id !== invoice_id)))
        .catch(err => console.error(err));
    };
  
    return (
      <div>
        {/* <h2>All Invoices</h2>
        <ul>
          {invoices.map(invoice => (
            <li key={invoice.invoice_id}>
              <p>Hall Charges: {invoice.hallCharges}</p>
              <p>Catering Charges: {invoice.cateringCharges}</p>
              <p>Photography Charges: {invoice.photographyCharges}</p>
              <p>Total: {invoice.total}</p>
              <button onClick={() => handleDelete(invoice.invoice_id)}>Delete</button>
            </li>
          ))}
        </ul> */}
        <Table striped bordered hover>
        <thead >
          <tr>
            <th>UserId</th>
            <th>Hall Charges</th>
            <th>Caterining Charges</th>
            <th>Photography Charges</th>
            <th>Total</th>
            {/* <th>Delete</th> */}
          </tr>
</thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.invoice_id}>
              <td>{invoice.invoice_id}</td>
              <td>{invoice.hallCharges}</td>
              <td>{invoice.cateringCharges}</td>
              <td>{invoice.photographyCharges}</td>
              <td>{invoice.total}</td>
             
              {/* <td>
                <button class="btn btn-danger" onClick={() => handleDelete(invoice.invoice_id)}>
                  Delete
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
        </Table>
        {/* <h2>Create New Invoice</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Hall Charges:
            <input type="number" name="hallCharges" value={newInvoice.hallCharges} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Catering Charges:
            <input type="number" name="cateringCharges" value={newInvoice.cateringCharges} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Photography Charges:
            <input type="number" name="photographyCharges" value={newInvoice.photographyCharges} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Total:
            <input type="number" name="total" value={newInvoice.total} onChange={handleInputChange} />
          </label>
          <br />
          <button className="btn btn-primary" type="submit">Create Invoice</button>
        </form> */}
      </div>
    );
  };
  
  
  


export default Invoices