import { useEffect, useState } from "react"

const useWidth = (): number => {
  const [width, setWidth] = useState<number>(0)
  useEffect(() => {
    function handleResize(): void {
      setWidth(window.innerWidth)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return (): void => window.removeEventListener("resize", handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return width
}

export default useWidth