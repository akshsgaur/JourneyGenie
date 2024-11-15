import { GoogleGenerativeAI } from "@google/generative-ai";

  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
 
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate travel plan for Location: Las Vegas for 3 days for couples in cheap budget, give me hotel options, budget, hotel address and place image url link, with best time to visit in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"location\": \"Las Vegas\",\n  \"duration\": \"3 days\",\n  \"travelers\": \"Couple\",\n  \"budget\": \"Cheap\",\n  \"best_time_to_visit\": \"March-May or September-November (shoulder seasons for milder weather and fewer crowds)\",\n  \"hotel_options\": [\n    {\n      \"name\": \"The D Las Vegas\",\n      \"address\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price_range\": \"$50-$100 per night\",\n      \"image_url\": \"https://www.thelinq.com/media/wysiwyg/linq-hotel-exterior-night-3.jpg\",\n      \"description\": \"A budget-friendly hotel located in the heart of Fremont Street Experience, known for its vibrant atmosphere and live entertainment.\"\n    },\n    {\n      \"name\": \"Circus Circus Hotel & Casino\",\n      \"address\": \"2880 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"price_range\": \"$40-$80 per night\",\n      \"image_url\": \"https://www.circuscircus.com/media/wysiwyg/circus-circus-hotel-exterior-night-2.jpg\",\n      \"description\": \"A classic Las Vegas hotel with a carnival theme, offering affordable rooms, a variety of restaurants, and entertainment options.\"\n    },\n    {\n      \"name\": \"Golden Nugget Las Vegas\",\n      \"address\": \"129 E Fremont St, Las Vegas, NV 89101\",\n      \"price_range\": \"$60-$120 per night\",\n      \"image_url\": \"https://www.goldennugget.com/media/wysiwyg/golden-nugget-exterior-night-1.jpg\",\n      \"description\": \"A historic hotel known for its luxurious amenities, including a shark tank and a variety of dining options.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": \"Day 1\",\n      \"activities\": [\n        {\n          \"name\": \"Explore Fremont Street Experience\",\n          \"description\": \"Walk through the pedestrian-only street with its vibrant light shows, live entertainment, and street performers.\",\n          \"cost\": \"Free\"\n        },\n        {\n          \"name\": \"Free Slot Play at The D\",\n          \"description\": \"Take advantage of the free slot play offered at The D Las Vegas, a great way to experience the casino atmosphere without spending much money.\",\n          \"cost\": \"Free\"\n        },\n        {\n          \"name\": \"Dine at a cheap restaurant in Fremont Street\",\n          \"description\": \"Enjoy a casual meal at one of the many affordable restaurants in the area, like the \" +\n          \"famous Heart Attack Grill or the iconic Binion's Steakhouse.\"\n        }\n      ]\n    },\n    {\n      \"day\": \"Day 2\",\n      \"activities\": [\n        {\n          \"name\": \"Visit the Strip\",\n          \"description\": \"Take a free shuttle or ride the Las Vegas Monorail to explore the iconic Las Vegas Strip, admiring the extravagant hotels and casinos.\",\n          \"cost\": \"Free (excluding transportation)\"\n        },\n        {\n          \"name\": \"Free Shows on the Strip\",\n          \"description\": \"Catch a free show at one of the Strip's many casinos, like the Bellagio Fountains or the Wynn's Lake of Dreams.\",\n          \"cost\": \"Free\"\n        },\n        {\n          \"name\": \"Enjoy a Picnic at the Bellagio Conservatory & Botanical Garden\",\n          \"description\": \"Escape the casino atmosphere and relax in the beautiful Bellagio Conservatory, featuring stunning floral displays.\",\n          \"cost\": \"Free\"\n        }\n      ]\n    },\n    {\n      \"day\": \"Day 3\",\n      \"activities\": [\n        {\n          \"name\": \"Visit the Neon Museum\",\n          \"description\": \"Explore the fascinating history of Las Vegas through a collection of iconic neon signs from the city's past.\",\n          \"cost\": \"$20-$25 per person\"\n        },\n        {\n          \"name\": \"Explore the Arts District\",\n          \"description\": \"Discover the vibrant art scene in Las Vegas' Arts District, featuring galleries, murals, and trendy restaurants.\",\n          \"cost\": \"Free\"\n        },\n        {\n          \"name\": \"Dine at a Local Restaurant\",\n          \"description\": \"Enjoy a delicious and affordable meal at one of the many local restaurants in the Arts District, offering diverse cuisines and a unique atmosphere.\"\n        }\n      ]\n    }\n  ],\n  \"tips\": [\n    \"Take advantage of free activities like shows, walking tours, and exploring the Strip.\",\n    \"Look for discounts and deals on food and drinks.\",\n    \"Consider buying a discount card or pass for attractions.\",\n    \"Pack light to avoid luggage fees.\",\n    \"Stay hydrated, especially when walking around the Strip.\"\n  ]\n}\n```\n\n**Note:**\n\n* This itinerary is just a suggestion and can be customized based on your interests and preferences.\n* Prices for attractions, food, and drinks are approximate and may vary.\n* It's always a good idea to check for updated information and promotions before your trip.\n* You can use this JSON data as a starting point and modify it to suit your needs.\n"},
          ],
        },
      ],
    });
  
    
  
  
