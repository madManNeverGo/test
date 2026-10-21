import React from 'react';
import './About.css';

interface Perk {
  title: string;
  desc: string;
  icon: string;
}

export const About: React.FC = () => {
  const perks: Perk[] = [
    {
      title: 'Rychlé doručení',
      desc: 'Objednávky odesíláme do 24 hodin přímo z našeho centrálního skladu.',
      icon: '🚀'
    },
    {
      title: 'Ověřená kvalita',
      desc: 'Všechny produkty pečlivě testujeme a vybíráme jen spolehlivé značky.',
      icon: '⭐'
    },
    {
      title: 'Zákaznická podpora',
      desc: 'Jsme tu pro vás každý všední den od 8:00 do 18:00 na telefonu i chatu.',
      icon: '💬'
    }
  ];

  return (
    <main className="about-container">
      <header className="about-header">
        <span className="about-badge">Náš příběh</span>
        <h1>O našem e-shopu</h1>
        <p className="about-subtitle">
          Přinášíme kvalitní technologii a příslušenství do vašich domovů i kanceláří.
        </p>
      </header>

      <section className="about-story">
        <h2>Jak to celé začalo</h2>
        <p>
          Začínali jsme jako malá skupina nadšenců do moderních gadgetů, kterým na českém trhu chyběl 
          obchod s lidským přístupem, transparentními cenami a spolehlivým servisem.
        </p>
      </section>

      <section className="about-perks">
        <h2>Proč nakupovat u nás?</h2>
        <div className="perks-grid">
          {perks.map((perk, index) => (
            <div key={index} className="perk-card">
              <div className="perk-icon">{perk.icon}</div>
              <h3>{perk.title}</h3>
              <p>{perk.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-contact">
        <h2>Kontakt</h2>
        <div className="contact-box">
          <p><strong>E-mail:</strong> podpora@mujeshop.cz</p>
          <p><strong>Telefon:</strong> +420 123 456 789</p>
        </div>
      </section>
    </main>
  );
};

export default About;