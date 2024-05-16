import React from "react";
import Player from "./player";

function PlayerList(props) {
  const players = props.playerData.map(player => {
    return (
      <Player
      key={player.gamerTag}
      firstName={player.firstName}
      lastName={player.lastName}
      wins={player.wins}
      />
    );
  });

  const onePlayer = props.playerData[0]
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {players}
    </section>
  );
}

export default PlayerList;