import { useState } from 'react'

const footer = "made by Jackson :)"
const phrases = [
  "No",
  "Try again",
  "You sure?",
  "Please :(",
  "I like you.",
  "Final chance...",
  "YOU HAVE TO SAY YES"
  
]
function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesClick, setYesClick] = useState(false);


  const getNoPhrases = () => {

    if (noCount>= phrases.length){
      return phrases[phrases.length-1]
    }
    else{
      return phrases[noCount]
    }
  }

  
  return (
    <>
    {yesClick ? (<>
    <section className="flex items-center justify-center">

      <div>
      <img className = "pt-14 rounded-lg"src = "https://i.pinimg.com/originals/fb/01/f8/fb01f80c2696f653791cbfc8e390a859.gif" alt="gif"></img>
      

      <h1 className = "text-5xl md:text-9xl text-center">YAY!</h1>
      </div>
      </section>
  
      
      </>
      ): 
    
    ( <>
      <section className="flex items-center justify-center">
      <div>
      <img className = "pl-16 pb-8 rounded-lg "src = "https://media.tenor.com/pj-WvOM7W2oAAAAi/mocha-and.gif" alt="gif"></img>
        <p className = "text-center text-2xl md:text-6xl">Will you go out with me?</p>

        <p id = "omg "className = "flex text-center p-32">
            <a onClick={()=> setYesClick(true)} className="bg-white hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-4 px-12 border border-blue-500 hover:border-transparent rounded m-6 SM">Yes</a>
            <a onClick={()=> setNoCount(noCount+1)} className="bg-white hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-4 px-12 border border-blue-500 hover:border-transparent rounded m-6">{getNoPhrases()}</a>
          </p>
        </div>

        
      </section>
      <footer className="bg-transparent rounded-lg  m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
       
            
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">{footer}</span>
    </div>
</footer>

    </>)}


    
    </>
   
  )
}

export default App
