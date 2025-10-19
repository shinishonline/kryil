import { useEffect } from 'react'

export default function useInView(ids = [], setActive) {
  useEffect(() => {
    const options = { threshold: 0.45 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.id
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          setActive && setActive(id)
        } else {
          entry.target.classList.remove('in-view')
        }
      })
    }, options)

    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids, setActive])
}
