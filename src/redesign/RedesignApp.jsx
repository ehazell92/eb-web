import { useEffect, useState } from 'react'

import logo from '../assets/logo/EBC_Logo.avif'
import movingBackground from '../assets/backgrounds/moving_background.mp4'
import stationery from '../assets/redesign/EBC_Stationary.png'
import mountainSideFarms from '../assets/print/MountainSideFarms.avif'
import hilltop from '../assets/print/HilltopByTheBay.avif'
import zen from '../assets/print/Zen.avif'
import soulfulBanner from '../assets/print/Soulful_banner.avif'
import outlets from '../assets/print/TheOutlets.avif'
import lowKeyIt from '../assets/print/LowKeyIt.avif'
import magazines from '../assets/print/Magazines.avif'
import soulFloraPrint from '../assets/print/SoulFlora.avif'
import welcomeAboard from '../assets/print/WelcomeAboard.avif'
import doorBuster from '../assets/digital/DoorBuster.avif'
import platypod from '../assets/digital/Platypod.avif'
import soulFloraMobile from '../assets/digital/SoulFlora_mobile.avif'
import yoga from '../assets/digital/Yoga.avif'
import fairyTaleForest from '../assets/digital/FairyTaleForest.avif'
import platypodEco from '../assets/digital/Platypod_eco.avif'
import platypodWeb from '../assets/digital/platypod_web.avif'
import soulFloraGreen from '../assets/digital/soulflora_green.avif'
import townwall from '../assets/digital/townwall.avif'

import creativeCloud from '../assets/tools/Logos_Silo__CC.avif'
import indesign from '../assets/tools/6545dd_808818ddf40846ecb3478f99ffffe978~mv2.avif'
import illustrator from '../assets/tools/Logos_Silo__Illustrator.avif'
import photoshop from '../assets/tools/Logos_Silo__Photoshop.avif'
import acrobat from '../assets/tools/Logos_Silo__Acrobat.avif'
import lightroom from '../assets/tools/Logos_Silo__Lightroom.avif'
import canva from '../assets/tools/CANVA_LR_SILO.avif'
import chatgpt from '../assets/tools/chatgpt__LR__SILO.avif'
import google from '../assets/tools/G__LR__noback.avif'
import teamgantt from '../assets/tools/TG_LR__Square.avif'
import hubspot from '../assets/tools/hubspot_Square.avif'
import slack from '../assets/tools/Slack_Square.avif'
import wix from '../assets/tools/wix_LR.avif'
import mailchimp from '../assets/tools/mailchimp.avif'
import shopify from '../assets/tools/shopify__LR.avif'

import './redesign.css'

export const emailLink = 'mailto:ErykaEBagwell@gmail.com?subject=Let%27s%20Connect'
const resume = '/resume/ErykaBagwell_Resume.pdf'

const toolLogos = [
  [creativeCloud, 'Adobe Creative Cloud'], [indesign, 'Adobe InDesign'],
  [illustrator, 'Adobe Illustrator'], [photoshop, 'Adobe Photoshop'],
  [acrobat, 'Adobe Acrobat'], [lightroom, 'Adobe Lightroom'], [canva, 'Canva'],
  [chatgpt, 'ChatGPT'], [google, 'Google'], [teamgantt, 'TeamGantt'], [hubspot, 'HubSpot'], [slack, 'Slack'],
  [wix, 'Wix'], [mailchimp, 'Mailchimp'], [shopify, 'Shopify'],
]

const testimonials = [
  'Eryka is a dependable team player who delivers beyond expectations while managing complex creative projects with ease.',
  'Incredibly dedicated creative with an exceptional eye for detail. Her passion and creativity consistently elevate our brand.',
  'Professional, organized, client-focused guidance turned our vision into a well-received identity.',
  'Eryka brought passion, adaptability and reliable, deadline-driven design to our team.',
]

const career = [
  ['Strategy + Style Marketing Group', 'Print & digital event materials, branding, marketing graphics and production-ready artwork.'],
  ['Haymarket Media Group', 'Branding, print & digital materials, UI design, corporate presentations and publication layout.'],
  ['Edgell Communications', 'Print & digital materials, art direction, large-format print and layout design.'],
  ['Central Park Conservancy', 'Print & digital marketing materials and large-format print.'],
]

