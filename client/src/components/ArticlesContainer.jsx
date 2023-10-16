import img1 from '/images/bild11.png'
import img2 from '/images/bild10.png'
import img3 from '/images/bild12.png'
import img4 from '/images/bild13.png'
import Article from './Article';


export const ArticlesContainer = () => {
  return (
    <section className='mt-20 md:flex md:flex-wrap md:gap-10'>
    <Article
    img={img1} 
    number='01'
    title='40 000+'
    text='"We have guided thousands to success in their theory exams with our step-by-step method."'/>
  <Article
    img={img2} 
    number='02'
    title='Difficulties'
    text='The theory book & quiz as support for those with learning difficulties'/>
    <Article
    img={img3} 
    number='03'
    title='More languages'
    text='Training for cars is available in Swedish, English and Spanish. '/>
    <Article
    img={img4} 
    number='04'
    title='Chat with us'
    text='Kundservice 24 hours a day. We help you with everything you need.'/>
    </section>
  )
}
