import { Input } from "./ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function Filters() {
    return (
        <div className=" py-6 px-8 flex items-center justify-between">
            <Input
                placeholder="Search a country"
                type="text"
                className="focus:outline-none dark:bg-[#2b3945] max-w-[500px] w-full px-3 py-4 rounded-[5px]  focus:ring-2 focus:ring-blue-500 border -gray-300 "
            />
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue
                        placeholder="Select By Region"
                        className=" box-content"
                    />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="asia">Asia</SelectItem>
                    <SelectItem value="africa">Africa</SelectItem>
                    <SelectItem value="americas">Americas</SelectItem>
                    <SelectItem value="europe">Europe</SelectItem>
                    <SelectItem value="oceania">Oceania</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
