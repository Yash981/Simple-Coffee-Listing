import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import CoffeeListingComponent from './CoffeeListingComponent'

function App() {
  const [coffeeData,setcoffeeData] = useState([])
  const [DisplayData,setDisplayData] = useState([])
  const [AvailButtonClicked, setAvailButtonClicked] = useState(false)
  const handleDisplayData = (available) =>{
    if(available){
    const data =  coffeeData.filter((coffee)=> coffee.available === true)
    setDisplayData(data)
    }else{
      setDisplayData(coffeeData)
    }
    setAvailButtonClicked(!AvailButtonClicked)
  }
  useEffect(()=>{
   const fetchDta = async ()=>{
     const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
     const result = await response.json()
     setcoffeeData(result)
     setDisplayData(result)
   }
   fetchDta()
  },[])
  return (
    <>
    <main className="main w-[1150px]  bg-[#1B1D1F] h-[2100px] md:h-[1200px]  rounded-lg lg:h-[1000px] py-20 px-10 flex flex-col box-border sm:h-[2100px] ">
        <header className='flex flex-col justify-center items-center'>
          <h2 className='text-[#FEF7EE] text-2xl font-semibold tracking-wide'>Our Collection</h2>
          <p className='text-[#6F757C] text-center text-lg'>Introducing our Coffee Collection, a selection of unique coffees<br className='hidden md:block'/>from different roast types and origins, expertly roasted in small<br className='hidden md:block'/> batches and shipped fresh weekly.</p>
        </header>
        <nav className='flex justify-center items-center gap-10 mt-10'>
          <button className={`${!AvailButtonClicked ? 'bg-[#6F757C]':""}  text-lg  text-[#FEF7EE] p-2 px-3 rounded-lg font-semibold`} onClick={()=>handleDisplayData(false)}>All Products</button>
          <button className={`${AvailButtonClicked ? 'bg-[#6F757C]':""} text-lg text-[#FEF7EE] p-2 rounded-lg font-semibold`} onClick={()=>handleDisplayData(true)}>Available Now</button>
        </nav>
        <section className='mt-10 flex flex-wrap px-6 gap-10 justify-center items-center md:p-0'>
          {
            DisplayData.map((coffee,idx)=>{
              return (
                <CoffeeListingComponent key={idx} coffee={coffee}
                />
              )
            })
          }
        </section>
    </main>
   </>
  )
}

export default App
