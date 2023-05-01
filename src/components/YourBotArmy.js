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
            <p style={{fontSize:"xx-small"}}>{bot.catchphrase}</p>
            <h4>Class:{bot.bot_class}</h4>
            <div style={{display:'flex',gap:"7px"}}>
           
            <h4><img src="https://img.icons8.com/ios/50/null/heart-with-pulse--v1.png" style={{width:"22px"}}/>{bot.health}</h4>
            <h4><img src="https://img.icons8.com/ios/50/null/gun.png" style={{width:"22px"}}/>{bot.damage}</h4>
            <h4><img src="https://img.icons8.com/external-anggara-glyph-anggara-putra/32/null/external-sheild-ecommerce-anggara-glyph-anggara-putra.png" style={{width:"22px"}}/>{bot.armor}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
