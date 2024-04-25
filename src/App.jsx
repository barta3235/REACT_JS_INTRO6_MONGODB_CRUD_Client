import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
 const [coffees, setCoffees]=useState(loadedCoffees);

  return (
    <div className='m-2 md:m-20'>
      <h1 className='text-6xl text-purple-700 text-center'>Hot Hot Cold Coffee: {loadedCoffees.length} </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {
           coffees.map((coffee) => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees} ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
