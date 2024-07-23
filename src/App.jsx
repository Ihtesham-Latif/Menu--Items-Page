
import { useState } from 'react'
import './App.css'
import menu from './components/Data'
import MenuItem from './components/MenuItem'
import Button from './components/Button'

function App() {
  const [menuitems,setmenuitems]= useState(menu)
  const uniqueCategories = Array.from(new Set(menu.map((item) => item.category)))
  const [category,setcategory]=useState(uniqueCategories)
  const handleCategoryClick = (e)=>{
   const newMenuItems = menu.filter((item)=>item.category==e.target.name)
   if(newMenuItems==""){
    setmenuitems(menu)
   }
   else{
    setmenuitems(newMenuItems)
   } 
  }
  return (
    <div className=" box-border main-container grid grid-cols-12 bg-emerald-950 w-svw min-h-svh h-auto p-5 roboto-condensed ">
      <div className="main-menu-container grid grid-cols-12 col-start-3 col-end-11 ">
        <h1 className='text-2xl col-start-1 col-end-13 text-center p-2 text-white'>Menu Items</h1>
        <div className="button flex justify-center items-center col-start-1 col-end-13 p-4 space-x-2">
        {/* space for button  */}
        <button onClick={handleCategoryClick} className=' text-white w-20 bg-emerald-500 rounded-md hover:bg-yellow-500'>All</button>

        {category.map((singleCategory,index)=>{
            return(
                <Button click={handleCategoryClick} key={index} name={singleCategory}/>
            )
          })}
          

        </div>
        <div className="sub-menu-container col-start-1 col-end-13 p-5 grid grid-cols-12 gap-5 ">
        {/* space for menu items  */}
        {menuitems.map((item,index)=>{
          const className = `box-${index+1}`
          return(
            <MenuItem key={index} {...item} className={className}/>
          )
        })}
        

        </div>





      </div>


    </div>
  )
}

export default App
