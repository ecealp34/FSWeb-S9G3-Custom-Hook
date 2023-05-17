import localStorageKullan from "./localStorageKullan";


const useGeceModu = (key, initialMode) => {
    const [mod, setModHandler] = localStorageKullan(key, initialMode)

   const toggleMode = (e) => {
    e.preventDefault()
    setModHandler(!mod);
   };
    return [mod, toggleMode];
}

export default useGeceModu;