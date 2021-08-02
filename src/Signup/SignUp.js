import React, {useState} from 'react'
import styled from 'styled-components'
import {URI} from '../utils/constants'
import { useEffect } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'



const Container = styled.section`
display: flex;
justify-content: center;
align-items: center;


h1 {
	font-weight: bold;
	margin: 0;
}

h2 {
	text-align: center;
}

p {
	font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
}

span {
	font-size: 12px;
}

a {
	color: #333;
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
}

button {
	border-radius: 20px;
	border: 1px solid #FF4B2B;
	background-color: #FF4B2B;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
	margin-top: 30px;
}

button:active {
	transform: scale(0.95);
}

button:focus {
	outline: none;
}



form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}

input {
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
	background-color: #fff;
	border-radius: 10px;
  	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
			0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 50%;
	max-width: 100%;
	min-height: 480px;
    display: flex !important;
}



.sign-in-container {
    align-item: center;
	left: 0;
	width: 80%;
    margin: 0 auto;
}




`

const SignUp = () => {

	
	function registerUser(values, setSubmitting,resetForm) {

		
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer my-token'
        },
        body: JSON.stringify(values)
    };
    fetch(`${URI}/register`, requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();
            if (!response.ok) {
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            console.log(data)
            resetForm(initialValues)
            setSubmitting(false)
        })
		.catch(error => {
			console.error('There was an error!', error);
		});
	}

    const initialValues = { username: '', password: '', passwordConfirmation: '', name: '' }

    const DisplayingErrorMessagesSchema = Yup.object().shape({
   username: Yup.string()
     .min(2, 'username too short!')
     .max(50, 'username too Long!')
     .required('please input a username'),
     password: Yup.string().min(8,"password should be at least 8 characters long").required('Password is required'),
     passwordConfirmation: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match!'),
    name: Yup.string().required('please input your name')
 });

    return (
        

        <Container>

           
        <div class="container" id="container">
        
                <div class="form-container sign-in-container">
                     <Formik
        initialValues={initialValues}
        validationSchema={DisplayingErrorMessagesSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            console.log(values)
                        
                            registerUser(values, setSubmitting, resetForm)
                            resetForm(initialValues)
                            
                            
        
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
    
       }) => (
         <form onSubmit={handleSubmit}>
         <h1>Sign up</h1>
            <span>You need an account to use this service</span>
           <input
           placeholder="Username"
             type="username"
             name="username"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.username}
           />
           {errors.username && touched.username && errors.username}
           <input
             type="password"
            name="password"
             placeholder="Password" 
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
            {errors.password && touched.password && errors.password}
            <input
            type="password"
            placeholder="Please re-enter password"
             name="passwordConfirmation"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.repeatPassword}
                        />
             {errors.passwordConfirmation && touched.passwordConfirmation && errors.passwordConfirmation}
            <input
             placeholder="Please enter your name"
             type="name"
             name="name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
                        />
            {errors.name && touched.name && errors.name}
           <button type="submit" disabled={isSubmitting} >
             Submit
           </button>
         </form>
       )}
     </Formik>
       
        </div>
   
        </div>


        </Container>


    )

}


export default SignUp