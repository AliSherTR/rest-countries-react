import { ThemeProvider } from "./components/theme-provider";
import HomePage from "./pages/HomePage";

export default function App() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <HomePage />
            </ThemeProvider>
        </>
    );
}
