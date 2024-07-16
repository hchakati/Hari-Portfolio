import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import GradualSpacing from "@/components/magicui/gradual-spacing";

export default function Hero() {
	return (
		<div className="relative bg-black flex h-screen w-full items-center justify-center overflow-hidden  bg-background p-20 md:shadow-xl flex-col gap-2 md:gap-10">
			
				<GradualSpacing
					className="font-display text-center text-[15vw] md:text-[10vw] font-bold tracking-[-0.1em]  text-neutral-200 dark:text-white  md:leading-[5rem]"
					text="sai.srujana"
				/>

				<GradualSpacing
					className="font-display text-center text-[7vw] md:text-[5vw] font-bold tracking-[-0.1em]  text-neutral-200 dark:text-white  md:leading-[5rem]"
					text="Fullstack Developer"
				/>
				
			
			<AnimatedGridPattern
				numSquares={30}
				maxOpacity={0.7}
				duration={3}
				repeatDelay={1}
				className={cn(
					"[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
					"inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
				)}
			/>
		</div>
	);
}
