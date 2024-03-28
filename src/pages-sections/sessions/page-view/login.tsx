"use client";

import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
// LOCAL CUSTOM COMPONENTS
import EyeToggleButton from "../components/eye-toggle-button";
// LOCAL CUSTOM HOOK
import usePasswordVisible from "../use-password-visible";
// GLOBAL CUSTOM COMPONENTS
import BazaarTextField from "components/BazaarTextField";
import { useTranslation } from "react-i18next";

// ==============================================================
interface Props {
  closeDialog?: () => void;
}
// ==============================================================

const LoginPageView = ({ closeDialog }: Props) => {
  const { visiblePassword, togglePasswordVisible } = usePasswordVisible();
  const { t } = useTranslation();
  // LOGIN FORM FIELDS INITIAL VALUES
  const initialValues = { email: "", password: "" };

  // LOGIN FORM FIELD VALIDATION SCHEMA
  const validationSchema = yup.object().shape({
    password: yup.string().required(t("패스워드를 입력하세요")),
    email: yup
      .string()
      .email(t("이메일 형식이 아닙니다"))
      .required(t("이메일을 입력하세요")),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        console.log(values);
        closeDialog?.();
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <BazaarTextField
        mb={1.5}
        fullWidth
        name="email"
        size="small"
        type="email"
        variant="outlined"
        onBlur={handleBlur}
        value={values.email}
        onChange={handleChange}
        label={t("이메일")}
        placeholder="exmple@mail.com"
        error={!!touched.email && !!errors.email}
        helperText={(touched.email && errors.email) as string}
      />

      <BazaarTextField
        mb={2}
        fullWidth
        size="small"
        name="password"
        label={t("패스워드")}
        autoComplete="on"
        variant="outlined"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password}
        placeholder="*********"
        type={visiblePassword ? "text" : "password"}
        error={!!touched.password && !!errors.password}
        helperText={(touched.password && errors.password) as string}
        InputProps={{
          endAdornment: (
            <EyeToggleButton
              show={visiblePassword}
              click={togglePasswordVisible}
            />
          ),
        }}
      />

      <Button
        fullWidth
        type="submit"
        color="primary"
        variant="contained"
        size="large"
      >
        {t("로그인")}
      </Button>
    </form>
  );
};

export default LoginPageView;
