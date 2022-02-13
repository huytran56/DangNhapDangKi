import React from 'react'
import {Formik, Form} from 'formik'
import {Link, useNavigate} from 'react-router-dom'
import {TextField} from './TextField'
import * as Yup from 'yup'
import ImageBanner from './anh.jpeg'
import {signin} from '../api/auth'
import history from '../history/history'

export const Signin = () => {
    let navigate = useNavigate()
    
    const validate = Yup.object({
        email: Yup.string()
        .email('Email is invalid')
        .required('Required'),
        password: Yup.string()
        .min(6,'Must be at least 6 characters')
        .required('Required'),
    })
    
    const handleOnClickLogin = async (
        value
    ) => {
        const {email, password} = value
        const res = await signin(email,password)
        console.log(res.data.roles)
        if(res.data.roles == 'ROLE_ADMIN'){
            return navigate('/admin')
        }
    }
    
    return (
        <Formik
            initialValues = {{
                email: '',
                password: '',
        }}
        validationSchema={validate}
        onSubmit={handleOnClickLogin}
        >    
            {formik => (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-5">
                <h1 className="my-4 font-weight-bold-display-4">Sign In</h1>
                <Form>
                    <TextField label="Email" name="email" type="email" />
                    <TextField label="Password" name="password" type="password" />
                    <button className="btn btn-dark mt-3" type="submit">Login</button>
                    <button className="btn btn-danger mt-3" type="reset">Reset</button>
                    <div style={{padding : 20}}>
                    <Link to="/signup">Go to Sign Up</Link>
                    </div>
                </Form>
                </div>  
            <div className="col-md-7">
                <img className="img-fluid w-100" src={ImageBanner} />
            </div>  
        </div>
        </div>
                
            )}
        </Formik>
    )
}
