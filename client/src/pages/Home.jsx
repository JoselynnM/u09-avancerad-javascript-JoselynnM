import { NewArticle } from "./NewArticle";


function Feed() {
  
  
  return (
    <>   
      <section className='mb-12'>  
            <img src="../images/bild.png" alt="bild" className="max-width: 640px" />
        <div className='sm:flex'>
           <div className='flex-1 py-6'>
              <h2 className='text-[35px] font-bold sm:text-[58px] leading-none'>Despacito</h2>
           </div>
         <div className='flex-1 pt-9'>
            <p className='text-[13px] mb-10 sm:text-[15px]'>
              Welcome to the driving course where you can find different courses and 
              knowledge that will lead you to be the best behind the wheel.</p>
             <button className='bg-SoftRed w-[185px] h-[48px]
              uppercase text-OffWhite hover:bg-VeryDarkBlue'>
                Read more
              </button>
          </div>
        </div>
    </section>
   <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px]">
     <h1 className="text-SoftOrange text-[25px] fond-bold">New</h1>
        <NewArticle
         title='Try Quiz ' 
         text='Random questions from the book easy/difficult'/>
        <NewArticle
         title='Drivers license theory' 
         text='Easy-to-read summary of the entire drivers license theory.'/>
         <NewArticle
          title='Customer service' 
           text='You do not hesitate to chat with our chatbot for more help.'/>
    </aside>
</>

)}

export default Feed;
