import React from "react";

import './styles.css'

function DevItem({dev}) {
	return (
		<li  className="dev-item">
			<header>
				<img src={dev && dev.avatar_url} alt={dev && dev.name} />
				<div className="user-info">
					<strong>{dev && dev.name}</strong>
					<span>{dev &&  dev.techs.join(", ")}</span>
				</div>
			</header>
			<p> {dev && dev.bio}</p>
			<a href={`https://github.com/${dev && dev.github_username}`}>
				Acessar Perfil no Github
			</a>
		</li>
	);
}

export default DevItem;
