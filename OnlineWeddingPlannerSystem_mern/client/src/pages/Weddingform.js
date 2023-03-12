
// WeddingDetailsForm.js
import React, { useState, useEffect , useField, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import jwt_decode from 'jwt-decode';

function WeddingDetailsForm() {
  const {authstate } = useContext(AuthContext);
  //const userId = jwt_decode(authstate.token).id;
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    bridename: '',
    groomname: '',
    start_time: '',
    end_time: '',
    hall:'',
    catering:'',
    photography:'',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3006/weddings/createWedding", {
      UserId: sessionStorage.getItem("id"),
      bridename: formData.bridename,
      groomname: formData.groomname,
      start_time: formData.start_time,
      end_time: formData.end_time,
      hall: formData.hall,
      catering: formData.catering,
      photography: formData.photography,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      navigate("/weddingdetails");
  };
  return (
    <div className='weddingformcontainer'>
      <center>
    <form onSubmit={handleSubmit}>
      
      <label>Bride's Name:</label>
      <input type="text" value={formData.bridename} onChange={(e) => setFormData({ ...formData, bridename: e.target.value })} />
      <br></br>
      <br></br>

      <label>Groom's Name:</label>
      <input type="text" value={formData.groomname} onChange={(e) => setFormData({ ...formData, groomname: e.target.value })} />
      <br></br>
      <br></br>

      <label>Start_time:</label>
      <input type="date" value={formData.start_time} onChange={(e) => setFormData({ ...formData, start_time: e.target.value })} />
      <br></br>
      <br></br>

      <label>end time:</label>
      <input type="date" value={formData.end_time} onChange={(e) => setFormData({ ...formData, end_time: e.target.value })} />
      <br></br>
      <br></br>

      <label>Hall:</label>
      <select id= "mydropdown" onChange={(e) => setFormData({ ...formData, hall: e.target.value })}>
      <option value="select">select</option>
      <option value="rani hall">rani hall</option>
      <option value="vidya hall">vidya hall</option>
      <option value="raja hall">raja hall</option>
      </select>
      
      <br></br>
      <br></br>

      <label>Catering:</label>
      <select id= "mydropdown" onChange={(e) => setFormData({ ...formData, catering: e.target.value })}>
      <option value="select">select</option>
      <option value="prateek Catering">prateek Catering</option>
      <option value="sunbeam Catering">sunbeam Catering</option>
      <option value="lucky Catering">lucky Catering</option>
      </select>
      <br></br>
      <br></br>

      <label>Photography:</label>
      <select id= "mydropdown" onChange={(e) => setFormData({ ...formData, photography: e.target.value })}>
      <option value="select">select</option>
      <option value="piyush photographer">piyush photographer</option>
      <option value="payal photographer">payal photographer</option>
      <option value="vidya photographer">vidya photographer</option>
      </select>
      <br></br>
      <br></br>

      <button type="submit">Add Wedding Details</button>
    </form>
    </center>
    </div>
  );
}
export default WeddingDetailsForm;