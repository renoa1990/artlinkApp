import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
// GLOBAL CUSTOM COMPONENTS
import { FlexBetween, FlexBox } from "components/flex-box";
import { H3, H5, Paragraph, Small } from "components/Typography";
// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "lib";
// CUSTOM DATA MODEL
import User from "models/User.model";

// ==============================================================
type Props = { user: User };
// ==============================================================

export default function UserAnalytics({ user }: Props) {
  const INFO_LIST = [
    { title: "16", subtitle: "등록한 공연" },
    { title: "02", subtitle: "찜 목록" },
    { title: "00", subtitle: "문의하기" },
    { title: "01", subtitle: "Awaiting Delivery" },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item md={6} xs={12}>
        <Card
          sx={{
            gap: 2,
            height: "100%",
            display: "flex",
            p: "1rem 1.5rem",
            alignItems: "center",
          }}
        >
          <Avatar
            alt={"user.name.firstName"}
            src={user.avatar}
            sx={{ height: 64, width: 64 }}
          />

          <FlexBetween flexWrap="wrap" flex={1}>
            <div>
              <H5>개발자</H5>

              <FlexBox alignItems="center" gap={1}>
                <Paragraph color="grey.600">republic of korea</Paragraph>
                <Paragraph color="primary.main"></Paragraph>
              </FlexBox>
            </div>

            {/* <Paragraph color="grey.600" letterSpacing={3}>
              SILVER USER
            </Paragraph> */}
          </FlexBetween>
        </Card>
      </Grid>

      <Grid item container spacing={3} md={6} xs={12}>
        {INFO_LIST.map((item) => (
          <Grid item lg={3} sm={6} xs={6} key={item.subtitle}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                p: "1rem 1.25rem",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <H3 color="primary.main" my={0} fontWeight={600}>
                {item.title}
              </H3>

              <Small color="grey.600" textAlign="center">
                {item.subtitle}
              </Small>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
