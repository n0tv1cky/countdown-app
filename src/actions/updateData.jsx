import React from "react";
import { prismaInstance } from "../PrismaConnection/PrismaClientInstance";

const writeData = async ({ description, targetTime, link }) => {
  const data = await prismaInstance.banner.update({
    where: {
      id: 1,
    },
    data: {
      description: description,
      targetTime: targetTime,
      link: link,
    },
  });
  return data;
};
