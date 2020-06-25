import React from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import Home from './routes/Home';
import Navigation from './component/Navigation';

function App(){
	return (
		<BrowserRouter>
			<Navigation />
			<Route path="/" exact={true} component={Home}/>
			<Route path="/news" exact={true} component={Home}/>
			<Route path="/past" exact={true} component={Home}/>
		</BrowserRouter>
	)
}


export default App;
