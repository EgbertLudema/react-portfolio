import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function CTA() {
    return (
        <section className="py-20 shadow-md gradient-bg">
            <div className="container">
                <div className="flex flex-col items-center justify-center gap-4">
                    <h2 className="text-center text-white mb-6">Ready to get started?</h2>
                    <p className="text-center text-white">
                        I’m currently accepting new projects and would love to hear about yours.
                    </p>
                    <p className="text-center text-white mb-8">
                        Please take a few minutes to tell me about it.
                    </p>
                    <Link href="/contact">
                        <button className="white-btn shadow-sm hover:shadow-md flex flex-row items-center gap-2">
                            Get in touch
                            <FaArrowRight/>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}