import React from "react";
import TextReveal from "@/components/magicui/text-reveal";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";

export default function About() {
	return (
		<div
			id="about"
			className="p-5 lg:p-0 md:container  flex flex-col md:flex-row min-h-screen  gap-5 md:gap-10  w-full items-start md:items-center justify-center rounded-lg bg-white dark:bg-black"
		>
			<div className="w-full md:w-1/2 flex flex-col gap-5">
				<h2 className="text-[24px] md:text-[36px] lg:text-[42px] font-bold ">
					About Me
				</h2>
				<p className="text-balance text-[14px] md:text-[16px] leading-[24px] md:leading-[30px] tracking-wide">
  I am Sai Srujana, a Full Stack Developer with over 7 years of vibrant
  experience in enterprise software application development, testing,
  maintenance, and production support. My passion for creating seamless
  and efficient applications has led me to master both frontend and
  backend development. In the backend, I excel with Java and Spring Boot
  for microservices and JSP Servlets for monolithic applications. My
  expertise extends to database frameworks such as <span className="font-bold">Hibernate, JDBC,
  JPA</span>, and I am proficient in testing with <span className="font-bold">JUnit and Mockito</span>. I
  have hands-on experience with both <span className="font-bold">SQL</span> (PostgreSQL, MySQL, Oracle)
  and <span className="font-bold">NoSQL</span> (MongoDB, AWS DynamoDB) databases. Crafting APIs for
  CRUD operations using <span className="font-bold">Hibernate ORM</span> and deploying Spring Boot
  microservices in <span className="font-bold">AWS</span> through <span className="font-bold">Jenkins CI/CD pipelines</span> are part
  of my regular endeavors. I am well-versed with <span className="font-bold">Docker and
  Kubernetes</span>, and I ensure robust unit testing with JUnit and
  integration testing with Mockito. On AWS, I have worked with services
  like <span className="font-bold">IAM, EC2, S3, CloudWatch, and Route 53</span>. I also utilize
  <span className="font-bold">Swagger</span> for seamless API documentation. On the frontend, I bring
  designs to life using <span className="font-bold">React and Angular</span>, ensuring that websites
  are not only functional and user-friendly but also visually stunning.
  I take pride in making products that are eye-catching and intuitive,
  creatively conveying your message and identity. Throughout my career,
  I have had the joy of designing websites for many renowned brands,
  always aiming to blend functionality with beauty. Let’s create
  something amazing together!
</p>

			</div>
			<div className="w-full h-full md:w-1/2 relative">
				<AspectRatio
					ratio={1 / 1}
					className="rounded-[5px]  overflow-hidden"
				>
					<div className="relative w-full h-full  group-hover:brightness-75 ">
						<Image
							src="/saiimage.jpg"
							alt="holograph image"
							fill
							style={{ objectFit: "contain" }}
						/>
					</div>
				</AspectRatio>
			</div>
		</div>
	);
}
