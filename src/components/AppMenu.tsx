import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Stack, Typography } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import SettingsIcon from "@mui/icons-material/Settings";

export default function AppMenu({ setRulesOpen }: { setRulesOpen: (b: boolean) => void}): JSX.Element {
    
  return (
    <AppBar
      position="static"
      sx={{ marginBottom: "20px", backgroundColor: "white" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "",
        }}
      >
        <IconButton
          edge="start"
          size="medium"
          onClick={() => setRulesOpen(true)}
          sx={{ color: "#878a8c" }}
        >
          <HelpOutlineIcon />
        </IconButton>
        <Stack justifyContent="center" alignItems="center" sx={{ flexGrow: 1 }}>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, color: "black" }}
          >
            MEAN WORDLE
          </Typography>
        </Stack>
        <IconButton edge="end" size="medium" sx={{ mr: 0.1, color: "#878a8c" }}>
          <EqualizerIcon />
        </IconButton>
        <IconButton edge="end" size="medium" sx={{ color: "#878a8c" }}>
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
