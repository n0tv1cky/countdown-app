import React from "react";
import { prismaInstance } from "../PrismaConnection/PrismaClientInstance";

const readData = async () => {
  const data = await prismaInstance.banner.findUnique({
    where: {
      id: 1,
    },
  });
  return data;
};
