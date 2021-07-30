import List from './components/List'
import Login from './Login/Login'
import styled from 'styled-components'
import Jobs from './Jobs/Jobs'


const Center = styled.a`

display: flex;
justify-content: center;
align-items: center;
height: 100%;

`

const job = [
  {
    "id": 1,
    "title": "Full Stack Developer",
    "description": "<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
    "location": "San Francisco, California",
    "company": "divercity",
    "job_type": "Internship",
    "applicant_count": 2,
    "skills_tag": [
        "React",
        "Git",
        "JavaScript",
        "HTML",
        "Web architecture and development framework"
    ]
},
]

function App() {
  return (
      <>
        <Center >
        {/* <List job={job} /> */}
        <Jobs/>
            {/* <Login/> */}
        </Center>
      </>
   
  );
}

export default App;
