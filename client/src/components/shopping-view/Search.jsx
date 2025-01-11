import React, { useEffect, useState } from 'react'
import { Form } from '../ui/form'
import { Input } from '../ui/input'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchResults } from '@/store/shop/search-slice'

function SearchProducts() {

    const [keyword, setKeyword] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useDispatch()
    const {searchResults, setSearchResults} = useSelector(state => state.shopSearch)

    useEffect(() => {
        if(keyword && keyword.trim() !== "" && keyword.trim().length > 3){
            setTimeout(() => {
                setSearchParams(new URLSearchParams(`?keyword=${keyword}`))
                dispatch(getSearchResults(keyword))
            },1000)

        }
    }, [keyword])

    console.log(searchResults, 'searchResults')
  return (
    <Form className=" w-full md:w-auto items-center mx-auto ">
    <Input
      value = {keyword}
      name = 'keyword'
      onChange={(event) => setKeyword(event.target.value)}
      type="search"
      placeholder="Search products..."
      className="w-full md:w-64"
    />
    
</Form>
  )
}

export default SearchProducts
