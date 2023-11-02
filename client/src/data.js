import Car from "./assets/car.png";
import Babyonboard from "./assets/babyonboard.png";
import Wheel from "./assets/wheel.png";
import Light from "./assets/light.png";
import Environment from "./assets/environment.png";
import Trafficlight from "./assets/trafficlight.png";
import Accidents from "./assets/accidents.png";
import Dark from "./assets/dark.png";
import City from "./assets/city.png";

export const imgs = [
  Car,
  Babyonboard,
  Wheel,
  Light,
  Environment,
  Trafficlight,
  Accidents,
  Dark,
  City,
];

export const categories = {
  environment: "Environment",
  trafficlight: "Trafficlight",
  babyonboard: "Babyonboard",
  car: "Car",
  wheel: "Wheel",
  light: "Light",
  accidents: "Accidents",
  dark: "Dark",
  city: "City",
};

const {
  environment,
  trafficlight,
  babyonboard,
  car,
  wheel,
  light,
  accidents,
  dark,
  city,
} = categories;

export const questions = [
  {
    id: 1,
    difficulty: "Easy",
    question:
      "What gas, released by cars, contributes to the greenhouse effect and climate change?",
    category: environment,
    correct_answer: "Carbon dioxide (CO2)",
    incorrect_answers: [
      "Methane (CH4",
      "Nitrous oxide (N2O)",
      "Hydrofluorocarbons (HFCs)",
    ],
  },
  {
    id: 2,
    difficulty: "Easy",
    question:
      'What does an octagonal traffic sign with white letters that says "STOP" mean?        ',
    category: trafficlight,
    correct_answer:
      "You must come to a complete stop and yield the right of way to other vehicles",
    incorrect_answers: [
      "You should stop only if there is oncoming traffic from the left",
      "You can continue without stopping",
      "You should slow down and proceed with caution",
    ],
  },
  {
    id: 3,
    difficulty: "Easy",
    question:
      'hat is the primary purpose of a "Baby on Board" sign displayed in a car?',
    category: babyonboard,
    correct_answer: "To indicate the presence of a baby in the vehicle",
    incorrect_answers: [
      "To announce the babys name",
      "To request assistance with baby care",
      "To discourage other drivers from honking",
    ],
  },
  {
    id: 4,
    difficulty: "Medium",
    question: "What is the main function of an alternator in a car?",
    category: car,
    correct_answer: "Generate electrical power",
    incorrect_answers: [
      " Refuel the vehicle",
      "Cool the engine",
      "Regulate temperature",
    ],
  },
  {
    id: 5,
    difficulty: "Difficult",
    question: "What is the primary purpose of the tire tread on car wheels?",
    category: wheel,
    correct_answer: "To provide traction and grip on the road",
    incorrect_answers: [
      "To make the car look stylish",
      "To improve fuel efficiency",
      "To reduce the weight of the car",
    ],
  },

  {
    id: 7,
    difficulty: "Easy",
    question:
      "What is the main function of low beam lights (low beams) on a car?",
    category: light,
    correct_answer:
      " Illuminate the road immediately in front of the vehicle without dazzling other drivers.",
    incorrect_answers: [
      " Make the car more visible from behind",
      "Enhance vehicle visibility during the day.",
      "Illuminate the road at long distance",
    ],
  },
  {
    id: 8,
    difficulty: "Medium",
    question: "When should low beam lights (low beams) be used during the day?",
    category: light,
    correct_answer: "Always, to increase visibility.",
    incorrect_answers: [
      "It is not necessary to use them during the day",
      "Only on cloudy or rainy days",
      "Never, they are only used at night",
    ],
  },
  {
    id: 9,
    difficulty: "Difficult",
    question:
      "What type of traffic sign is a red equilateral triangle with a white border?",
    category: trafficlight,
    correct_answer: "Warning sign",
    incorrect_answers: ["Yield sign", "Speed limit sign", "Stop sign"],
  },
  {
    id: 10,
    difficulty: "Medium",
    question: 'What does the acronym "RPM" mean in a vehicle',
    category: car,
    correct_answer: "Revolutions Per Minute",
    incorrect_answers: [
      "Rotations Per Mil",
      "Radios Per Meter",
      " Roadside Parking Meter",
    ],
  },
  {
    id: 11,
    difficulty: "Easy",
    question: "What is the most important safety device for a child in a car?",
    category: babyonboard,
    correct_answer: "Booster seats",
    incorrect_answers: ["Airbags", "Seat belts", "Seat covers"],
  },
  {
    id: 12,
    difficulty: "Medium",
    question: "What is the function of an automatic transmission in a car?",
    category: car,
    correct_answer: "Automatically shift gears",
    incorrect_answers: [
      "Shift gears manually",
      "Regulate engine temperature",
      "Control the vehicles direction",
    ],
  },
  {
    id: 13,
    difficulty: "Medium",
    question:
      "At what age or size should a child transition from a baby car seat to a booster seat?",
    category: babyonboard,
    correct_answer:
      "When they outgrow the weight or height limit of the baby seat",
    incorrect_answers: [
      "At 2 years old",
      "When they weigh over 20 pounds",
      "When they reach a height of 4 feet 9 inches",
    ],
  },
  {
    id: 14,
    difficulty: "Easy",
    question: "What is the essential liquid for cooling a cars engine?",
    category: car,
    correct_answer: "Coolant or antifreeze",
    incorrect_answers: [" Engine oil", "Distilled water", "Brake fluid"],
  },
  {
    id: 15,
    difficulty: "Easy",
    question:
      "What does a circular traffic sign with a diagonal line across a bicycle mean?",
    category: trafficlight,
    correct_answer: "No bicycles are allowed",
    incorrect_answers: [
      "You should accelerate when passing a bicycle",
      "Cyclists have the right of wa",
      "Cyclists should turn around",
    ],
  },
  {
    id: 16,
    difficulty: "Medium",
    question: "What is the function of ABS brakes?",
    category: car,
    correct_answer: "Prevent wheel lock during braking",
    incorrect_answers: [
      " Improve engine efficiency",
      "Prevent brake wear",
      "Regulate maximum speed",
    ],
  },
  {
    id: 17,
    difficulty: "Medium",
    question: "What is the purpose of high beam lights (high beams) in a car?",
    category: light,
    correct_answer:
      "Illuminate the road at long distances for better visibility",
    incorrect_answers: [
      "They are only used to signal other drivers",
      "Provide a bright light for reading maps",
      "Illuminate the road at short distances",
    ],
  },
  {
    id: 18,
    difficulty: "Medium",
    question:
      "What is the term for the metal ring that holds the tire onto the wheel?",
    category: wheel,
    correct_answer: "Rim",
    incorrect_answers: ["Hubcap", "Spoke", "Lug nut"],
  },
  {
    id: 19,
    difficulty: "Easy",
    question: "What is the recommended following distance on a highway?",
    category: car,
    correct_answer: "2 second",
    incorrect_answers: ["1 second", "3 second", "5 second"],
  },
  {
    id: 20,
    difficulty: "Easy",
    question:
      "What does a yellow triangular traffic sign with a symbol of a truck tilting to the right mean?",
    category: trafficlight,
    correct_answer: "It warns of a steep right downhill slope",
    incorrect_answers: [
      "It warns of a flood-prone area",
      "It warns of an upcoming construction are",
      "It indicates a loading and unloading zone",
    ],
  },
  {
    id: 21,
    difficulty: "Easy",
    question: "What should drivers do when approaching a stop sign?",
    category: car,
    correct_answer: "Slow down and proceed with caution",
    incorrect_answers: [
      "Speed up and proceed quickly",
      "Honk the horn to alert others",
      " Ignore the sign if no other cars are present",
    ],
  },

  {
    id: 23,
    difficulty: "Medium",
    question:
      "What is one of the main negative environmental impacts of gasoline or diesel-powered cars?",
    category: environment,
    correct_answer: "Greenhouse gas emissions.",
    incorrect_answers: ["1939", "1941", "1943"],
  },
  {
    id: 24,
    difficulty: "Easy",
    question: 'What is the "2-second rule" when following another vehicle?',
    category: car,
    correct_answer:
      "You should maintain at least a 2-second following distance to ensure safe stopping.",
    incorrect_answers: [
      "You should maintain a 2-second following distance at all times",
      " You should pass the vehicle within 2 seconds.",
      "You should honk the horn after 2 seconds",
    ],
  },
  {
    id: 25,
    difficulty: "Medium",
    question:
      "What type of traffic sign is a blue background with white letters that says BUS STOP?",
    category: trafficlight,
    correct_answer: "Information sign",
    incorrect_answers: ["Warning sign", "Yield signa", "Regulatory sign"],
  },
  {
    id: 26,
    difficulty: "Difficult",
    question: "When should high beam lights (high beams) be used in a car?",
    category: light,
    correct_answer:
      "When another vehicle is approaching from the opposite direction.",
    incorrect_answers: [
      "Anytime for increased visibility",
      "Only on highways",
      "Whenever you are on a deserted road",
    ],
  },
  {
    id: 27,
    difficulty: "Medium",
    question: "What does the check engine light on the dashboard indicate?",
    category: light,
    correct_answer: "That there is a problem with the cars engine",
    incorrect_answers: [
      "That the fuel is running out",
      "That tire pressure is low",
      "That the air conditioning is on",
    ],
  },
  {
    id: 28,
    difficulty: "Easy",
    question: 'What does the term "blind spot" in a car refer to?',
    category: car,
    correct_answer:
      "An area around the vehicle that is not visible in the mirrors",
    incorrect_answers: [
      "A malfunctioning light on the dashboard",
      "An area of the windshield that is hard to see through",
      "A spot on the road that should be avoided",
    ],
  },
  {
    id: 29,
    difficulty: "Medium",
    question: "Where should a baby car seat be placed in a car?",
    category: babyonboard,
    correct_answer: "In the front seat, if its rear-facing",
    incorrect_answers: [
      " In the front seat",
      " In any rear seat",
      " In the rear seat, facing forward",
    ],
  },
  {
    id: 30,
    difficulty: "Easy",
    question:
      "What type of vehicle generally produces zero direct emissions from exhaust gases?",
    category: environment,
    correct_answer: "Electric cars",
    incorrect_answers: ["Diesel truck", "Sports cars", "Hybrid vehicles"],
  },

  {
    id: 39,
    difficulty: "Difficult",
    question: 'What is meant by "carbon footprint" in the context of cars?',
    category: environment,
    correct_answer:
      "The total amount of greenhouse gases released by a car over its lifetime",
    incorrect_answers: [
      "Brake wear",
      "The exhaust trail left by vehicles on the road",
      "The tire marks on the asphalt",
    ],
  },
  {
    id: 40,
    difficulty: "Easy",
    question:
      "What is an effective way to reduce the carbon footprint of a gasoline or diesel-powered car?",
    category: environment,
    correct_answer: "Using public transportation instead of driving alone",
    incorrect_answers: [
      "Accelerating aggressively at every traffic light",
      "Keeping the engine idling for extended periods",
      "Driving at high speeds",
    ],
  },
  {
    id: 41,
    difficulty: "Medium",
    question: 'What is meant by the "fuel efficiency" of a car?',
    category: environment,
    correct_answer:
      "The amount of fuel a car consumes to cover a specific distance",
    incorrect_answers: [
      "The amount of oil in the engine",
      "The engines power",
      "The maximum speed it can reach",
    ],
  },
  {
    id: 42,
    difficulty: "Difficult",
    question: 'What is "carpooling," and what is its environmental benefit?',
    category: environment,
    correct_answer:
      "Sharing a car with others to reduce traffic congestion and carbon emissions",
    incorrect_answers: [
      "Using large cars instead of small cars",
      " Sharing a car with friends to save money on fuel",
      "Traveling in a car alone",
    ],
  },
  {
    id: 43,
    difficulty: "Easy",
    question: 'What is a "low emission zone" in a city, and what is its goal?',
    category: environment,
    correct_answer:
      "A zone where entry of highly polluting vehicles is restricted to improve air quality",
    incorrect_answers: [
      "A zone that promotes the use of off-road vehicles",
      "A zone where all vehicles are prohibited from entering",
      "A zone where highly polluting vehicles are allowed to circulat",
    ],
  },
  {
    id: 44,
    difficulty: "Medium",
    question: 'What is meant by "automobile recycling" or "vehicle scrappage"?',
    category: environment,
    correct_answer:
      "The reuse of parts from old cars in the manufacturing of new vehicles",
    incorrect_answers: [
      "The practice of driving cars until they no longer function",
      "The sale of used cars at auctions",
      "The practice of parking unused cars on the street",
    ],
  },
  {
    id: 45,
    difficulty: "Difficult",
    question:
      "How can drivers reduce their carbon footprint when driving traditional gasoline or diesel cars?",
    category: environment,
    correct_answer: "By carpooling with friends",
    incorrect_answers: [
      "By idling the engine while parked",
      "By accelerating rapidly to reach higher speeds",
      "By avoiding car maintenance",
    ],
  },
  {
    id: 46,
    difficulty: "Easy",
    question: "What is the purpose of emission standards for vehicles?",
    category: environment,
    correct_answer:
      "To ensure that vehicles emit minimal pollutants into the atmosphere",
    incorrect_answers: [
      "TTo encourage the use of larger cars",
      "To promote off-road vehicle use",
      "To require all vehicles to use diesel fuel",
    ],
  },
  {
    id: 47,
    difficulty: "Medium",
    question:
      "How does vehicle maintenance contribute to environmental sustainability?",
    category: environment,
    correct_answer:
      " Proper maintenance reduces emissions and prolongs the life of the vehicle",
    incorrect_answers: [
      "It doesnt have any impact on the environment",
      "Vehicle maintenance increases pollution levels",
      "Regular maintenance has no effect on fuel efficiency",
    ],
  },
  {
    id: 48,
    difficulty: "Easy",
    question:
      "What is the purpose of a circular traffic sign with a red border and a white number inside it?",
    category: trafficlight,
    correct_answer:
      "It indicates the distance in miles or kilometers to a specific destination",
    incorrect_answers: [
      " It warns of an upcoming emergency stop",
      " It shows the distance to the next gas station",
      " It indicates the distance to the next restaurant",
    ],
  },
  {
    id: 49,
    difficulty: "Medium",
    question:
      'What does a pentagonal traffic sign with a red border and the word "SCHOOL" written on it indicate?',
    category: trafficlight,
    correct_answer: "A nearby school zone",
    incorrect_answers: [
      "The location of a school bus stop",
      "A daycare center ahead",
      " A shopping mall nearby",
    ],
  },
  {
    id: 50,
    difficulty: "Difficult",
    question:
      'What is the meaning of a circular traffic sign with a red border and a white symbol of a hand held up in the "stop" position?',
    category: trafficlight,
    correct_answer: "Stop and yield to oncoming traffic",
    incorrect_answers: [
      " Prepare to make a U-turn",
      "Proceed without stopping",
      "Slow down and proceed cautiously",
    ],
  },
  {
    id: 51,
    difficulty: "Easy",
    question:
      "What does a rectangular traffic sign with a black arrow pointing downward on a yellow background represent?",
    category: trafficlight,
    correct_answer: "Downward slope ahead",
    incorrect_answers: [
      " Speed limit reduced",
      " Downhill traffic allowed",
      "One-way street with traffic flowing down",
    ],
  },
  {
    id: 52,
    difficulty: "Medium",
    question:
      "What does a yellow diamond-shaped traffic sign with a symbol of a person walking indicate?",
    category: trafficlight,
    correct_answer: "Pedestrian crossing ahead",
    incorrect_answers: [
      "Walking path for dogs",
      "Pedestrian crossing ahead",
      "Playground ahead",
    ],
  },
  {
    id: 53,
    difficulty: "Difficult",
    question:
      "What is the purpose of a rectangular traffic sign with a white arrow on a green background that points to the right",
    category: trafficlight,
    correct_answer: "Indicates a right turn ahead",
    incorrect_answers: [
      "Marks an emergency evacuation route",
      "Shows a parking area to the right",
      " Indicates a one-way street to the right",
    ],
  },
  {
    id: 54,
    difficulty: "Easy",
    question:
      "What does a circular traffic sign with a red border and a white horizontal line through the middle represent?",
    category: trafficlight,
    correct_answer: "No overtaking allowed",
    incorrect_answers: [
      "No parking in this area",
      " No U-turn allowed",
      "No entry for vehicless",
    ],
  },
  {
    id: 55,
    difficulty: "Difficult",
    question: "What does the ABS warning light on the dashboard indicate?",
    category: light,
    correct_answer: " That the anti-lock brake system (ABS) is functioning",
    incorrect_answers: [
      ") That the engine oil is low",
      "That high beams should be turned on",
      " That the brake system is disabled",
    ],
  },
  {
    id: 56,
    difficulty: "Easy",
    question:
      "What is the function of the low oil pressure warning light on the dashboard?",
    category: light,
    correct_answer: "Indicates that the engine oil is low",
    incorrect_answers: [
      "Signals that the radio is on",
      "Suggests that you should reduce speed",
      "Points out problems with the steering system",
    ],
  },
  {
    id: 57,
    difficulty: "Medium",
    question: "What does the airbag warning light on the dashboard indicate?",
    category: light,
    correct_answer: "That the airbags are disabled",
    incorrect_answers: [
      "That the radio is on",
      "That fuel is running out",
      "That the tires are deflated",
    ],
  },
  {
    id: 58,
    difficulty: "Medium",
    question:
      "What is the function of the seat belt warning light on the dashboard?",
    category: light,
    correct_answer: " Warns that the drivers seat belt is unbuckled",
    incorrect_answers: [
      "Points out issues with the tires",
      "Signals problems with the brakes",
      "Indicates that high beams are on",
    ],
  },
  {
    id: 59,
    difficulty: "Difficult",
    question:
      "What does the engine temperature warning light on the dashboard indicate?",
    category: light,
    correct_answer: "That the engine is overheating",
    incorrect_answers: [
      "That the fuel is running out",
      "That the engine is at an optimal temperature",
      "That the air conditioning is on",
    ],
  },
  {
    id: 60,
    difficulty: "Difficult",
    question:
      'What does the "ABS" light on the dashboard indicate when it briefly illuminates during startup?',
    category: light,
    correct_answer: "That the ABS system is active",
    incorrect_answers: [
      "That the headlights are on",
      "That the engine is overheating",
      "That the car is low on fuel",
    ],
  },
  {
    id: 61,
    difficulty: "Medium",
    question:
      'What does the "ESP" or "ESC" warning light on the dashboard indicate?',
    category: light,
    correct_answer: "That the electronic stability control system is active",
    incorrect_answers: [
      "That the headlights are on",
      "That the cruise control is engaged",
      "That the car is in sport mode",
    ],
  },
  {
    id: 62,
    difficulty: "Easy",
    question:
      "When is it appropriate to use a booster cushion instead of a booster seat?",
    category: babyonboard,
    correct_answer:
      "When the child can fasten the cars seat belt without assistance",
    incorrect_answers: [
      "When the child is over 5 years old",
      "When the child can touch the floor with their feet while seated in the car",
      "When the child weighs over 80 pounds",
    ],
  },
  {
    id: 63,
    difficulty: "Easy",
    question:
      "Why is it important to ensure that seat belts are properly fastened in a child safety seat?",
    category: babyonboard,
    correct_answer:
      "To prevent the child from escaping the seat during the trip",
    incorrect_answers: [
      "To provide a comfortable place for the child to sleep",
      "To make it easier to install and uninstall the safety seat",
      "To maintain a suitable temperature inside the car",
    ],
  },
  {
    id: 64,
    difficulty: "Medium",
    question:
      "What should be done if a child under 13 must ride in the front seat of a car with front airbags?",
    category: babyonboard,
    correct_answer: "Deactivate the airbag or maintain a safe distance from it",
    incorrect_answers: [
      " Activate the airbags to protect the child",
      "Place a blanket over the airbag",
      "No special precautions are necessary",
    ],
  },
  {
    id: 65,
    difficulty: "Medium",
    question: "What is the purpose of the LATCH system in a child safety seat?",
    category: babyonboard,
    correct_answer:
      "An anchoring and securing system that facilitates the installation of the child seat in the car",
    incorrect_answers: [
      "A communication system with parents from the car",
      "A device for warming baby bottles",
      "An entertainment system for children in the car",
    ],
  },
  {
    id: 66,
    difficulty: "Medium",
    question: "What is the purpose of a baby mirror in the car?",
    category: babyonboard,
    correct_answer:
      "To enable parents to see the baby without turning around while driving",
    incorrect_answers: [
      "To allow the baby to see the drivers behind them",
      "To decorate the car interior",
      "To reflect sunlight and keep the baby cool",
    ],
  },
  {
    id: 67,
    difficulty: "Difficult",
    question:
      "What is the safest position for a rear-facing child safety seat in a car?",
    category: babyonboard,
    correct_answer: "In the rear seat, in a reclined position",
    incorrect_answers: [
      "In the rear seat, in an upright position",
      "In the front seat, next to the driver",
      " In the front seat, next to the passenger",
    ],
  },
  {
    id: 68,
    difficulty: "Difficult",
    question:
      "What should be done if a child safety seat has been involved in a car accident?",
    category: babyonboard,
    correct_answer:
      "Replace it with a new one, even if it doesnt appear damaged",
    incorrect_answers: [
      " Nothing, as safety seats are sturdy and not damaged in minor accidents",
      " Continue using it without changes",
      "Take it to a certified repair service",
    ],
  },
  {
    id: 69,
    difficulty: "Difficult",
    question: "What is the purpose of a car seat harness?",
    category: babyonboard,
    correct_answer: "To secure the child in the car seat",
    incorrect_answers: [
      "To keep the child warm",
      " To hold snacks and toys",
      "To provide shade from the sun",
    ],
  },
  {
    id: 70,
    category: wheel,
    difficulty: "Easy",
    question:
      "What is the recommended pressure for inflating car tires, typically found in the owners manual or on a sticker inside the drivers door?",
    correct_answer: "30-35 psi",
    incorrect_answers: [
      "20-25 psi (pounds per square inch)",
      "40-45 psi",
      " It varies depending on the weather",
    ],
  },
  {
    id: 71,
    category: wheel,
    difficulty: "Medium",
    question: "What is the purpose of the valve stem on a car wheel?",
    correct_answer: "To inflate and deflate the tire",
    incorrect_answers: [
      "To measure tire tread deptho",
      "To provide stability",
      "To attach the wheel to the axle",
    ],
  },
  {
    id: 72,
    category: wheel,
    difficulty: "Difficult",
    question:
      "What is the term for the device that evenly distributes the weight of the vehicle across all four wheels, enhancing stability?",
    correct_answer: "Suspension system",
    incorrect_answers: ["Tire tread", "Wheel alignment", "Axle"],
  },
  {
    id: 73,
    category: wheel,
    difficulty: "Medium",
    question: "What is the purpose of the lug nuts on car wheels?",
    correct_answer: "To secure the wheel to the axle",
    incorrect_answers: [
      " To measure the tires diameter",
      "To adjust the tire pressure",
      "To protect the valve stem",
    ],
  },
  {
    id: 74,
    category: wheel,
    difficulty: "Difficult",
    question:
      "Why is it important to regularly check and maintain proper tire pressure?",
    correct_answer: "To improve fuel efficiency",
    incorrect_answers: [
      "To reduce the vehicles weight",
      "To make the tires last longer",
      "To increase the cars top speed",
    ],
  },
  {
    id: 75,
    category: wheel,
    difficulty: "Easy",
    question:
      'What does the term "wheel alignment" refer to in car maintenance?',
    correct_answer:
      " Ensuring all four wheels are parallel and perpendicular to the road",
    incorrect_answers: [
      "Rotating the tires regularly",
      "Aligning the rims with the hubcaps",
      "Adjusting the angle of the steering wheel",
    ],
  },
  {
    id: 76,
    category: wheel,
    difficulty: "Medium",
    question: "What is the function of the spare tire in a car?",
    correct_answer: "To be used as a replacement for a flat tire",
    incorrect_answers: [
      "To increase the cars speed",
      "To provide extra storage space",
      "To improve fuel efficiency",
    ],
  },
  {
    id: 77,
    difficulty: "Easy",
    question:
      "Why should you regularly inspect your cars tires for signs of wear and damage?",
    category: wheel,
    correct_answer: "To ensure safety and prevent accidents",
    incorrect_answers: [
      "To make the tires last longer",
      "To reduce the vehicles weight",
      "To enhance the appearance of the car",
    ],
  },
  {
    id: 78,
    difficulty: "Medium",
    question: 'What does "TPMS" stand for in the context of car tires?',
    category: wheel,
    correct_answer: "Tire Pressure Monitoring System",
    incorrect_answers: [
      "Tire Profile Management Service",
      "Tire Performance Measurement Standard",
      "Tire Pressure Measurement System",
    ],
  },
  {
    id: 79,
    difficulty: "Difficult",
    question: "Why is it important to maintain proper tire balance?",
    category: wheel,
    correct_answer: "To prevent uneven tire wear and vibration",
    incorrect_answers: [
      "To increase the cars top speed",
      "To make the tires last longer",
      "To improve the cars fuel efficiency",
    ],
  },
  {
    id: 80,
    difficulty: "Difficult",
    question:
      "When is it appropriate to use high beam headlights on the highway?",
    category: car,
    correct_answer: "When there are no oncoming vehicles",
    incorrect_answers: [
      "In heavy traffic",
      "In foggy or rainy conditions",
      " Only during the daytime",
    ],
  },
  {
    id: 81,
    category: car,
    difficulty: "Medium",
    question: "What should you do if your car starts to skid on ice or snow?",
    correct_answer: "Steer in the direction you want to go",
    incorrect_answers: [
      "Slam on the brakes",
      "Turn the steering wheel quickly",
      "Accelerate as quickly as possible",
    ],
  },
  {
    id: 82,
    category: car,
    difficulty: "Easy",
    question: "Why are seat belts important in a car?",
    correct_answer: "They help prevent injuries in case of a collision",
    incorrect_answers: [
      "They keep passengers warm",
      "They make the car look nicer",
      "They prevent passengers from falling out",
    ],
  },

  {
    id: 83,
    difficulty: "Easy",
    question:
      "Which of the following activities is the most dangerous while driving?",
    category: accidents,
    correct_answer: " Talking on the phone",
    incorrect_answers: [
      " Listening to music",
      "Enhance vehicle visibility during the day.",
      "Talking to passengers",
    ],
  },
  {
    id: 84,
    difficulty: "Medium",
    question:
      "What is the legal blood alcohol limit for driving in most places?",
    category: accidents,
    correct_answer: " 0.08%",
    incorrect_answers: [" 0.02%", "0.05%", "0.10%"],
  },
  {
    id: 85,
    difficulty: "Easy",
    question: "What should drivers do when approaching a yellow traffic light?",
    category: accidents,
    correct_answer: " Slow down and prepare to stop if safe",
    incorrect_answers: [
      " Speed up to cross before it turns red",
      " Come to a complete stop",
      "Ignore the traffic light",
    ],
  },
  {
    id: 86,
    difficulty: "Medium",
    question:
      "Which of the following actions is safe when overtaking another vehicle on a two-way road?",
    category: accidents,
    correct_answer: " Using the turn signal",
    incorrect_answers: [
      "Overtaking in a curve",
      "Overtaking in a no-passing zone",
      "Overtaking in the right lane",
    ],
  },
  {
    id: 87,
    difficulty: "Difficult",
    question:
      "What should a driver do when encountering a pedestrian at an uncontrolled pedestrian crosswalk?",
    category: accidents,
    correct_answer: " Yield the right-of-way to the pedestrian",
    incorrect_answers: [
      "Continue driving without stopping",
      "Honk the horn to hurry the pedestrian",
      "Give the pedestrian priority on the sidewalk",
    ],
  },
  {
    id: 88,
    difficulty: "Easy",
    question: "What is a common cause of accidents on slippery roads?",
    category: accidents,
    correct_answer: "  Ignoring road conditions",
    incorrect_answers: [
      " Increasing following distance",
      "Reducing speed",
      " Slamming on the brakes",
    ],
  },
  {
    id: 89,
    difficulty: "Easy",
    question:
      "What additional precautions should drivers take when driving on snowy roads?",
    category: dark,
    correct_answer: "Reduce speed and increase following distance",
    incorrect_answers: [
      " Increase speed to maintain control",
      "Use summer tires",
      " Ignore traffic signs",
    ],
  },
  {
    id: 90,
    difficulty: "Difficult",
    question:
      "What lights should drivers use when driving in the rain during the daytime?",
    category: dark,
    correct_answer: "Low beams",
    incorrect_answers: [
      " Fog lights",
      "High beams",
      "No need for lights during the daytime",
    ],
  },
  {
    id: 91,
    difficulty: "Easy",
    question:
      "What should drivers do when facing an intense snowstorm on the road?",
    category: dark,
    correct_answer: " Reduce speed and keep lights on",
    incorrect_answers: [
      " Accelerate to get out of the storm faster",
      "Activate hazard lights",
      "Maintain a constant speed",
    ],
  },
  {
    id: 92,
    difficulty: "Medium",
    question: "What is the leading cause of accidents on wet roads?",
    category: dark,
    correct_answer: "  Hydroplaning",
    incorrect_answers: [
      "Adequate following distance",
      "Constant speed",
      "Slamming on the brakes",
    ],
  },
  {
    id: 93,
    difficulty: "Easy",
    question: "What type of brakes are most effective on icy or snowy roads?",
    category: dark,
    correct_answer: "Anti-lock brakes (ABS)",
    incorrect_answers: ["Handbrakes", "Drum brakes", "Disc brakes"],
  },
  {
    id: 94,
    difficulty: "Easy",
    question:
      "What is the generally allowed maximum speed in residential or urban areas?",
    category: city,
    correct_answer: "30 mph (48 km/h)",
    incorrect_answers: [
      "60 mph (96 km/h)",
      "45 mph (72 km/h)",
      "15 mph (24 km/h)",
    ],
  },
  {
    id: 90,
    difficulty: "Difficult",
    question:
      "What does a broken yellow line in the middle of the road signify?",
    category: city,
    correct_answer: "Passing with caution",
    incorrect_answers: [
      "No passing",
      "Loading and unloading zone",
      "Mandatory stop",
    ],
  },
  {
    id: 91,
    difficulty: "Easy",
    question:
      "What is the basic rule when turning at an intersection without traffic signs or signals?",
    category: city,
    correct_answer: "Yield to the vehicle on the right",
    incorrect_answers: [
      "Yield to the vehicle on the left",
      "Have the right-of-way",
      "Give priority to pedestrians",
    ],
  },
  {
    id: 92,
    difficulty: "Medium",
    question:
      "When is it permissible to pass a stopped school bus with flashing red lights?",
    category: city,
    correct_answer: "Only if there are no children crossing the street",
    incorrect_answers: [
      "Never allowed to pass",
      "Whenever traffic allows it",
      "Only in rural areas",
    ],
  },
  {
    id: 93,
    difficulty: "Easy",
    question:
      "What should a driver do when approaching a flashing yellow traffic light?",
    category: city,
    correct_answer: "Slow down and prepare to stop",
    incorrect_answers: [
      "Speed up to cross before it turns red",
      "Come to a complete stop",
      "Ignore the traffic light",
    ],
  },
  {
    id: 94,
    difficulty: "Easy",
    question:
      "What is the minimum distance that must be maintained behind a cyclist when overtaking in the city?",
    category: city,
    correct_answer: "3 feet (1 meter)",
    incorrect_answers: [
      "1 foot (30 cm)",
      "5 feet (1.5 meters)",
      "10 feet (3 meters)",
    ],
  },
];
