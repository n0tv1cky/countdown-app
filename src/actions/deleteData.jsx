import React from "react";
import { prismaInstance } from "../PrismaConnection/PrismaClientInstance";

const clearDescription = async ({ description }) => {
  const data = await prismaInstance.banner.update({
    where: {
      id: 1,
    },
    data: {
      description: "",
    },
  });
  return data;
};

const clearDate = async ({ targetTime }) => {
  const data = await prismaInstance.banner.update({
    where: {
      id: 1,
    },
    data: {
      targetTime: "1970-01-01T00:00:00.000Z",
    },
  });
  return data;
};

const clearLink = async ({ link }) => {
  const data = await prismaInstance.banner.update({
    where: {
      id: 1,
    },
    data: {
      link: "",
    },
  });
  return data;
};

export { clearDate, clearDescription, clearLink };
