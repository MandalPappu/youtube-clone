import React, { createContext, useState, useEffect} from 'react'
import { fetchDataFromApi } from '../utils/api'


export const Context = createContext()

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false)
    const [searchResult, setSearchResult] = useState(false)
    const [selectCategory, setSelectCategory] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)

    useEffect(() => {
        fetchselectCategoryData(selectCategory)
     }, [selectCategory])

    const fetchselectCategoryData = (query) => {
        try {
            setLoading(true)
            fetchDataFromApi(`search/?q=${query}`).then(({contents}) => {
                console.log(contents);
                setSearchResult(contents)
                setLoading(false)
            })
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    
    return <Context.Provider value={
       { loading,
        setLoading,
        searchResult,
        setSearchResult,
        selectCategory,
        setSelectCategory,
        mobileMenu,
        setMobileMenu}
    } >
        {props.children}
    </Context.Provider>
}