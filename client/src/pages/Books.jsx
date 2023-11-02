import { useState } from "react";

const Search = () => {
  const [isopen, setIsopen] = useState(false);
  const [isopen1, setIsopen1] = useState(false);
  const [isopen2, setIsopen2] = useState(false);
  const [isopen3, setIsopen3] = useState(false);
  const [isopen4, setIsopen4] = useState(false);
  const [isopen5, setIsopen5] = useState(false);
  const [isopen6, setIsopen6] = useState(false);
  const [isopen7, setIsopen7] = useState(false);

  const videoSource = "/imgvideo/video2.mp4";
  const videoSource3 = "/imgvideo/video.mov";
  const videoSource4 = "/imgvideo/trafficlight.mp4";
  const videoSource5 = "/imgvideo/dark.mp4";
  const videoSource6 = "/imgvideo/city.mp4";

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
              In this chapter, we'll explore how you can drive more
              eco-consciously and reduce your carbon footprint on the road.{" "}
            </p>
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
              5. Traffic lights
            </h5>
            <img
              src="/images/trafficlightt.webp"
              alt="lightcar"
              className="w-full rounded-lg"
            />
            <p className="block font-sans text-base font-light mt-4 leading-relaxed text-inherit antialiased">
              In this chapter, we will explore the vital connection between
              traffic lights and your vehicle. Understanding how your
              Understanding how your vehicle
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold"
              onClick={() => setIsopen4(true)}
            >
              Read more
            </button>
          </div>
        </div>
        <div className="relative flex-1 w-full  lg:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              7. Dark and Slippery
            </h5>
            <img
              src="/images/dark.jpg"
              alt="lightcar"
              className="w-full rounded-lg"
            />
            <p className="block font-sans text-base font-light mt-4 leading-relaxed text-inherit antialiased">
              In this chapter, we will address one of the most significant
              challenges a driver can face: driving in dark conditions while
              dealing with slippery surfaces due to
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold"
              onClick={() => setIsopen6(true)}
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
              Passenger safety, especially for the most vulnerable, is a primary
              concern while driving. Babies and young children require special
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
              4. The vehicle's Wheels
            </h5>
            <img
              src="/images/wheel.jpg"
              alt="lightcar"
              className="w-full rounded-lg"
            />
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              The wheels of your car are much more than simple rubber rings.
              They are a fundamental part
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold"
              onClick={() => setIsopen3(true)}
            >
              Read more
            </button>
          </div>
        </div>

        <div className="relative flex-1 w-full lg:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              6. Accidents
            </h5>
            <img
              src="/images/accidents.jpeg"
              alt="lightcar"
              className="w-full rounded-lg"
            />
            <p className="block font-sans text-base font-light mt-4 leading-relaxed text-inherit antialiased">
              In this chapter, we will explore the harsh reality of traffic
              accidents and how your vehicle can be involved in them. Road
              safety is a priority,
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold"
              onClick={() => setIsopen5(true)}
            >
              Read more
            </button>
          </div>
        </div>
        <div className="relative flex-1 w-full lg:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              1. City Driving
            </h5>
            <img
              src="/images/citycar.jpeg"
              alt="lightcar"
              className="w-full rounded-lg"
            />
            <p className="block font-sans text-base mt-4 font-light leading-relaxed text-inherit antialiased">
              City driving is an integral part of the driving experience.
              Crowded streets, traffic lights, pedestrians, and intersections
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold"
              onClick={() => setIsopen7(true)}
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
                Chapter 1: The vechile lights
              </h2>
            </div>
            <strong>Introduction</strong>
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
              <strong>Introduction</strong>
              <p className="pt-4">
                Passenger safety, especially for the most vulnerable, is a
                primary concern while driving. Babies and young children require
                special attention to ensure their protection during car trips.
                In this chapter, we will explore best practices and essential
                safety devices for safely transporting a "Baby on Board."
              </p>
              <h1 className="font-bold mt-3">Vehicle lights include:</h1>
              <p className="text-gray-700  pt-3 leading-relaxed">
                <strong>1. Baby Car Seats:</strong>
                <br />
                <h2>1.1. Types of Car Seats</h2>
                <p>
                  Baby car seats are essential devices to protect infants in a
                  car. There are several types of car seats designed for
                  different stages of development:
                </p>
                <strong>
                  <liv>Infant car seats: </liv>
                </strong>{" "}
                These seats are designed for newborns until they reach a certain
                weight or height. They must be installed in a rear-facing
                position. <br />
                <strong>
                  <liv>Convertible car seats:</liv>
                </strong>{" "}
                These seats can adapt to babies and young children. They can be
                installed rear-facing and later forward-facing as the child
                grows. <br />
                <strong>
                  <liv>Booster seats:</liv>
                </strong>{" "}
                These seats raise the child to ensure that the vehicle's
                seatbelt fits properly.
                <br />
                <br />
                <img
                  src="/images/babycarseat.jpg"
                  alt="image"
                  className="w-full rounded-lg mt-2"
                />{" "}
                <br />
                <h2>1.2. Correct Installation</h2>
                <p>
                  Proper installation of the car seat is crucial. Follow the
                  manufacturer's instructions and consult the vehicle's manual
                  to ensure a safe installation. Ensure that the seat is
                  securely fastened and does not move.
                </p>
                <br />
                <br />
                <strong>2. Car Seat Position</strong>
                <strong>Rear-Facing</strong>
                <p>
                  The baby car seat must be positioned in a rear-facing manner.
                  This provides maximum protection in the event of a front-end
                  collision.
                </p>{" "}
                <br />
                <strong>Airbags:</strong> If you have a front passenger seat
                with an airbag, make sure to deactivate it or switch it to the
                "off" position when transporting a rear-facing baby. Airbags can
                be dangerous for infants in case of deployment. <br />
              </p>
              <strong>3. Seatbelt Adjustment</strong>
              <strong> Securing the Baby</strong>
              <p>
                Secure the baby in the car seat according to the manufacturer's
                instructions. Ensure that the harnesses are snugly fastened, and
                the baby is comfortable without excessive clothing that could
                interfere with safety.
              </p>
              <br />
              <strong> Vehicle Seatbelt</strong>
              <p>
                Ensure that the vehicle's seatbelt is correctly fastened and
                adjusted around the car seat. This will ensure that the seat is
                firmly secured in place.
              </p>
              <br />
              <strong>4. Ongoing Check</strong> <br />
              <p>
                The safety of "Baby on Board" does not end with the installation
                of the car seat. Regularly check that the seat is securely
                fastened and that the baby is secure during the journey.
              </p>
              <strong>5. Final Reminders</strong>
              <li>
                Never leave a baby alone in a car, even for a short period.
              </li>
              <li>
                Do not place loose objects in the back seat that could become
                projectiles in the event of sudden braking or a collision.
              </li>
              <li>
                Comply with all local laws and regulations regarding child
                safety in the car.
              </li>
              <br />
              <p>
                The safety of "Baby on Board" is the responsibility of the
                driver. Make sure to take all necessary measures to protect
                babies and young children while traveling by car. A safe baby is
                a happy and healthy baby.
              </p>
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
              <h1 className="font-bold mt-3">
                1. The Relationship Between Vehicles and the Environment
              </h1>
              <p>
                Cars, while engineering marvels, have a significant impact on
                the environment. Key concerns include:
              </p>
              <p className="text-gray-700  pt-3 leading-relaxed">
                <li>
                  <strong>CO2 Emissions:</strong>{" "}
                </li>
                Vehicles burn fossil fuels, releasing carbon dioxide (CO2) and
                other greenhouse gases into the atmosphere, contributing to
                climate change.
                <br />
                <li>
                  <strong>Air Pollutants: </strong>
                </li>
                Cars emit harmful compounds like nitrogen oxides and particulate
                matter, affecting air quality and human health.
                <li>
                  <strong>Resource Consumption: </strong>
                </li>
                Manufacturing and operating vehicles require vast amounts of
                natural resources, from oil to metals and water. <br />
                <br />
                <br />
                <img
                  src="/images/enviroment.jpg"
                  alt="image"
                  className="w-full rounded-lg mt-2"
                />{" "}
                <br />
                <h1 className="font-bold mt-3">2. Driving Eco-Friendlyt</h1>
                <p>
                  You can take steps to reduce your environmental impact while
                  still enjoying the freedom of driving:
                </p>
                <br />
                <strong>1.1 Vehicle Maintenance </strong>
                <p>
                  A well-maintained vehicle runs more efficiently and produces
                  fewer pollutants. Perform regular maintenance, check tire
                  pressure, and change the oil as recommended by the
                  manufacturer.
                </p>{" "}
                <br />
                <strong>Airbags:</strong> If you have a front passenger seat
                with an airbag, make sure to deactivate it or switch it to the
                "off" position when transporting a rear-facing baby. Airbags can
                be dangerous for infants in case of deployment. <br />
              </p>
              <strong>1.2 Efficient Driving</strong>
              <li>
                <strong>Avoid Rapid Acceleration:</strong>
              </li>
              <p>Smooth and steady driving saves fuel and reduces emissions.</p>
              <br />
              <li>
                <strong>Reduce Speed:</strong>
              </li>
              <p>
                Driving at a moderate speed is not only safer but also consumes
                less fuel.
              </p>
              <br />
              <li>
                <strong>Turn off the Engine</strong>
              </li>
              <br />
              <p>
                If you'll be stopped for more than a minute, turn off the engine
                to save fuel and cut emissions.
              </p>{" "}
              <br />
              <strong>1.3 Carpooling and Public Transport</strong>
              <p>
                Carpooling with others and using public transportation when
                possible reduces the number of vehicles on the road, decreasing
                traffic congestion and CO2 emissions.
              </p>
              <br />
              <h1 className="font-bold mt-3">3. Green Vehicles</h1>
              Electric vehicles (EVs) and hybrids are cleaner options compared
              to internal combustion engine vehicles. Explore these alternatives
              if you want to minimize your environmental impact. <br />
              <h1 className="font-bold mt-3">4. Driver Responsibility</h1>
              Remember, as a driver, you have a responsibility to be a good
              planetary citizen. Properly dispose of waste, don't litter from
              your vehicle, and adhere to emissions regulations and speed
              limits. <br />
              <br />
              <img
                src="/images/drive.jpeg"
                alt="image"
                className="w-full rounded-lg mt-2"
              />{" "}
              <br />
              Every time you choose to drive more eco-consciously, you're
              contributing to environmental protection and building a
              sustainable future for generations to come. With responsibility
              and action, you can make a difference in caring for our beautiful
              planet while enjoying the freedom of the open road.
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

      {isopen3 && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-5 rounded flex flex-col gap-5 shadow-xl w-96">
            <div className="border-b-2 border-gray-300 p-2 mb-2 rounded-tl-lg rounded-tr-lg">
              <h2 className="text-xl font-semibold font-[Poppins]">
                Chapter 4: The Vehicle's Wheels
              </h2>
            </div>
            <div style={{ maxHeight: "400px", overflowY: "auto" }}>
              <strong>Introduction</strong>
              <p>
                {" "}
                The wheels of your car are much more than simple rubber rings.
                They are a fundamental part of your vehicle and play a crucial
                role in your safety and driving comfort. In this chapter, we
                will explore in detail everything you need to know about your
                vehicle's wheels.
              </p>
              <p className="text-gray-700  pt-3 leading-relaxed" />
              <strong>Importance of Wheels</strong>
              <br />
              <p>
                The wheels of your vehicle are the only point of contact between
                the car and the road. This means they are responsible for
                traction, steering, and braking capability. Keeping your wheels
                in good condition is essential to ensure safe and efficient
                driving.
              </p>
              <br />
              <strong>Components of Wheels</strong>
              <br />
              <p>
                Your vehicle's wheels consist of two main components: the rim
                and the tire.
              </p>
              <li>
                <strong>Rim:</strong>
              </li>
              The rim is the metallic part of the wheel that holds the tire. It
              comes in various sizes and designs and is designed to withstand
              tire pressure and provide stability to the vehicle.
              <li>
                <strong>Tire:</strong>
              </li>{" "}
              The tire is the rubber part that makes contact with the road. It
              comes in different types, each designed for specific conditions
              and uses. Tires influence traction, comfort, and fuel efficiency.
              <br />
              <br />
              <strong>Wheel Maintenance</strong> <br />
              <p>
                Proper wheel maintenance is crucial for ensuring safe driving
                and extending the life of your tires. Here are some key
                guidelines:
              </p>
              <strong>1. Tire Pressure: </strong>
              You should regularly check tire pressure and ensure they are
              inflated according to the manufacturer's specifications.
              Under-inflated tires can negatively impact traction and fuel
              efficiency. <br />
              <strong>2. Wheel Rotation: </strong> Regularly rotating your
              wheels helps wear the tires evenly and extends their lifespan.{" "}
              <br />
              <strong>3. Alignment:</strong>
              Proper wheel alignment ensures that your wheels are correctly
              aligned, improving handling and preventing uneven tire wear.{" "}
              <br />
              <strong>4. Visual Inspection: </strong> You should visually
              inspect your tires for cuts, uneven wear, or damage. If you find
              any issues, it's important to address them immediately. <br />
              <br />
              <h1 className="font-bold mt-3">
                5. The Importance of Tire Tread Depth
              </h1>
              <p>
                Tire tread depth is a critical aspect of road safety. The
                grooves and channels on your tires serve several vital
                functions:
              </p>
              <li>
                <ins>Traction:</ins>{" "}
              </li>{" "}
              The tread pattern provides grip, enabling your tires to maintain
              control on the road. <br />
              <li>
                <ins>Water Dispersion:</ins>
              </li>{" "}
              Treads help divert water away from the tire's surface, reducing
              the risk of hydroplaning on wet roads. <br />
              <li>
                <ins>Wear Resistance:</ins>
              </li>{" "}
              Proper tread depth increases the lifespan of your tires. <br />
              <h1 className="font-bold mt-3">
                6. Different Types of Tread Patterns
              </h1>
              <p>
                Tires come in various tread patterns, each designed for specific
                driving conditions. Understanding these patterns is essential
                for choosing the right tires for your needs.
              </p>
              <h3>
                {" "}
                <strong>1. Summer Tires:</strong>
              </h3>
              <li>Tread Depth: Less deep</li>
              <li>Ideal Use: Dry and warm conditions</li>
              <li>Performance: Excellent handling on dry roads</li>
              <h3>
                {" "}
                <strong>2. All-Season Tires:</strong>
              </h3>
              <li>Tread Depth: Moderate</li>
              <li>Ideal Use: Versatile, suitable for various conditions</li>
              <li>
                Performance: A balance between performance and versatility
              </li>
              <h3>
                {" "}
                <strong>3. Winter Tires:</strong>
              </h3>
              <li>Tread Depth: Deep and aggressive</li>
              <li>Ideal Use: Icy and snowy conditions</li>
              <li>Performance: Superior traction in cold weather</li>
              <h3>
                {" "}
                <strong>4. High-Performance Tires:</strong>
              </h3>
              <li>Tread Depth: Less deep</li>
              <li>Ideal Use: Dry roads, sporty driving</li>
              <li>Performance: Excellent dry road handling</li>
              <h3>
                {" "}
                <strong>Legal Minimum Tread Depth</strong>
              </h3>
              <img
                src="/images/wheel.jpeg"
                alt="image"
                className="w-full rounded-lg mt-2"
              />
            </div>

            <button
              className="bg-red-500 py-2 px-6 rounded-lg text-white font-bold"
              onClick={() => setIsopen3(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isopen4 && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-5 rounded flex flex-col gap-5 shadow-xl w-96">
            <div className="border-b-2 border-gray-300 p-2 mb-2 rounded-tl-lg rounded-tr-lg">
              <h2 className="text-xl font-semibold font-[Poppins]">
                Chapter 5: Understanding Traffic Lights and Your Vehicle
              </h2>
            </div>
            <div style={{ maxHeight: "400px", overflowY: "auto" }}>
              <strong>Introduction</strong>
              <p>
                {" "}
                In this chapter, we will explore the vital connection between
                traffic lights and your vehicle. Understanding how your vehicle
                interacts with traffic signals is essential for safe and
                efficient driving.
              </p>
              <br />
              <video controls className="w-full rounded-lg">
                <source src={videoSource4} type="video/mp4" />
              </video>
              <p className="text-gray-700  pt-3 leading-relaxed" />
              <strong>The Role of Traffic Lights</strong>
              <br />
              <p>
                Traffic lights are a fundamental part of our road
                infrastructure. They serve several critical functions:
              </p>{" "}
              <br />
              <strong>Components of Wheels</strong>
              <br />
              <li>
                <strong>Controlling Traffic: </strong>
              </li>
              Traffic lights regulate the flow of vehicles, pedestrians, and
              cyclists at intersections and crossings.
              <li>
                <strong>Enhancing Safety: </strong>
              </li>{" "}
              They reduce the risk of collisions and accidents by providing
              clear and consistent signals to all road users.
              <li>
                <strong>Managing Congestion: </strong>
              </li>{" "}
              Traffic lights help manage traffic flow, reduce congestion, and
              ensure a smooth driving experience.
              <br />
              <br />
              <strong>The Three Standard Traffic Light Colors</strong> <br />
              <p>
                Traffic lights use three primary colors to convey different
                messages to drivers:
              </p>{" "}
              <br />
              <strong>1. Red Light:</strong>
              <li>
                <i>Meaning:</i> Stop
              </li>
              <li>
                <i>Action:</i> When the light is red, come to a complete stop
                behind the stop line or before the crosswalk. You must remain
                stationary until the light turns green.
              </li>{" "}
              <br />
              <strong>2. Green Light:</strong>
              <li>
                <i>Meaning:</i> Go
              </li>
              <li>
                <i>Action:</i> When the light is green, you have the right to
                proceed through the intersection or along the road. However,
                always yield to pedestrians and other vehicles that may still be
                within the intersection.
              </li>
              <br />
              <strong>3. Yellow Light:</strong>
              <li>
                <i>Meaning:</i> Prepare to Stop
              </li>
              <li>
                <i>Action:</i> When the light is yellow, it's a signal to
                prepare to stop. If it is safe to do so, you can proceed through
                the intersection, but be ready to stop. Do not speed up to make
                it through a yellow light.
              </li>
              <br />
              <img
                src="/images/Trafficlights.webp"
                alt="image"
                className="w-full rounded-lg mt-2"
              />
              <h1 className="font-bold mt-3">
                Special Traffic Light Situations
              </h1>
              <p>
                In addition to the standard red, green, and yellow lights,
                traffic lights may also include other signals or situations:
              </p>
              <li>
                <ins>Flashing Red Light: </ins>{" "}
              </li>{" "}
              Treat a flashing red light like a stop sign. Come to a complete
              stop and yield the right of way before proceeding. <br />
              <li>
                <ins>Flashing Yellow Light: </ins>
              </li>{" "}
              A flashing yellow light is a caution signal. Slow down and proceed
              with caution. <br />
              <li>
                <ins>Left Turn Arrow:</ins>
              </li>{" "}
              Some intersections have a left turn arrow. This arrow allows left
              turns while oncoming traffic has a red light. Make the left turn
              only when the arrow is green. <br />
              <h1 className="font-bold mt-3">
                Vehicle Interaction with Traffic Lights
              </h1>
              <p>
                Your vehicle's behavior at traffic lights is crucial for safety
                and efficiency. Here's how your vehicle should interact with
                traffic lights:
              </p>{" "}
              <br />
              <li>Stopping at Red Lights:</li> Always come to a complete stop at
              a red light. Do not run the red light, as this poses a significant
              risk to yourself and others. <br />
              <li>Proceeding on Green:</li> When the light turns green, proceed
              with caution, watching for pedestrians and other vehicles. Do not
              accelerate excessively.
              <br />
              <li>Yielding on Yellow: </li> When the light turns yellow, prepare
              to stop. If it is safe, you can proceed through the intersection,
              but do not rush to beat the light. <br />
              <li>Turning Left on Green:</li> If you intend to make a left turn
              on a green light, yield to oncoming traffic and pedestrians. Make
              the turn when it's safe. <br />
              <h1 className="font-bold mt-3">Advanced Traffic Situations</h1>
              <p>
                Some intersections have advanced traffic signals, such as green
                arrows for specific turns or dedicated lanes. It's essential to
                understand these signals and follow them correctly.
              </p>{" "}
              <br />
              <p>
                Traffic lights are a critical aspect of road safety and
                efficient traffic management. Understanding their meanings and
                your vehicle's interaction with them is fundamental for
                responsible and safe driving. Always obey traffic signals and
                exercise caution at intersections to ensure a smooth and secure
                driving experience.
              </p>
            </div>

            <button
              className="bg-red-500 py-2 px-6 rounded-lg text-white font-bold"
              onClick={() => setIsopen4(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isopen5 && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-5 rounded flex flex-col gap-5 shadow-xl w-96">
            <div className="border-b-2 border-gray-300 p-2 mb-2 rounded-tl-lg rounded-tr-lg">
              <h2 className="text-xl font-semibold font-[Poppins]">
                Chapter 6: Understanding Traffic Accidents
              </h2>
            </div>
            <div style={{ maxHeight: "400px", overflowY: "auto" }}>
              <strong>Introduction</strong>
              <p>
                {" "}
                In this chapter, we will explore the harsh reality of traffic
                accidents and how your vehicle can be involved in them. Road
                safety is a priority, and understanding how to avoid accidents
                is essential for all drivers.
              </p>
              <br />
              <img
                src="/images/accident.jpeg"
                alt="image"
                className="w-full rounded-lg mt-2"
              />
              <p className="text-gray-700  pt-3 leading-relaxed" />
              <strong>Traffic Accident Statistics</strong>
              <br />
              <p>
                Traffic accidents are one of the leading causes of injuries and
                deaths worldwide. It's important to grasp the magnitude of this
                issue:
              </p>{" "}
              <br />
              <li>
                <strong>Millions of Accidents: </strong>
              </li>
              Every year, millions of traffic accidents occur worldwide.
              <li>
                <strong>Serious Injuries: </strong>
              </li>{" "}
              Many accidents result in serious or permanent injuries to drivers
              and passengers.
              <li>
                <strong>Loss of Life: </strong>
              </li>{" "}
              Traffic accidents lead to the loss of hundreds of thousands of
              lives each year.
              <br />
              <h1 className="font-bold mt-3">
                Common Causes of Traffic Accidents
              </h1>
              <p>
                Traffic accidents can be caused by a variety of factors,
                including:
              </p>{" "}
              <br />
              <li>Driving Under the Influence: </li> Alcohol and drugs can
              impair your ability to drive safely.
              <li>Speeding: </li> Driving at an unsafe speed is a common cause
              of accidents. <br />
              <li>Distracted Driving:</li> Using mobile phones or other
              distractions while driving can be deadly.
              <li>Disregarding Traffic Signs:</li> Not obeying stop signs, yield
              signs, and other traffic signals can lead to collisions.
              <br />
              <li>Weather Conditions:</li> Rain, snow, and fog can make roads
              hazardous.
              <h1 className="font-bold mt-3">
                The Importance of Vehicle Maintenance
              </h1>
              <p>
                Proper vehicle maintenance is crucial to avoid accidents. You
                should pay attention to the following:
              </p>
              <li>
                <ins className="font-bold">Brakes:</ins>{" "}
              </li>{" "}
              Well-maintained brakes are critical for stopping your vehicle
              safely. <br />
              <li>
                <ins className="font-bold">Tires:</ins>{" "}
              </li>{" "}
              Worn-out tires can cause your vehicle to lose traction and become
              difficult to control. <br />
              <li>
                <ins className="font-bold">Lights: </ins>{" "}
              </li>{" "}
              Properly functioning headlights and taillights are essential for
              others to see you. <br />
              <li>
                <ins className="font-bold">Suspension: </ins>{" "}
              </li>{" "}
              A well-maintained suspension helps you maintain control of your
              vehicle.
              <h1 className="font-bold mt-3">Avoiding Traffic Accidents</h1>
              <p>Here are some key ways to avoid traffic accidents:</p> <br />
              <strong> 1️⃣ Drive Sober:</strong> Never drive under the influence
              of alcohol or drugs. <br />
              <strong> 2️⃣ Maintain a Safe Speed:</strong>Adhere to speed limits
              and reduce speed in adverse conditions.
              <br />
              <strong> 3️⃣ Eliminate Distractions:</strong> Keep your focus on
              the road and avoid using your phone while driving. <br />
              <strong> 4️⃣ Obey Traffic Signs:</strong> Respect all traffic signs
              and traffic rules. <br />
              <strong> 5️⃣ Maintain Your Vehicle:</strong> Perform regular
              maintenance and ensure your vehicle is in good condition. <br />
              <h1 className="font-bold mt-3">
                What to Do in Case of an Accident
              </h1>
              <p>
                Despite your best efforts, accidents can happen. It's important
                to know what to do in case of an accident:
              </p>
              <strong>Ensure Safety:</strong> Ensure everyone is safe and off
              the road. <br />
              <strong>Call the Police:</strong> If necessary, call the police to
              report the accident. <br />
              <strong>Exchange Information:</strong> Exchange information with
              other involved drivers, including names, phone numbers, and
              insurance details. <br />
              <strong>Take Photos:</strong> If it's safe to do so, take photos
              of the accident scene. <br />
              <strong>Report the Accident:</strong> Inform your insurance
              company about the accident and follow their instructions.
              <br />
              <br />
              <p>
                Road safety is a shared responsibility. Understanding common
                causes of traffic accidents and taking steps to avoid them is
                essential for your safety and the safety of others. Proper
                vehicle maintenance and knowledge of how to respond in case of
                an accident are crucial steps on your journey to becoming a safe
                and responsible driver.
              </p>
            </div>

            <button
              className="bg-red-500 py-2 px-6 rounded-lg text-white font-bold"
              onClick={() => setIsopen5(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isopen6 && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-5 rounded flex flex-col gap-5 shadow-xl w-96">
            <div className="border-b-2 border-gray-300 p-2 mb-2 rounded-tl-lg rounded-tr-lg">
              <h2 className="text-xl font-semibold font-[Poppins]">
                Chapter 7: Driving in Dark and Slippery Conditions in Snow and
                Rain
              </h2>
            </div>

            <div style={{ maxHeight: "400px", overflowY: "auto" }}>
              <video controls className="w-full rounded-lg">
                <source src={videoSource5} type="video/mp4" />
              </video>{" "}
              <br />
              <strong>Introduction</strong>
              <p className="pt-4">
                In this chapter, we will address one of the most significant
                challenges a driver can face: driving in dark conditions while
                dealing with slippery surfaces due to rain or snow. These
                conditions can be hazardous and require heightened attention and
                caution. Learning to drive in low-visibility situations and on
                slippery roads is essential for your safety and that of others.
              </p>
              <h1 className="font-bold mt-3">
                Dark Conditions in Snow and Rain
              </h1>
              <p>
                The combination of darkness with snow or rain can further
                complicate driving. Here are some key aspects to consider:
              </p>
              <p className="text-gray-700  pt-3 leading-relaxed">
                <strong>1. Limited Visibility</strong>
                <p>
                  Snow and rain significantly reduce visibility, making it
                  difficult to detect obstacles and other vehicles on the road.
                  The absence of natural light during the night exacerbates this
                  situation.
                </p>{" "}
                <br />
                <strong>2. Slipping</strong>
                <p>
                  These seats are designed for newborns until they reach a
                  certain weight or height. They must be installed in a
                  rear-facing position.
                </p>{" "}
                <br />
                <strong>3. Increased Braking Distance</strong>
                <br />
                <p>
                  In wet or snowy conditions, the distance a vehicle needs to
                  come to a stop is much longer than in dry and clear
                  conditions. This is due to the lack of traction and the need
                  to overcome the additional resistance of the slippery surface.
                  Reducing speed is crucial to compensate for this longer
                  braking distance.
                </p>
                <h1 className="font-bold mt-3">
                  Tips for Driving in the Dark with Rain or Snow
                </h1>
                <p>
                  Here are some key tips to stay safe while driving in these
                  challenging conditions:
                </p>
                <br />
                <strong> 1️⃣ Vehicle Lights</strong>
                <p>
                  Use your vehicle lights in their proper setting. In darkness,
                  low beams are essential for good visibility. Ensure your
                  lights are clean and in good working condition.
                </p>{" "}
                <br />
                <strong> 2️⃣ Windshield Wipers and Defrosters</strong>
                <p>
                  Ensure your windshield wipers are in good working order and
                  use the defroster if necessary to maintain visibility.
                  Accumulation of snow or rain on the windshield can worsen
                  visibility.
                </p>{" "}
                <br />
                <strong> 3️⃣ Snow Tires</strong>
                <p>
                  If you live in an area with snowy winters, consider using snow
                  tires. These tires are designed to provide better traction on
                  snow and ice, which can be crucial for maintaining control of
                  your vehicle.
                </p>{" "}
                <br />
                <strong> 4️⃣ Gentle Braking</strong>
                <p>
                  When you need to brake, do so early and gently to avoid wheel
                  lock on slippery surfaces. Wheel lock can result in loss of
                  control.
                </p>{" "}
                <br />
                <strong> 5️⃣ Reduce Speed</strong>
                <p>
                  Significantly reduce your speed in snowy or rainy conditions.
                  Driving at a safe speed will give you more reaction time and
                  reduce the likelihood of accidents.
                </p>{" "}
                <br />
                <strong> 6️⃣ Maintain Following Distance</strong>
                <p>
                  Keep a greater distance between your vehicle and the one in
                  front of you. This will give you more space to stop if needed.
                  In slippery conditions, reaction times can be longer.
                </p>{" "}
                <br />
                <strong> 7️⃣ Carry an Emergency Kit</strong>
                <p>
                  Carry an emergency kit that includes items like snow chains, a
                  shovel, and blankets in case you get stuck in the snow. These
                  items can be crucial in emergency situations.
                </p>{" "}
                <br />
              </p>
            </div>

            <button
              className="bg-red-500 py-2 px-6 rounded-lg text-white font-bold"
              onClick={() => setIsopen6(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isopen7 && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-5 rounded flex flex-col gap-5 shadow-xl w-96">
            <div className="border-b-2 border-gray-300 p-2 mb-2 rounded-tl-lg rounded-tr-lg">
              <h2 className="text-xl font-semibold font-[Poppins]">
                Chapter 8: Driving in city
              </h2>
            </div>

            <div style={{ maxHeight: "400px", overflowY: "auto" }}>
              <video controls className="w-full rounded-lg">
                <source src={videoSource6} type="video/mp4" />
              </video>{" "}
              <br />
              <strong>Introduction</strong>
              <p className="pt-4">
                City driving is an integral part of the driving experience.
                Crowded streets, traffic lights, pedestrians, and intersections
                require a special focus and specific driving skills. In this
                chapter, we will explore key aspects of driving in urban
                environments so you can safely and efficiently navigate city
                streets.
              </p>
              <h1 className="font-bold mt-3">Rules and Regulations</h1>
              <p>
                When driving in the city, it's important to familiarize yourself
                with the specific rules and regulations that apply in urban
                settings. Some important considerations include:
              </p>
              <p className="text-gray-700  pt-3 leading-relaxed">
                <strong>1. Speed Limits:</strong>
                <p>
                  Speed limits in urban areas are often lower than on highways.
                  Pay attention to speed limit signs and adjust your speed to
                  traffic conditions.
                </p>{" "}
                <br />
                <strong>2. Traffic Lights: </strong>
                <p>
                  Respect traffic lights and traffic signs. Stop at red lights
                  and prepare to proceed when the light turns green.
                </p>{" "}
                <br />
                <strong>3. Pedestrian Crosswalks: </strong>
                <br />
                <p>
                  Pedestrian crosswalks are areas where pedestrians have the
                  right of way. You must yield to pedestrians crossing the
                  street at these locations.
                </p>
                <strong>4. Parking: </strong>
                <br />
                <p>
                  Parking in the city can be a challenge. Pay attention to
                  parking regulations, such as parking meters and restricted
                  parking zones.
                </p>
                <strong>Traffic:</strong>
                <p>
                  City traffic can be intense. Stay calm and maintain a safe
                  following distance. Avoid distractions, such as mobile phone
                  use.
                </p>
                <h1 className="font-bold mt-3">Intersections</h1>
                <p>
                  Intersections are critical points in city driving. Here are
                  some guidelines for safely navigating them:
                </p>
                <br />
                <strong> 1️⃣ Signal-Controlled Intersections: </strong>
                <p>
                  Obey traffic lights. Stop at red lights and proceed on green.
                  Be cautious of vehicles making left turns in front of you.
                </p>{" "}
                <br />
                <strong> 2️⃣ Unsignalized Intersections:</strong>
                <p>
                  At intersections without traffic lights, yield the right of
                  way to the vehicle that arrived first or to the one on your
                  right if you arrived simultaneously.
                </p>{" "}
                <br />
                <strong> 3️⃣ Left Turns:</strong>
                <p>
                  When making a left turn at an intersection, yield to oncoming
                  vehicles.
                </p>{" "}
                <br />
                <strong> 4️⃣ Pedestrians and Cyclists</strong>
                <p>
                  Yield to pedestrians at pedestrian crossings. Do not overtake
                  them in these areas.
                </p>{" "}
                <br />
                <strong>Cyclists: </strong>
                <p>
                  Show respect to cyclists and maintain a safe distance when
                  passing them. Some cities have dedicated bike lanes.
                </p>{" "}
                <br />
                <h1 className="font-bold mt-3">Parking</h1>
                <p>
                  Parking in the city can be challenging due to limited space.
                  Here are some recommendations:
                </p>{" "}
                <br />
                <strong>Parking Meters:</strong>
                <p>
                  When parking in an area with parking meters, make sure to pay
                  and adhere to the allocated time.
                </p>{" "}
                <br />
                <strong>Restricted Parking Zones: </strong>
                <p>
                  Pay attention to signs indicating restricted parking zones.
                  Parking in these areas may result in fines.
                </p>{" "}
                <br />
                <strong>Angle Parking:</strong>
                <p>
                  When parking in an angle parking space, ensure you align your
                  vehicle correctly. Do not block traffic or encroach on other
                  spaces.
                </p>{" "}
                <br />
                <br />
                <p>
                  City driving requires attention, patience, and respect for
                  traffic regulations. Keep the safety of pedestrians and
                  cyclists in mind and follow the specific traffic rules for
                  urban areas. With practice and consideration, you can safely
                  and efficiently maneuver through urban environments and enjoy
                  your city driving experience.
                </p>
              </p>
            </div>

            <button
              className="bg-red-500 py-2 px-6 rounded-lg text-white font-bold"
              onClick={() => setIsopen7(false)}
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
