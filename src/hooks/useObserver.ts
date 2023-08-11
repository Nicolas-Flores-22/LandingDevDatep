import { useEffect, useState, useRef } from 'react'

export interface IntersectionObserverInit {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export default function useObserver (options: IntersectionObserverInit) {
  const [elements, setElements] = useState<Element[]>([])
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([])

  const observer = useRef<IntersectionObserver>(
    new IntersectionObserver((observedEntries) => {
      setEntries(observedEntries)
    }, options)
  )

  useEffect(() => {
    const currentObserver = observer.current
    currentObserver.disconnect()

    if (elements.length > 0) {
      elements.forEach((element) => currentObserver.observe(element))
    }

    return function cleanup () {
      if (currentObserver) {
        currentObserver.disconnect()
      }
    }
  }, [elements])

  return { observer: observer.current, setElements, entries }
}
