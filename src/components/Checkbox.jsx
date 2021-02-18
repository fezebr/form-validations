import React from 'react'
import { Formik, Form, Field, useField } from 'formik'
import * as Yup from 'yup'



const Checkbox = ({ children, ...props }) => {

    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>


            <label className="label">accept roules</label>
            <input type="checkbox" {...field} {...props} />
            {children}

            {meta.touched && meta.error ? (
                <p className="error">{meta.error}</p>
            ) : null}
        </div>
    );
};

export default Checkbox;