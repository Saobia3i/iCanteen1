// src/components/Footer.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        mt: 6,
        py: 3,
        textAlign: "center",
        backgroundColor: "#0555",
        color: "#fff",
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} iCanteen. All rights reserved.
      </Typography>
    </Box>
  );
}
