import Header from "@/components/Header";
import { Link } from "react-router-dom";

export default function CountryPage() {
    return (
        <div className="dark:bg-[#202c37] transition-colors duration-300 min-h-screen">
            <Header />
            <div className="px-20 ">
                <Link
                    to="/"
                    className=" px-3 py-4 w-36 flex items-center gap-2 mt-20 border-gray-200 justify-center rounded-xl dark:text-white dark:bg-[#2b3945]"
                >
                    <span>&larr;</span>
                    <span>Go Back</span>
                </Link>
                <div className=" grid grid-cols-2 gap-3 mt-10">
                    <img
                        src="https://flagcdn.com/nf.svg"
                        alt=""
                        className="w-full"
                    />
                    <div className=" px-5 self-center text-black dark:text-white">
                        <h1 className=" font-bold text-3xl tracking-wide  mb-4">
                            Norfolk island
                        </h1>

                        <div className=" flex gap-56 w-full mb-4">
                            <div>
                                <p className=" mb-4">
                                    {" "}
                                    <span className=" font-normal me-2">
                                        Native Name:
                                    </span>
                                    Norfolk Island{" "}
                                </p>

                                <p className=" mb-4">
                                    {" "}
                                    <span className=" font-normal me-2">
                                        Population:
                                    </span>
                                    2,302
                                </p>

                                <p className=" mb-4">
                                    {" "}
                                    <span className=" font-normal me-2">
                                        Region:
                                    </span>
                                    Oceania
                                </p>

                                <p className=" mb-4">
                                    {" "}
                                    <span className=" font-normal me-2">
                                        Sub Region:
                                    </span>
                                    Australia and New Zealand
                                </p>

                                <p className=" mb-4">
                                    {" "}
                                    <span className=" font-normal me-2">
                                        Capital:
                                    </span>
                                    Kingston
                                </p>
                            </div>
                            <div>
                                <p className=" mb-4">
                                    {" "}
                                    <span className=" font-normal me-2">
                                        Top Level Domain:
                                    </span>
                                    nf
                                </p>

                                <p className=" mb-4">
                                    {" "}
                                    <span className=" font-normal me-2">
                                        Currencies:
                                    </span>
                                    Australian dollar
                                </p>

                                <p className=" mb-4">
                                    {" "}
                                    <span className=" font-normal me-2">
                                        Language:
                                    </span>
                                    English
                                </p>
                            </div>
                        </div>

                        <div className=" flex gap-2 mt-8 dark:text-white">
                            <p className=" px-3 py-2">Border Countries:</p>

                            <ul className=" flex gap-3">
                                <li className=" px-3 py-2">
                                    <Link to="/">Australia</Link>
                                </li>

                                <li className=" px-3 py-2">
                                    <Link to="/">Australia</Link>
                                </li>

                                <li className=" px-3 py-2">
                                    <Link to="/">Australia</Link>
                                </li>

                                <li className=" px-3 py-2">
                                    <Link to="/">Australia</Link>
                                </li>

                                <li className=" px-3 py-2">
                                    <Link to="/">Australia</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
