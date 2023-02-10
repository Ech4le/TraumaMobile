import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import HealingIcon from "@mui/icons-material/Healing";
import { Typography } from "@mui/material";

export default function SimpleNav() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="static"
				style={{ background: "transparent", boxShadow: "none" }}>
				<IconButton
					disabled
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2 }}>
					<HealingIcon />
					<Typography fontSize={14} ml={1}>
						Trauma
					</Typography>
				</IconButton>
			</AppBar>
		</Box>
	);
}
