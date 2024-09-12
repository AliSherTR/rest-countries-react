import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import HomePage from "./pages/HomePage";

import CountryPage from "./pages/CountryPage";

export default function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/country" element={<CountryPage />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}
