import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'

function FormikContainer() {
    const initialValues = {}
    const validationSchema = Yup.object({})
    onSubmit = values => console.log('Form data', values)
    return (
        <div>
            
        </div>
    )
}

export default FormikContainer
