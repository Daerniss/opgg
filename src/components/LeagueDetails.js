import React from 'react';
// import SummonerLeagueDetails from '../apis/SummonerLeagueDetails';

const LeagueDetails = ({ league }) => {
	if(!league) {
		return <div>Loading...</div>
	}

	return(
		<div>
			<p>
				{league.summonerName}
			</p>
			<p>
				{league.tier}
			</p>
			<p>
				{league.rank}
			</p>
			<p>{league.wins} wins - {league.losses} losses</p>
		</div>

	) ;
}

export default LeagueDetails;