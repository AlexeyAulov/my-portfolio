import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Project() {
	const [projectData, setProjectData] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				'*[_type =="project"]{title,date,place,description,projectType,link,tags }'
			)
			.then((data) => setProjectData(data))
			.catch(console.error);
	}, []);

	//Problem up top! where useEffect is

	return (
		<main className="bg-yellow-200 min-h-screen p-12">
			<section className="container  mx-auto">
				<h1 className="text-5xl flex justify-center pb-4">My Projects</h1>
				<section className="grid lg:grid-cols-2 md:grid-cols-2 md:grid-cols-1 gap-8">
					{projectData &&
						projectData.map((project, index) => (
							<article className="relative rounded-lg shadow-xl bg-white p-16">
								<h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text:yellow-700">
									<a
										href={project.link}
										alt={project.title}
										target="_blank"
										rel="noopener noreferrer"
									>
										{project.title}
									</a>
								</h3>
								<div className="text-gray-500 text-xs space-x-4">
									<span>
										<strong className="font-bold">Finished on</strong>:{" "}
										{new Date(project.date).toLocaleDateString()}
									</span>
									<span>
										<strong className="font-bold">Place</strong>:{" "}
										{project.place}
									</span>
									<span>
										<strong className="font-bold">Type</strong>:{" "}
										{project.projectType}
									</span>
									<p className="my-6 text-lg text-gray-700 leading-relaxed">
										{project.description}
									</p>
									<a
										href={project.link}
										rel="noopener noreferrer"
										target="_blank"
										className="text-yellow-500 font-bold hover:underline hover:text-yellow-400"
									>
										View The Project{" "}
									</a>
								</div>
							</article>
						))}
				</section>
			</section>
		</main>
	);
}
