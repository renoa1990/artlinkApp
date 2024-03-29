import { format } from "date-fns";
import Card from "@mui/material/Card";
import { Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// GLOBAL CUSTOM COMPONENTS
import FlexBox from "components/flex-box/flex-box";
import { Small, Span } from "components/Typography";
// CUSTOM DATA MODEL
import User from "models/User.model";

// ==============================================================
type Props = { user: User };
// ==============================================================

export default function UserInfo({ user }: Props) {
  const downMd = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        mt: 3,
        display: "flex",
        flexWrap: "wrap",
        p: "0.75rem 1.5rem",
        alignItems: "center",
        justifyContent: "space-between",
        ...(downMd && {
          alignItems: "start",
          flexDirection: "column",
          justifyContent: "flex-start",
        }),
      }}
    >
      <TableRowItem title="이름" value={"개발자"} />
      <TableRowItem title="이메일" value={"test@test.com "} />
      <TableRowItem title="핸드폰" value={"0103339928"} />
      <TableRowItem title="국가" value={"korea"} />
    </Card>
  );
}

function TableRowItem({ title, value }: { title: string; value: string }) {
  return (
    <FlexBox flexDirection="column" p={1}>
      <Small color="grey.600" mb={0.5}>
        {title}
      </Small>

      <Span>{value}</Span>
    </FlexBox>
  );
}
