import React from 'react'
import styled from 'styled-components'



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

.job-description {
    margin-top: 1em;
    font-size: 1em;
    margin-bottom: 1em
}
`


function List({
  title,
  description,
  type,
  location,
  skills_tag
}) {
    
    return(

        <Container>
            <div className="job-wrapper">
                <div className="title">
                    {title}
                </div>
                <div className="job-description">
                     {description}
                 </div>
           
            {type}
            {location}
            {skills_tag}

            </div>
            
       </Container>
    )
}

export default List