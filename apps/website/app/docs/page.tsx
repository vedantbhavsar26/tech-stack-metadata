import { redirect } from "next/navigation";
import type { FunctionComponent } from "react";

const Page: FunctionComponent = () => {
  redirect("/docs/introduction");
};

export default Page;
