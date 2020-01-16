import React, { useEffect, useState } from "react";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";
import "./services/api";
import api from "./services/api";
import DevItem from './components/DevItem'
import DevForm from './components/DevForm'


/**
 *  Component -  function to return html , css, scripts
 *  State     -  Data send to child by the  Parent
 *  Props     -  Data into component (imutable )
 *
 */

function App() {
	const [devs, setDevs] = useState([]);

	async function loadDevs() {
		const response = await api.get("/devs");

		setDevs(response.data);
	}

	useEffect(() => {		
		loadDevs();
	}, []);

	async function handleAddDev(data) {

		const response = await api.post("/devs", data);	
     	loadDevs()
	}

	return (
		<div id="app">
			<aside>
				<strong>Cadastrar </strong>
        <DevForm onSubmit={handleAddDev}/>
			
			</aside>
			<main>
				<ul>  

					{devs.map(dev => (
						<DevItem key={dev && dev._id}dev={dev}/>
					))}

					
				</ul>
			</main>
		</div>
	);
}

export default App;
