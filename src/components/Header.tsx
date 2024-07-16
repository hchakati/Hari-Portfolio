import React from "react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetClose,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import DotPattern from "./magicui/dot-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import { Syne } from "next/font/google";

const syne = Syne({
	weight: ["400", "500", "600", "700", "800"],
	subsets: ["latin"],
});

export default function Header() {
	return (
		<div
			className={` ${syne.className} filter mix-blend-difference fixed w-screen top-0 flex justify-between items-center px-5 py-2 z-40 backdrop-blur-md`}
		>
			<Link href="/">
				<p className="text-white uppercase font-extrabold text-[24px] md:text-[28px]">
					Sai
				</p>
			</Link>

			<div className="flex gap-3">
				<Sheet>
					<SheetTrigger className=" px-2 py-1  md:px-4 md:py-2 rounded-[5px] text-black text-[14px] bg-white hover:bg-teal-600 hover:text-white shadow-white hover:shadow-lg  ">
						{" "}
						Menu
					</SheetTrigger>
					<SheetContent
						side="top"
						className={` ${syne.className} h-full bg-black text-white`}
					>
						<SheetHeader className="h-screen relative flex flex-col gap-10 justify-between">
							<DotPattern
								className={cn(
									"[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
								)}
							/>
							<SheetTitle className=" flex  items-center justify-between ">
								<SheetClose asChild>
									<Link href="/">
										<p className="text-white uppercase font-extrabold text-[24px] md:text-[28px] ">
											Sai
										</p>
									</Link>
								</SheetClose>
								<SheetClose asChild>
									<Button
										type="submit"
										className="text-[12px] border border-neutral-600 hover:bg-teal-600 hover:text-white rounded-[5px] "
									>
										Close
									</Button>
								</SheetClose>
							</SheetTitle>
							<SheetDescription className="h-full text-white flex flex-col justify-between w-full uppercase gap-20 pb-10">
								<div className="text-white flex flex-col  w-full h-full  justify-between items-center gap-5">
									<div className="w-full flex flex-col justify-center text-center  gap-5 h-full">
										<div className="text-[32px] lg:text-[64px] px-2 md:px-5 tracking-tighter py-2 lg:py-4  hover:bg-white hover:text-black rounded-lg">
											<SheetClose asChild>
												<Link href="/">
													<p>Home</p>
												</Link>
											</SheetClose>
										</div>
										<div className="text-[32px] lg:text-[64px] px-2 md:px-5 tracking-tighter py-2 lg:py-4  hover:bg-white hover:text-black rounded-lg">
											<SheetClose asChild>
												<Link href="#about">
													<p>About</p>
												</Link>
											</SheetClose>
										</div>
										<div className="text-[32px] lg:text-[64px] px-2 md:px-5 tracking-tighter py-2 lg:py-4  hover:bg-white hover:text-black rounded-lg">
											<SheetClose asChild>
												<Link href="#portfolio">
													<p>Portfolio</p>
												</Link>
											</SheetClose>
										</div>
										<div className="text-[32px] lg:text-[64px] px-2 md:px-5 tracking-tighter  py-2 lg:py-4 hover:bg-white hover:text-black rounded-lg">
											<SheetClose asChild>
												<Link
													href="#resume"
													
												>
													<p>Resume</p>
												</Link>
											</SheetClose>
										</div>
										
										<div className="text-[32px] lg:text-[64px] px-2 md:px-5 tracking-tighter py-2 lg:py-4  hover:bg-white hover:text-black rounded-lg">
											<SheetClose asChild>
												<Link href="#contacts">
													<p>Contacts</p>
												</Link>
											</SheetClose>
										</div>
									</div>
									<div className="flex  justify-between  w-full items-center text-[12px] md:text-[14px]">
										<div className="">
											<SheetClose asChild>
												<Link
													href="https://github.com/srujana85"
													target="_blank"
												>
													<Button
														type="submit"
														className="rounded-none  p-0 text-white bg-black border-b-2 hover:border-b-5 border-b-black hover:border-b-teal-600  relative"
													>
														Github{" "}
														<div className="hidden md:inline relative w-[20px] h-[20px]">
															<Image
																src="./arrowtopright.svg"
																alt="follow link to linkedin"
																fill
																className="fill-orange-300"
															/>
														</div>{" "}
													</Button>
												</Link>
											</SheetClose>
										</div>
										<SheetClose asChild>
											<Link
												href="mailto:srujanakalagani8@gmail.com"
												target="_blank"
											>
												<Button
													type="submit"
													className="rounded-none  p-0 text-white bg-black border-b-2 hover:border-b-5 border-b-black hover:border-b-teal-600  relative"
												>
													srujanakalagani8@gmail.com{" "}
													<div className="hidden md:inline relative w-[20px] h-[20px]">
														<Image
															src="./arrowtopright.svg"
															alt="follow link to linkedin"
															fill
															className="fill-orange-300"
														/>
													</div>{" "}
												</Button>
											</Link>
										</SheetClose>
										<SheetClose asChild>
											<Link
												href=" https://www.linkedin.com/in/saisrujana8/"
												target="_blank"
											>
												<Button
													type="submit"
													className="rounded-none  p-0 text-white bg-black border-b-2 hover:border-b-5 border-b-black hover:border-b-teal-600  relative"
												>
													LinkedIn{" "}
													<div className="hidden md:inline relative w-[20px] h-[20px]">
														<Image
															src="./arrowtopright.svg"
															alt="follow link to linkedin"
															fill
															className="fill-orange-300"
														/>
													</div>{" "}
												</Button>
											</Link>
										</SheetClose>
									</div>
								</div>
							</SheetDescription>
						</SheetHeader>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	);
}
