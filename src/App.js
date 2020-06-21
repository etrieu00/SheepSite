import React, { useState } from 'react';
import classes from './App.module.css';

import Display from './Layouts/Display/Display';
import Landscape from './Layouts/Landscape/Landscape';
import RollingSheep from './Navigation/RollingSheep/RollingSheep';
import Sky from './Layouts/Sky/Sky';

const App = () => {
	const [pages,setPages] = useState({
		page: 'home',
	});
	const handlePageChange = (page) =>{
		setPages({page: page});
	}
	return (
		<div className="App">
			<Sky page={pages.page} click={handlePageChange}/>
			<Display page={pages.page}/>
			<RollingSheep roll={pages.page}/>
			<Landscape />
		</div>
	);
}

export default App;