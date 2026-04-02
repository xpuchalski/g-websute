import { Fragment, useState } from 'react'
import { useCategories } from './hooks/useCategories'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPricingPage from './pages/ContactPricingPage'
import './App.css'

const PAGES = {
  home: HomePage,
  portfolio: PortfolioPage,
  contact: ContactPricingPage,
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact & Pricing' },
]

function App() {
  const [activePage, setActivePage] = useState('home')
  const categories = useCategories()

  const ActivePage = PAGES[activePage]

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <button className="site-title" onClick={() => setActivePage('home')}>
          ARTWORKS
        </button>

        <nav className="nav-links">
          {NAV_ITEMS.map(({ id, label }) => (
            <Fragment key={id}>
              <button
                className={`nav-item${activePage === id ? ' active' : ''}`}
                onClick={() => setActivePage(id)}
              >
                {label}
              </button>
              {id === 'portfolio' && activePage === 'portfolio' && categories.length > 0 && (
                <div className="category-nav">
                  {categories.map((cat) => (
                    <a key={cat.id} href={`#${cat.id}`} className="category-link">
                      {cat.name}
                    </a>
                  ))}
                </div>
              )}
            </Fragment>
          ))}
        </nav>
      </aside>

      <main className="content">
        <ActivePage categories={categories} /><br></br>
      <footer style={{alignItems: 'center', display: 'flex', justifyContent: 'center', bottom: 0, padding: '1rem', width: '100%', backgroundColor: 'var(--clr-dark)'}}>
      &copy; {new Date().getFullYear()} George Puchalski. All rights reserved.| Designed by X. Puchalski
      </footer>
      </main>
    </div>
  )
}

export default App
