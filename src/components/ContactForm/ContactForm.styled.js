import styled from 'styled-components';

import {
  Form as FormikForms,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

export const Wrapper = styled.div`
  border: 1px solid black;
  padding: 15px;
  width: 400px;
  margin-top: 30px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 50px;
`;

export const Form = styled(FormikForms)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Field = styled(FormikField)`
  padding: 5px;
`;

export const ErrorMessage = styled(FormikError)`
  color: red;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;