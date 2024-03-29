import { Fragment } from "react";
import BoxLink from "./box-link";
import { FlexBox, FlexRowCenter } from "components/flex-box";
import { useTranslation } from "react-i18next";

export default function LoginBottom() {
  const { t } = useTranslation();
  return (
    <Fragment>
      {/* DON'T HAVE ACCOUNT AREA */}
      <FlexRowCenter gap={1} my={3}>
        {t("계정이 없으신가요?")}
        <BoxLink title={t("회원가입")} href="/register" />
      </FlexRowCenter>

      {/* FORGET YOUR PASSWORD AREA */}
      <FlexBox
        gap={1}
        py={2}
        borderRadius={1}
        justifyContent="center"
        bgcolor="grey.200"
      >
        {t("패스워드를 잃어버리셨나요?")}
        <BoxLink title={t("패스워드 찾기")} href="/reset-password" />
      </FlexBox>
    </Fragment>
  );
}
