import Image from "next/image";
// CUSTOM COMPONENTS
import { H5 } from "components/Typography";
import FlexRowCenter from "components/flex-box/flex-row-center";
// IMPORT IMAGES
import logo from "../../../../public/assets/images/artlink-black-logo.png";
import { useTranslation } from "react-i18next";

export default function LogoWithTitle() {
  const { t } = useTranslation();

  return (
    <FlexRowCenter flexDirection="column" gap={1.5} mb={4}>
      <Image src={logo} alt="bazaar" />
      <H5 fontWeight={700}>{t("공연의 모든것 아트링크")}</H5>
    </FlexRowCenter>
  );
}
