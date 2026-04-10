import React, { useEffect, useRef } from 'react'
import './styles.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Approach from './components/Approach'
import Stack from './components/Stack'
import Contact from './components/Contact'
import Footer from './components/Footer'

function setSpotlightVars(el, clientX, clientY) {
  const rect = el.getBoundingClientRect()
  const inside =
    clientX >= rect.left &&
    clientX <= rect.right &&
    clientY >= rect.top &&
    clientY <= rect.bottom
  if (inside) {
    const x = ((clientX - rect.left) / rect.width) * 100
    const y = ((clientY - rect.top) / rect.height) * 100
    el.style.setProperty('--mx', `${x}%`)
    el.style.setProperty('--my', `${y}%`)
  } else {
    el.style.removeProperty('--mx')
    el.style.removeProperty('--my')
  }
}

const INTERACTIVE_SELECTOR =
  'a[href], button, input, textarea, select, summary, [role="button"], [tabindex]:not([tabindex="-1"]), .card, label[for]'

function App() {
  const pointerGlowRef = useRef(null)
  const customCursorRef = useRef(null)
  const reducedMotionRef = useRef(false)
  const useCustomCursorRef = useRef(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMq = () => {
      reducedMotionRef.current = mq.matches
    }
    updateMq()
    mq.addEventListener('change', updateMq)
    return () => mq.removeEventListener('change', updateMq)
  }, [])

  useEffect(() => {
    const mqFine = window.matchMedia('(pointer: fine)')
    const mqMinW = window.matchMedia('(min-width: 769px)')
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)')

    const syncCursorMode = () => {
      const ok = mqFine.matches && mqMinW.matches && !mqReduce.matches
      useCustomCursorRef.current = ok
      document.body.classList.toggle('has-custom-cursor', ok)
    }

    syncCursorMode()
    mqFine.addEventListener('change', syncCursorMode)
    mqMinW.addEventListener('change', syncCursorMode)
    mqReduce.addEventListener('change', syncCursorMode)

    return () => {
      mqFine.removeEventListener('change', syncCursorMode)
      mqMinW.removeEventListener('change', syncCursorMode)
      mqReduce.removeEventListener('change', syncCursorMode)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    const elements = document.querySelectorAll('.fade-in')
    elements.forEach((el) => observer.observe(el))

    return () => elements.forEach((el) => observer.unobserve(el))
  }, [])

  useEffect(() => {
    let raf = 0

    const handleMouseMove = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const glow = pointerGlowRef.current
        if (glow && !reducedMotionRef.current) {
          glow.style.setProperty('--px', `${e.clientX}px`)
          glow.style.setProperty('--py', `${e.clientY}px`)
        }

        const cursorEl = customCursorRef.current
        if (cursorEl && useCustomCursorRef.current) {
          cursorEl.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
          const node = e.target
          const interactive =
            node && typeof node.closest === 'function' && node.closest(INTERACTIVE_SELECTOR)
          cursorEl.classList.toggle('custom-cursor--hover', Boolean(interactive))
        }

        document.querySelectorAll('.card--spotlight').forEach((card) => {
          setSpotlightVars(card, e.clientX, e.clientY)
        })
        document.querySelectorAll('.brand-spotlight').forEach((el) => {
          setSpotlightVars(el, e.clientX, e.clientY)
        })
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="page">
      <div className="grid-bg" />
      <div className="pointer-glow" ref={pointerGlowRef} aria-hidden />
      <div
        className="custom-cursor"
        ref={customCursorRef}
        aria-hidden
      >
        <span className="custom-cursor__halo" />
        <span className="custom-cursor__dot" />
      </div>
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="content-layer">
        <div className="shell">
          <Header />
          <Hero />
        </div>

        <div className="divider" />

        <div className="shell">
          <Projects />
          <Approach />
          <Stack />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
