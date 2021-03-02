import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import TextInput from './TextInput';
import Checkbox from './Checkbox';




const initialValues = {
     name: "",
     email: "",
     password: "",
     acceptedTerms: false,

}
const onSubmit = values => {
     console.log('form data', values)


}


const validationSchema = Yup.object({
     name: Yup.string().max(15, 'Must be 15 characters or less').required(' name required ! '),
     email: Yup.string().email('Invalid Email format').required('email required ! '),
     password: Yup.string().min(10, 'Must be 10 characters or more').required('password required ! '),
     acceptedTerms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions.'),
})
const AppForm = () => {
     return (
          <div className="container">
               <div className="container-content">

                    <header>
                         <h1>form validations</h1>
                    </header>
                    <Formik
                         initialValues={initialValues}
                         validationSchema={validationSchema}
                         onSubmit={onSubmit}

                    >
                         <Form >


                              <TextInput
                                   label="Full Name"
                                   id="name"
                                   name="name"
                                   type="name"
                                   className="form-control"
                                   placeholder=" Full Name "
                              />



                              <TextInput
                                   label="Email Adress"
                                   id="email"
                                   name="email"
                                   type="text"
                                   className="form-control"
                                   placeholder="fezebr2000@gmail.com"
                              />

                              <TextInput
                                   label="Password"
                                   id="password"
                                   name="password"
                                   type="password"
                                   className="form-control"
                                   placeholder="your password "
                              />

                              <Checkbox
                                   name="acceptedTerms"
                              />

                              <button type="reset">Submit</button>
                         </Form>
                    </Formik>
               </div>
          </div>
     );
}

export default AppForm;