interface countryProps {
    imageUrl: string;
    name: string;
    population: number;
    region: string;
    capital: string;
}

export default function Country({
    imageUrl,
    name,
    population,
    region,
    capital,
}: countryProps) {
    return (
        <div className=" flex flex-col overflow-hidden dark:bg-[#2b3945] transition-colors duration-300 rounded-xl shadow-md">
            <img src={imageUrl} alt="" className="w-full h-[200px]" />
            <div className=" dark:text-white p-6">
                <h1 className="font-bold mb-4">{name}</h1>
                <p className=" mb-2 ">
                    {" "}
                    <span className=" font-semibold">Population</span>{" "}
                    {population}
                </p>

                <p className=" mb-2 ">
                    {" "}
                    <span className=" font-semibold">Region</span> {region}
                </p>

                <p className=" mb-2 ">
                    {" "}
                    <span className=" font-semibold">Capital</span> {capital}
                </p>
            </div>
        </div>
    );
}
