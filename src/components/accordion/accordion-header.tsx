import { ReactNode } from "react";
import { BoxProps } from "@mui/material/Box";
import { styled, SxProps } from "@mui/material/styles";
// MUI ICON COMPONENTS
import ChevronRight from "@mui/icons-material/ChevronRight";
// GLOBAL CUSTOM COMPONENT
import FlexBox from "components/flex-box/flex-box";

// STYLED COMPONENT
const RootContainer = styled(FlexBox, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open: number }>(({ open, theme }) => ({
  alignItems: "center",
  padding: ".5rem 1rem",
  justifyContent: "space-between",
  ".caret": {
    transition: "transform 250ms ease-in-out",
    transform: `rotate(${open ? "90deg" : "0deg"})`,
    ...{
      transform: `rotate(${open ? "90deg" : "180deg"})`,
    },
  },
}));

// =================================================================
interface Props extends BoxProps {
  sx?: SxProps;
  open?: boolean;
  showIcon?: boolean;
  children: ReactNode;
}
// =================================================================

export default function AccordionHeader(props: Props) {
  const { open, children, showIcon = true, ...others } = props;

  return (
    <RootContainer open={open ? 1 : 0} {...others}>
      {children}
      {showIcon ? <ChevronRight className="caret" fontSize="small" /> : null}
    </RootContainer>
  );
}
