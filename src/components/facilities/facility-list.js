import React, {useState} from "react";
import FacilityCard from './facility-card';

const FacilityList = (props) => {

  return (
  <div>
    <div className="row">
      {props.facilities.map(facility => (
        <FacilityCard key={facility._id} facility={facility}/>
      ))}
    </div>
  </div>
   
  )}

export default FacilityList