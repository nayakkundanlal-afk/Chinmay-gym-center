export interface GymInfo {
  name: string;
  odiaName: string;
  category: string;
  rating: number;
  totalReviews: number;
  address: string;
  locality: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  googlePlusCode: string;
  phone: string;
  phoneFormatted: string;
  whatsappNumber: string;
  status: string;
  closingTime: string;
  mapsPlaceUrl: string;
  mapsDirectionsUrl: string;
  mapsReviewsUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  googlePlaceId: string;
}

export const GYM_DATA: GymInfo = {
  name: 'CHINMAYA GYM CENTER',
  odiaName: 'ଚିନ୍ମୟ ଜିମ୍ ସେଣ୍ଟର',
  category: 'Gym / Fitness Club',
  rating: 4.8,
  totalReviews: 448,
  address: 'Acharya Vihar, Bhubaneswar, Odisha – 751013, India',
  locality: 'Acharya Vihar',
  city: 'Bhubaneswar',
  state: 'Odisha',
  pincode: '751013',
  country: 'India',
  googlePlusCode: '7RWH+3Q Bhubaneswar, Odisha',
  phone: '+916372957898',
  phoneFormatted: '+91 63729 57898',
  whatsappNumber: '916372957898',
  status: 'Open',
  closingTime: '10:00 PM',
  mapsPlaceUrl: 'https://www.google.com/maps/place/ENERGYM+FITNESS+CLUB/@20.2951884,85.8294903,17z/data=!4m6!3m5!1s0x3a1909e840ad36b3:0x13f9ba30cea3657!8m2!3d20.2951884!4d85.8294903!16s%2Fg%2F11c31nhrlk',
  mapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=ENERGYM+FITNESS+CLUB&destination_place_id=ChIJszatQOgJGTkRV2ajzqO6-RM',
  mapsReviewsUrl: 'https://www.google.com/maps/place/ENERGYM+FITNESS+CLUB/@20.2951884,85.8294903,17z/data=!4m8!3m7!1s0x3a1909e840ad36b3:0x13f9ba30cea3657!8m2!3d20.2951884!4d85.8294903!9m1!1b1!16s%2Fg%2F11c31nhrlk',
  coordinates: {
    lat: 20.2951884,
    lng: 85.8294903,
  },
  googlePlaceId: '0x3a1909e840ad36b3:0x13f9ba30cea3657',
};

export interface Facility {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

export const FACILITIES: Facility[] = [
  {
    id: 'strength',
    title: 'Strength Training',
    category: 'Strength',
    description: 'Train your strength and build a stronger, resilient physique with versatile free weights, barbells, and compound movement zones.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=900&auto=format&fit=crop',
    tags: ['Barbells', 'Power Racks', 'Core Strength'],
  },
  {
    id: 'bodybuilding',
    title: 'Bodybuilding',
    category: 'Hypertrophy',
    description: 'Work towards your physique and bodybuilding milestones with dedicated isolation angles, dumbbells, and hypertrophy-focused routines.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=900&auto=format&fit=crop',
    tags: ['Muscle Mass', 'Aesthetics', 'Targeted Work'],
  },
  {
    id: 'weight-training',
    title: 'Weight Training',
    category: 'Resistance',
    description: 'Build consistency through structured progressive overload training suitable for all experience levels from beginner to advanced.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=900&auto=format&fit=crop',
    tags: ['Free Weights', 'Dumbbells', 'Machines'],
  },
  {
    id: 'cardio',
    title: 'Cardio Training',
    category: 'Endurance',
    description: 'Support your stamina, cardiovascular health, and daily calorie burn with specialized cardio machines and endurance intervals.',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=900&auto=format&fit=crop',
    tags: ['Stamina', 'Heart Health', 'Calorie Burn'],
  },
  {
    id: 'trainer-guidance',
    title: 'Personal Trainer Guidance',
    category: 'Coaching',
    description: 'Get helpful, hands-on guidance and encouragement from cooperative trainers who ensure proper lifting form and injury prevention.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=900&auto=format&fit=crop',
    tags: ['Form Correction', 'Cooperative Staff', 'Motivation'],
  },
  {
    id: 'general-fitness',
    title: 'General Fitness',
    category: 'Wellness',
    description: 'Work towards a healthier, active, and energetic lifestyle with flexible functional conditioning tailored to busy students and professionals.',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=900&auto=format&fit=crop',
    tags: ['Daily Vitality', 'Flexibility', 'Student Friendly'],
  },
];

export interface WhyChooseItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    number: '01',
    title: 'Friendly Training Environment',
    description: 'A welcoming, respectful, and motivating atmosphere where you feel comfortable walking in every single day.',
    iconName: 'Smile',
  },
  {
    number: '02',
    title: 'Cooperative Trainers',
    description: 'Helpful trainers who take time to correct posture, guide exercise choices, and make beginners feel right at home.',
    iconName: 'Users',
  },
  {
    number: '03',
    title: 'Student-Friendly',
    description: 'Located conveniently in Acharya Vihar with an approachable, supportive vibe that students and young athletes love.',
    iconName: 'GraduationCap',
  },
  {
    number: '04',
    title: 'Pocket-Friendly',
    description: 'Affordable fitness designed to provide maximum value and quality without burning a hole in your pocket.',
    iconName: 'Wallet',
  },
  {
    number: '05',
    title: 'Spacious Parking',
    description: 'Ample and convenient parking space right at the gym premises, ensuring zero hassle when arriving for your session.',
    iconName: 'Car',
  },
  {
    number: '06',
    title: 'Community Experience',
    description: 'Surround yourself with like-minded fitness enthusiasts who cheer on your progress and keep you accountable.',
    iconName: 'Flame',
  },
];

