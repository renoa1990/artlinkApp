"use client";

import { Fragment } from "react";
import Card from "@mui/material/Card";
import Person from "@mui/icons-material/Person";
// Local CUSTOM COMPONENT
import ProfileEditForm from "../edit-form";
import ProfilePicUpload from "../profile-pic-upload";
import DashboardHeader from "../../dashboard-header";
// CUSTOM DATA MODEL
import User from "models/User.model";

// ===========================================================
type Props = { user: User };
// ===========================================================

export default function ProfileEditPageView({ user }: Props) {
  return (
    <Fragment>
      {/* TITLE HEADER AREA */}
      <DashboardHeader
        Icon={Person}
        href="/profile"
        title="프로필 수정"
        buttonText="뒤로가기"
      />

      <Card sx={{ p: 3 }}>
        {/* USER PROFILE PIC */}
        <ProfilePicUpload />

        {/* PROFILE EDITOR FORM */}
        <ProfileEditForm user={user} />
      </Card>
    </Fragment>
  );
}
