import React, { useState, useEffect } from "react";
import "./Bot.css";
import BotArmy from "./YourBotArmy";
const BotCollection = () => {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  const getBots = async () => {
    try {
      const response = await fetch("http://localhost:8001/bots");
      const json = await response.json();
      setBots(json);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteBot = async (botId) => {
    try {
      await fetch("http://localhost:8001/bots/${botId}", {
        method: "DELETE",
      });
      setBots((prevBots) => prevBots.filter((bot) => bot.id !== botId));
      setBotArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== botId));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBots();
    const botArmyFromStorage =
      JSON.parse(localStorage.getItem("botArmy")) || [];
    setBotArmy(botArmyFromStorage);
  }, []);
  const enlistBot = (bot) => {
    if (botArmy.find((addedbot) => addedbot.id === bot.id)) {
      return;
    }
    setBotArmy((prevArmy) => [...prevArmy, bot]);
    localStorage.setItem("botArmy", JSON.stringify([...botArmy, bot]));
  };
  const removeBot = (bot) => {
    setBotArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== bot.id));
    localStorage.setItem(
      "botArmy",
      JSON.stringify(botArmy.filter((bot) => bot.id !== bot.id))
    );
  };
  return (
    <div>
      <BotArmy botArmy={botArmy} removeBot={removeBot} />
      <h1>Available Bots</h1>
      <div className="bot-grid">
        {bots.map((bot) => (
          <div className="bot-card" key={bot.id} onClick={() => enlistBot(bot)}>
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
            <button onClick={() => deleteBot(bot.id)} className="delete-button">
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BotCollection;
