import { useState, useEffect } from 'react'

function getCurrentLocation() {
    return {
        pathname: window.location.pathname,
        search: window.location.search,
        hash: window.location.hash
    }
}

/**
 * @type {Array<() => void>}
 */
const listeners: Array<any> = []

/**
 * Notifies all location listeners. Can be used if the history state has been manipulated
 * in by another module. Effectifely, all components using the 'useLocation' hook will
 * update.
 */
export function notify() {
    listeners.forEach(listener => listener())
}

export function useLocation() {
    const [{ pathname, search, hash }, setLocation] = useState(getCurrentLocation())

    useEffect(() => {
        window.addEventListener('popstate', handleChange)
        return () => window.removeEventListener('popstate', handleChange)
    }, [])

    // @ts-ignore
    useEffect(() => {
        listeners.push(handleChange)
        return () => listeners.splice(listeners.indexOf(handleChange), 1)
    }, [])

    function handleChange() {
        setLocation(getCurrentLocation())
    }

    /**
     * @param {string} url
     */
    function push(url: string) {
        window.history.pushState(null, '', url)
        notify()
    }

    /**
     * @param {string} url
     */
    function replace(url: string) {
        window.history.replaceState(null, '', url)
        notify()
    }

    return {
        push,
        replace,
        pathname,
        search,
        hash
    }
}