export interface MembershipPlan {
  id: string;
  name: string;
  duration: string;
  pricePlaceholder: string;
  isPopular?: boolean;
  tagline: string;
  features: string[];
}

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'monthly',
    name: 'MONTHLY MEMBERSHIP',
    duration: '1 Month',
    pricePlaceholder: '₹[ADD MONTHLY PRICE]',
    isPopular: false,
    tagline: 'Ideal for getting started and testing your workout routine.',
    features: [
      'Full Gym Floor Access',
      'Guidance from Cooperative Trainers',
      'Cardio & Strength Sections',
      'Spacious Parking Access',
      'Flexible Month-to-Month Renewal',
    ],
  },
  {
    id: 'quarterly',
    name: 'QUARTERLY MEMBERSHIP',
    duration: '3 Months',
    pricePlaceholder: '₹[ADD QUARTERLY PRICE]',
    isPopular: true,
    tagline: 'Most popular option to build real workout habits and visible results.',
    features: [
      'Full Gym Floor Access',
      'Guidance from Cooperative Trainers',
      'Cardio & Strength Sections',
      'Spacious Parking Access',
      'Consistent Habit Transformation',
      'Priority Trainer Check-ins',
    ],
  },
  {
    id: 'annual',
    name: 'ANNUAL MEMBERSHIP',
    duration: '12 Months',
    pricePlaceholder: '₹[ADD ANNUAL PRICE]',
    isPopular: false,
    tagline: 'Best long-term commitment for dedicated athletes and lifters.',
    features: [
      'Year-Round Gym Floor Access',
      'Guidance from Cooperative Trainers',
      'Cardio & Strength Sections',
      'Spacious Parking Access',
      'Maximum Cost Savings',
      'Free Fitness Goal Assessments',
    ],
  },
];

export interface GalleryItem {
  id: number;
  title: string;
  category: 'Gym Floor' | 'Weights' | 'Cardio' | 'Training';
  url: string;
  alt: string;
  isAuthentic?: boolean;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'CHINMAYA Gym Floor (Official Google Photo)',
    category: 'Gym Floor',
    url: 'https://lh3.googleusercontent.com/grass-cs/AABkmLcCv7ST1gpy5Q_YUc-30iOB24CVPG2ZqpRx4wsm10c_sbOp79tCzEL9nhSOwwFwoYKUzNN1fhOgiXJeiZzZPGFqd79xuZZGb8ixtF80UAUYWw3ndTkuZbhW9bcwy0ALaidSkulo=w1280-h958-k-no',
    alt: 'Authentic photo of CHINMAYA GYM CENTER training floor and gym setup in Acharya Vihar',
    isAuthentic: true,
  },
  {
    id: 2,
    title: 'Dumbbell & Free Weights Zone',
    category: 'Weights',
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
    alt: 'Athletic gym member lifting dumbbells at the weight rack',
  },
  {
    id: 3,
    title: 'Barbell Strength & Squat Rack',
    category: 'Weights',
    url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop',
    alt: 'Powerlifting barbell and weight plates on gym floor',
  },
  {
    id: 4,
    title: 'Trainer Form Guidance & Coaching',
    category: 'Training',
    url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop',
    alt: 'Gym trainer coaching member on exercise form',
  },
  {
    id: 5,
    title: 'High-Energy Workout Atmosphere',
    category: 'Gym Floor',
    url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop',
    alt: 'Members working out in spacious modern fitness floor',
  },
  {
    id: 6,
    title: 'Focused Muscle Conditioning',
    category: 'Training',
    url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop',
    alt: 'Athlete performing cable row exercise in gym',
  },
  {
    id: 7,
    title: 'Arm & Hypertrophy Training',
    category: 'Weights',
    url: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop',
    alt: 'Bicep curls and intense dumbbell workout',
  },
  {
    id: 8,
    title: 'Spacious Training Floor & Equipment',
    category: 'Gym Floor',
    url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop',
    alt: 'Wide view of fitness club equipment layout',
  },
];

export interface VerifiedReview {
  id: number;
  highlight: string;
  source: string;
  rating: number;
  badge: string;
}

export const VERIFIED_REVIEWS: VerifiedReview[] = [
  {
    id: 1,
    highlight: 'Best place with pocket friendly price.',
    source: 'Google Review excerpt',
    rating: 5,
    badge: 'Affordable Pricing',
  },
  {
    id: 2,
    highlight: 'Good location with specious parking.',
    source: 'Google Review excerpt',
    rating: 5,
    badge: 'Spacious Parking',
  },
  {
    id: 3,
    highlight: 'The people are so helpful and make you feel at home...!!!',
    source: 'Google Review excerpt',
    rating: 5,
    badge: 'Cooperative Staff',
  },
];

export const SOCIAL_LINKS = {
  instagram: '#', // Editable placeholder for owner
  facebook: '#', // Editable placeholder for owner
};
