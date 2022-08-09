import React from "react";
import Card from "../../components/card";
import { useRouter } from "next/router";

const PageA = () => {
  const { pathname } = useRouter();

  return (
    <div>
      <Card page={pathname} background="papayawhip" />
    </div>
  );
};

export default PageA;
