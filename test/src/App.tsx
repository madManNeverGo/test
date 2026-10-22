import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import About from './About'

const resourceLinks = [
  { href: 'https://vite.dev/', icon: viteLogo, iconClassName: 'logo', label: 'Explore Vite' },
  { href: 'https://react.dev/', icon: reactLogo, iconClassName: 'button-icon', label: 'Learn more' },
]

const socialLinks = [
  { href: 'https://github.com/vitejs/vite', icon: 'github-icon', label: 'GitHub' },
  { href: 'https://chat.vite.dev/', icon: 'discord-icon', label: 'Discord' },
  { href: 'https://x.com/vite_js', icon: 'x-icon', label: 'X.com' },
  { href: 'https://bsky.app/profile/vite.dev', icon: 'bluesky-icon', label: 'Bluesky' },
]

type SpriteIconProps = {
  symbol: string
  className: string
}

function SpriteIcon({ symbol, className }: SpriteIconProps) {
  return (
    <svg className={className} aria-hidden="true" focusable="false">
      <use href={`/icons.svg#${symbol}`} />
    </svg>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <About />

      <section id="center">
        <div className="hero">
          <img
            src={heroImg}
            className="base"
            width="170"
            height="179"
            alt=""
          />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks" aria-hidden="true" />

      <section id="next-steps">
        <div id="docs">
          <SpriteIcon className="icon" symbol="documentation-icon" />
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            {resourceLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  <img className={link.iconClassName} src={link.icon} alt="" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div id="social">
          <SpriteIcon className="icon" symbol="social-icon" />
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  <SpriteIcon className="button-icon" symbol={link.icon} />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="ticks" aria-hidden="true" />
      <section id="spacer" aria-hidden="true" />
    </>
  )
}

export default App