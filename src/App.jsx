import { useEffect, useState } from 'react'

import logo from './assets/logo/EBC_Logo.avif'
import movingBackground from './assets/backgrounds/moving_background.mp4'
import welcomeTitle from './assets/header-carousel/WelcomeTxt.avif'
import servicesTitle from './assets/header-carousel/ServicesTxt.avif'
import contactTitle from './assets/header-carousel/ContactTxt.avif'
import kindWordsTitle from './assets/header-carousel/Kind_wordsTxt.avif'

import soulfulBanner from './assets/print_packaging/Soulful_banner.avif'
import mountainSideFarms from './assets/print_packaging/MountainSideFarms.avif'
import zen from './assets/print_packaging/Zen.avif'
import welcomeAboard from './assets/print_packaging/WelcomeAboard.avif'
import outlets from './assets/print_packaging/TheOutlets.avif'
import hilltop from './assets/print_packaging/HilltopByTheBay.avif'
import magazines from './assets/print_packaging/Magazines.avif'
import soulFloraPrint from './assets/print_packaging/SoulFlora.avif'
import lowKeyIt from './assets/print_packaging/LowKeyIt.avif'

import platypodWeb from './assets/digital_portfolio/platypod_web.avif'
import yoga from './assets/digital_portfolio/Yoga.avif'
import platypodEco from './assets/digital_portfolio/Platypod_eco.avif'
import platypod from './assets/digital_portfolio/Platypod.avif'
import soulFloraMobile from './assets/digital_portfolio/SoulFlora_mobile.avif'
import townwall from './assets/digital_portfolio/townwall.avif'
import doorBuster from './assets/digital_portfolio/DoorBuster.avif'
import soulFloraGreen from './assets/digital_portfolio/soulflora_green.avif'
import fairyTaleForest from './assets/digital_portfolio/FairyTaleForest.avif'

import creativeCloud from './assets/tools/Logos_Silo__CC.avif'
import indesign from './assets/tools/6545dd_808818ddf40846ecb3478f99ffffe978~mv2.avif'
import illustrator from './assets/tools/Logos_Silo__Illustrator.avif'
import photoshop from './assets/tools/Logos_Silo__Photoshop.avif'
import acrobat from './assets/tools/Logos_Silo__Acrobat.avif'
import lightroom from './assets/tools/Logos_Silo__Lightroom.avif'
import canva from './assets/tools/CANVA_LR_SILO.avif'
import chatgpt from './assets/tools/chatgpt__LR__SILO.avif'
import google from './assets/tools/G__LR__noback.avif'
import teamgantt from './assets/tools/TG_LR__Square.avif'
import hubspot from './assets/tools/hubspot_Square.avif'
import slack from './assets/tools/Slack_Square.avif'
import wix from './assets/tools/wix_LR.avif'
import mailchimp from './assets/tools/mailchimp.avif'
import shopify from './assets/tools/shopify__LR.avif'

const emailLink = 'mailto:ErykaEBagwell@gmail.com?subject=Let%27s%20Connect'
const resume = '/resume/ErykBagwell_Resume.pdf'

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const printWork = [
  { image: mountainSideFarms, alt: 'Mountain Side Farms milk packaging', title: 'Packaging, Print & Production', body: 'A full packaging overhaul for a new ultra-pasteurized milk product offered by Mountainside Farms.' },
  { image: hilltop, alt: 'Hilltop by the Bay construction barricade', title: 'Design, Print & Production', body: 'A barricade large-format design, print and production project for a mall under construction. Managed art direction.' },
  { image: zen, alt: 'Zen product packaging and sell sheet', title: 'Packaging, Print & Photograph', body: 'Designed a new product BiSleeve in dielines for print and developed a branded sell sheet.' },
  { image: soulfulBanner, alt: 'Soul Flora dispensary billboard', title: 'Design, Print & Production', body: 'A new large-format printed billboard for a local dispensary.' },
  { image: outlets, alt: 'The Outlets printed media kit', title: 'Design, Print & Art Direction', body: 'A printed media kit for B2B.' },
  { image: lowKeyIt, alt: 'Low Key Tea branding and sell sheet', title: 'Branding, Print & Photograph', body: 'Developed branding for a new Low Key Tea product, applied the branding to packaging, and designed a printed sell sheet.' },
  { image: magazines, alt: 'Magazine publication designs', title: 'Print & Art Direction', body: 'Art directed and designed two bi-monthly publications simultaneously from cover to cover.' },
  { image: soulFloraPrint, alt: 'Soul Flora wearable merchandise', title: 'Design, Print & Production', body: 'Designed and refined wearable merchandise, then prepared the files for print.' },
  { image: welcomeAboard, alt: 'Welcome Aboard menu design', title: 'Design, Print & Production', body: 'Conceptualized and developed a new menu for a local Ship & Sip company.' },
]

