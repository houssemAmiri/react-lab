import { useEffect, RefObject } from 'react';

// Define the type for the IntersectionObserver options
interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

// Define the type for the callback function
type IntersectionCallback = (entry: IntersectionObserverEntry) => void;

function useIntersectionObserver(
  ref: RefObject<Element>, // Reference to the observed element
  callback: IntersectionCallback, // Callback function for entry updates
  options: IntersectionObserverOptions = { threshold: 0 } // Optional IntersectionObserver options
): void {
  useEffect(() => {
    // Create a new IntersectionObserver instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => callback(entry));
    }, options);

    // Observe the element if the ref is attached to an element
    const currentElement = ref.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    // Cleanup function to unobserve on unmount or ref change
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [ref, callback, options]); // Re-run effect if dependencies change
}

export default useIntersectionObserver;
