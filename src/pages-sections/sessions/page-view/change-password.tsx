"use client";

import { Fragment } from "react";
import Card from "@mui/material/Card";
import Person from "@mui/icons-material/Person";
// Local CUSTOM COMPONENT

// CUSTOM DATA MODEL
import User from "models/User.model";
import DashboardHeader from "pages-sections/customer-dashboard/dashboard-header";
import ChangePasswordForm from "./form/change-password-form";

// ===========================================================
type Props = { user: User };
// ===========================================================

export default function ChangePasswordPage() {
  return (
    <Fragment>
      {/* TITLE HEADER AREA */}
      <DashboardHeader
        Icon={Person}
        href="/profile"
        title="패스워드 변경"
        buttonText="뒤로가기"
      />

      <Card sx={{ p: 3 }}>
        <ChangePasswordForm />
        {/* PROFILE EDITOR FORM */}
        {/* <ProfileEditForm user={user} /> */}
      </Card>
    </Fragment>
  );
}
