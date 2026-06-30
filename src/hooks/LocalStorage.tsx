import { useCallback, useEffect, useState } from "react";

/**
 * Hook that handles communication with LocalStorage
 */
export default function LocalStorageHandler<T>(
  key: string,
  defaultValue: T | undefined,
) {
  const [storedValue, setStoredValue] = useState<T | undefined>(defaultValue);

  const readValue = useCallback((): T | undefined => {
    if (typeof window === "undefined") {
      return defaultValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : defaultValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return defaultValue;
    }
  }, [key, defaultValue]);

  const setValue = useCallback(
    (updatedValue: T) => {
      try {
        // Update state local to this instance
        setStoredValue(updatedValue);

        // Save to localStorage
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(updatedValue));
        }
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key],
  );

  useEffect(() => {
    setStoredValue(readValue());
  }, [readValue]);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key && event.newValue !== null) {
        try {
          setStoredValue(JSON.parse(event.newValue) as T);
        } catch {
          // Fallback if the payload isn't clean stringified JSON
          setStoredValue(event.newValue as unknown as T);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key]);

  return [storedValue, setValue] as const;
}
