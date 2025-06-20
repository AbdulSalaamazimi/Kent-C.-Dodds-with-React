import { Link } from "react-router-dom";
import CircleHover from "../layout/CircleHover";
import { ArrowDown } from "../layout/Icon";


function DeveloperEdge() {

    return (
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-4 lg:gap-x-6 mb-30">
            <div className="col-span-full hidden lg:block mb-10 lg:col-span-4 lg:mb-0">
                <h2 className="!text-lg !font-medium text-black">Reasons to invest in yourself</h2>
            </div>
            <div className="col-span-full mb-8 lg:col-span-4 lg:mb-12">
                <h3 className="!text-lg !font-medium text-black mb-4">Become a more confident developer</h3>
                <p className="mb-20 text-lg text-gray-500 max-w-full">All of us are familiar with the feeling of stumbling around between YouTube videos, blog posts, and documentation just copy/pasting code and hoping it&apos;ll work. It&apos;s frustrating and unproductive. With these courses, you&apos;ll have the confidence you need to skip all that stumbling and start shipping. Coding is <strong> more fun</strong> this way, trust me 🥳</p>
                <h3 className="!text-lg !font-medium text-black mb-4">Earn more money as a developer</h3>
                <p className="mb-20 text-lg text-gray-500 max-w-full">The more skilled you are, the more you can get done and the more value you can provide to your employer and clients. If you don&apos;t think that comes with a bump in pay, ask the thousands of other devs who have experienced exactly this as a result of what they learned in these courses. Get that money 🤑</p>
            </div>
            <div className="col-span-2 col-start-11 hidden lg:flex items-start justify-end">
                <Link >
                    <CircleHover
                        arrow={<ArrowDown />}
                    />
                </Link>
            </div>
        </div>
    )
}

export default DeveloperEdge;