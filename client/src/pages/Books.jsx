import { useState } from "react";

const Search = () => {
  const [isopen, setIsopen] = useState(false);
  const [isopen1, setIsopen1] = useState(false);
  const [isopen2, setIsopen2] = useState(false);

  const videoSource = "/imgvideo/video2.mp4";
  const videoSource3= "/imgvideo/video.mov";

  return (
    <>
      <div className="grid grid-rows-4 mx-20 grid-flow-col gap-8">
        <div className="relative flex-1 w-full  lg:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              1. Vehicle lights
            </h5>
            <img
              src="/images/bild21.jpeg"
              alt="lightcar"
              className="w-full rounded-lg"
            />
            <p className="block font-sans text-base font-light leading-relaxed mt-4  text-inherit antialiased">
              The vehicle lights are essential for safety, visibility, and
              communication on the road, playing a fundamental role in safe
              driving.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold"
              onClick={() => setIsopen(true)}
            >
              Read more
            </button>
          </div>
        </div>

        <div className="relative flex-1 w-full lg:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              3. The Environment
            </h5>
            <img
              src="/images/enviromentt.jpeg"
              alt="lightcar"
              className="w-full rounded-lg"
            />
            <p className="block font-sans text-base font-light leading-relaxed  mt-4 text-inherit antialiased">
            In this chapter, we'll explore how you can drive more eco-consciously and reduce your carbon footprint on the road.            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold"
              onClick={() => setIsopen2(true)}
            >
              Read more
            </button>
          </div>
        </div>
        <div className="relative flex-1 w-full lg:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              1. The light
            </h5>
            <img
              src="/images/hjul.jpeg"
              alt="lightcar"
              className="w-full rounded-lg"
            />
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to where you can enjoy the main night life in
              Barcelona.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold"
              onClick={() => setIsopen(true)}
            >
              Read more
            </button>
          </div>
        </div>
        <div className="relative flex-1 w-full  lg:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              1. The light
            </h5>
            <img
              src="/images/bild2.jpg"
              alt="lightcar"
              className="w-full rounded-lg"
            />
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to where you can enjoy the main night life in
              Barcelona.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold"
              onClick={() => setIsopen(true)}
            >
              Read more
            </button>
          </div>
        </div>

        <div className="relative flex-1 w-full lg:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              2. Baby on board
            </h5>
            <img
              src="/images/bild5.png"
              alt="babyonboard"
              className="w-full rounded-lg"
            />
            <p className="block font-sans text-base font-light leading-relaxed mt-4  text-inherit antialiased">
            Passenger safety, especially for the most vulnerable, is a primary concern while driving. 
            Babies and young children require special 
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold"
              onClick={() => setIsopen1(true)}
            >
              Read more
            </button>
          </div>
        </div>
        <div className="relative flex-1 w-full lg:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              1. Lysen
            </h5>
            <img
              src="/images/lightcar.webp"
              alt="lightcar"
              className="w-full rounded-lg"
            />
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to where you can enjoy the main night life in
              Barcelona.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold"
              onClick={() => setIsopen(true)}
            >
              Read more
            </button>
          </div>
        </div>

        <div className="relative flex-1 w-full lg:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              1. Lysen
            </h5>
            <img
              src="/images/lightcar.webp"
              alt="lightcar"
              className="w-full rounded-lg"
            />
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to where you can enjoy the main night life in
              Barcelona.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold"
              onClick={() => setIsopen(true)}
            >
              Read more
            </button>
          </div>
        </div>
        <div className="relative flex-1 w-full lg:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              1. Lysen
            </h5>
            <img
              src="/images/lightcar.webp"
              alt="lightcar"
              className="w-full rounded-lg"
            />
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to where you can enjoy the main night life in
              Barcelona.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold"
              onClick={() => setIsopen(true)}
            >
              Read more
            </button>
          </div>
        </div>
      </div>

      {isopen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-5 rounded flex flex-col gap-5 shadow-xl w-96">
            <div className="border-b-2 border-gray-300 p-2 mb-2 rounded-tl-lg rounded-tr-lg">
              <h2 className="text-xl font-semibold font-[Poppins]">
              Chapter 1: The vechile lightssss
              </h2>
            </div>
            <div style={{ maxHeight: "400px", overflowY: "auto" }}>
              <video controls className="w-full rounded-lg">
                <source src={videoSource} type="video/mp4" />
              </video>
              <p className="pt-4">
                The vehicle lights are essential for safety, visibility, and
                communication on the road, playing a fundamental role in safe
                driving.
              </p>
              <h1 className="font-bold mt-3">Vehicle lights include:</h1>

              <p className="text-gray-700  pt-3 leading-relaxed">
                <strong>1.Headlights:</strong> Illuminate the road. <br />
                <strong>2.High and Low Beams:</strong> Different intensities for
                various situations. <br />
                <strong>3.Parking Lights:</strong> Enhance visibility when the
                vehicle is parked. <br />
                <strong>4.Brake Lights:</strong> Signal braking to drivers
                behind. <br />
                <strong>5.Turn Signals:</strong> Indicate the direction of a
                turn. <br />
                <strong>6.Reverse Lights:</strong> Aid in reversing. <br />
                7. <strong>Fog Lights:</strong> Provide illumination in fog or
                mist. <br />
                8. <strong>Warning Lights:</strong> Alert to vehicle issues.
                <br />
                9. <strong>Interior Lights: </strong> Illuminate the cars
                interior. <br />
                10. <strong>License Plate Lights:</strong> Illuminate the
                vehicles license plate.
              </p>

              <img
                src="/images/bild14.gif"
                alt="image"
                className="w-full rounded-lg mt-2"
              />
              <p className="font-bold pt-8">
                4 DIFFERENT TYPES OF CAR HEADLIGHTS
              </p>
              <h2 className="font-bold pt-7">1️⃣ Halogen Car Headlights</h2>
              <img
                src="/images/bild16.webp"
                alt="halogen"
                className="w-full rounded-lg mt-2 pt-4"
              />
              <p className="pt-4">
                Halogens, once the most prevalent choice for car headlights,
                have begun to lose their prominence and give way to innovative
                alternatives. They can be likened to the aging patriarch of
                headlight technology, gradually being outperformed and succeeded
                by more youthful inventions. Halogens operate by utilizing
                various gases and a tungsten filament enclosed within a
                heat-resistant glass casing. When an electrical current passes
                through the filament, it generates the light. Halogen headlights
                are categorized into two main types: standard and projector.
                Standard headlights employ forward-facing bulbs housed within a
                reflective casing, emitting light outward and forward. In
                contrast, projector headlights use a rear-facing bulb directed
                towards a reflective casing, resulting in a more focused and
                targeted light beam. One of the advantages of halogen headlights
                is their affordability and widespread availability, making them
                easy to replace. However, they fall short in terms of efficiency
                and brightness compared to newer headlight technologies. A
                significant amount of their energy is lost as heat due to their
                design, rendering them less efficient, especially when compared
                to energy-efficient alternatives like LEDs. Halogens also
                exhibit sensitivity to physical contact, with even minor touch
                diminishing their ability to dissipate heat effectively.
                Consequently, the automotive industry is gradually transitioning
                toward more advanced and efficient lighting options to meet the
                evolving demands of modern vehicles.
              </p>

              <h2 className="font-bold pt-7">2️⃣ HID Car Headlights</h2>
              <img
                src="/images/bild17.webp"
                alt="hid"
                className="w-full rounded-lg mt-2 pt-4"
              />
              <p className="pt-4">
                HID (High Energy Discharge) headlights, also known as Xenon
                headlights, are gaining popularity among car manufacturers for
                being much brighter and longer-lasting than old halogen lights.
                HIDs use Xenon gas and a tungsten filament to produce light, but
                they do not rely on heating like halogens. Instead, Xenon gas
                itself creates the light, giving HIDs a distinctive blueish
                glow. Their extra brightness improves nighttime visibility but
                can be blinding to oncoming drivers. However, HIDs are more
                expensive due to rare materials and gases used in their
                production. They take a bit longer to reach full brightness but
                are more energy-efficient once fully lit.
              </p>

              <h2 className="font-bold pt-7">3️⃣ LASER CAR HEADLIGHTS</h2>
              <img
                src="/images/bild19.webp"
                alt="laser"
                className="w-full rounded-lg mt-2 pt-4"
              />
              <p className="pt-4">
                Car laser lights, also known as laser headlights, are an
                advanced lighting technology used in some vehicles. Unlike
                halogen, LED, or HID lights that use filaments or diodes to
                produce light, laser lights utilize laser-stimulated emission of
                light. In essence, they work by projecting a highly concentrated
                and coherent laser beam through a series of optical components
                to create a very powerful and bright light source. This
                technology offers extremely sharp illumination and an extended
                visibility range compared to other headlight types. Car laser
                lights are known for their energy efficiency and long lifespan.
                However, due to their intensity, they must be used with precise
                regulation and projection systems to prevent dazzling other
                drivers on the road.
              </p>

              <h2 className="font-bold pt-7">4️⃣ LED CAR HEADLIGHTS</h2>
              <img
                src="/images/bild18.webp"
                alt="led"
                className="w-full rounded-lg mt-2 pt-4"
              />
              <p className="pt-4">
                LEDs, or Light Emitting Diodes, are the newcomers in the world
                of lighting, and their main advantage is efficiency. LEDs use
                much less power than both halogen and HID lights. They also last
                an incredibly long time, possibly even longer than the vehicle
                they are installed in. Their small size allows for versatile
                arrangements, sparking unique headlight designs in recent years.
                LED lights are often found in tail lights because they are small
                and can be customized easily. However, LEDs generate quite a bit
                of heat during operation, requiring an additional heat control
                system at the base of each light. This adds to their cost and
                limits their widespread use. Due to their recent introduction,
                LEDs are relatively expensive. The limited demand has led to
                minimal production innovation, increasing costs due to the need
                for handcrafted components. But this is changing rapidly, and
                LEDs are well on their way to becoming the standard headlights
                in the automotive industry.
              </p>
            </div>

            <button
              className="bg-red-500 py-2 px-6 rounded-lg text-white font-bold"
              onClick={() => setIsopen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isopen1 && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-5 rounded flex flex-col gap-5 shadow-xl w-96">
            <div className="border-b-2 border-gray-300 p-2 mb-2 rounded-tl-lg rounded-tr-lg">
              <h2 className="text-xl font-semibold font-[Poppins]">
              Chapter 2: "Baby on Board" and Child Safety in the Car
              </h2>
            </div>
            <div style={{ maxHeight: "400px", overflowY: "auto" }}>
              <p className="pt-4">
              Passenger safety, especially for the most vulnerable, is a primary concern while driving. Babies and young children require special attention to ensure their protection during car trips. In this chapter, we will explore best practices and essential safety devices for safely transporting a "Baby on Board."
              </p>
              <h1 className="font-bold mt-3">Vehicle lights include:</h1>

              <p className="text-gray-700  pt-3 leading-relaxed">
                <strong>1. Baby Car Seats:</strong> 
                <br/>
                <h2>1.1. Types of Car Seats</h2>
                <p >Baby car seats are essential devices to protect infants in a car. There are several types of car seats designed for different stages of development:</p>
                <strong><liv>Infant car seats: </liv></strong> These seats are designed for newborns until they reach a certain weight or height. They must be installed in a rear-facing position. <br />
                <strong><liv>Convertible car seats:</liv></strong> These seats can adapt to babies and young children. They can be installed rear-facing and later forward-facing as the child grows. <br />
                <strong><liv>Booster seats:</liv></strong> These seats raise the child to ensure that the vehicle's seatbelt fits properly. 
                <br />
                <br />
                <img
                src="/images/babycarseat.jpg"
                alt="image"
                className="w-full rounded-lg mt-2"
              /> <br />
                 <h2>1.2. Correct Installation</h2>                 
                 <p>Proper installation of the car seat is crucial. Follow the manufacturer's instructions and consult the vehicle's manual to ensure a safe installation. Ensure that the seat is securely fastened and does not move.</p>
                  <br />
                 <br />
                 <strong>2. Car Seat Position</strong> 
                <strong>Rear-Facing</strong> 
                <p>The baby car seat must be positioned in a rear-facing manner. This provides maximum protection in the event of a front-end collision.</p> <br />
                 <strong>Airbags:</strong> If you have a front passenger seat with an airbag, make sure to deactivate it or switch it to the "off" position when transporting a rear-facing baby. Airbags can be dangerous for infants in case of deployment. <br />
              </p>
              <strong>3. Seatbelt Adjustment</strong> 
              <strong> Securing the Baby</strong> 
              <p>Secure the baby in the car seat according to the manufacturer's instructions. Ensure that the harnesses are snugly fastened, and the baby is comfortable without excessive clothing that could interfere with safety.</p><br />
              <strong> Vehicle Seatbelt</strong> 
              <p>Ensure that the vehicle's seatbelt is correctly fastened and adjusted around the car seat. This will ensure that the seat is firmly secured in place.</p><br />
              <strong>4. Ongoing Check</strong> <br />
              <p>The safety of "Baby on Board" does not end with the installation of the car seat. Regularly check that the seat is securely fastened and that the baby is secure during the journey.</p>
              <strong>5. Final Reminders</strong>
              <li>Never leave a baby alone in a car, even for a short period.</li>
              <li>Do not place loose objects in the back seat that could become projectiles in the event of sudden braking or a collision.</li>
              <li>Comply with all local laws and regulations regarding child safety in the car.</li>
              <br /> 
              <p>The safety of "Baby on Board" is the responsibility of the driver. Make sure to take all necessary measures to protect babies and young children while traveling by car. A safe baby is a happy and healthy baby.</p>
             <br />
              <video controls className="w-full rounded-lg">
                <source src={videoSource3} type="video/mp4" />
              </video>           
            </div>

            <button
              className="bg-red-500 py-2 px-6 rounded-lg text-white font-bold"
              onClick={() => setIsopen1(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}


{isopen2 && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-5 rounded flex flex-col gap-5 shadow-xl w-96">
            <div className="border-b-2 border-gray-300 p-2 mb-2 rounded-tl-lg rounded-tr-lg">
              <h2 className="text-xl font-semibold font-[Poppins]">
              Chapter 3: The Environment and Your Vehicle
              </h2>
            </div>
            <div style={{ maxHeight: "400px", overflowY: "auto" }}>
             
              <h1 className="font-bold mt-3">1. The Relationship Between Vehicles and the Environment</h1>
               <p>Cars, while engineering marvels, have a significant impact on the environment. Key concerns include:</p>
              <p className="text-gray-700  pt-3 leading-relaxed">
                <li><strong>CO2 Emissions:</strong> </li>
                Vehicles burn fossil fuels, releasing carbon dioxide (CO2) and other greenhouse gases into the atmosphere, contributing to climate change.
                <br/>
                <li><strong>Air Pollutants: </strong></li>
                Cars emit harmful compounds like nitrogen oxides and particulate matter, affecting air quality and human health.
                <li><strong>Resource Consumption: </strong></li> 
                Manufacturing and operating vehicles require vast amounts of natural resources, from oil to metals and water. <br />
                <br />
                <br />
                <img
                src="/images/enviroment.jpg"
                alt="image"
                className="w-full rounded-lg mt-2"
              /> <br />
                <h1 className="font-bold mt-3">2. Driving Eco-Friendlyt</h1>              
                 <p>You can take steps to reduce your environmental impact while still enjoying the freedom of driving:</p>
                  <br />
                  <strong>1.1 Vehicle Maintenance </strong>
                <p>A well-maintained vehicle runs more efficiently and produces fewer pollutants. Perform regular maintenance, check tire pressure, and change the oil as recommended by the manufacturer.</p> <br />
                 <strong>Airbags:</strong> If you have a front passenger seat with an airbag, make sure to deactivate it or switch it to the "off" position when transporting a rear-facing baby. Airbags can be dangerous for infants in case of deployment. <br />
              </p>
              <strong>1.2 Efficient Driving</strong> 
              <li><strong>Avoid Rapid Acceleration:</strong></li>
              <p>Smooth and steady driving saves fuel and reduces emissions.</p><br />
              <li><strong>Reduce Speed:</strong></li>
              <p>Driving at a moderate speed is not only safer but also consumes less fuel.</p><br />
              <li><strong>Turn off the Engine</strong></li><br />
              <p>If you'll be stopped for more than a minute, turn off the engine to save fuel and cut emissions.</p> <br />
              <strong>1.3 Carpooling and Public Transport</strong>
              <p>Carpooling with others and using public transportation when possible reduces the number of vehicles on the road, decreasing traffic congestion and CO2 emissions.</p>
             <br />
             <h1 className="font-bold mt-3">3. Green Vehicles</h1>  
             Electric vehicles (EVs) and hybrids are cleaner options compared to internal combustion engine vehicles. Explore these alternatives if you want to minimize your environmental impact. <br />
             <h1 className="font-bold mt-3">4.  Driver Responsibility</h1>  
             Remember, as a driver, you have a responsibility to be a good planetary citizen. Properly dispose of waste, don't litter from your vehicle, and adhere to emissions regulations and speed limits. <br />
             <br />
             <img
                src="/images/drive.jpeg"
                alt="image"
                className="w-full rounded-lg mt-2"
              /> <br />
             Every time you choose to drive more eco-consciously, you're contributing to environmental protection and building a sustainable future for generations to come. With responsibility and action, you can make a difference in caring for our beautiful planet while enjoying the freedom of the open road.          
            </div>

            <button
              className="bg-red-500 py-2 px-6 rounded-lg text-white font-bold"
              onClick={() => setIsopen2(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}






    </>
  );
};

export default Search;
