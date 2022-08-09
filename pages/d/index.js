import React from "react";
import Card from "../../components/card";
import { useRouter } from "next/router";

const PageD = () => {
  const { pathname } = useRouter();

  return (
    <div>
      <Card page={pathname} background="linen" />
    </div>
  );
};

export default PageD;