const industries = [
  ['capsule', 'Pharmaceutical'], ['utensils', 'Food &\nBeverage'], ['bag', 'Retail'], ['building', 'Real\nEstate'], ['book', 'Publications'],
  ['heart', 'Healthcare'], ['calendar', 'Education\n& Events'], ['hanger', 'Fashion'], ['monitor', 'Technology'], ['trees', 'Park &\nRecreation'],
]

const serviceDetails = {
  Conception: ['Campaign Conception', 'Comprehensive Brand Strategy', 'Content Creation', 'Copywriting', 'Creative Strategy', 'Digital Strategy', 'Integrated Marketing', 'Mockup Creation', 'Prototyping', 'Project Management'],
  'Brand Experience': ['Art Direction & Graphic Design', 'Billboard & Large Format Design', 'Branding, Logo & Full Identity Design', 'Event Collateral Design', 'Label Design', 'Marketing & Advertising Design', 'Packaging Design', 'Photography & Editing', 'Point-of-sale Design', 'Production Design', 'Publication Design', 'Retail & Residential Real Estate Design', 'Vehicle Wrap Design'],
  'Digital Experience': ['HubSpot Website Design', 'Interactive Design', 'Mailchimp E-Blast Design', 'Mobile Application Design', 'Motion Design', 'Presentation Design', 'Shopify Website Design', 'User Interface Design', 'Website Design', 'Wireframe Design', 'Wix Website Design'],
}

export const redesignPortfolios = {
  print: [
    { image: mountainSideFarms, title: 'Packaging, Print & Production', body: 'A full packaging overhaul for a new ultra-pasteurized milk product offered by Mountainside Farms.' },
    { image: hilltop, title: 'Design, Print & Production', body: 'A large-format design, print and production project for a mall under construction.' },
    { image: zen, title: 'Packaging, Print & Photograph', body: 'Product packaging, print preparation and a branded sell sheet.' },
    { image: soulfulBanner, title: 'Design, Print & Production', body: 'A new large-format printed billboard for a local dispensary.' },
    { image: outlets, title: 'Design, Print & Art Direction', body: 'A printed B2B media kit.' },
    { image: lowKeyIt, title: 'Branding, Print & Photograph', body: 'Branding, packaging and a printed sell sheet for Low Key Tea.' },
    { image: magazines, title: 'Print & Art Direction', body: 'Art direction and design for two bi-monthly publications.' },
    { image: soulFloraPrint, title: 'Design, Print & Production', body: 'Wearable merchandise design and print-ready production.' },
    { image: welcomeAboard, title: 'Design, Print & Production', body: 'A custom menu developed for a local Ship & Sip company.' },
  ],
  digital: [
    { image: doorBuster, title: 'Branding & Social Media', body: 'Seasonal campaign branding applied across social media marketing.' },
    { image: platypod, title: 'Branding & Marketing Email', body: 'A photography contest campaign with email and web support.' },
    { image: soulFloraMobile, title: 'Social Media', body: 'Social media campaign graphics for custom educational events.' },
    { image: yoga, title: 'Digital Marketing', body: 'Digital creative spanning web, social, email, TV and kiosk placements.' },
    { image: fairyTaleForest, title: 'Digital Advertising & Merch', body: 'Branded insignia and advertising for a local entertainment park.' },
    { image: platypodEco, title: 'Website & Creative Direction', body: 'Website branding, layout curation and creative direction.' },
    { image: platypodWeb, title: 'Email Newsletter', body: 'A custom monthly email newsletter design and deployment.' },
    { image: soulFloraGreen, title: 'Branded Event Digital Marketing', body: 'Event branding and supporting digital marketing assets.' },
    { image: townwall, title: 'Branding & Website Design', body: 'A custom website supporting signups and on-screen participants.' },
  ],
}

function scrollTo(id) {
  const section = document.getElementById(id)
  if (!section) {
    window.sessionStorage.setItem('redesignScrollTarget', id)
    window.location.assign('/redesign')
    return
  }
  const headerHeight = document.querySelector('.rd-header')?.offsetHeight ?? 0
  const top = section.getBoundingClientRect().top + window.scrollY - headerHeight - 10
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
}

