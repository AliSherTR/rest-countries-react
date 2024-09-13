import CountryList from "@/components/CountryList";
import Filters from "../components/Filters";
import Header from "../components/Header";
import { useState } from "react";

export default function HomePage() {
    const [region, setRegion] = useState<string>("all");
    const [searchInput, setSearchInput] = useState<string>("");
    return (
        <div className=" dark:bg-[#202c37] transition-colors duration-300">
            <Header />
            <Filters setFilter={setRegion} setSearchInupt={setSearchInput} />
            <CountryList searchInput={searchInput} region={region} />
        </div>
    );
}
