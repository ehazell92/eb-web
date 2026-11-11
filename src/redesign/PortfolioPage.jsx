import { useEffect, useMemo, useState } from 'react'
import { RedesignFooter, RedesignHeader, redesignPortfolios } from './RedesignApp.jsx'

export default function PortfolioPage() {
  const [filter, setFilter] = useState('all')
  const [activeCategory, setActiveCategory] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const cards = useMemo(() => {
    const categories = filter === 'all' ? ['print', 'digital'] : [filter]
    return categories.flatMap((category) => redesignPortfolios[category].map((item, index) => ({ ...item, category, index })))
  }, [filter])

  const activeItems = activeCategory ? redesignPortfolios[activeCategory] : []
  const selectedItem = activeItems[selectedIndex]

  const openPortfolio = (category, index = 0) => {
    setSelectedIndex(index)
    setActiveCategory(category)
  }

  const closePortfolio = () => setActiveCategory(null)
  const showPrevious = () => setSelectedIndex((index) => (index - 1 + activeItems.length) % activeItems.length)
  const showNext = () => setSelectedIndex((index) => (index + 1) % activeItems.length)

  useEffect(() => {
    const openCategory = (event) => openPortfolio(event.detail)
    window.addEventListener('open-portfolio-category', openCategory)
    return () => window.removeEventListener('open-portfolio-category', openCategory)
  }, [])

  useEffect(() => {
    if (!activeCategory) return undefined
    const handleKey = (event) => {
      if (event.key === 'Escape') closePortfolio()
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }
    document.body.classList.add('rd-modal-open')
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.classList.remove('rd-modal-open')
      window.removeEventListener('keydown', handleKey)
    }
  }, [activeCategory, activeItems.length])

  return (
    <div className="redesign">
      <RedesignHeader />
      <main className="rd-portfolio-page">
        <section className="rd-portfolio-page-heading">
          <div className="rd-shell">
            <p>Selected Work</p>
            <h1>Complete Portfolio</h1>
            <span>Explore print, packaging, branding, web, campaigns, and digital experiences.</span>
          </div>
        </section>
        <section className="rd-portfolio-browser">
          <div className="rd-shell">
            <div className="rd-filter-bar" aria-label="Portfolio filters">
              <button className={filter === 'all' ? 'is-active' : ''} type="button" onClick={() => setFilter('all')}>All</button>
              <button className={filter === 'print' ? 'is-active' : ''} type="button" onClick={() => setFilter('print')}>Print &amp; Packaging</button>
              <button className={filter === 'digital' ? 'is-active' : ''} type="button" onClick={() => setFilter('digital')}>Digital Portfolio</button>
            </div>
            <div className="rd-complete-grid">
              {cards.map(({ image, title, category, index }) => <button type="button" onClick={() => openPortfolio(category, index)} key={`${category}-${title}`}><img src={image} alt={title} loading="lazy" /><span>{title}</span></button>)}
            </div>
          </div>
        </section>
      </main>
      <RedesignFooter />
      {selectedItem && <div className="rd-portfolio-overlay" role="dialog" aria-modal="true" aria-label={`${activeCategory} portfolio viewer`} onMouseDown={(event) => event.target === event.currentTarget && closePortfolio()}><button className="rd-portfolio-close" type="button" onClick={closePortfolio} aria-label="Close portfolio viewer">×</button><button className="rd-portfolio-arrow rd-portfolio-arrow-left" type="button" onClick={showPrevious} aria-label="Previous image">‹</button><div className="rd-portfolio-content" key={`${activeCategory}-${selectedIndex}`}><img src={selectedItem.image} alt={selectedItem.title} /><div><h3>{selectedItem.title}</h3><p>{selectedItem.body}</p></div></div><button className="rd-portfolio-arrow rd-portfolio-arrow-right" type="button" onClick={showNext} aria-label="Next image">›</button></div>}
    </div>
  )
}
