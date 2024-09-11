import Header from "./components/Header";

export default function App() {
    return (
        <>
            <Header />
            <div className="h-screen bg:white py-6 px-8 dark:bg-[#202c37] transition-colors duration-300">
                <h1 className="text-3xl font-bold underline dark:text-white">
                    Hello world!
                </h1>
            </div>
        </>
    );
}
