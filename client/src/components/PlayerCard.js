import React from 'react';
import styled from 'styled-components';

const PlayerCard = props => {
    return(
        <Play className="player-card">
            <p>Name: {props.name}</p>
            <p>Country: {props.country}</p>
            <p>Searches: {props.searches}</p>
        </Play>
    );
}

export default PlayerCard;

const Play = styled.div`
    min-width: 300px;
    margin: 1%;
    border: 1px solid silver;
    border-radius: 25px;
    text-align: center;
`