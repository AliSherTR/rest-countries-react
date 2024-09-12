import CountryList from "@/components/CountryList";
import Filters from "../components/Filters";
import Header from "../components/Header";

export default function HomePage() {
    return (
        <div className=" dark:bg-[#202c37] transition-colors duration-300">
            <Header />
            <Filters />
            <CountryList />
        </div>
    );
}
