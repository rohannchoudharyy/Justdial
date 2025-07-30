import React from 'react'
import './Bills.css'
import CategoriesBox from '../CategoriesBox/CategoriesBox'

function Bills() {
    return (
        <section className='container flex BillsSec' style={{margin:'2rem auto'}}>
            <div className='BillsSecleft'>
                <h2> Bills & Recharge</h2>
                <p>Pay your bills & recharge instantly <br /> with Justdial</p>
                <a href="#">Explore More</a>
            </div>
            <div className='BillsSecright'>

                <CategoriesBox pic='https://img.icons8.com/bubbles/100/restaurant.png' heading='Restaurants' />
                <CategoriesBox pic='https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/external-hotel-hotel-management-flaticons-lineal-color-flat-icons.png' heading='Hotel' />

                <CategoriesBox pic='https://img.icons8.com/bubbles/100/restaurant.png' heading='Restaurants' />
                <CategoriesBox pic='https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/external-hotel-hotel-management-flaticons-lineal-color-flat-icons.png' heading='Hotel' />

                <CategoriesBox pic='https://img.icons8.com/bubbles/100/restaurant.png' heading='Restaurants' />
                <CategoriesBox pic='https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/external-hotel-hotel-management-flaticons-lineal-color-flat-icons.png' heading='Hotel' />

            </div>
        </section>
    )
}

export default Bills