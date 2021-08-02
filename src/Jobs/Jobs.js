import React from 'react'
import { useState, useEffect } from 'react'
import JobList from "../components/List"
import {URI} from '../utils/constants'
import styled from 'styled-components'
import "./Jobs.css"


    function Job() {   
        const [jobs, setJobs] = useState([])
        const [searchName, setSearchName] = useState("");
       const isAuthenticated = localStorage.getItem('isAuthenticated')
 async function getJobs() {

fetch(`${URI}/jobs`)
  .then(response => response.json())
    .then(result => {
        setJobs(result.jobs)
  } )
  .catch(error => console.log('error', error));
      }
      
  


useEffect(() => {
  getJobs()
}, [])

      


  let filteredJobs = jobs;
  if (searchName) {
      filteredJobs = jobs.filter((el) => {
          
          return el.location?.includes(searchName) ||
              el.title?.includes(searchName) ||
              el.skills_tag?.join(',').includes(searchName)
        
    }) 
    
  }

  
     
        return (
        
            <>
                <div className="form-style">
                    
        <form >
         
            <p>Input your filter query</p>
           
          
            <input
              type="text"
              className="name-input"
              name="name"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              
            />
           
        
         </form>
              
                </div>
            <div>
                    {filteredJobs.map(i => <JobList title={i.title} isAuthenticated={isAuthenticated} description={i.description} type={i.type} jobId={i.id} location={i.location} skills_tag={i.skills_tag}/>)}

        </div>

    </>
)
    
}


export default Job