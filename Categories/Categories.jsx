import React from 'react'
import './Categories.css'
import CategoriesBox from '../CategoriesBox/CategoriesBox'
import Wedding from '../../assets/wedding.gif'

function Categories() {
    return (
        <section className='container py-10 categoriesSec'>
<CategoriesBox pic='https://img.icons8.com/bubbles/100/restaurant.png' heading='Restaurants' />
<CategoriesBox pic='https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/external-hotel-hotel-management-flaticons-lineal-color-flat-icons.png' heading='Hotel' />
<CategoriesBox pic='https://img.icons8.com/cotton/50/facial-mask.png' heading='Beauty Spa' />
<CategoriesBox pic='https://img.icons8.com/dusk/50/home.png' heading='Home Decor' />

<div className='wedding'>
    <img width="100" height="100" src={Wedding} alt="wedding" />
    <h1>wedding</h1>
</div>
<CategoriesBox pic='https://img.icons8.com/clouds/100/school.png' heading='Education' />

<CategoriesBox pic='https://img.icons8.com/color/48/key-exchange.png' heading='Rent & Hire' />
<CategoriesBox pic='https://img.icons8.com/color/48/clinic.png' heading='Hospitals' />

<CategoriesBox pic='https://img.icons8.com/color/48/engineer.png' heading='Contractors' />
<CategoriesBox pic='https://img.icons8.com/color/48/pet.png' heading='Pet Shop' />

<CategoriesBox pic='https://img.icons8.com/color/48/two-beds.png' heading='PG/Hostels' />
<CategoriesBox pic='https://img.icons8.com/color/48/real-estate-agent-skin-type-3.png' heading='Estate Agent' />

<CategoriesBox pic='https://img.icons8.com/color/48/dentist-skin-type-1.png' heading='Dentists' />
<CategoriesBox pic='https://img.icons8.com/color/48/stepper-skin-type-2.png' heading='Gym' />

<CategoriesBox pic='https://img.icons8.com/color/48/loan.png' heading='Loans' />
<CategoriesBox pic='https://img.icons8.com/color/48/festival.png' heading='Event Organiser' />

<CategoriesBox pic='https://img.icons8.com/color/48/convertible--v1.png' heading='Driving Schools' />
<CategoriesBox pic='https://img.icons8.com/color/48/movers.png' heading='Packers and Movers' />

<CategoriesBox pic='https://img.icons8.com/color/48/postman.png' heading='Courier service' />
<CategoriesBox pic='https://img.icons8.com/color/48/categorize.png' heading='Popular Categories' />






            
        </section>
    )
}

export default Categories