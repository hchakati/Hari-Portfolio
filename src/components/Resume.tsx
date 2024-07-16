import React from 'react'

export default function Resume() {
  return (
		<div
			id="resume"
			className="bg-black text-neutral-100 w-full h-full py-10 md:py-20"
		>
			<div className=" container w-full h-full flex flex-col gap-8">
				<div className="flex flex-col md:flex-row w-full justify-between   bg-transparent">
					<h2 className="w-full md:w-1/3 text-[32px] md:text-[48px] font-bold">
						Experience
					</h2>
					<div className="w-full md:w-2/3 flex flex-col text-[14px] md:text-[16px] text-neutral-300 py-5 backdrop-blur-sm">
						<div className="flex h-[12vh] rounded-[5px] p-2 w-full border border-transparent border-b-neutral-900 hover:border-teal-600 hover:bg-neutral-900 ">
							<div className="w-1/2 flex flex-col gap-2">
								<p className="text-[24px] font-semibold">Oracle</p>
								<p className="text-[12px] md:text-[14px] font-light">
									North Carolina, NC
								</p>
							</div>
							<div className="w-1/2 text-end">10/2022 - Current</div>
						</div>
						<div className="flex h-[12vh] rounded-[5px] p-2 w-full border border-transparent border-b-neutral-900 hover:border-teal-600 hover:bg-neutral-900 ">
							<div className="w-1/2 flex flex-col gap-2">
								<p className="text-[24px] font-semibold">Comcast</p>
								<p className="text-[12px] md:text-[14px] font-light">
									Philadelphia, PA.
								</p>
							</div>
							<div className="w-1/2 text-end">12/2020 - 09/2022</div>
						</div>
						<div className="flex h-[12vh] rounded-[5px] p-2 w-full border border-transparent border-b-neutral-900 hover:border-teal-600 hover:bg-neutral-900 ">
							<div className="w-1/2 flex flex-col gap-2">
								<p className="text-[24px] font-semibold">GlobalMed</p>
								<p className="text-[12px] md:text-[14px] font-light">
									Scottsdale, AZ
								</p>
							</div>
							<div className="w-1/2 text-end">06/2017 - 11/2018</div>
						</div>
						<div className="flex h-[12vh] rounded-[5px] p-2 w-full border border-transparent border-b-neutral-900 hover:border-teal-600 hover:bg-neutral-900 ">
							<div className="w-1/2 flex flex-col gap-2">
								<p className="text-[24px] font-semibold">Innoplex</p>
								<p className="text-[12px] md:text-[14px] font-light">
									Pune, India
								</p>
							</div>
							<div className="w-1/2 text-end">12/2018 - 11/2020</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
