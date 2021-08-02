import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {URI} from '../utils/constants'



const Container = styled.section`

:root {
--bistre: #291711ff;
--army-green: #474b24ff;
--ocean-green: #5fbb97ff;
--celadon: #8ddca4ff;
--maximum-purple: #63326eff;
}



back-ground-colour: red;
color: green;
padding: 1rem 2rem;
width: 70%;
margin: 0 auto;


.job-wrapper {
  border-radius: 5px;
  -webkit-box-shadow: -12px 1px 18px -3px rgba(0,0,0,0.43); 
box-shadow: -12px 1px 18px -3px rgba(0,0,0,0.43);
  /* background-color: green; */
  color: #63326eff;
  padding: 1rem 2rem;
  width: 70%;
//   height: 15em;
  margin: 0 auto;
  word-wrap: break-word;
white-space: pre-wrap;
word-break: break-word;
font-family: Arial, Helvetica, sans-serif; 
}
.title {
    text-align: center;
    color: blue;
    margin-top: 1em
}

.pop-up {
  position: relative;
  left: 300px
}
.job-description {
    margin-top: 1em;
    font-size: 1em;
    margin-bottom: 1em
}

button {
  display: flex;
  align-self: end;
  bottom: 2em
}
`


function List({
  title,
  description,
  type,
  location,
  skills_tag,
  isAuthenticated,
  jobId
}) {
    
const [displayResult, setDisplayResult] = useState(null)
const [popUp, setPopUp] = useState(false)
const token = localStorage.getItem('token')


function applyToJob(){
const myHeaders = new Headers();
myHeaders.append("Authorization", token);
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

const urlencoded = new URLSearchParams();
urlencoded.append("motivation", "I really want the job");
urlencoded.append("cover_letter", "I am a good person");

const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded

};

fetch(`${URI}/jobs/${jobId}/apply`, requestOptions)
  .then(response => response.json())
  .then(result =>{
    setDisplayResult(result.message)
    console.log(result.message)
    setPopUp(true)
    setTimeout(() => {
       setPopUp(false)
    }, 500);
  } )
  .catch(error => console.log('error', error));


}

    return(

        <Container>
            <div className="job-wrapper">
                <div className="title">
                    {title}
                </div>
          <div className="job-description">
                {/* dangerouslySetInnerHTML doesn't support nested tags hence stripping out html tags*/}
                     {description.replace( /(<([^>]+)>)/ig, '')}
                 </div>
                 {popUp &&<div className="pop-up">{displayResult}</div>}
           
          {type}
           Location: {location}
          
          {skills_tag.map(i => <p>{i}</p>)}
          {!isAuthenticated && "Sorry you can't apply for this job yet, you are not signed in please sign in first by clicking:"}

          {isAuthenticated?<button disabled={popUp} onClick={(e)=>{ applyToJob(jobId)} }>
            Apply
          </button >:
          <Link to={`/signin`} activeClassName="active">Here</Link>}

            </div>
            
       </Container>
    )
}

export default List