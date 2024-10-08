import { useEffect, useState, useRef } from "react";
import Country from "./Country";
import Loader from "./Loader";

type countryType = {
    population: number;
    name: { common: string };
    capital: string[];
    flags: {
        png: string;
    };
    region: string;
};

type CountryListProps = {
    region: string;
    searchInput: string;
};

export default function CountryList({ region, searchInput }: CountryListProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [countries, setCountries] = useState<countryType[]>([]);
    const [visibleCountries, setVisibleCountries] = useState<countryType[]>([]);
    const [page, setPage] = useState<number>(1);
    const itemsPerPage = 20;
    const loaderRef = useRef<HTMLDivElement | null>(null);

    async function fetchCountries() {
        try {
            setIsLoading(true);
            const res = await fetch(
                "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region"
            );

            if (res.ok) {
                const data = await res.json();
                setCountries(data);
                setVisibleCountries(data.slice(0, itemsPerPage));
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCountries();
    }, []);

    useEffect(() => {
        const filteredCountries = countries.filter((country) => {
            const matchesRegion = region === "all" || country.region === region;
            const matchesSearch = country.name.common
                .toLowerCase()
                .includes(searchInput.toLowerCase());

            return matchesRegion && matchesSearch;
        });

        // Paginate the filtered countries
        setVisibleCountries(filteredCountries.slice(0, page * itemsPerPage));
    }, [region, searchInput, page, countries]);

    // Infinite scroll logic
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !isLoading) {
                setPage((prev) => prev + 1);
            }
        });

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, [isLoading]);

    if (isLoading && visibleCountries.length === 0) return <Loader />;
    if (!countries || countries.length === 0) return <p>No countries found.</p>;

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-6 lg:px-20 md:px-14 px-5 gap-20 min-h-screen relative z-10">
            {visibleCountries.map((country: countryType, index: number) => (
                <Country
                    key={index}
                    population={country.population}
                    name={country.name.common}
                    capital={country.capital?.[0]}
                    imageUrl={country.flags?.png}
                    region={country.region}
                />
            ))}
            {/* Loader div to track the scroll position */}
            <div
                ref={loaderRef}
                className="w-full h-10 flex justify-center items-center"
            >
                {isLoading && <p>Loading more countries...</p>}
            </div>
        </div>
    );
}
