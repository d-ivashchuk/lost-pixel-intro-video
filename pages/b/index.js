import React from "react";
import Card from "../../components/card";
import { useRouter } from "next/router";

const PageB = () => {
  const { pathname } = useRouter();

  return (
    <div>
      <Card page={pathname} background="powderblue" />
    </div>
  );
};

export default PageB;
