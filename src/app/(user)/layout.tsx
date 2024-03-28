import { PropsWithChildren } from "react";
import UserLayout from "components/layouts/user-layout/user-layout";

export default function Layout1({ children }: PropsWithChildren) {
  return <UserLayout>{children}</UserLayout>;
}
