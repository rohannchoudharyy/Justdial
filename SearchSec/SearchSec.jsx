import React from 'react'
import './SearchSec.css'
import Download from '../../assets/download.gif'

function SearchSec() {
    return (
        <section className='container seach-sec'>
            <div>
                <h2 className='search-heading' title='My name is raj '>Search across ‘4.6 Crore+‘<span> Businesses</span></h2>
                <div className='flex justify-between search-row'>
                    <div className='mt-3 search-box'>
                        <div>
                            <select>
                                <option value="">Greater noida</option>
                                <option value="">Dehli</option>
                                <option value="">Jaipur</option>
                                <option value="">Sikar</option>
                                <option value="">Goa</option>
                            </select>
                        </div>
                        <div className='relative'>
                            <img width="30" height="30" className='absolute top-2 right-5 search_pic' src="https://img.icons8.com/ios/30/search--v1.png" alt="search--v1" />
                            <input type="search" placeholder='Rental Estate Agents in Mumbai' />
                        </div>
                    </div>
                    <div>
                        <button className='search_btn'>
                            Download
                            <img src={Download} alt="" className='search_gif' />
                        </button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchSec