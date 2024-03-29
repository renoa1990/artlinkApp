import { Button, Grid, TextField } from "@mui/material";
import BazaarTextField from "components/BazaarTextField";
import { t } from "i18next";

export default function ChangePasswordForm() {
  return (
    <form>
      <Grid container spacing={3}>
        <Grid item md={7} xs={12}>
          <BazaarTextField
            mb={1.5}
            fullWidth
            name="beforepassword"
            size="small"
            type="password"
            variant="outlined"
            label={t("패스워드")}
            placeholder="********"
            // error={!!touched.email && !!errors.email}
            // helperText={(touched.email && errors.email) as string}
          />
        </Grid>
        <Grid item md={7} xs={12}>
          <BazaarTextField
            mb={1.5}
            fullWidth
            name="password"
            size="small"
            type="password"
            variant="outlined"
            label={t("변경할 패스워드")}
            placeholder="********"
            // error={!!touched.email && !!errors.email}
            // helperText={(touched.email && errors.email) as string}
          />
        </Grid>

        <Grid item md={7} xs={12}>
          <BazaarTextField
            mb={1.5}
            fullWidth
            name="confirmPassword"
            size="small"
            type="password"
            variant="outlined"
            label={t("패스워드 확인")}
            placeholder="********"
            // error={!!touched.email && !!errors.email}
            // helperText={(touched.email && errors.email) as string}
          />
        </Grid>

        <Grid item md={7} xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            저장
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