const digitalWork = [
  { image: doorBuster, alt: 'DoorBuster seasonal social campaigns', title: 'Branding & Social Media', body: 'Created expanded branding for various holiday seasonal offerings and sales and applied it to social media marketing.' },
  { image: platypod, alt: 'Platypod photography contest campaign', title: 'Branding & Marketing Email', body: 'Created branding for a custom photography contest showcasing food and beverage shots, plus an email and web page supporting the contest.' },
  { image: soulFloraMobile, alt: 'Soul Flora mobile social media graphics', title: 'Social Media', body: 'Designed various social media campaign graphics with tight turnarounds for custom educational events.' },
  { image: yoga, alt: 'Yoga digital marketing campaign', title: 'Digital Marketing', body: 'Designed digital marketing materials including home-page graphics, social media, email blasts, a TV banner and kiosk creative.' },
  { image: fairyTaleForest, alt: 'Fairy Tale Forest digital advertising', title: 'Digital Advertising & Merch', body: 'Developed a branded insignia for a local entertainment park and applied the branding to digital and print advertising.' },
  { image: platypodEco, alt: 'Platypod website creative direction', title: 'Website & Creative Direction', body: 'Developed branding for a new website, curated a custom layout, and led creative direction for the development team.' },
  { image: platypodWeb, alt: 'Platypod email newsletter', title: 'Email Newsletter', body: 'Designed and developed a custom email newsletter that was updated and deployed monthly.' },
  { image: soulFloraGreen, alt: 'Soul Flora branded event marketing', title: 'Branded Event Digital Marketing', body: 'Curated custom educational event branding and developed a range of digital marketing assets supporting event attendance.' },
  { image: townwall, alt: 'Townwall branding and website', title: 'Branding & Website Design', body: 'Branded, designed and developed a custom website supporting signups and on-screen participants.' },
]

const tools = [
  [creativeCloud, 'Adobe Creative Cloud'], [indesign, 'Adobe InDesign'],
  [illustrator, 'Adobe Illustrator'], [photoshop, 'Adobe Photoshop'],
  [acrobat, 'Adobe Acrobat'], [lightroom, 'Adobe Lightroom'], [canva, 'Canva'],
  [chatgpt, 'ChatGPT'], [google, 'Google'], [teamgantt, 'TeamGantt'],
  [hubspot, 'HubSpot'], [slack, 'Slack'], [wix, 'Wix'],
  [mailchimp, 'Mailchimp'], [shopify, 'Shopify'],
]

const testimonials = [
  {
    quote: 'Eryka is a dependable team player that not only delivered but exceeded all of our client expectations while managing multiple complex creative deliverables at once.',
    name: 'Karen Fluharty',
    role: 'Founding Partner and Chief Strategist at S+SMG',
  },
  {
    quote: 'Incredibly dedicated creative with an exceptional eye for detail. Approaching projects with passion and enthusiasm, bringing unique creative solutions to the table.',
    name: 'Tara Hill',
    role: 'Digital Marketing Director at Haymarket Media Group',
  },
  {
    quote: '…Professional, organized, client-focused guidance to our rebrand, turning our vision into a well-received identity. Her enthusiasm made the process rewarding.',
    name: 'Professional recommendation',
    role: 'Brand identity project',
  },
  {
    quote: 'Eryka brought passion, creativity and reliable, deadline-driven design to our team. Her adaptability and positive influence strengthened our culture and supported key projects.',
    name: 'Gabrielle Edgell',
    role: 'Chairman at Edgell Communications',
  },
]

