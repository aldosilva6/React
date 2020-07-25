import {useEffect} from 'react'

//Needs to start with the word "use" to linters rely on this word to determine
//wheter rules of hooks apply to the function or not.
function useDocumentTitle(count) {
    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
}

export default useDocumentTitle
