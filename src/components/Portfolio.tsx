import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./../components/ui/accordion";
import { Asset, Cardo, Playfair_Display, Vast_Shadow } from "next/font/google";
const cardo = Playfair_Display({
	weight: ["400"],
	subsets: ["latin"],
});

const items = [
	{
		id: "1",
		live: "https://srujanafood.ccbp.tech/",
		label: "Food Munch",
		src: "./foodmunch.png",
	},
	{
		id: "2",
		live: "https://srujanajoke.ccbp.tech/",
		label: "Joke Generator",
		src: "./jokegenerator.png",
	},
	{
		id: "3",
		live: "https://srujanawiki1.ccbp.tech/",
		label: "Wikipedia Search",
		src: "./wiki.png",
	},
	{
		id: "4",
		live: "https://eiudgt.com/skalagani/",
		label: "Movie Rulz",
		src: "./movie.png",
	},
	{
		id: "5",
		live: "https://codepen.io/Sai-Srujana-the-flexboxer/pen/OJeyQBP",
		label: "3D cards Carousel",
		src: "./3dcard.png",
	},
	{
		id: "6",
		live: "https://codepen.io/Sai-Srujana-the-flexboxer/pen/OJeyQqy",
		label: "3D Wave",
		src: "./3dwave.png",
	},
	{
		id: "7",
		live: "https://codepen.io/Sai-Srujana-the-flexboxer/pen/zYVvRej",
		label: "Flowing Image",
		src: "./flowingimage.png",
	},
] as const;

export default function Portfolio() {
	return (
		<div
			id="portfolio"
			className=" p-3 md:p-10 h-full w-full bg-black/90 text-white "
		>
			<div className=" container w-full flex flex-col gap-5 md:gap-10  items-center justify-center">
				<h3
					className={`  text-[32px] lg:text-[48px]  tracking-tighter text-start w-full font-bold`}
				>
					Portfolio
				</h3>
				<div className="w-full  h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
					{items.map((item) => (
						<div
							key={item.id}
							className="group w-full flex flex-col border pb-10 border-neutral-600 hover:border-teal-600 h-full relative rounded-lg overflow-hidden gap-5 md:gap-10"
						>
							<div className="w-full flex flex-col gap-3 p-3">
								<div className="flex flex-col gap-3 w-full">
									<div className="flex w-full gap-3 items-center justify-between ">
										<h3 className="text-[14px] w-full font-bold tracking-tight ">
											{item.label}
										</h3>
										<div className="">
											<Link
												href={item.live}
												target="_blank"
											>
												<Button
													type="submit"
													className="rounded-[5px] px-2 text-white bg-black border hover:border-b-5 border-neutral-600 hover:border-teal-600  relative"
												>
													Live Site{" "}
													<div className="relative w-[20px] h-[20px]">
														<Image
															src="/arrowtopright.svg"
															alt="follow link to linkedin"
															fill
															className="fill-orange-300"
														/>
													</div>{" "}
												</Button>
											</Link>
											{/* <Link
												href={item.source}
												target="_blank"
											>
												<Button
													type="submit"
													className="rounded-[5px] px-2 text-white bg-black border hover:border-b-5 border-neutral-600 hover:border-teal-600  relative"
												>
													Source code{" "}
													<div className="relative w-[20px] h-[20px]">
														<Image
															src="/arrowtopright.svg"
															alt="follow link to linkedin"
															fill
															className="fill-orange-300"
														/>
													</div>{" "}
												</Button>
											</Link> */}
										</div>
									</div>
									{/* <p className="text-[12px] md:text-[14px] tracking-wider leading-[24px]">
										{item.description}
									</p> */}
								</div>
							</div>
							<div className="w-full">
								<AspectRatio
									ratio={16 / 9}
									className="rounded-[5px]  overflow-hidden"
								>
									<div className="relative w-full h-full  group-hover:brightness-75 ">
										<Image
											src={item.src}
											alt="holograph image"
											fill
										/>
									</div>
								</AspectRatio>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
