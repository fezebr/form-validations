import React from 'react'
import { Formik, Form, Field, useField } from 'formik'
import * as Yup from 'yup'

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            
                <p className="label" htmlFor={props.id || props.name}>{label}</p>
                <input className="text-button" {...field} {...props} />
                {meta.touched && meta.error ? (
                    <p className="error">{meta.error}</p>

                ) : null}
         

           
        </>
    );
}

export default TextInput;