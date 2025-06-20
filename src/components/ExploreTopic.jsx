import { Link } from "react-router-dom";

const topics = [
  "ai", "career", "personal", "review", "react", "node", "databases", "remix", "typescript",
  "user experience", "css", "testing", "javascript", "productivity", "open source", "programming",
  "teaching", "state", "performance", "learning"
];

function ExploreTopic() {
    
    return (
        <div className="relative ml-[10vw] mr-[10vw]">
            <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mb-14">
                <div className="col-span-full relative h-20">
                    <div className="absolute">
                        <div className="relative h-8 group inline-flex flex-col justify-end">
                            <div>
                                <div className=" absolute left-0 bottom-9 h-8 flex items-center gap-1 text-sm opacity-0 group-hover:opacity-100 transition duration-3 00 ease-in-out text-center">
                                    <span className="text-black">895.7k</span>
                                    <Link className="text-gray-500 hover:text-black whitespace-nowrap">what&apos;s this</Link>
                                </div>
                            </div>
                            <div className="text-center mb-4">
                                <Link>Login</Link>
                            </div>
                            <ul className="relative flex h-0 overflow-visible px-4 border-t">
                                <li className="overflow-visible mx-1">
                                    <button className="relative flex origin-right items-center justify-center focus:outline-none">
                                        <div className="relative bg-blue-500 w-4 h-10 rounded-b-md">
                                            <span className="absolute left-0 top-12 opacity-0">123</span>
                                        </div>
                                    </button>
                                </li>
                                <li className="overflow-visible mx-1">
                                    <button className="relative flex origin-right items-center justify-center focus:outline-none">
                                        <div className="bg-yellow-500 w-4 h-8 rounded-b-md">
                                            <span></span>
                                        </div>
                                    </button>
                                </li>
                                <li className="overflow-visible mx-1">
                                    <button>
                                        <div className="bg-red-500 w-4 h-5 rounded-b-md">
                                            <span></span>
                                        </div>
                                    </button>
                                </li>
                            </ul> 
                        </div>
                    </div>
                </div>
                <div className="col-span-full h-16 lg:h-20"></div>
                <p className="col-span-full">The 
                    <span className="text-blue-600 font-bold mx-1">blue</span> team is in the lead.
                 <Link
                    className="relative text-blue-500 font-medium mx-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:duration-200 after:bg-blue-500 after:translate-y-2 hover:after:w-full after:transition-all">
                      Login or sign up </Link>
                 to choose your team!</p>
                <div className="col-span-full h-20"></div>
                <div className="col-span-full mb-6">Search blog by topics</div>
                <div className="flex flex-wrap col-span-full">
                    {topics.map((topic) => (
                        <label 
                            key={topic} 
                            className="relative mb-4 mr-4 cursor-pointer block h-auto w-auto bg-gray-100 rounded-full px-6 py-3 hover:ring-2 hover:ring-blue-500 hover:ring-offset-5 transition-all duration-300 ease-in"
                        >
                            <input 
                                type="checkbox" 
                                className="hidden"
                                value={topic}
                            />
                            {topic}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ExploreTopic;