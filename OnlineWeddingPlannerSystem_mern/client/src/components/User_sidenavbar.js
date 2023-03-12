import React from "react";
import { Link } from "react-router-dom"

const usersidenav = () =>{
    
    return(
        <>
         {/* Sidebar for user role */}
  <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
    <div class="position-sticky">
      <div class="list-group list-group-flush mx-3 mt-4">
       
        <Link to="/weddingform" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-lock fa-fw me-3"></i><span>Plan Your Wedding</span></Link>
        <Link to="/weddingdetails" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-chart-line fa-fw me-3"></i><span>Wedding details</span></Link>
        <Link to="/userservices" class="list-group-item list-group-item-action py-2 ripple">
          <i class="fas fa-chart-pie fa-fw me-3"></i><span>View Services</span>
        </Link>
        {/* <Link to="/vendors" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-chart-bar fa-fw me-3"></i><span>See Vendors</span></Link> */}
        {/* <Link to="/vendors" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-globe fa-fw me-3"></i><span>About us</span></Link> */}
        <Link to="/invoice" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-building fa-fw me-3"></i><span>Invoice</span></Link>
        {/* <Link to="/vendors" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-calendar fa-fw me-3"></i><span>Payment Status</span></Link > */}
        <Link to="/gallery" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-users fa-fw me-3"></i><span>Gallery</span></Link>
        {/* <Link to="/vendors" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-money-bill fa-fw me-3"></i><span>logout</span></Link> */}
      </div>
    </div>
  </nav>
  {/* Sidebar  */}

        </>
    )
}
export default usersidenav