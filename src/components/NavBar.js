import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { GoFile } from "react-icons/go";

export default function NavBar() {
	return (
		<header className="bg-green-400">
			<div className="container mx-auto flex justify-between">
				<nav className="inline-flex ">
					<NavLink
						to="/"
						exact
						activeClassName="text-yellow-200 "
						className=" flex-initial items-center py-9 px-3 mr-4 text-black-300 hover:text-yellow-200 text-4xl "
					>
						Home
					</NavLink>

					<NavLink
						to="/project"
						activeClassName="text-yellow-200"
						className=" flex-initial items-center py-10 px-3  text-3xl rounded text-black hover:text-yellow-200"
					>
						Projects
					</NavLink>
				</nav>
				<div className="flex-initial sm:inline-flex md:flex lg:flex xl:flex ... py-3 px-3 my-6 gap-2">
					<SocialIcon
						url="https://www.linkedin.com/in/alexey-aulov/"
						ClassName="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 45, width: 45 }}
					/>

					<SocialIcon
						url="https://github.com/AlexeyAulov"
						ClassName="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 45, width: 45 }}
					/>

					<a
						href="https://github.com/AlexeyAulov/Resume/blob/main/Alexey%20Aulov%20SWE%20.pdf"
						target="_blank"
						rel="noreferrer"
					>
						<GoFile
							ClassName="mr-4"
							fgColor="#fff"
							style={{ height: 45, width: 45 }}
						/>
					</a>
				</div>
			</div>
		</header>
	);
}
