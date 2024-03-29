import Link from "next/link";
import { useState } from "react";
// MUI
import Chip from "@mui/material/Chip";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import TouchRipple from "@mui/material/ButtonBase";
// TRANSLATION
import { useTranslation } from "react-i18next";
// MUI ICON COMPONENTS
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import Twitter from "@mui/icons-material/Twitter";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import ExpandMore from "@mui/icons-material/ExpandMore";
import YouTubeIcon from "@mui/icons-material/YouTube";
// GLOBAL CUSTOM COMPONENTS
import { Span } from "components/Typography";
import BazaarMenu from "components/BazaarMenu";
import { FlexBetween, FlexBox } from "components/flex-box";
// STYLED COMPONENTS
import { StyledContainer, StyledRoot } from "./styles";

// ==============================================================
interface LanguageOption {
  [key: string]: { title: string; value: string };
}
// ==============================================================

// LANGUAGE OPTIONS
const languageOptions: LanguageOption = {
  ko: { title: "KO", value: "ko" },
  en: { title: "EN", value: "en" },
};

const socialLinks = [
  { id: 1, Icon: Twitter, url: "#" },
  { id: 2, Icon: Facebook, url: "#" },
  { id: 3, Icon: Instagram, url: "#" },
  { id: 4, Icon: YouTubeIcon, url: "#" },
];

// ===========================================
type Props = { bgColor?: string };
// ===========================================

export default function Topbar({ bgColor }: Props) {
  const { i18n, t } = useTranslation();
  const [expand, setExpand] = useState<boolean>(false);

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const selectedLanguage = languageOptions[i18n.language];

  return (
    <StyledRoot bgColor={bgColor} expand={expand ? 1 : 0}>
      <StyledContainer>
        <FlexBetween width="100%">
          <FlexBox alignItems="center" gap={1}>
            <Chip
              label={t("HOT")}
              size="small"
              sx={{
                color: "white",
                fontWeight: 700,
                backgroundColor: "primary.main",
                "& .MuiChip-label": { pl: ".8rem", pr: ".8rem" },
              }}
            />
            <Span className="title">{t("아트링크에 오신것을 환영합니다")}</Span>
          </FlexBox>

          <IconButton
            disableRipple
            className="expand"
            onClick={() => setExpand((state) => !state)}
          >
            {expand ? <Remove /> : <Add />}
          </IconButton>
        </FlexBetween>

        <FlexBox className="topbarRight" alignItems="center">
          {/* LANGUAGE MENU SELECTOR */}
          <BazaarMenu
            handler={
              <TouchRipple className="handler marginRight">
                <Span className="menuTitle">{selectedLanguage.title}</Span>
                <ExpandMore fontSize="inherit" />
              </TouchRipple>
            }
          >
            {Object.keys(languageOptions).map((language: string) => (
              <MenuItem
                className="menuItem"
                key={languageOptions[language].title}
                onClick={() => handleChangeLanguage(language)}
              >
                <Span className="menuTitle">
                  {languageOptions[language].title}
                </Span>
              </MenuItem>
            ))}
          </BazaarMenu>

          {/* SOCIAL LINKS AREA */}
          <FlexBox alignItems="center" gap={1.5}>
            {socialLinks.map(({ id, Icon, url }) => (
              <Link href={url} key={id}>
                <Icon sx={{ fontSize: 16 }} />
              </Link>
            ))}
          </FlexBox>
        </FlexBox>
      </StyledContainer>
    </StyledRoot>
  );
}
