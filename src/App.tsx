import {useEffect, useState} from 'react'
import type {Advice, AdviceResponse} from "../types";

function App() {
  const [advice, setAdvice] = useState<Advice | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const pageClass = "grid place-items-center min-h-screen bg-gray-800 text-gray-200"

  const fetchAdvice = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.adviceslip.com/advice?timestamp=${Date.now()}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: AdviceResponse = await response.json();
      setAdvice(data.slip)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch advice');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchAdvice().catch((err) => {
      console.error('Error in useEffect:', err);
    });
  }, []);

  if (error) {
    return <div className={pageClass}>{error}</div>
  }

  if (!advice) {
    return <div className={pageClass}>Loading...</div>
  }

  return (
    <div className={pageClass}>
      <div
        className="card relative bg-gray-700 rounded-lg text-center pt-8 px-8 pb-16 max-w-sm md:max-w-lg lg:max-w-xl">
        <p className="advice-number text-green-300 text-xs my-4 tracking-widest font-bold">ADVICE #{advice.id}</p>
        <p
          className="advice-text text-gray-200 font-bold text-md md:text-xl lg:text-3xl mb-4">&ldquo;{advice.advice}&rdquo;</p>
        <img src="/pattern-divider-mobile.svg" alt="" className="w-full lg:hidden"/>
        <img src="/pattern-divider-desktop.svg" alt="" className="w-full hidden lg:block"/>
        <button onClick={fetchAdvice} disabled={isLoading}
                className="absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 bg-green-300 rounded-full p-4 cursor-pointer hover:shadow-[0_0_30px_rgba(78,255,168,0.5)] transition-colors">
          <img src="/icon-dice.svg" alt="icon-dice"
               className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 cursor-pointer"/>
        </button>
      </div>
    </div>
  )
}

export default App
