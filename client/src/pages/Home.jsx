import { NewArticle } from "./NewArticle";
import { useState } from 'react';




function Home() {
  const [showMoreText, setShowMoreText] = useState(false);

  const handleReadMoreClick = () => {
    setShowMoreText(!showMoreText);
  };
  
  return (
    <>   
           <section className='mb-12 font-serif'>
      <img src="../images/bild15.jpeg" alt="bild" className="max-width: 400px" />
      <div className='sm:flex'>
        <div className='flex-1 py-6'>
          <h2 className='text-[20px]  font-bold sm:text-[55px] leading-none'>Despacito</h2>
        </div>
        <div className='flex-1 pt-9'>
          <p className='text-[13px] mb-10 sm:text-[20px]'>
            Welcome to the driving course where you can find different courses and 
            knowledge that will lead you to be the best behind the wheel.
            {showMoreText && (
              <>
            Welcome to the driving course where you can find different courses and 
               knowledge that will lead you to be the best behind the wheel.              
               </>
            )}
          </p>
          <button
            className='bg-SoftRed w-[150px] h-[42px] uppercase text-OffWhite hover:bg-VeryDarkBlue'
            onClick={handleReadMoreClick}
          >
            {showMoreText ? 'Read less' : 'Read more'}
          </button>
        </div>
      </div>
    </section>
    <aside className="bg-gray-200 text-gray-700 py-6 px-8">
     <h1 className="text-teal-600 text-4xl font-extrabold">Driving</h1>
        <NewArticle
         title='Learn to Drive' 
         text='Tips and techniques for new drivers.'/>
        <NewArticle
         title='Drivers License' 
         text='Comprehensive guide to obtaining your drivers license.'/>
         <NewArticle
          title='Safe Driving' 
           text='Safety tips for your journeys on the road.'/>
       <NewArticle
         title='Eco-Friendly Driving' 
         text='Reduce your carbon footprint while on the road.'/>
</aside>




 
</>


)}

export default Home;
