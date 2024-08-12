import { Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
export const Banner = ({ bannerData }) => {
  const calculateTimeLeft = () => {
    const targetTime = new Date(bannerData.targetTime).getTime();
    const currentTime = new Date().getTime();
    const difference = targetTime - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [bannerData]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Typography variant="h2" fontWeight="bold">
          Exciting Announcement in
        </Typography>
        <Typography variant="h1" fontFamily="monospace">
          {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
        </Typography>
      </Box>
    </>
  );
};
