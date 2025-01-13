import type { Business } from '../../types/business';

export const mockBusinesses: Business[] = [
  {
    "id": "1",
    "slug": "intellisync-solutions",
    "name": "Intellisync Solutions",
    "description": "Welcome to Intellisync Solutions – where your vision meets the limitless potential of AI! We are your trusted partner in crafting dynamic, intelligent web applications that revolutionize how businesses operate. If you can dream it, we can build it – smarter, faster, and more intuitive than ever before!",
    "isVerified": true,
    "logo": "/images/logos/intellisync-logo.png",
    "coverImage": "/images/covers/intellisync-cover.png",
    "additionalImages": [
      "/images/additional/intellisync-interior.png",
      "/images/additional/intellisync-team.png"
    ],
    "features": [
      {
        "id": "intellisync-f1",
        "title": "Revolutionary AI Features",
        "description": "From predictive analytics to process automation, our AI-powered apps transform the way you work.",
        "icon": "rocket"
      },
      {
        "id": "intellisync-f2",
        "title": "Tailored for You",
        "description": "Every app we build is uniquely designed to solve YOUR challenges and achieve YOUR goals.",
        "icon": "handshake"
      },
      {
        "id": "intellisync-f3",
        "title": "Effortless Integration",
        "description": "We seamlessly blend AI into your workflow so you can focus on what matters most – growth.",
        "icon": "cogs"
      }
    ],
    "contact": {
      "email": "chris.june@intellisync.ca",
      "phone": "+1 (519) 358-9712",
      "address": "Chatham-Kent, Ontario"
    },
    "socialMedia": {
      "linkedin": "https://www.linkedin.com/company/intellisync-solutions",
      "twitter": "https://x.com/Intelli_Sync",
      "discord": "https://discord.gg/CrGqs9cxnM"
    },
    "location": {
      "latitude": 43.6532,
      "longitude": -79.3832,
      "address": "123 Main St",
      "city": "Anytown",
      "province": "ON",
      "country": "Canada",
      "postalCode": "A1B 2C3"
    },
    "promotion": {
      "text": " NEW CLIENTS: Claim your free consultation and let's explore how AI can elevate your business today! Learn more here:",
      "url": "https://intellisync-promotions.netlify.app/"
    },
    "categories": ["AI Web Apps", "Business Solutions"],
    "ratings": {
      "average": 5.0,
      "count": 55
    },

    "reviews": [
      {
        "reviewer": "Jessica Martinez",
        "comment": "Intellisync didn’t just build us a web app – they built us a game-changer! Our workflows are on fire 🔥 and our customers love the new experience!",
        "rating": 5,
        "date": "2024-11-20"
      },
      {
        "reviewer": "Michael Stevens",
        "comment": "The team at Intellisync is brilliant, passionate, and incredibly easy to work with. If you’re not working with them, you’re missing out!",
        "rating": 5,
        "date": "2024-10-28"
      }
    ],
    "hours": {
      "open": "09:00",
      "close": "17:00"
    },
    "faq": [
      {
        "question": "What are your business hours?",
        "answer": "We are open Monday through Friday from 9 AM to 5 PM, and Saturday from 10 AM to 2 PM. We are closed on Sundays."
      },
      {
        "question": "Do you offer online consultations?",
        "answer": "Yes, we provide online consultations. You can book an appointment through our website or by calling our office."
      },
      {
        "question": "What payment methods do you accept?",
        "answer": "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers."
      }
    ],
  },

  {
    "id": "2",
    "slug": "retro-suites-hotel",
    "name": "Retro Suites Hotel",
    "description": "A boutique hotel offering unique, art-inspired rooms and exceptional service.",
    "isVerified": true,
    "logo": "/images/logos/retro-suites-logo.png",
    "coverImage": "/images/covers/retro-suites-cover.png",
    "additionalImages": [
      "/images/additional/retro-suites-interior.png",
      "/images/additional/retro-suites-exterior.png"
    ],
    "features": [
      {
        "id": "f2",
        "title": "Boutique Rooms",
        "description": "Art-inspired luxury suites",
        "icon": "home",
      },
    ],
    "contact": {
      "email": "stay@retrosuites.com",
      "phone": "+1 (519) 555-5678",
      "address": "2 King St W",
    },
    "socialMedia": {
      "facebook": "https://facebook.com/retrosuites",
      "instagram": "https://instagram.com/retrosuites",
    },
    "location": {
      "latitude": 42.4059,
      "longitude": -82.1935,
      "address": "2 King St W",
      "city": "Chatham",
      "province": "ON",
      "country": "Canada",
      "postalCode": "N7M 1C6"
    },
    "promotion": {
      "text": "10% off stays booked online this week.",
      "url": "/promotions/retrosuites",
    },
    "categories": ["Hotel", "Boutique"],
    "ratings": {
      "average": 4.8,
      "count": 456,
    },
    "reviews": [
      {
        "reviewer": "Alice Taylor",
        "comment": "Stunning rooms and impeccable service.",
        "rating": 5,
        "date": "2023-11-30",
      },
      {
        "reviewer": "Mark Wilson",
        "comment": "A bit pricey but worth every penny.",
        "rating": 4,
        "date": "2023-11-27",
      },
    ],
    "hours": {
      "open": "00:00",
      "close": "23:59",
    },
    "faq": [
      {
        "question": "What are your business hours?",
        "answer": "We are open Monday through Friday from 9 AM to 5 PM, and Saturday from 10 AM to 2 PM. We are closed on Sundays."
      },
      {
        "question": "Do you offer online consultations?",
        "answer": "Yes, we provide online consultations. You can book an appointment through our website or by calling our office."
      },
      {
        "question": "What payment methods do you accept?",
        "answer": "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers."
      }
    ],
  },
  {
    "id": "3",
    "slug": "simply-london-boutique",
    "name": "Simply London Boutique",
    "description": "Chic fashion boutique featuring clothing, accessories, and locally made goods.",
    "isVerified": true,
    "logo": "/images/logos/simply-london-logo.png",
    "coverImage": "/images/covers/simply-london-cover.png",
    "additionalImages": [
      "/images/additional/simply-london-interior.png",
      "/images/additional/simply-london-exterior.png"
    ],
    "features": [
      {
        "id": "f3",
        "title": "Trendy Styles",
        "description": "Modern and classic fashion pieces",
        "icon": "shopping-bag",
      },
    ],
    "contact": {
      "email": "shop@simplylondon.com",
      "phone": "+1 (519) 555-3456",
      "address": "28 Wellington St W",
    },
    "socialMedia": {
      "facebook": "https://facebook.com/simplylondon",
      "instagram": "https://instagram.com/simplylondon",
    },
    "location": {
      "latitude": 42.4068,
      "longitude": -82.1951,
      "address": "28 Wellington St W",
      "city": "Chatham",
      "province": "ON",
      "country": "Canada",
      "postalCode": "N7M 1J7"
    },
    "categories": ["Fashion", "Local Goods"],
    "ratings": {
      "average": 4.3,
      "count": 67,
    },
    "reviews": [
      {
        "reviewer": "Emily Davis",
        "comment": "Beautiful collection and helpful staff!",
        "rating": 5,
        "date": "2023-12-02",
      },
      {
        "reviewer": "Michael Johnson",
        "comment": "Great quality but sizes run a bit small.",
        "rating": 4,
        "date": "2023-11-28",
      },
    ],
    "hours": {
      "open": "10:00",
      "close": "19:00",
    },
    "faq": [
      {
        "question": "What are your business hours?",
        "answer": "We are open Monday through Friday from 9 AM to 5 PM, and Saturday from 10 AM to 2 PM. We are closed on Sundays."
      },
      {
        "question": "Do you offer online consultations?",
        "answer": "Yes, we provide online consultations. You can book an appointment through our website or by calling our office."
      },
      {
        "question": "What payment methods do you accept?",
        "answer": "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers."
      }
    ],
  },
  {
    "id": "4",
    "slug": "chilled-cork",
    "name": "Chilled Cork",
    "description": "Upscale restaurant featuring local ingredients, craft cocktails, and an elegant ambiance.",
    "isVerified": true,
    "logo": "/images/logos/chilled-cork-logo.png",
    "coverImage": "/images/covers/chilled-cork-cover.png",
    "additionalImages": [
      "/images/additional/chilled-cork-interior.png",
      "/images/additional/chilled-cork-exterior.png"
    ],
    "features": [
      {
        "id": "f4",
        "title": "Fine Dining",
        "description": "Exquisite meals made with local ingredients",
        "icon": "wine",
      },
    ],
    "contact": {
      "email": "reservations@chilledcork.com",
      "phone": "+1 (519) 555-7890",
      "address": "22 William St",
    },
    "socialMedia": {
      "facebook": "https://facebook.com/chilledcork",
      "instagram": "https://instagram.com/chilledcork",
    },
    "location": {
      "latitude": 42.4075,
      "longitude": -82.1942,
      "address": "22 William St",
      "city": "Chatham",
      "province": "ON",
      "country": "Canada",
      "postalCode": "N7M 4S1"
    },
    "categories": ["Restaurant", "Fine Dining"],
    "ratings": {
      "average": 4.7,
      "count": 211,
    },
    "reviews": [
      {
        "reviewer": "Sophia Brown",
        "comment": "Fantastic food and ambiance. A must-visit!",
        "rating": 5,
        "date": "2023-11-29",
      },
      {
        "reviewer": "Liam Martin",
        "comment": "Excellent service but a bit crowded.",
        "rating": 4,
        "date": "2023-11-26",
      },
    ],
    "hours": {
      "open": "17:00",
      "close": "22:00",
    },
    "faq": [
      {
        "question": "What are your business hours?",
        "answer": "We are open Monday through Friday from 9 AM to 5 PM, and Saturday from 10 AM to 2 PM. We are closed on Sundays."
      },
      {
        "question": "Do you offer online consultations?",
        "answer": "Yes, we provide online consultations. You can book an appointment through our website or by calling our office."
      },
      {
        "question": "What payment methods do you accept?",
        "answer": "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers."
      }
    ],
  },
];
