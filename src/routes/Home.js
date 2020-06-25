import React from 'react';
import Api from './Api';
import List from '../component/List';


class App extends React.Component {
	
	state = {
		isLoading:true,
		data:[]
	}

	componentDidMount(){
		console.log(this.props)
		setTimeout(() => {
			Api.fetchApi().then((res)=>{
				//console.log(res)
				this.setState({data:res});
				this.setState({isLoading:false});
			});
		},1000);
	}

	render(){
		const {isLoading,data} = this.state;
		return (
			<section className="newslist">
				{
					(isLoading) ? (
						<p>Loading...</p>
					):(
						<ul>
							{
								data.map((data,index) => {
									return <List key={index} value={data}/>
								})
							}
						</ul>
					)
				}
			</section>
		)
	}
}


export default App;
