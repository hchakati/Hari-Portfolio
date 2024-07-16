import React, { useEffect, useState } from "react";
import Ping from "./ping";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Contact() {
	const [time, setTime] = useState("");

	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date();
			const nairobiTime = new Date(
				now.toLocaleString("en-US", { timeZone: "Africa/Nairobi" })
			);

			const options = {
				weekday: "short",
				year: "numeric",
				month: "short",
				day: "numeric",
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
			};
			const formattedTime = nairobiTime.toLocaleDateString("en-US");
			setTime(formattedTime);
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	return (
		<div
			id="contacts"
			className=" w-full h-full flex flex-col justify-end md:justify-evenly gap-10 bg-black text-neutral-200 px-5 lg:px-10 pt-[20vh] "
		>
			
			<div className="container flex flex-col md:flex-row gap-10 justify-between text-[14px] md:text-[16px]">
				<div className="w-full flex flex-col text-center md:text-start">
					<Link
						href="mailto:srujanakalagani8@gmail.com"
						target="_blank"
					>
						<Button
							type="submit"
							className="rounded-none  p-0 text-white bg-black border-b-2 hover:border-b-5 border-b-black hover:border-b-teal-600  relative"
						>
							Hire Me{" "}
							<div className="relative w-[20px] h-[20px]">
								<Image
									src="./arrowtopright.svg"
									alt="follow link to linkedin"
									fill
									className="fill-orange-300"
								/>
							</div>{" "}
						</Button>
					</Link>
					<p className="flex text-center w-full justify-center md:justify-start items-center">
						Open for remote work <Ping />
					</p>
				</div>

				<div className="flex flex-row flex-wrap md:flex-col justify-center items-center w-full my-5 md:my-0 gap-3 md:gap-2">
					<Link
						href="https://www.linkedin.com/in/saisrujana8/"
						target="_blank"
					>
						<Button
							type="submit"
							className="rounded-none p-0 text-white bg-black border-b-2 hover:border-b-5 border-b-black hover:border-b-teal-600  relative"
						>
							LinkedIn{" "}
							<div className="relative w-[20px] h-[20px]">
								<Image
									src="./arrowtopright.svg"
									alt="follow link to linkedin"
									fill
									className="fill-orange-300"
								/>
							</div>{" "}
						</Button>
					</Link>
					<Link
						href="https://github.com/srujana85"
						target="_blank"
					>
						<Button
							type="submit"
							className="rounded-none  p-0 text-white bg-black border-b-2 hover:border-b-5 border-b-black hover:border-b-teal-600  relative"
						>
							Github{" "}
							<div className="relative w-[20px] h-[20px]">
								<Image
									src="./arrowtopright.svg"
									alt="follow link to linkedin"
									fill
									className="fill-orange-300"
								/>
							</div>{" "}
						</Button>
					</Link>
					<Link
						href="#"
						download="Resume.pdf"
						target="_blank"
					>
						<Button
							type="submit"
							className="rounded-[5px]  p-0 text-white bg-black border border-neutral-600 px-2 hover:border-teal-600 flex gap-1 relative"
						>
							Download Resume{" "}
							<div className="relative w-[20px] h-[20px]">
								<Image
									src="./docsave.svg"
									alt="follow link to linkedin"
									fill
									className="fill-orange-300"
								/>
							</div>{" "}
						</Button>
					</Link>
				</div>

				<div className="w-full flex flex-col text-center md:text-end">
					<p>Phone: (347)-454-1315</p>
					<Link
						href="mailto:srujanakalagani8@gmail.com"
						target="_blank"
					>
						<Button
							type="submit"
							className="rounded-none  p-0 text-white bg-black border-b-2 hover:border-b-5 border-b-black hover:border-b-teal-600  relative"
						>
							srujanakalagani8@gmail.com{" "}
							<div className="relative w-[20px] h-[20px]">
								<Image
									src="./arrowtopright.svg"
									alt="follow link to linkedin"
									fill
									className="fill-orange-300"
								/>
							</div>{" "}
						</Button>
					</Link>
				</div>
			</div>
			<h3 className="w-full text-[14vw] p-0 text-center font-bold leading-tight lowercase text-neutral-300 ">
				sai.srujana
			</h3>
			
		</div>
	);
}
