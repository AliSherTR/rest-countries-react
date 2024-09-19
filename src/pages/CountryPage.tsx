import Header from "@/components/Header";
import Loader from "@/components/Loader";
import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface CountryData {
    borders: string[];
    capital: string[];
    currencies: {
        [key: string]: {
            name?: string;
            symbol?: string;
        };
    };
    flags: {
        png: string;
        svg: string;
        alt: string;
    };
    languages: {
        [key: string]: string;
    };
    name: {
        common: string;
        official: string;
        nativeName: {
            [key: string]: {
                official: string;
                common: string;
            };
        };
    };
    population: number; // Population of the country
    region: string; // Geographical region
    subregion: string; // Sub-region within the geographical region
    tld: string[]; // Array of top-level domains
}

export default function CountryPage() {
    const { name } = useParams();

    const [country, setCountry] = useState<CountryData>();
    const [borderCountries, setBorderCountry] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const findBorders = useCallback(async (border: string) => {
        try {
            const url = `https://restcountries.com/v2/alpha/${border}`;
            const response = await fetch(url);
            const data = await response.json();
            return data.name;
        } catch (error) {
            console.log(error);
        }
    }, []);

    const fetchCountryData = useCallback(
        async (name: string) => {
            try {
                const url = `https://restcountries.com/v3.1/name/${name}?fields=name,flags,capital,currencies,population,region,subregion,capital,tld,languages,borders`;
                const response = await fetch(url);
                const data = await response.json();
                setCountry(data[0]);
                // Collecting promises for all border data fetches
                const borderPromises = (data[0]?.borders || []).map(
                    (border: string) => findBorders(border)
                );

                // Wait for all promises to resolve
                const borderNames = await Promise.all(borderPromises);
                setBorderCountry(borderNames.filter(Boolean));
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        },
        [findBorders]
    );

    useEffect(() => {
        if (name) {
            fetchCountryData(name);
        }
    }, [fetchCountryData, name]);

    if (isLoading || !country) return <Loader />;

    return (
        <div className="dark:bg-[#202c37] transition-colors duration-300 min-h-screen">
            <Header />
            <div className="lg:px-20  px-5">
                <Link
                    to="/"
                    className=" px-3 py-4 w-36 flex items-center gap-2 mt-20 border-gray-200 justify-center rounded-xl dark:text-white dark:bg-[#2b3945]"
                >
                    <span>&larr;</span>
                    <span>Go Back</span>
                </Link>
                <div className=" grid lg:grid-cols-2 grid-cols-1 gap-3 mt-10">
                    <img
                        src={country.flags.svg}
                        alt=""
                        className="w-3/2 block m-auto"
                    />
                    <div className=" px-5 self-center text-black dark:text-white">
                        <h1 className=" font-bold text-3xl tracking-wide  mb-4">
                            {country.name.official}
                        </h1>

                        <div className=" flex lg:flex-row flex-col lg:gap-56  w-full mb-4">
                            <div className="">
                                <p className=" mb-4">
                                    {" "}
                                    <span className=" font-normal me-2">
                                        Native Name:
                                    </span>
                                    {country?.name?.nativeName?.eng?.common}{" "}
                                </p>

                                <p className=" mb-4">
                                    {" "}
                                    <span className=" font-normal me-2">
                                        Population:
                                    </span>
                                    {country?.population}
                                </p>

                                <p className=" mb-4">
                                    {" "}
                                    <span className=" font-normal me-2">
                                        Region:
                                    </span>
                                    {country?.region}
                                </p>

                                <p className=" mb-4">
                                    {" "}
                                    <span className=" font-normal me-2">
                                        Sub Region:
                                    </span>
                                    {country.subregion
                                        ? country.subregion
                                        : "No Sub Regions"}
                                </p>

                                <p className=" mb-4">
                                    {" "}
                                    <span className=" font-normal me-2">
                                        Capital:
                                    </span>
                                    {country?.capital
                                        ?.map((capital) => `${capital}`)
                                        .join(", ")}
                                </p>
                            </div>
                            <div>
                                <p className=" mb-4">
                                    {" "}
                                    <span className=" font-normal me-2">
                                        Top Level Domain:
                                    </span>
                                    {country.tld.length > 0
                                        ? country.tld.map(
                                              (
                                                  domain: string,
                                                  index: number
                                              ) => (
                                                  <span key={index}>
                                                      {domain}
                                                  </span>
                                              )
                                          )
                                        : "Not found"}
                                </p>

                                <p className=" mb-4">
                                    {" "}
                                    <span className=" font-normal me-2">
                                        Currencies:
                                    </span>
                                    {Object.values(country.currencies)
                                        .map((currency) => `${currency.name}`)
                                        .join(", ")}
                                </p>

                                <p className=" mb-4">
                                    {" "}
                                    <span className=" font-normal me-2">
                                        Language:
                                    </span>
                                    {Object.values(country.languages).join(
                                        ", "
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className=" flex gap-2 flex-wrap mt-8 dark:text-white overflow-hidden">
                            <p className="">Border Countries:</p>
                            <ul className=" flex gap-3 flex-wrap">
                                {borderCountries?.length ? (
                                    borderCountries.map((country, index) => (
                                        <Link key={index} to={`/${country}`}>
                                            <div>{country}</div>
                                        </Link>
                                    ))
                                ) : (
                                    <p>No Borders...</p>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