function LineIcon({ name, className = '' }) {
  const paths = {
    bulb: <><path d="M9 18h6M10 22h4"/><path d="M8.5 14.5C6.9 13.2 6 11.4 6 9.2a6 6 0 0 1 12 0c0 2.2-.9 4-2.5 5.3-.8.7-1.2 1.5-1.3 2.5h-4.4c-.1-1-.5-1.8-1.3-2.5Z"/></>,
    layers: <><path d="m12 3-9 5 9 5 9-5-9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></>,
    monitor: <><rect x="3" y="4" width="18" height="13" rx="1"/><path d="M8 21h8M12 17v4"/></>,
    capsule: <><path d="M7.2 16.8 16.8 7.2a3.4 3.4 0 1 0-4.8-4.8L2.4 12a3.4 3.4 0 1 0 4.8 4.8Z"/><path d="m8 6 5 5"/></>,
    utensils: <><path d="M6 2v7M3 2v5c0 2 1.3 3 3 3s3-1 3-3V2M6 10v12M16 2v20M16 2c3 3 3 7 0 10"/></>,
    bag: <><path d="M5 7h14l1 14H4L5 7Z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/></>,
    building: <><path d="M4 22V9h7v13M11 22V3h9v19M2 22h20M14 7h2M14 11h2M14 15h2M7 13h1M7 17h1"/></>,
    book: <><path d="M3 5c4-1 7 0 9 2v14c-2-2-5-3-9-2V5ZM21 5c-4-1-7 0-9 2v14c2-2 5-3 9-2V5Z"/></>,
    heart: <><path d="M3 12h4l2-4 3 8 2-4h7"/><path d="M20.8 5.8a5 5 0 0 0-7.1 0L12 7.5l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 21l8.8-8.1a5 5 0 0 0 0-7.1Z"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M7 14h2M12 14h2M17 14h1M7 18h2M12 18h2"/></>,
    hanger: <><path d="M12 8a2.5 2.5 0 1 0-2.5-2.5"/><path d="m12 8 9 7H3l9-7Z"/></>,
    trees: <><path d="m7 3-4 7h3l-4 7h10l-4-7h3L7 3ZM17 5l-3 6h2l-3 6h9l-4-6h2l-3-6ZM7 17v5M17 17v5"/></>,
  }
  return <svg className={`rd-line-icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function NavChevron() {
  return <svg className="rd-nav-chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m4 6 4 4 4-4" /></svg>
}

function openServiceFromNavigation(service) {
  const onRedesignHome = window.location.pathname.replace(/\/+$/, '') === '/redesign'
  if (onRedesignHome) {
    window.dispatchEvent(new CustomEvent('open-service-detail', { detail: service }))
    return
  }
  window.sessionStorage.setItem('redesignServiceTarget', service)
  window.location.assign('/redesign')
}

export function RedesignHeader() {
  const [logoOpen, setLogoOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const portfolioPage = window.location.pathname.replace(/\/+$/, '') === '/redesign/portfolio'

  useEffect(() => {
    document.body.classList.toggle('rd-modal-open', logoOpen || menuOpen)
    return () => document.body.classList.remove('rd-modal-open')
  }, [logoOpen, menuOpen])

  const navigate = (id) => {
    setMenuOpen(false)
    setOpenDropdown(null)
    scrollTo(id)
  }

  const openService = (service) => {
    setMenuOpen(false)
    setOpenDropdown(null)
    openServiceFromNavigation(service)
  }

  const openPortfolioCategory = (category) => {
    setMenuOpen(false)
    setOpenDropdown(null)
    window.dispatchEvent(new CustomEvent('open-portfolio-category', { detail: category }))
  }

  const toggleMenu = () => {
    setMenuOpen((open) => {
      if (open) setOpenDropdown(null)
      return !open
    })
  }

  return (
    <>
      <header className="rd-header" id="rd-top">
        <div className="rd-header-inner">
          <button className="rd-logo" type="button" onClick={() => setLogoOpen(true)} aria-label="View Eryka Bagwell Creative logo">
            <img src={logo} alt="Eryka Bagwell Creative" />
          </button>
          <button className={`rd-mobile-menu ${menuOpen ? 'is-open' : ''}`} type="button" onClick={toggleMenu} aria-expanded={menuOpen} aria-controls="rd-navigation" aria-label="Toggle navigation"><span /><span /><span /></button>
          <nav className={`rd-nav ${menuOpen ? 'is-open' : ''}`} id="rd-navigation" aria-label="Redesign navigation">
            <button className={portfolioPage ? '' : 'is-active'} type="button" onClick={() => portfolioPage ? window.location.assign('/redesign') : navigate('rd-top')}>Home</button>
            <div className={`rd-nav-dropdown ${openDropdown === 'services' ? 'is-expanded' : ''}`}><button type="button" onClick={() => setOpenDropdown((open) => open === 'services' ? null : 'services')} aria-expanded={openDropdown === 'services'}>Services <NavChevron /></button><div><button type="button" onClick={() => openService('Conception')}>Conception</button><button type="button" onClick={() => openService('Brand Experience')}>Brand Experience</button><button type="button" onClick={() => openService('Digital Experience')}>Digital Experience</button></div></div>
            <div className={`rd-nav-dropdown ${openDropdown === 'portfolio' ? 'is-expanded' : ''}`}><button className={portfolioPage ? 'is-active' : ''} type="button" onClick={() => setOpenDropdown((open) => open === 'portfolio' ? null : 'portfolio')} aria-expanded={openDropdown === 'portfolio'}>Portfolio <NavChevron /></button><div><a href="/redesign/portfolio" onClick={() => { setMenuOpen(false); setOpenDropdown(null) }}>All</a><button type="button" onClick={() => openPortfolioCategory('print')}>Print</button><button type="button" onClick={() => openPortfolioCategory('digital')}>Digital</button></div></div>
            <button type="button" onClick={() => navigate('rd-career')}>About</button>
            <a href={emailLink}>Contact</a>
            <a href="/">Classic</a>
            <a className="rd-outline-button" href={emailLink}>Let&apos;s Connect</a>
          </nav>
        </div>
      </header>
      {logoOpen && <div className="rd-logo-overlay" role="dialog" aria-modal="true" aria-label="Eryka Bagwell Creative logo" onMouseDown={(event) => event.target === event.currentTarget && setLogoOpen(false)}><button type="button" onClick={() => setLogoOpen(false)} aria-label="Close logo">×</button><div><img src={logo} alt="Eryka Bagwell Creative" /></div></div>}
    </>
  )
}

function Hero() {
  return (
    <section className="rd-hero" aria-labelledby="rd-hero-title">
      <video autoPlay muted loop playsInline aria-hidden="true"><source src={movingBackground} type="video/mp4" /></video>
      <div className="rd-shell rd-hero-inner">
        <div className="rd-hero-copy">
          <h1 id="rd-hero-title"><span>Creative Design</span>That Brings <em>Ideas to Life</em></h1>
          <p>Print. Packaging. Branding. Digital. From concept to production, EBC delivers creative solutions that inform, engage, and make an impact.</p>
          <div className="rd-hero-actions">
            <button className="rd-primary-button" type="button" onClick={() => window.dispatchEvent(new CustomEvent('open-all-services'))}>Explore Services <span>→</span></button>
            <button className="rd-outline-button" type="button" onClick={() => scrollTo('rd-career')}>View Experience</button>
          </div>
        </div>
        <img className="rd-stationery" src={stationery} alt="Eryka Bagwell Creative stationery, color swatches and pen" />
      </div>
    </section>
  )
}

function Services() {
  const [activeService, setActiveService] = useState(null)
  const [closing, setClosing] = useState(false)
  const items = [
    ['bulb', 'Conception', 'Strategy, positioning and creative direction'],
    ['layers', 'Brand Experience', 'Identity, marketing and collateral design'],
    ['monitor', 'Digital Experience', 'Web, interactive and marketing design'],
  ]

  const closeModal = () => {
    setClosing(true)
    window.setTimeout(() => {
      setActiveService(null)
      setClosing(false)
    }, 240)
  }

  useEffect(() => {
    if (!activeService) return undefined
    const handleKey = (event) => event.key === 'Escape' && closeModal()
    document.body.classList.add('rd-modal-open')
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.classList.remove('rd-modal-open')
      window.removeEventListener('keydown', handleKey)
    }
  }, [activeService])

  useEffect(() => {
    const openAllServices = () => setActiveService('All Services')
    const openServiceDetail = (event) => setActiveService(event.detail)
    const requestedService = window.sessionStorage.getItem('redesignServiceTarget')
    if (requestedService) {
      window.sessionStorage.removeItem('redesignServiceTarget')
      setActiveService(requestedService)
    }
    window.addEventListener('open-all-services', openAllServices)
    window.addEventListener('open-service-detail', openServiceDetail)
    return () => {
      window.removeEventListener('open-all-services', openAllServices)
      window.removeEventListener('open-service-detail', openServiceDetail)
    }
  }, [])

  return (
    <section className="rd-services" id="rd-services" aria-labelledby="rd-services-title">
      <div className="rd-shell rd-services-inner">
        <h2 className="rd-section-title" id="rd-services-title">Services</h2>
        <div className="rd-service-list">
          {items.map(([icon, title, text]) => (
            <button type="button" onClick={() => setActiveService(title)} key={title}>
              <LineIcon name={icon} />
              <div><h3>{title}</h3><p>{text}</p></div>
            </button>
          ))}
        </div>
      </div>
      {activeService && <div className={`rd-service-overlay ${closing ? 'is-closing' : ''}`} role="dialog" aria-modal="true" aria-labelledby="rd-service-dialog-title" onMouseDown={(event) => event.target === event.currentTarget && closeModal()}><article className={activeService === 'All Services' ? 'is-all-services' : ''}><button className="rd-service-close" type="button" onClick={closeModal} aria-label="Close service details">×</button><h3 id="rd-service-dialog-title">{activeService === 'All Services' ? 'Services' : activeService}</h3>{activeService === 'All Services' ? <div className="rd-all-services">{Object.entries(serviceDetails).map(([service, details]) => <section key={service}><h4>{service}</h4><ul>{details.map((item) => <li key={item}>{item}</li>)}</ul></section>)}</div> : <ul>{serviceDetails[activeService].map((item) => <li key={item}>{item}</li>)}</ul>}</article></div>}
    </section>
  )
}

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const activeItems = activeCategory ? redesignPortfolios[activeCategory] : []
  const selectedItem = activeItems[selectedIndex]

  const openPortfolio = (category) => {
    setSelectedIndex(0)
    setActiveCategory(category)
  }

  const closePortfolio = () => setActiveCategory(null)
  const showPrevious = () => setSelectedIndex((index) => (index - 1 + activeItems.length) % activeItems.length)
  const showNext = () => setSelectedIndex((index) => (index + 1) % activeItems.length)

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

  useEffect(() => {
    const openCategory = (event) => openPortfolio(event.detail)
    window.addEventListener('open-portfolio-category', openCategory)
    return () => window.removeEventListener('open-portfolio-category', openCategory)
  }, [])

  return (
    <section className="rd-media" id="rd-portfolio" aria-labelledby="rd-media-title">
      <div className="rd-shell">
        <div className="rd-media-heading">
          <h2 className="rd-section-title" id="rd-media-title">Portfolio</h2>
          <p>Explore real examples of creative work across print, packaging, and digital media.</p>
        </div>
        <div className="rd-feature-grid">
          <button className="rd-feature-card" type="button" onClick={() => openPortfolio('print')}>
            <img src={mountainSideFarms} alt="Mountainside Farms packaging design" />
            <div className="rd-feature-copy"><h3>Print &amp; Packaging</h3><p>Packaging, labels, signage, and production-ready artwork.</p></div>
          </button>
          <button className="rd-feature-card" type="button" onClick={() => openPortfolio('digital')}>
            <img src={townwall} alt="Digital portfolio website design" />
            <div className="rd-feature-copy"><h3>Digital Portfolio</h3><p>Websites, digital campaigns, UI design, and more.</p></div>
          </button>
        </div>
        <a className="rd-full-portfolio-button" href="/redesign/portfolio">View Full Portfolio</a>
      </div>
      {selectedItem && <div className="rd-portfolio-overlay" role="dialog" aria-modal="true" aria-label={`${activeCategory} portfolio viewer`} onMouseDown={(event) => event.target === event.currentTarget && closePortfolio()}><button className="rd-portfolio-close" type="button" onClick={closePortfolio} aria-label="Close portfolio viewer">×</button><button className="rd-portfolio-arrow rd-portfolio-arrow-left" type="button" onClick={showPrevious} aria-label="Previous image">‹</button><div className="rd-portfolio-content" key={`${activeCategory}-${selectedIndex}`}><img src={selectedItem.image} alt={selectedItem.title} /><div><h3>{selectedItem.title}</h3><p>{selectedItem.body}</p></div></div><button className="rd-portfolio-arrow rd-portfolio-arrow-right" type="button" onClick={showNext} aria-label="Next image">›</button></div>}
    </section>
  )
}

function CareerIndustries() {
  return (
    <section className="rd-about" id="rd-career">
      <div className="rd-shell rd-about-grid">
        <div className="rd-career">
          <div className="rd-inline-heading"><h2 className="rd-section-title">Career Path</h2><a href={resume} target="_blank" rel="noreferrer">▧ &nbsp; Read More (Resume) →</a></div>
          <div className="rd-timeline">
            {career.map(([title, text]) => <article key={title}><i /><p><strong>{title}</strong> — {text}</p></article>)}
          </div>
        </div>
        <div className="rd-industries">
          <h2 className="rd-section-title">Industries</h2>
          <div className="rd-industry-grid">
            {industries.map(([icon, title]) => <div key={title}><LineIcon name={icon} /><p>{title.split('\n').map((line) => <span key={line}>{line}</span>)}</p></div>)}
          </div>
        </div>
      </div>
    </section>
  )
}

function Tools() {
  return (
    <section className="rd-tools" aria-labelledby="rd-tools-title">
      <div className="rd-shell rd-tools-inner">
        <h2 className="rd-section-title" id="rd-tools-title">Tools &amp; Capabilities</h2>
        <div className="rd-tool-row">{toolLogos.map(([image, name]) => <img src={image} alt={name} title={name} loading="lazy" key={name} />)}</div>
      </div>
    </section>
  )
}

function KindWords() {
  const [page, setPage] = useState(0)
  const pageCount = Math.ceil(testimonials.length / 4)

  useEffect(() => {
    if (pageCount <= 1) return undefined
    const timer = window.setInterval(() => setPage((value) => (value + 1) % pageCount), 5000)
    return () => window.clearInterval(timer)
  }, [pageCount])

  const change = (direction) => setPage((value) => (value + direction + pageCount) % pageCount)

  return (
    <section className="rd-kind" aria-labelledby="rd-kind-title">
      <div className="rd-shell">
        <div className="rd-kind-heading">
          <div><h2 className="rd-section-title" id="rd-kind-title">Kind Words</h2><p>Feedback from people I&apos;ve worked with.</p></div>
          {pageCount > 1 && <div><button className="rd-kind-arrow" type="button" onClick={() => change(-1)} aria-label="Previous testimonials">‹</button><button className="rd-kind-arrow" type="button" onClick={() => change(1)} aria-label="Next testimonials">›</button></div>}
        </div>
        <div className="rd-quote-grid" key={page}>
          {testimonials.slice(page * 4, page * 4 + 4).map((quote) => <blockquote key={quote}><span>“</span><p>{quote}</p></blockquote>)}
        </div>
        {pageCount > 1 && <div className="rd-kind-dots" aria-hidden="true">{Array.from({ length: pageCount }, (_, index) => <i className={page === index ? 'active' : ''} key={index} />)}</div>}
      </div>
    </section>
  )
}

export function RedesignFooter() {
  return (
    <>
      <section className="rd-cta">
        <div className="rd-shell"><div className="rd-cta-card"><video autoPlay muted loop playsInline aria-hidden="true"><source src={movingBackground} type="video/mp4" /></video><div className="rd-cta-inner"><h2>Have a Great Idea?</h2><p>Let&apos;s conceptualize, develop and start creating your next design solution.</p><a className="rd-primary-button" href={emailLink}>Make It a Reality →</a></div></div></div>
      </section>
      <footer className="rd-footer">
        <div className="rd-shell rd-footer-inner">
          <img src={logo} alt="Eryka Bagwell Creative" />
          <nav aria-label="Footer navigation"><button type="button" onClick={() => scrollTo('rd-top')}>Home</button><button type="button" onClick={() => scrollTo('rd-services')}>Services</button><a href="/redesign/portfolio">Portfolio</a><button type="button" onClick={() => scrollTo('rd-career')}>About</button><a href={emailLink}>Contact</a></nav>
          <div className="rd-footer-social"><a href="https://www.instagram.com/erykabagwellcreative" target="_blank" rel="noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg></a><a href="https://www.facebook.com/ErykaBagwellCreative" target="_blank" rel="noreferrer" aria-label="Facebook">f</a></div>
          <p>© 2026 Eryka Bagwell Creative &nbsp; | &nbsp; 862.432.6989 &nbsp; | &nbsp; <a href={emailLink}>ErykaEBagwell@gmail.com</a></p>
        </div>
      </footer>
    </>
  )
}

export default function RedesignApp() {
  useEffect(() => {
    const target = window.sessionStorage.getItem('redesignScrollTarget')
    if (!target) return
    window.sessionStorage.removeItem('redesignScrollTarget')
    requestAnimationFrame(() => scrollTo(target))
  }, [])

  return <div className="redesign"><RedesignHeader /><main><Hero /><Services /><Portfolio /><CareerIndustries /><Tools /><KindWords /></main><RedesignFooter /></div>
}
