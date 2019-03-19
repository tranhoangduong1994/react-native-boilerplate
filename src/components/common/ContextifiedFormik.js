import React from 'react';
import { Formik } from 'formik';

const FormikContext = React.createContext({
  formProps: null
});

const ContextifiedFormik = (props) => {
  const { render, ...rest } = props;
  return (
    <Formik
      enableReinitialize
      render={formProps => (
        <FormikContext.Provider value={formProps}>{render(formProps)}</FormikContext.Provider>
      )}
      {...rest}
    />
  );
};

export { FormikContext };
export default ContextifiedFormik;
