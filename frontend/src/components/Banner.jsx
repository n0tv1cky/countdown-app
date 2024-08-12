import { Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import Link from "@mui/material/Link";
import { red } from "@mui/material/colors";

const redStyle = {
  color: red[700],
};

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
          {`${timeLeft.days}`}
          <span style={redStyle}>d</span>
          {` ${timeLeft.hours}`}
          <span style={redStyle}>h</span>
          {` ${timeLeft.minutes}`}
          <span style={redStyle}>m</span>
          {` ${timeLeft.seconds}`}
          <span style={redStyle}>s</span>
        </Typography>
        <Typography variant="h4">{bannerData.description}</Typography>
        {bannerData.link && (
          <Typography variant="h6">
            <Link
            underline="hover"
              href={bannerData?.link}
              sx={{
                color: red[700],
                "&:hover": {
                  color: red[400],
                },
              }}
            >
              Click here
            </Link>{" "}
            to know more
          </Typography>
        )}
      </Box>
    </>
  );
};
