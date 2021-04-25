import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import '../../styles/dashboard/dashboard-actions.css'



const ActionCard = ({title, text, link, style}) => {
   
  return (
    <div className="col-12 col-lg-4">
      <div className="dashboard-action-card">
        <Link to={link} >
          <div className="action-card-inner">
            <div className="row">
              <div className="col-3">
                <div className="icon-placeholder"></div>
              </div>
              <div className="col-9">
                <div className={`title ${style}`}>{title}</div>
                <div className={style}>{text}</div>
              </div>
            </div>
          </div>
        </Link>
    </div>
  </div>    
  )
}

export default ActionCard