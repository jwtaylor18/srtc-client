import React from 'react'
import {Link} from 'react-router-dom'
import ActionCard from './dashboard-action-card'

const DashboardActions = ({isOperator}) => {

  const playerActions = [
    {
      "key": 1,
      "title": "My Profile",
      "text": "View and edit your public and private profile information",
      "link": "/profile",
      "style": "enabled-action"
    },
    {
      "key": 2,
      "title": "Member Directory",
      "text": "Find players and tennis facility operators",
      "link": "/profiles",
      "style": "enabled-action"
    },
    {
      "key": 3,
      "title": "Tennis Courts",
      "text": "Search for tennis facilities by name",
      "link": "/facilities",
      "style": "enabled-action"
    },
    {
      "key": 4,
      "title": "Reservations *",
      "text": "View and make court reservations",
      "link": "/dashboard",
      "style": "disabled-action"
    },
    {
      "key": 5,
      "title": "Weather",
      "text": "Get a weather forecast by tennis court",
      "link": "/weather",
      "style": "enabled-action"
    },
    {
      "key": 6,
      "title": "Conversations *",
      "text": "Connect with other TennisDesk members",
      "link": "/dashboard",
      "style": "disabled-action"
    }
  ]
  return (
    <div>
      <div className="row">
        {playerActions.map(action => (
          <ActionCard key={action.key} title={action.title} text={action.text} link={action.link} style={action.style}/>
        ))}
      </div>
      <div>* Future Features</div>
      <hr></hr>
      {isOperator ? 
        <div>
          <h2>Facility Operator Actions</h2>
          <div className="row">
            <ActionCard key={7} title="Create Facility" text="Create a new facility" link="/create-facility"/>
          </div>
        </div> : null }
      
  </div>




  )
}

export default DashboardActions