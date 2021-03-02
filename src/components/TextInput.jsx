import React from 'react'
import { Formik, Form, Field, useField } from 'formik'
import * as Yup from 'yup'

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="input-group">
            <div>

                <p className="label" htmlFor={props.id || props.name}>{label}</p>
                <input className="text-button" {...field} {...props} />
            </div>
            <div className="error-valisation">

                {meta.touched && meta.error ? (
                    <p className="error">{meta.error}</p>

                ) : null}
            </div>



        </div>
    );
}

export default TextInput;