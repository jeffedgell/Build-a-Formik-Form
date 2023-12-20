import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik'
function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log('form:', values);
    },
    validate: values=> {
      let errors = {};
      if(!values.email) errors.email = 'Required';
      if(!values.password) errors.password = 'Required';
      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
       
        <div>email</div>
        <input name="email" type="text"onChange={formik.handleChange} 
        value={formik.values.email}/>
        {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div>: null}
        <div>password</div>  
        <input name="password" type="text"onChange={formik.handleChange} 
        value={formik.values.password}/>
        {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div>: null}
        <button type="submit">submit</button> 
      </form>
    </div>
  );
}

export default App;
