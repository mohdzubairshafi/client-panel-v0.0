import { useTheme } from "@emotion/react";
import { HomeOutlined } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexGrow: 1 }}>
        <Card
          bordered='false'
          sx={{
            width: "80%",
            height: "fit-content",
            fontSize: "1rem",
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            overflow: "hidden",
            maxWidth: "44rem",
            borderRadius: "0.75rem",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            p: 2,
            m: 4,
            mt: "20vh",
          }}
        >
          <Box>
            <Typography variant='h4'>About this Project...</Typography>
            <Typography variant='h6' sx={{ mt: 2 }}>
              this is a <em>Clients Info Dashboard React App. </em> that Displays Client Information from MongoDB or
              Other Sources.
            </Typography>
            <Typography variant='h6'>
              Design by
              <a
                style={{ textDecoration: "none", color: theme.palette.text.dark }}
                href='https://github.com/mohdzubairshafi'
                target='_blank'
                rel='noopener noreferrer'
              >
                <em> Mohd Zubair </em>
              </a>
              using Material Ui, React, contextAPI.
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Link
                to='/'
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <HomeOutlined sx={{ color: theme.palette.text.dark }} />
                &nbsp;
                <Typography sx={{ color: theme.palette.text.dark }}> Back To Home</Typography>
              </Link>
              <a
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  marginTop: "1rem",
                }}
                href='https://github.com/mohdzubairshafi'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHubIcon sx={{ color: theme.palette.text.dark }} />
                &nbsp;
                <Typography sx={{ color: theme.palette.text.dark }}>
                  GitHub Profile -<em> Mohd Zubair </em>
                </Typography>
              </a>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
}
