// import axios from 'axios'
// import React , {useState , useEffect, useContext} from 'react'
// import { AuthContext } from '../helpers/AuthContext';
// import Table from 'react-bootstrap/Table';


// function Weddingdetails() {
//   const id=sessionStorage.getItem("id");
//    const [weddingdetails, setWeddingDetails] = useState([]);
//    const { AuthState } = useContext(AuthContext);
//   useEffect(() => {
//     axios
//       .get(`http://localhost:3006/weddings/getWeddingByUserId/${id}`)  //getting details by using user id
//       .then((response) => {
//         setWeddingDetails(response.data);
//         sessionStorage.setItem("wedding_id",response.data.wedding_id );
//       })
//       .catch((error) => console.error(error));
      
//   }, []);
//   return (
//     <Table striped bordered hover>
//     <thead>
//       <tr>
//         <th>Bridename</th>
//         <th>Groomname</th>
//         <th>start Date</th>
//         <th>End Date</th>
//         <th>Hall</th>
//         <th>Photography</th>
//         <th>Catering</th>
//         <th>status</th>
        
//       </tr>
//     </thead>
//     <tbody>
      
//         <tr key={weddingdetails.wedding_id}>
//           <td>{weddingdetails.bridename}</td>
//           <td>{weddingdetails.groomname}</td>
//           <td>{weddingdetails.start_time}</td>
//           <td>{weddingdetails.end_time}</td>
//           <td>{weddingdetails.hall}</td>
//           <td>{weddingdetails.catering}</td>
//           <td>{weddingdetails.photography}</td>
//           {weddingdetails.status &&(<td>Aproved</td>)}
//           {!weddingdetails.status &&(<td>NotAproved</td>)}
         
//         </tr>
      
//     </tbody>
//     </Table>
//   )
// }

// export default Weddingdetails

import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../helpers/AuthContext';
import Table from 'react-bootstrap/Table';

function Weddingdetails() {
  const id = sessionStorage.getItem("id");
  const [weddingdetails, setWeddingDetails] = useState(null);
  const { AuthState } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3006/weddings/getWeddingByUserId/${id}`);
        setWeddingDetails(response.data);
        sessionStorage.setItem("wedding_id", response.data.wedding_id);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Table striped bordered hover>
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
        </tr>
      </thead>
      <tbody>
        {weddingdetails && (
          <tr key={weddingdetails.wedding_id}>
            <td>{weddingdetails.bridename}</td>
            <td>{weddingdetails.groomname}</td>
            <td>{weddingdetails.start_time}</td>
            <td>{weddingdetails.end_time}</td>
            <td>{weddingdetails.hall}</td>
            <td>{weddingdetails.catering}</td>
            <td>{weddingdetails.photography}</td>
            {weddingdetails.status && (<td>Aproved</td>)}
            {!weddingdetails.status && (<td>NotAproved</td>)}
          </tr>
        )}
      </tbody>
    </Table>
  )
}

export default Weddingdetails;