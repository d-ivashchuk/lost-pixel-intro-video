import React from "react";
import Card from "../../components/card";
import { useRouter } from "next/router";

const PageC = () => {
  const { pathname } = useRouter();

  return (
    <div>
      <Card page={pathname} background="snow" />
    </div>
  );
};

export default PageC;
