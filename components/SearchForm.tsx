import React from 'react'
import From from 'next/form'
import SearchFormReset from './SearchFormReset'
import { Search } from 'lucide-react';
const SearchForm = ({ query }: { query?: string }) => {

    return (
        <From action="/" scroll={false} className='search-form text-black'>
            <input
                name="query"
                defaultValue={query}
                className='search-input'
                placeholder='Search Startup'
            />

            <div className='flex gap-2'>
                {query && <SearchFormReset />}

                <button type='submit' className='search-btn text-white'>
                    <Search className='size-5' />
                </button>

            </div>
        </From>
    )
}

export default SearchForm