import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SignInPage from "./views/Login";
import darkTheme from "./themes/default";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./views/Landing";

function App() {
	return (
		<Router>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<Routes>
					<Route path="/login" element={<SignInPage />} />
					<Route path="*" element={<LandingPage />} />
				</Routes>
			</ThemeProvider>
		</Router>
	);
}

export default App;
