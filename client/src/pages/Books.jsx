import { useState} from 'react'


const Search = () => {
  const [isopen, setIsopen] = useState(false);
  const [isclose, setIsclose] = useState(false)

  const videoSource = '/imgvideo/video2.mp4';
  const videoSource1 = '/imgvideo/video2.mp4';


  return (
   <>

<div className="grid grid-rows-4 grid-flow-col gap-4">
  <div className="relative flex-1 w-full  lg:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div className="p-6">
      <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        1. Vehicle lights
      </h5>
      <img src='/images/bild21.jpeg' alt='lightcar' className='w-full rounded-lg' />
      <p className="block font-sans text-base font-light leading-relaxed mt-4  text-inherit antialiased">
      The vehicle lights are essential for safety, visibility, and communication on the road, playing a fundamental role in safe driving.
      </p>
    </div>
    <div className="p-6 pt-0">
      <button className='bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold' onClick={() => setIsopen(true)}>Read more</button>
    </div>
  </div>

  <div className="relative flex-1 w-full lg:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div className="p-6">
      <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        1. Baby on board
      </h5>
      <img src='/images/bild5.png' alt='lightcar' className='w-full rounded-lg' />
      <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
        The place is close to Barceloneta Beach and bus stop just 2 min by walk
        and near to where you can enjoy the main night life in
        Barcelona.
      </p>
    </div>
    <div className="p-6 pt-0">
      <button className='bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold' onClick={() => setIsclose(true)}>Read more</button>
    </div>
  </div>
  <div className="relative flex-1 w-full lg:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div className="p-6">
      <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        1. The light
      </h5>
      <img src='/images/hjul.jpeg' alt='lightcar' className='w-full rounded-lg' />
      <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
        The place is close to Barceloneta Beach and bus stop just 2 min by walk
        and near to where you can enjoy the main night life in
        Barcelona.
      </p>
    </div>
    <div className="p-6 pt-0">
      <button className='bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold' onClick={() => setIsopen(true)}>Read more</button>
    </div>
  </div>
  <div className="relative flex-1 w-full  lg:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div className="p-6">
      <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        1. The light
      </h5>
      <img src='/images/bild2.jpg' alt='lightcar' className='w-full rounded-lg' />
      <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
        The place is close to Barceloneta Beach and bus stop just 2 min by walk
        and near to where you can enjoy the main night life in
        Barcelona.
      </p>
    </div>
    <div className="p-6 pt-0">
      <button className='bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold' onClick={() => setIsopen(true)}>Read more</button>
    </div>
  </div>

  <div className="relative flex-1 w-full lg:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div className="p-6">
      <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        1. Baby on board
      </h5>
      <img src='/images/bild5.png' alt='lightcar' className='w-full rounded-lg' />
      <p className="block font-sans text-base font-light leading-relaxed mt-4  text-inherit antialiased">
      The vehicle lights are essential for safety, visibility, and communication on the road, playing a fundamental role in safe driving.
      </p>
    </div>
    <div className="p-6 pt-0">
      <button className='bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold' onClick={() => setIsclose(true)}>Read more</button>
    </div>
  </div>
  <div className="relative flex-1 w-full lg:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div className="p-6">
      <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        1. Lysen
      </h5>
      <img src='/images/lightcar.webp' alt='lightcar' className='w-full rounded-lg' />
      <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
        The place is close to Barceloneta Beach and bus stop just 2 min by walk
        and near to where you can enjoy the main night life in
        Barcelona.
      </p>
    </div>
    <div className="p-6 pt-0">
      <button className='bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold' onClick={() => setIsopen(true)}>Read more</button>
    </div>
  </div>

  <div className="relative flex-1 w-full lg:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div className="p-6">
      <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        1. Lysen
      </h5>
      <img src='/images/lightcar.webp' alt='lightcar' className='w-full rounded-lg' />
      <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
        The place is close to Barceloneta Beach and bus stop just 2 min by walk
        and near to where you can enjoy the main night life in
        Barcelona.
      </p>
    </div>
    <div className="p-6 pt-0">
      <button className='bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold' onClick={() => setIsopen(true)}>Read more</button>
    </div>
  </div>
  <div className="relative flex-1 w-full lg:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div className="p-6">
      <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        1. Lysen
      </h5>
      <img src='/images/lightcar.webp' alt='lightcar' className='w-full rounded-lg' />
      <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
        The place is close to Barceloneta Beach and bus stop just 2 min by walk
        and near to where you can enjoy the main night life in
        Barcelona.
      </p>
    </div>
    <div className="p-6 pt-0">
      <button className='bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold' onClick={() => setIsopen(true)}>Read more</button>
    </div>
  </div>


</div>

 { 
 isopen && (
  
  <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
  <div className='bg-white p-5 rounded flex flex-col gap-5 shadow-xl w-96'>
    <div className='border-b-2 border-gray-300 p-2 mb-2 rounded-tl-lg rounded-tr-lg'>
      <h2 className='text-xl font-semibold font-[Poppins]'>The vechile lights</h2>
    </div>
    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
      <video controls className='w-full rounded-lg'>
                <source src={videoSource1} type='video/mp4' />
              </video>
  <p className='pt-4'>The vehicle lights are essential for safety, visibility, and communication on the road, playing a fundamental role in safe driving.</p>
  <h1 className='font-bold mt-3'>Vehicle lights include:</h1> 

      <p className='text-gray-700  pt-3 leading-relaxed'>
 <strong>1.Headlights:</strong>  Illuminate the road. <br />
 <strong>2.High and Low Beams:</strong> Different intensities for various situations. <br />
 <strong>3.Parking Lights:</strong> Enhance visibility when the vehicle is parked. <br />
 <strong>4.Brake Lights:</strong> Signal braking to drivers behind. <br />
 <strong>5.Turn Signals:</strong> Indicate the direction of a turn. <br />
 <strong>6.Reverse Lights:</strong> Aid in reversing. <br />
7. <strong>Fog Lights:</strong> Provide illumination in fog or mist. <br />
8. <strong>Warning Lights:</strong>  Alert to vehicle issues. <br />
9. <strong>Interior Lights: </strong> Illuminate the cars interior. <br />
10. <strong>License Plate Lights:</strong> Illuminate the vehicles license plate.  </p>

<img src='/images/bild14.gif' alt='image' className='w-full rounded-lg mt-2' />
<p className='font-bold pt-8'>4 DIFFERENT TYPES OF CAR HEADLIGHTS</p>
<h2 className='font-bold pt-7'>1️⃣ Halogen Car Headlights</h2>
<img src='/images/bild16.webp' alt='halogen' className='w-full rounded-lg mt-2 pt-4' />
<p className='pt-4'>Halogens, once the most prevalent choice for car headlights, have begun to lose their prominence and give way to innovative alternatives. They can be likened to the aging patriarch of headlight technology, gradually being outperformed and succeeded by more youthful inventions.

Halogens operate by utilizing various gases and a tungsten filament enclosed within a heat-resistant glass casing. When an electrical current passes through the filament, it generates the light. Halogen headlights are categorized into two main types: standard and projector. Standard headlights employ forward-facing bulbs housed within a reflective casing, emitting light outward and forward. In contrast, projector headlights use a rear-facing bulb directed towards a reflective casing, resulting in a more focused and targeted light beam.

One of the advantages of halogen headlights is their affordability and widespread availability, making them easy to replace. However, they fall short in terms of efficiency and brightness compared to newer headlight technologies. A significant amount of their energy is lost as heat due to their design, rendering them less efficient, especially when compared to energy-efficient alternatives like LEDs.

Halogens also exhibit sensitivity to physical contact, with even minor touch diminishing their ability to dissipate heat effectively. Consequently, the automotive industry is gradually transitioning toward more advanced and efficient lighting options to meet the evolving demands of modern vehicles.</p> 
 
<h2 className='font-bold pt-7'>2️⃣ HID Car Headlights</h2>
<img src='/images/bild17.webp' alt='hid' className='w-full rounded-lg mt-2 pt-4' />
<p className='pt-4'>
HID (High Energy Discharge) headlights, also known as Xenon headlights, are gaining popularity among car manufacturers for being much brighter and longer-lasting than old halogen lights.
HIDs use Xenon gas and a tungsten filament to produce light, but they do not rely on heating like halogens. Instead, Xenon gas itself creates the light, giving HIDs a distinctive blueish glow.
Their extra brightness improves nighttime visibility but can be blinding to oncoming drivers. However, HIDs are more expensive due to rare materials and gases used in their production. They take a bit longer to reach full 
brightness but are more energy-efficient once fully lit.</p> 

<h2 className='font-bold pt-7'>3️⃣ LASER CAR HEADLIGHTS</h2>
<img src='/images/bild19.webp' alt='laser' className='w-full rounded-lg mt-2 pt-4' />
<p className='pt-4'>
Car laser lights, also known as laser headlights, are an advanced lighting technology used in some vehicles. Unlike halogen, LED, or HID lights that use filaments or diodes to produce light, laser lights utilize 
laser-stimulated emission of light.
In essence, they work by projecting a highly concentrated and coherent laser beam through a series of optical components to create a very powerful and bright light source. This technology offers extremely sharp illumination and an extended visibility range compared to other headlight types.
Car laser lights are known for their energy efficiency and long lifespan. However, due to their intensity, they must be used with precise regulation and projection systems to prevent dazzling other drivers on the road.</p> 
 
<h2 className='font-bold pt-7'>4️⃣ LED CAR HEADLIGHTS</h2>
<img src='/images/bild18.webp' alt='led' className='w-full rounded-lg mt-2 pt-4' />
<p className='pt-4'>
LEDs, or Light Emitting Diodes, are the newcomers in the world of lighting, and their main advantage is efficiency. LEDs use much less power than both halogen and HID lights. They also last an incredibly long time, possibly even longer than the vehicle they are installed in. Their small size allows for versatile arrangements, sparking unique headlight designs in recent years.
LED lights are often found in tail lights because they are small and can be customized easily. However, LEDs generate quite a bit of heat during operation, requiring an additional heat control system at the base of each light. This adds to their cost and limits their widespread use.
Due to their recent introduction, LEDs are relatively expensive. The limited demand has led to minimal production innovation, increasing costs due to the need for handcrafted components. But this is changing rapidly, and LEDs are well on their way to becoming the standard headlights in the automotive industry.</p> 
 

 </div>

    <button className='bg-red-500 py-2 px-6 rounded-lg text-white font-bold' onClick={() => setIsopen(false)}>Close</button>

  </div>
</div>
 )
 }   

{ 
 isclose && (
  
  
  <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
  <div className='bg-white p-5 rounded flex flex-col gap-5 shadow-xl w-96'>
    <div className='border-b-2 border-gray-300 p-2 mb-2 rounded-tl-lg rounded-tr-lg'>
      <h2 className='text-xl font-semibold font-[Poppins]'>The vechile lights</h2>
    </div>
    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
      <video controls className='w-full rounded-lg'>
                <source src={videoSource} type='video/mp4' />
              </video>
  <p className='pt-4'>The vehicle lights are essential for safety, visibility, and communication on the road, playing a fundamental role in safe driving.</p>
  <h1 className='font-bold mt-3'>Vehicle lights include:</h1> 

      <p className='text-gray-700  pt-3 leading-relaxed'>
 <strong>1.Headlights:</strong>  Illuminate the road. <br />
 <strong>2.High and Low Beams:</strong> Different intensities for various situations. <br />
 <strong>3.Parking Lights:</strong> Enhance visibility when the vehicle is parked. <br />
 <strong>4.Brake Lights:</strong> Signal braking to drivers behind. <br />
 <strong>5.Turn Signals:</strong> Indicate the direction of a turn. <br />
 <strong>6.Reverse Lights:</strong> Aid in reversing. <br />
7. <strong>Fog Lights:</strong> Provide illumination in fog or mist. <br />
8. <strong>Warning Lights:</strong>  Alert to vehicle issues. <br />
9. <strong>Interior Lights: </strong> Illuminate the cars interior. <br />
10. <strong>License Plate Lights:</strong> Illuminate the vehicles license plate.  </p>

<img src='/images/bild14.gif' alt='image' className='w-full rounded-lg mt-2' />
<p className='font-bold pt-8'>4 DIFFERENT TYPES OF CAR HEADLIGHTS</p>
<h2 className='font-bold pt-7'>1️⃣ Halogen Car Headlights</h2>
<img src='/images/bild16.webp' alt='halogen' className='w-full rounded-lg mt-2 pt-4' />
<p className='pt-4'>Halogens, once the most prevalent choice for car headlights, have begun to lose their prominence and give way to innovative alternatives. They can be likened to the aging patriarch of headlight technology, gradually being outperformed and succeeded by more youthful inventions.

Halogens operate by utilizing various gases and a tungsten filament enclosed within a heat-resistant glass casing. When an electrical current passes through the filament, it generates the light. Halogen headlights are categorized into two main types: standard and projector. Standard headlights employ forward-facing bulbs housed within a reflective casing, emitting light outward and forward. In contrast, projector headlights use a rear-facing bulb directed towards a reflective casing, resulting in a more focused and targeted light beam.

One of the advantages of halogen headlights is their affordability and widespread availability, making them easy to replace. However, they fall short in terms of efficiency and brightness compared to newer headlight technologies. A significant amount of their energy is lost as heat due to their design, rendering them less efficient, especially when compared to energy-efficient alternatives like LEDs.

Halogens also exhibit sensitivity to physical contact, with even minor touch diminishing their ability to dissipate heat effectively. Consequently, the automotive industry is gradually transitioning toward more advanced and efficient lighting options to meet the evolving demands of modern vehicles.</p> 
 
<h2 className='font-bold pt-7'>2️⃣ HID Car Headlights</h2>
<img src='/images/bild17.webp' alt='hid' className='w-full rounded-lg mt-2 pt-4' />
<p className='pt-4'>
HID (High Energy Discharge) headlights, also known as Xenon headlights, are gaining popularity among car manufacturers for being much brighter and longer-lasting than old halogen lights.
HIDs use Xenon gas and a tungsten filament to produce light, but they do not rely on heating like halogens. Instead, Xenon gas itself creates the light, giving HIDs a distinctive blueish glow.
Their extra brightness improves nighttime visibility but can be blinding to oncoming drivers. However, HIDs are more expensive due to rare materials and gases used in their production. They take a bit longer to reach full 
brightness but are more energy-efficient once fully lit.</p> 

<h2 className='font-bold pt-7'>3️⃣ LASER CAR HEADLIGHTS</h2>
<img src='/images/bild19.webp' alt='laser' className='w-full rounded-lg mt-2 pt-4' />
<p className='pt-4'>
Car laser lights, also known as laser headlights, are an advanced lighting technology used in some vehicles. Unlike halogen, LED, or HID lights that use filaments or diodes to produce light, laser lights utilize 
laser-stimulated emission of light.
In essence, they work by projecting a highly concentrated and coherent laser beam through a series of optical components to create a very powerful and bright light source. This technology offers extremely sharp illumination and an extended visibility range compared to other headlight types.
Car laser lights are known for their energy efficiency and long lifespan. However, due to their intensity, they must be used with precise regulation and projection systems to prevent dazzling other drivers on the road.</p> 
 
<h2 className='font-bold pt-7'>4️⃣ LED CAR HEADLIGHTS</h2>
<img src='/images/bild18.webp' alt='led' className='w-full rounded-lg mt-2 pt-4' />
<p className='pt-4'>
LEDs, or Light Emitting Diodes, are the newcomers in the world of lighting, and their main advantage is efficiency. LEDs use much less power than both halogen and HID lights. They also last an incredibly long time, possibly even longer than the vehicle they are installed in. Their small size allows for versatile arrangements, sparking unique headlight designs in recent years.
LED lights are often found in tail lights because they are small and can be customized easily. However, LEDs generate quite a bit of heat during operation, requiring an additional heat control system at the base of each light. This adds to their cost and limits their widespread use.
Due to their recent introduction, LEDs are relatively expensive. The limited demand has led to minimal production innovation, increasing costs due to the need for handcrafted components. But this is changing rapidly, and LEDs are well on their way to becoming the standard headlights in the automotive industry.</p> 
 

 </div>

    <button className='bg-red-500 py-2 px-6 rounded-lg text-white font-bold' onClick={() => setIsclose(false)}>Close</button>

  </div>
</div>
 )
 }   





</>
);
};

export default Search;

