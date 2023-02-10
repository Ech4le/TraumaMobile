import { Box, Button, Typography } from "@mui/material";
import SimpleNav from "../components/SimpleNav";
import { withStyles } from "@mui/styles";
import Copyright from "../components/Copyright";
import Landing1 from "../assets/Landing1.jpg";
import { Link } from "react-router-dom";

const DescriptionText = withStyles({
	root: {
		color: "#808080",
	},
})(Typography);

const LandingPage = () => {
	return (
		<Box>
			<SimpleNav />
			<Box component="main" mt={2} ml={2} mr={2}>
				<Typography variant="h4" mb={2} fontSize={30}>
					You pay, we cure.
				</Typography>
				<DescriptionText mb={2}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Praesent in tellus efficitur, tincidunt augue a, porttitor
					nunc. Sed suscipit neque pellentesque maximus blandit.
				</DescriptionText>
				<Button component={Link} to="/login" variant="contained">Sign In</Button>
				<br />
				<Box
					mt={1}
					sx={{ width: "100%" }}
					component="img"
					src={Landing1}
				/>
				<Copyright sx={{ mt: 4, mb: 4 }} />
			</Box>
		</Box>
	);
};

export default LandingPage;