function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  const navigateTo = (id) => {
    setOpen(false)
    requestAnimationFrame(() => scrollToSection(id))
  }

  return (
    <header className="site-header" id="top">
      <button className="brand" type="button" onClick={() => navigateTo('top')} aria-label="Eryka Bagwell Creative home">
        <img src={logo} alt="Eryka Bagwell Creative" />
      </button>
      <button className={`menu-button ${open ? 'is-open' : ''}`} type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-menu">
        <span>Menu</span><i /><i />
      </button>
      <nav id="site-menu" className={`site-menu ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
        <button type="button" onClick={() => navigateTo('portfolio')}>Portfolio</button>
        <button type="button" onClick={() => navigateTo('career')}>Career Path</button>
        <button type="button" onClick={() => navigateTo('capabilities')}>Capabilities</button>
        <button type="button" onClick={() => navigateTo('kind-words')}>Kind Words</button>
        <a href={resume} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Resume</a>
        <a href="/redesign" onClick={() => setOpen(false)}>R-Ed-esigned</a>
        <a className="nav-contact" href={emailLink} onClick={() => setOpen(false)}>Contact</a>
      </nav>
    </header>
  )
}

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [welcomeVisible, setWelcomeVisible] = useState(false)
  const [introComplete, setIntroComplete] = useState(false)
  const [transitionPhase, setTransitionPhase] = useState('initial')
  const [pendingDirection, setPendingDirection] = useState(1)

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => setWelcomeVisible(true))
    const introTimer = window.setTimeout(() => {
      setIntroComplete(true)
      setTransitionPhase('visible')
    }, 1000)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.clearTimeout(introTimer)
    }
  }, [])

  useEffect(() => {
    if (!introComplete || transitionPhase !== 'visible') return undefined

    const displayTime = currentSlide === 1 ? 10000 : 3000
    const rotationTimer = window.setTimeout(() => {
      setPendingDirection(1)
      setTransitionPhase('out')
    }, displayTime)

    return () => window.clearTimeout(rotationTimer)
  }, [currentSlide, introComplete, transitionPhase])

  useEffect(() => {
    if (transitionPhase === 'out') {
      const fadeOutTimer = window.setTimeout(() => {
        setCurrentSlide((slide) => (slide + pendingDirection + 3) % 3)
        setTransitionPhase('preparing')
      }, 700)
      return () => window.clearTimeout(fadeOutTimer)
    }

    if (transitionPhase === 'preparing') {
      let secondFrame
      const firstFrame = requestAnimationFrame(() => {
        secondFrame = requestAnimationFrame(() => setTransitionPhase('entering'))
      })

      return () => {
        cancelAnimationFrame(firstFrame)
        if (secondFrame) cancelAnimationFrame(secondFrame)
      }
    }

    if (transitionPhase === 'entering') {
      const fadeInTimer = window.setTimeout(() => setTransitionPhase('visible'), 700)
      return () => window.clearTimeout(fadeInTimer)
    }

    return undefined
  }, [pendingDirection, transitionPhase])

  const changeSlide = (direction) => {
    if (transitionPhase !== 'visible' && transitionPhase !== 'initial') return
    setIntroComplete(true)
    setPendingDirection(direction)
    setTransitionPhase('out')
  }

  const slides = [
    <div className="carousel-content welcome-content" key="welcome">
      <img className="carousel-title carousel-title-welcome" src={welcomeTitle} alt="Welcome" />
      <div className={`welcome-details ${welcomeVisible ? 'is-visible' : ''}`}>
        <p>Bringing over 15 years of cross-industry experience, EBC provides versatile<br className="desktop-only" /> B2B and B2C creative solutions spanning packaging, print-ready artwork and<br className="desktop-only" /> digital design. From production-focused packaging and marketing materials<br className="desktop-only" /> to social media, email campaigns and newsletters, EBC offers creative support<br className="desktop-only" /> to meet a variety of ongoing business and branding needs.</p>
      </div>
    </div>,
    <div className="carousel-content services-content" key="services">
      <img className="carousel-title carousel-title-services" src={servicesTitle} alt="Services" />
      <div className="service-columns">
        <section>
          <h2>Conception</h2>
          <ul><li>Campaign Conception</li><li>Comprehensive Brand Strategy</li><li>Content Creation</li><li>Copywriting</li><li>Creative Strategy</li><li>Digital Strategy</li><li>Integrated Marketing</li><li>Mockup Creation</li><li>Prototyping</li><li>Project Management</li></ul>
        </section>
        <section>
          <h2>Brand Experience</h2>
          <ul><li>Art Direction &amp; Graphic Design</li><li>Billboard &amp; Large Format Design</li><li>Branding, Logo &amp; Full Identity Design</li><li>Event Collateral Design</li><li>Label Design</li><li>Marketing &amp; Advertising Design</li><li>Packaging Design</li><li>Photography &amp; Editing</li><li>Point-of-sale Design</li><li>Production Design</li><li>Publication Design</li><li>Retail &amp; Residential Real Estate Design</li><li>Vehicle Wrap Design</li></ul>
        </section>
        <section>
          <h2>Digital Experience</h2>
          <ul><li>HubSpot Website Design</li><li>Interactive Design</li><li>Mailchimp E-Blast Design</li><li>Mobile Application Design</li><li>Motion Design</li><li>Presentation Design</li><li>Shopify Website Design</li><li>User Interface Design</li><li>Website Design</li><li>Wireframe Design</li><li>Wix Website Design</li></ul>
        </section>
      </div>
    </div>,
    <div className="carousel-content contact-content" key="contact">
      <img className="carousel-title carousel-title-contact" src={contactTitle} alt="Contact" />
      <p>Have an idea for a creative project, why wait?<br />Let&apos;s conceptualize, develop and start creating your<br className="desktop-only" /> next comprehensive design solution.</p>
      <a className="button" href={emailLink}>Let&apos;s Connect!</a>
    </div>,
  ]

  return (
    <section className={`hero hero-slide-${currentSlide}`} aria-roledescription="carousel" aria-label="Introduction">
      <video className="moving-background-video hero-background-video" autoPlay muted loop playsInline aria-hidden="true">
        <source src={movingBackground} type="video/mp4" />
      </video>
      <h1 className="sr-only">Eryka Bagwell Creative</h1>
      <div className={`carousel-slide phase-${transitionPhase}`} key={currentSlide} aria-live="polite">
        {slides[currentSlide]}
      </div>
      <button className="carousel-arrow carousel-arrow-left" type="button" onClick={() => changeSlide(-1)} aria-label="Previous slide">←</button>
      <button className="carousel-arrow carousel-arrow-right" type="button" onClick={() => changeSlide(1)} aria-label="Next slide">→</button>
    </section>
  )
}

function PortfolioGallery({ id, number, title, items }) {
  const [selectedIndex, setSelectedIndex] = useState(null)

  useEffect(() => {
    if (selectedIndex === null) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedIndex(null)
      if (event.key === 'ArrowLeft') setSelectedIndex((index) => (index - 1 + items.length) % items.length)
      if (event.key === 'ArrowRight') setSelectedIndex((index) => (index + 1) % items.length)
    }

    document.body.classList.add('lightbox-open')
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('lightbox-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [items.length, selectedIndex])

  const showPrevious = () => setSelectedIndex((index) => (index - 1 + items.length) % items.length)
  const showNext = () => setSelectedIndex((index) => (index + 1) % items.length)
  const selectedItem = selectedIndex === null ? null : items[selectedIndex]

  return (
    <section className="work-gallery" id={id} aria-labelledby={`${id}-title`}>
      <div className="portfolio-heading">
        <span>{number}</span>
        <h2 id={`${id}-title`}>{title}</h2>
      </div>
      <div className="gallery-grid">
        {items.map(({ image, alt, title: itemTitle }, index) => (
          <figure key={alt}>
            <button className="gallery-image-button" type="button" onClick={() => setSelectedIndex(index)} aria-label={`Open ${itemTitle}`}>
              <img src={image} alt={alt} loading="lazy" />
            </button>
            <figcaption>{itemTitle}</figcaption>
          </figure>
        ))}
      </div>
      <a className="button portfolio-contact" href={emailLink}>Let&apos;s Connect!</a>
      {selectedItem && (
        <div className="portfolio-lightbox" role="dialog" aria-modal="true" aria-label={`${title} image viewer`} onMouseDown={(event) => event.target === event.currentTarget && setSelectedIndex(null)}>
          <button className="lightbox-close" type="button" onClick={() => setSelectedIndex(null)} aria-label="Close image viewer">×</button>
          <button className="lightbox-arrow lightbox-arrow-left" type="button" onClick={showPrevious} aria-label="Previous image">‹</button>
          <div className="lightbox-content">
            <img src={selectedItem.image} alt={selectedItem.alt} />
            <div className="lightbox-caption">
              <h3>{selectedItem.title}</h3>
              <p>{selectedItem.body}</p>
            </div>
          </div>
          <button className="lightbox-arrow lightbox-arrow-right" type="button" onClick={showNext} aria-label="Next image">›</button>
        </div>
      )}
    </section>
  )
}

function Career() {
  return (
    <section className="career" id="career" aria-labelledby="career-title">
      <div className="section-shell">
        <div className="career-grid">
          <h2 className="tracked-title" id="career-title">Career Path</h2>
          <div className="career-list">
            <article>
              <h3>Strategy + Style Marketing Group</h3>
              <p>Print &amp; digital event &amp; promotional merchandise, packaging, brand ideation, marketing graphics, large-format signage, animated graphics and production-ready artwork.</p>
            </article>
            <article>
              <h3>Haymarket Media Group</h3>
              <p>Branding, print &amp; digital event materials, packaging, printed marketing, large-format print, UI design, corporate presentation templates, design &amp; organization, PDF forms, book pagination &amp; layout design for use by pharmacists nationally.</p>
            </article>
            <article>
              <h3>Edgell Communications</h3>
              <p>Print &amp; digital event materials, art direction, book pagination &amp; layout design, print marketing, large-format print and UI design.</p>
            </article>
            <article>
              <h3>Central Park Conservancy</h3>
              <p>Print &amp; digital marketing materials, large-format print.</p>
            </article>
          </div>
        </div>
        <div className="industries">
          <h2 className="tracked-title">Industries</h2>
          <p>Pharmaceutical, Food &amp; Beverage, Retail, Real Estate, Publications, Healthcare advertising/education/events, Fashion, Technology, Park &amp; Recreation, Entertainment.</p>
        </div>
        <a className="button resume-button" href={resume} target="_blank" rel="noreferrer">Read More</a>
      </div>
    </section>
  )
}

function Capabilities() {
  return (
    <section className="capabilities" id="capabilities" aria-labelledby="capabilities-title">
      <h2 id="capabilities-title">Tools &amp; Capabilities</h2>
      <div className="tool-grid">
        <div className="tool-row">
          {tools.slice(0, 7).map(([image, name]) => <img src={image} alt={name} title={name} loading="lazy" key={name} />)}
        </div>
        <div className="tool-row">
          {tools.slice(7).map(([image, name]) => <img src={image} alt={name} title={name} loading="lazy" key={name} />)}
        </div>
      </div>
    </section>
  )
}

function KindWords() {
  return (
    <section className="kind-words" id="kind-words" aria-labelledby="kind-title">
      <video className="moving-background-video" autoPlay muted loop playsInline aria-hidden="true">
        <source src={movingBackground} type="video/mp4" />
      </video>
      <h2 className="sr-only" id="kind-title">Kind Words</h2>
      <img className="kind-words-title" src={kindWordsTitle} alt="" aria-hidden="true" />
      <div className="testimonial-grid">
        {testimonials.slice(0, 2).map(({ quote, name, role }) => (
          <article className="testimonial" key={name}>
            <span className="card-rule" aria-hidden="true" />
            <blockquote>&quot;{quote}&quot;</blockquote>
            <p><strong>{name}</strong><br />{role}</p>
          </article>
        ))}
        <a className="button testimonial-connect" href={emailLink}>Let&apos;s Connect!</a>
        {testimonials.slice(2).map(({ quote, name, role }) => (
          <article className="testimonial" key={name}>
            <span className="card-rule" aria-hidden="true" />
            <blockquote>&quot;{quote}&quot;</blockquote>
            <p><strong>{name}</strong><br />{role}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  const [currentCta, setCurrentCta] = useState(0)
  const [ctaPhase, setCtaPhase] = useState('in')
  const [showBackToTop, setShowBackToTop] = useState(false)

  const footerSlides = [
    { title: 'Have a Great Idea?', button: 'Make It a Reality' },
    { title: 'Have a Question?', button: "I'd Love to Help" },
    { title: 'Good Ideas Deserve Great Design', button: 'Get Started' },
  ]

  useEffect(() => {
    const delay = ctaPhase === 'visible' ? 3600 : 700
    const timer = window.setTimeout(() => {
      if (ctaPhase === 'visible') setCtaPhase('out')
      if (ctaPhase === 'out') {
        setCurrentCta((slide) => (slide + 1) % footerSlides.length)
        setCtaPhase('in')
      }
      if (ctaPhase === 'in') setCtaPhase('visible')
    }, delay)

    return () => window.clearTimeout(timer)
  }, [ctaPhase, footerSlides.length])

  useEffect(() => {
    const updateBackToTop = () => {
      const headerHeight = document.getElementById('top')?.offsetHeight ?? 0
      setShowBackToTop(window.scrollY > headerHeight)
    }

    updateBackToTop()
    window.addEventListener('scroll', updateBackToTop, { passive: true })
    window.addEventListener('resize', updateBackToTop)

    return () => {
      window.removeEventListener('scroll', updateBackToTop)
      window.removeEventListener('resize', updateBackToTop)
    }
  }, [])

  const activeCta = footerSlides[currentCta]

  return (
    <footer>
      <section className={`final-cta final-cta-${currentCta}`} aria-live="polite">
        <div className={`final-cta-content phase-${ctaPhase}`} key={currentCta}>
          <h2>{activeCta.title}</h2>
          <a className="button button-light" href={emailLink}>{activeCta.button}</a>
        </div>
      </section>
      <div className="footer-row">
        <div className="social-links" aria-label="Social media">
          <a href="https://www.facebook.com/ErykaBagwellCreative" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
          <a href="https://www.instagram.com/erykabagwellcreative" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
        </div>
        <p>© 2026 Eryka Bagwell Creative <span>||</span> 862.432.6989 <span>||</span> <a href={emailLink}>ErykaEBagwell@gmail.com</a></p>
      </div>
      <button className={`back-to-top ${showBackToTop ? 'is-visible' : ''}`} type="button" onClick={() => scrollToSection('top')} aria-label="Back to top" aria-hidden={!showBackToTop} tabIndex={showBackToTop ? 0 : -1}>⌃</button>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    const target = window.sessionStorage.getItem('classicScrollTarget')
    if (!target) return

    window.sessionStorage.removeItem('classicScrollTarget')
    requestAnimationFrame(() => scrollToSection(target))
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <div id="portfolio">
          <PortfolioGallery id="print-packaging" number="01" title="Print & Packaging" items={printWork} />
          <PortfolioGallery id="digital-portfolio" number="02" title="Digital Portfolio" items={digitalWork} />
        </div>
        <Career />
        <Capabilities />
        <KindWords />
      </main>
      <Footer />
    </>
  )
}
