import React from 'react'
import { useState, useEffect } from 'react'
import JobList from "../components/List"
import {URI} from '../utils/constants'



    function Job() {   
        const [jobs, setJobs] = useState([])
        const [searchName, setSearchName] = useState("");

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
                <div>
                     <div className="search-options">
        <form>
          <fieldset>
            <legend>Search name:</legend>
            <label htmlFor="name-input">Name:</label>
            <br />
            <input
              type="text"
              className="name-input"
              name="name"
              required
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              
            />
           
          </fieldset>
         </form>
              </div>
                </div>
            <div>
                    {filteredJobs.map(i => <JobList title={i.title} description={i.description} type={i.type} location={i.location} skills_tag={i.skills_tag}/>)}

        </div>

    </>
)
    
}


export default Job