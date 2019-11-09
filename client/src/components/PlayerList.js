import React from 'react';
import PlayerCard from './PlayerCard.js';
import styled from 'styled-components';

import { useDarkMode } from '../hooks/useDarkMode.js';

const PlayerList = props => {
    const [darkMode, setDarkMode] = useDarkMode('darkModeOn', false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <>
        <button onClick={toggleMode}>Dark Mode</button>
        <List className="player-list">
            {props.user.map(item => (
                <PlayerCard
                    key={item.id}
                    name={item.name}
                    country={item.country}
                    searches={item.searches}
                />
            ))}
        </List>
        </>
    );
}

export default PlayerList;

const List = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`