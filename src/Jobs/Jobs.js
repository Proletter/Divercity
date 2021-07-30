import React from 'react'
import { useState, useEffect } from 'react'
import JobList from "../components/List"
import {URI} from '../utils/constants'



    function Job() {
    
        const [jobs, setJobs] = useState([])

 async function getJobs() {


fetch("https://divercity-test.herokuapp.com/jobs")
  .then(response => response.json())
    .then(result => {
        setJobs(result.jobs)
      console.log(result)
  } )
  .catch(error => console.log('error', error));
    }

useEffect(() => {
   getJobs()
}, [])


        console.log(jobs)
    return (
    <>
            <div>
                {jobs.map(i => <JobList title={i.title} description={i.description} type={i.type} location={ i.location}/>)}

        </div>

    </>
)
    
}


export default Job