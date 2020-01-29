import React from 'react';
import SearchBar from './SearchBar';
import LeagueDetails from './LeagueDetails';
import SummonerInfo from '../apis/SummonerInfo';
import SummonerLeagueDetails from '../apis/SummonerLeagueDetails';

class App extends React.Component {
	state = { RANKED_SOLO_5x5: {}, isLoaded: 0 };

	onQuerySubmit = async (query) => {
		this.setState({isLoaded: 1})
		const response = await SummonerInfo.get(query);
		// this.setState({ id: response.data.id });

		const summoner = await SummonerLeagueDetails(response.data.id);
		this.setState({ RANKED_SOLO_5x5: summoner.data[0], isLoaded: 2 });
		console.log(this.state.RANKED_SOLO_5x5);
	}

	renderLeagueDetails = () => {
		if(this.state.isLoaded === 1) {
			return <div>Loading...</div>
		} else if(this.state.isLoaded === 2){
			return <LeagueDetails  league={this.state.RANKED_SOLO_5x5} />
		}
	}

	render() {
		return(
			<div className="container">
				<SearchBar onQuerySubmit={this.onQuerySubmit} />
				{this.renderLeagueDetails()}
			</div>
		);
	}
}

export default App;