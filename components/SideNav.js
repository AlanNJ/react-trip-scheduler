import React from "react";

export const SideNav = () => {
	const openNav = () => {
		document.getElementById("mySidenav").style.width = "250px";
		document.getElementById("main").style.marginLeft = "250px";
		document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
	};
	const closeNav = () => {
		document.getElementById("mySidenav").style.width = "0";
		document.getElementById("main").style.marginLeft = "0";
		document.body.style.backgroundColor = "white";
	};
	return (
		<div className="sidenav-container">
			<div id="mySidenav" class="sidenav">
				<a href="javascript:void(0)" class="closebtn" onclick={closeNav}>
					&times;
				</a>
				<a href="#">About</a>
				<a href="#">Services</a>
				<a href="#">Clients</a>
				<a href="#">Contact</a>
			</div>

			<div id="main">
				<h2>Sidenav Push Example</h2>
				<p>
					Click on the element below to open the side navigation menu, and push
					this content to the right. Notice that we add a black see-through
					background-color to body when the sidenav is opened.
				</p>
				<span className="span-tag" onclick={openNav}>
					&#9776; open
				</span>
			</div>
		</div>
	);
};
