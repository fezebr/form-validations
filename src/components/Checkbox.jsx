import React from 'react'
import { Formik, Form, Field, useField } from 'formik'
import * as Yup from 'yup'



const Checkbox = ({ ...props }) => {

    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div className="input-group checkbox">


            <label className="label">
                <input type="checkbox" {...field} {...props} />
                accept roules
            </label>

            <div className="error-valisation">

                {meta.touched && meta.error ? (
                    <p className="error">{meta.error}</p>
                ) : null}
            </div>
        </div>
    );
};

export default Checkbox;