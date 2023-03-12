import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

function UserServices() {
    const [services, setServices] = useState([]);
    const [newService, setNewService] = useState({
      serviceCategory: "",
      serviceName: "",
      vendorName: "",
      servicePrice: "",
    });
    const [isEditing, setIsEditing] = useState(false);
    const [editingServiceId, setEditingServiceId] = useState(null);
  
    useEffect(() => {
      axios.get("http://localhost:3006/services/getAllServices").then((response) => {
        setServices(response.data);
      })
      .catch(error  => console.error(error));
    }, []);
  
    const handleInputChange = (event) => {
      setNewService({
        ...newService,
        [event.target.name]: event.target.value,
      });
    };
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (isEditing) {
        axios.put(`http://localhost:3006/services/updateService/${editingServiceId}`, newService)
          .then((response) => {
            const updatedServices = services.map((service) => {
              if (service.service_id === editingServiceId) {
                return response.data;
              }
              return service;
            });
            setServices(updatedServices);
            setNewService({
              serviceCategory: "",
              serviceName: "",
              vendorName: "",
              servicePrice: "",
            });
            setIsEditing(false);
            setEditingServiceId(null);
            window.alert("Service updated successfully");
          })
          .catch(error => console.error(error));
      } else {
        axios.post("http://localhost:3006/services/createService", newService)
          .then((response) => {
            setServices([...services, response.data]);
            setNewService({
              serviceCategory: "",
              serviceName: "",
              vendorName: "",
              servicePrice: "",
            });
            window.alert("Service added successfully");
            window.location.reload(true);
          })
          .catch(error => console.error(error));
      }
     
    };
    
  //=============================================================================================
    // const handleSubmit = (event) => {
    //   debugger;
    //   event.preventDefault();
  
    //   axios.post("http://localhost:3006/services/createService", newService).then((response) => {
        
    //     setServices([...services, response.data]);
    //     setNewService({
    //       serviceCategory: "",
    //       serviceName: "",
    //       vendorName: "",
    //       servicePrice: "",
    //     });
    //     window.location.reload(true);
    //     window.alert("Service  Added successfully");
    //   });
    // };
  //=============================================================================================
    const handleDelete = (idToDelete) => {
      axios.delete(`http://localhost:3006/services/deleteService/${idToDelete}`).then((response) => {
        setServices(services.filter((service) => service.service_id !== idToDelete));
        window.location.reload(true);
        window.alert("Service with id " +idToDelete +"deleted successfully");
      })
      .catch(error => console.error(error));
    };
  
    const handleUpdate = (idToUpdate) => {
      const serviceToUpdate = services.find((service) => service.service_id === idToUpdate);
      if (!serviceToUpdate) return;
  
      setIsEditing(true);
      setEditingServiceId(idToUpdate);
    
      setNewService({
        serviceCategory: serviceToUpdate.serviceCategory,
        serviceName: serviceToUpdate.serviceName,
        vendorName: serviceToUpdate.vendorName,
        servicePrice: serviceToUpdate.servicePrice,
      });
    
      const updatedService = {
        serviceCategory: newService.serviceCategory,
        serviceName: newService.serviceName,
        vendorName: newService.vendorName,
        servicePrice: newService.servicePrice,
      };
    
      axios
        .put(`http://localhost:3006/services/updateService/${idToUpdate}`, updatedService)
        .then((response) => {
          const updatedServices = services.map((service) => {
            if (service.service_id === idToUpdate) {
              return response.data;
            }
            return service;
          });
          setServices(updatedServices);
        })
        .catch((error) => console.error(error));
    };
    
  
    //original code
  //===============================================================================================
  //   const handleUpdate = (idToUpdate) => {
  
  // const serviceToUpdate = services.find((service) => service.service_id === idToUpdate);
  //   if (!serviceToUpdate) return;
  
  //   setNewService({
  //     serviceCategory: serviceToUpdate.serviceCategory,
  //     serviceName: serviceToUpdate.serviceName,
  //     vendorName: serviceToUpdate.vendorName,
  //     servicePrice: serviceToUpdate.servicePrice,
  //   });
  
  //     const updatedService = {
  //       serviceCategory: newService.serviceCategory,
  //       serviceName: newService.serviceName,
  //       vendorName: newService.vendorName,
  //       servicePrice: newService.servicePrice,
  //     };
    
  //     axios.put(`http://localhost:3006/services/updateService/${idToUpdate}`, updatedService)
  //       .then((response) => {
  //         const updatedServices = services.map((service) => {
  //           if (service.service_id === idToUpdate) {
  //             return response.data;
  //           }
  //           return service;
  //         });
  //         setServices(updatedServices);
  //         setNewService({
  //           serviceCategory: "",
  //           serviceName: "",
  //           vendorName: "",
  //           servicePrice: "",
  //         });
  //       })
  //       .catch(error => console.error(error));
  //   };
    //============================================================================================
  
    return (
      <>
      <div>
        <h1>Services</h1>
        {/* <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="serviceCategory"
            value={newService.serviceCategory}
            onChange={handleInputChange}
            placeholder="Category"
          />
          <input
            type="text"
            name="serviceName"
            value={newService.serviceName}
            onChange={handleInputChange}
            placeholder="Name"
          />
          <input
            type="text"
            name="vendorName"
            value={newService.vendorName}
            onChange={handleInputChange}
            placeholder="Vendor"
          />
          <input
            type="text"
            name="servicePrice"
            value={newService.servicePrice}
            onChange={handleInputChange}
            placeholder="Price"
          />
          <button  class="btn btn-primary" type="submit">Add Service</button>
        </form> */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Category</th>
              <th>Name</th>
              <th>Vendor</th>
              <th>Price</th>
              {/* <th>Edit</th>
              <th>Delete</th> */}
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.service_id}>
                <td>{service.serviceCategory}</td>
                <td>{service.serviceName}</td>
                <td>{service.vendorName}</td>
                <td>{service.servicePrice}</td>
                {/* <td>
                  <button  class="btn btn-primary" onClick={() => handleUpdate(service.service_id)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button class="btn btn-danger" onClick={() => handleDelete(service.service_id)}>
                    Delete
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
          </Table>
          </div>
          </>);
}

export default UserServices