"use client";

import { Fragment } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
// LOCAL CUSTOM COMPONENT
import BoxLink from "../components/box-link";
// GLOBAL CUSTOM COMPONENTS
import { H3 } from "components/Typography";
import { FlexRowCenter } from "components/flex-box";

const ResetPassword = () => {
  // FORM FIELD INITIAL VALUE
  const initialValues = { email: "" };

  // FORM FIELD VALIDATION SCHEMA
  const validationSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("Email is required"),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <Fragment>
      <H3 mb={3} textAlign="center">
        패스워드 찾기
      </H3>

      {/* FORM AREA */}
      <Box
        onSubmit={handleSubmit}
        component="form"
        display="flex"
        flexDirection="column"
        gap={2}
      >
        <TextField
          fullWidth
          name="email"
          type="email"
          label="이메일"
          onBlur={handleBlur}
          value={values.email}
          onChange={handleChange}
          helperText={touched.email && errors.email}
          error={Boolean(touched.email && errors.email)}
        />

        <Button fullWidth type="submit" color="primary" variant="contained">
          리셋
        </Button>
      </Box>

      {/* BOTTOM LINK AREA */}
      <FlexRowCenter mt={3} justifyContent="center" gap={1}>
        계정이 없으신가요?
        <BoxLink title="회원가입" href="/register" />
      </FlexRowCenter>
    </Fragment>
  );
};

export default ResetPassword;
