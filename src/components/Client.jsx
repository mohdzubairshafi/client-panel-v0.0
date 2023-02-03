import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/system";
import { Button, Card, Collapse } from "@mui/material";
import Container from "@mui/material/Container";

export default function ControlledAccordions({ Details, page }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [page]);

  const {
    name,
    username,
    email,
    address: { street, suite, city, zipcode },
    phone,
    website,
    company: { name: CompanyName, catchPhrase, bs },
  } = Details;

  return (
    <Box my={2}>
      <Card sx={{ minWidth: 300, py: 2 }}>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          flexGrow={1}
          sx={{ px: 4, minHeight: "8rem", flexWrap: "wrap" }}
          gap={1}
        >
          <Box>
            <Typography sx={{ width: "fit-content", flexShrink: 0 }} fontWeight={"bold"}>
              {CompanyName}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>{website}</Typography>
          </Box>
          <Box>
            <Typography variant='subtitle1' fontWeight={"bold"}>
              CONTACT
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>{name}</Typography>
          </Box>
          <Box>
            <Typography variant='subtitle1' fontWeight={"bold"}>
              CITY
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>{street}</Typography>
          </Box>
          <Box>
            <Typography variant='subtitle1' fontWeight={"bold"}>
              STATE
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>{city}</Typography>
          </Box>
          <Button
            sx={{ fontSize: 12, px: 2, letterSpacing: 0, py: 1, m: 0, borderRadius: "40px" }}
            size='small'
            variant='contained'
            color='error'
            onClick={() => setOpen(!open)}
          >
            {open ? "Hide Details" : "View Details"}
          </Button>
        </Stack>
        <Box>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Container sx={{ width: "100%", height: "fit-content", p: 2, m: 2 }}>
              <Card sx={{ p: 3, borderRadius: "30px" }}>
                <Box p={1}>
                  <Typography variant='subtitle1' fontWeight={"bold"}>
                    Description
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    {catchPhrase} {bs}
                  </Typography>
                </Box>
                <Box sx={{ width: "60%", display: "flex", justifyContent: "space-between", p: 1, gap: 10 }}>
                  <Box m={1}>
                    <Box>
                      <Typography variant='subtitle1' fontWeight={"bold"}>
                        Contact Person
                      </Typography>
                      <Typography sx={{ color: "text.secondary" }}>{name}</Typography>
                    </Box>
                    <Box>
                      <Typography variant='subtitle1' fontWeight={"bold"}>
                        Company
                      </Typography>
                      <Typography sx={{ color: "text.secondary" }}>{CompanyName}</Typography>
                    </Box>
                    <Box>
                      <Typography variant='subtitle1' fontWeight={"bold"}>
                        Designation
                      </Typography>
                      <Typography sx={{ color: "text.secondary" }}>{username}</Typography>
                    </Box>
                    <Box>
                      <Typography variant='subtitle1' fontWeight={"bold"}>
                        Email
                      </Typography>
                      <Typography sx={{ color: "text.secondary" }}>{email}</Typography>
                    </Box>
                    <Box>
                      <Typography variant='subtitle1' fontWeight={"bold"}>
                        Phone
                      </Typography>
                      <Typography sx={{ color: "text.secondary" }}>{phone}</Typography>
                    </Box>
                  </Box>
                  <Box m={1}>
                    <Box>
                      <Typography variant='subtitle1' fontWeight={"bold"}>
                        Address
                      </Typography>
                      <Typography sx={{ color: "text.secondary" }}>{suite}</Typography>
                    </Box>
                    <Box>
                      <Typography variant='subtitle1' fontWeight={"bold"}>
                        City
                      </Typography>
                      <Typography sx={{ color: "text.secondary" }}>{street}</Typography>
                      <Typography variant='subtitle1' fontWeight={"bold"}>
                        ZipCode{" "}
                      </Typography>
                      <Typography sx={{ color: "text.secondary" }}>{zipcode}</Typography>
                    </Box>
                    <Box>
                      <Typography variant='subtitle1' fontWeight={"bold"}>
                        State
                      </Typography>
                      <Typography sx={{ color: "text.secondary" }}>{city}</Typography>
                    </Box>
                    <Box>
                      <Typography variant='subtitle1' fontWeight={"bold"}>
                        Country
                      </Typography>
                      <Typography sx={{ color: "text.secondary" }}>{city}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Container>
          </Collapse>
        </Box>
      </Card>
    </Box>
  );
}
