import React from "react";
import IconCloud from "./magicui/icon-cloud";

const slugs = [
	"typescript",
	"javascript",
	"java",
	"react",
	"android",
	"html5",
	"css3",
	"nodedotjs",
	"express",
	"nextdotjs",
	"prisma",
	"amazonaws",
	"postgresql",
	"firebase",
	"nginx",
	"vercel",
	"testinglibrary",
	"jest",
	"cypress",
	"docker",
	"git",
	"jira",
	"github",
	"gitlab",
	"visualstudiocode",
];

const techNames = [
	"Java",
	"JSP",
	"Servlets/Applets",
	"JDBC",
	"Custom tags",
	"JavaBeans",
	"JNDI",
	"RMI",
	"EJB Session Beans",
	"Entity Beans",
	"ReactJS 15.x to 17.x",
	"Angular 16",
	"VueJs",
	"NodeJS",
	"Express.js",
	"JSF2.x",
	"Hibernate (JPA, XML)",
	"Spring (CORE, BOOT, SECURITY, AOP)",
	"Eclipse",
	"RAD and Net Beans",
	"Notepad++",
	"Visual Studio",
	"Edit Plus",
	"Sublime Text",
	"SOAP",
	"REST",
	"AX WS",
	"J2EE Design Patterns (MVC, MVP, MVVM, Singleton)",
	"JUNIT",
	"log4j",
	"GIT",
	"CVS",
	"SVN",
	"Okta (SSO, MFA)",
	"JWT",
	"Oauth 2.0",
	"bcrypt",
	"EC2",
	"ECS",
	"RDS",
	"Serverless Lambda",
	"Load Balancer",
	"Auto Scaling Group",
	"S3 Bucket",
	"Cloud watch",
	"Cloud formation",
	"Security Groups",
	"Azure Key Vault",
	"Azure blob storage",
	"Azure Active Directory",
	"Oracle 11g/10g/9i/8i",
	"MS SQL Server",
	"MYSQL-SQL&PL/SQL",
	"POSTGRE SQL",
	"Mongodb",
	"HTML5",
	"CSS",
	"Bootstrap",
	"JavaScript",
	"Typescript",
	"AJAX",
	"XML",
	"JSON",
	"Maven",
	"Java Script",
	"UNIX",
	"Python",
	"JIRA",
	"Jenkins",
	"Splunk",
	"Git",
	"Bitbucket",
	"Apache Kafka",
	"Web Sphere8.x",
	"Tomcat7.x",
	"Web Logic9.x",
	"JBOSS",
	"Docker",
	"Kubernetes",
];


export default function Skills() {
	return (
		<div className=" w-full min-h-screen  p-3 py-10 sm:p-10 bg-black  text-white flex flex-col ">
			<div className="container flex flex-col md:flex-row gap-5 w-full items-center justify-center">
				<div className="w-full md:w-1/2">
					<div className="flex flex-col h-full w-full gap-10 justify-between">
						<h2 className="text-[32px] md:text-[48px] w-full  text-neutral-200 font-bold tracking-tight">
							My Skills
						</h2>

						<ul className="flex flex-wrap gap-2">
							{techNames.map((name, index) => (
								<li
									key={index}
									className="px-2 py-1 border border-neutral-500 text-neutral-500 text-[12px] sm:text-[14px] hover:text-white rounded-[5px]"
								>
									{name},{" "}
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="relative flex h-full w-full md:w-1/2  items-center justify-center overflow-hidden rounded-[5px] px-20 pb-20 pt-8 ">
					<IconCloud iconSlugs={slugs} />
				</div>
			</div>
		</div>
	);
}
