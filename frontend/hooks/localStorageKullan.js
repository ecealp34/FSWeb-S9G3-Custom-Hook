import { useState } from "react"

export default function localStorageKullan(key, initialValue) {

    const [value, setValue] = useState(() => {

    const localValue = JSON.parse(localStorage.getItem(key));

    if(localValue === null) {

        localStorage.setItem(key, JSON.stringify(initialValue))

        console.log("data yok", initialValue)

        return initialValue

    } else {

        console.log("data var", localValue)
        
        return localValue
    }

 
const setLocalStorage = (newValue) => {

    localStorage.setItem(key, JSON.stringify(newValue))

    setValue(newValue);
return [value, setLocalStorage];
};
})



}


