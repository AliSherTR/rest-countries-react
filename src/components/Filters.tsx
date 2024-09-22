import { Input } from "./ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface filtersInterface {
    setFilter: (value: string) => void;
    setSearchInupt: (value: string) => void;
}

export default function Filters({
    setFilter,
    setSearchInupt,
}: filtersInterface) {
    return (
        <div className=" py-6 px-8 flex lg:flex-row flex-col lg:items-center space-y-5 items-start justify-between relative z-50">
            <Input
                placeholder="Search a country"
                type="text"
                onChange={(e) => setSearchInupt(e.target.value)}
                className="focus:outline-none dark:bg-[#2b3945] lg:max-w-[500px] w-full px-3 py-4 rounded-[5px]  focus:ring-2 focus:ring-blue-500 border -gray-300 "
            />
            <Select onValueChange={(value: string) => setFilter(value)}>
                <SelectTrigger className="lg:w-[180px] md:w-[250px] w-full relative z-50">
                    <SelectValue
                        placeholder="Select By Region"
                        className=" box-content"
                    />
                </SelectTrigger>
                <SelectContent className=" relative z-50">
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="Asia">Asia</SelectItem>
                    <SelectItem value="Africa">Africa</SelectItem>
                    <SelectItem value="Americas">Americas</SelectItem>
                    <SelectItem value="Europe">Europe</SelectItem>
                    <SelectItem value="Oceania">Oceania</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
