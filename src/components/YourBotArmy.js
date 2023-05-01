import React from "react";
export default function BotArmy({ botArmy, removeBot }) {
  return (
    <div>
      <h1>My Bot Army</h1>
      <div className="bot-grid">
        {botArmy.map((bot) => (
          <div className="bot-card" key={bot.id} onClick={() => removeBot(bot)}>
            <img
              src={bot.avatar_url}
              alt="Bot Avatar"
              style={{ width: "180px" }}
            />
            <h3>{bot.name}</h3>
            <h4>{bot.catchphrase}</h4>
            <h4>Class: {bot.bot_class}</h4>
            <h4>Health: {bot.health}</h4>
            <h4>Damage: {bot.damage}</h4>
            <h4>Armor: {bot.armor}</h4>
            <button onClick={() => removeBot(bot)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
