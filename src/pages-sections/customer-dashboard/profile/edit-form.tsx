"use client";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// FORMIK
import { Formik } from "formik";
// YUP
import * as yup from "yup";
// CUSTOM DATA MODEL
import User from "models/User.model";

// ==============================================================
type Props = { user: User };
// ==============================================================

export default function ProfileEditForm({ user }: Props) {
  const INITIAL_VALUES = {
    email: user.email || "",
    contact: user.phone || "",
    last_name: user.name.lastName || "",
    first_name: user.name.firstName || "",
    birth_date: new Date(user.dateOfBirth) || new Date(),
  };

  const VALIDATION_SCHEMA = yup.object().shape({
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
    email: yup.string().email("invalid email").required("Email is required"),
    contact: yup.string().required("Contact is required"),
    birth_date: yup.date().required("Birth date is required"),
  });

  const handleFormSubmit = async (values: typeof INITIAL_VALUES) => {
    console.log(values);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="name"
                label="이름"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.first_name}
                error={!!touched.first_name && !!errors.first_name}
                helperText={(touched.first_name && errors.first_name) as string}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="country"
                type="text"
                label="국가"
                onBlur={handleBlur}
                value={values.email}
                onChange={handleChange}
                error={!!touched.email && !!errors.email}
                helperText={(touched.email && errors.email) as string}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="email"
                type="email"
                label="이메일"
                onBlur={handleBlur}
                value={values.email}
                onChange={handleChange}
                error={!!touched.email && !!errors.email}
                helperText={(touched.email && errors.email) as string}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="연락처"
                type={"number"}
                name="phone"
                onBlur={handleBlur}
                value={values.contact}
                onChange={handleChange}
                error={!!touched.contact && !!errors.contact}
                helperText={(touched.contact && errors.contact) as string}
              />
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                저장
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}
