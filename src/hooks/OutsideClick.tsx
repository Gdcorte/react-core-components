import { RefObject, useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export function OutsideClickHandler(ref: RefObject<HTMLObjectElement>, handler: CallableFunction) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent | TouchEvent) {
        let eventTarget = event.target as Node | null

        if (ref.current && !ref.current?.contains(eventTarget)) {
            handler(event)
        }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}