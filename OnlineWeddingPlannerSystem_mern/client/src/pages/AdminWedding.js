import React, { useEffect ,useState} from 'react'
import axios from "axios";
import Table from 'react-bootstrap/Table';

function AdminWedding() {
    
        const [weddings, setWeddings] = useState([]);
    
        useEffect(() => {
            axios.get("http://localhost:3006/weddings/getAllWeddings").then((response) => {
              setWeddings(response.data);
            })
            .catch(error  => console.error(error));
          }, []);
       const   handleUpdate=(id)=>{
        
        axios.patch(`http://localhost:3006/weddings/statusApprove/${id}`).then((response)=>{
            console.log(response);
          //  window.location.reload(true);
        })
            
          }
  return (
   <>
   <div> <Table striped bordered hover>
   <thead>
     <tr>
       <th>Bridename</th>
       <th>Groomname</th>
       <th>start Date</th>
       <th>End Date</th>
       <th>Hall</th>
       <th>Photography</th>
       <th>Catering</th>
       <th>status</th>
       <th>aprove</th>
     </tr>
   </thead>
   <tbody>
     {weddings.map((wedding) => (
       <tr key={wedding.wedding_id}>
         <td>{wedding.bridename}</td>
         <td>{wedding.groomname}</td>
         <td>{wedding.start_time}</td>
         <td>{wedding.end_time}</td>
         <td>{wedding.hall}</td>
         <td>{wedding.catering}</td>
         <td>{wedding.photography}</td>
         {wedding.status &&(<td>Aproved</td>)}
         {!wedding.status &&(<td>NotAproved</td>)}
         <td>
         <button  class="btn btn-primary" onClick={() => handleUpdate(wedding.wedding_id)}>
                 Aprove
               </button>
         </td>
       </tr>
     ))}
   </tbody>
   </Table>
   </div>
   </>
    
  )
}

export default AdminWedding