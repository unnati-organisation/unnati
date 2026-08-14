export interface BoardMember {
  name: string;
  role: string;
  address: string;
  image: string;
}

export const board: BoardMember[] = [
  {
    name: "Prof. Debiprasad Mishra",
    role: "President",
    address: "Plot No. C-25, BJB Nagar, Bhubaneswar-751014, Odisha",
    image: "/sub-images/board-mishra.jpg",
  },
  {
    name: "Mr. Binoy Acharya",
    role: "Member Secretary",
    address: "12, Ashokwadi Apartment, Panchvati Marg, Ahmedabad-380006",
    image: "/sub-images/board-acharya.jpg",
  },
  {
    name: "Mr. Ashok Kumar Singh",
    role: "Treasurer",
    address: "19/349, Indira Nagar, Lucknow-226016, Uttar Pradesh",
    image: "/sub-images/board-singh.jpg",
  },
  {
    name: "Ms. Lata Kachhawaha",
    role: "Member",
    address: "Gurudwara Road, Barmer–344001, Rajasthan",
    image: "/sub-images/board-lata.jpg",
  },
  {
    name: "Ms. Sophia Khan",
    role: "Member",
    address: "A-12, 3rd Floor, Ellicon Tower, Nr. Vishala Circle, Juhapura-Sarkhej Main Road, Ahmedabad-380055",
    image: "/sub-images/board-khan.jpg",
  },
  {
    name: "Dr. Mona C. Anand",
    role: "Member",
    address: "GG1/73 C, Vikas Puri, New Delhi–110018",
    image: "/sub-images/board-mona.jpg",
  },
  {
    name: "Mr. Prabhat Failbus",
    role: "Member",
    address: "A-5, Shalibhadra Nagar, Nr. Samta Nagar, Bedla, Udaipur-313011, Rajasthan",
    image: "/sub-images/board-prabhat.jpg",
  },
  {
    name: "Dr. Rajesh Tandon",
    role: "Chair Emeritus",
    address: "42, Tughlakabad Institutional Area, New Delhi-110062",
    image: "/sub-images/board-tandon.jpg",
  },
];

export interface Office {
  city: string;
  label: string;
  address: string;
  phone: string;
  email: string;
  image: string;
}

export const offices: Office[] = [
  {
    city: "Ahmedabad",
    label: "Azad Society · Gujarat",
    address: "216, Azad Society, Ahmedabad 380015, Gujarat",
    phone: "+91-79-26746145, 26733296",
    email: "psu_unnati@unnati.org",
    image: "/sub-images/office-ahmedabad2.jpg",
  },
  {
    city: "Jodhpur",
    label: "Field Office · Rajasthan",
    address: "650, Radhakrishnan Puram, Near Laharia Resort, Chopasni Pal Bypass Link Road, Jodhpur 342014, Rajasthan",
    phone: "+91-291-2948922",
    email: "jodhpur_unnati@unnati.org",
    image: "/sub-images/office-jodhpur.jpg",
  },
  {
    city: "Bhachau",
    label: "Rural Training Centre · Kutch",
    address: "Nava Gam, Bhachau, Kutch 370140, Gujarat",
    phone: "+91-2837-291294",
    email: "bhachau_unnati@unnati.org",
    image: "/sub-images/office-kutch.jpg",
  },
  {
    city: "New Delhi",
    label: "Registered Office",
    address: "B-4/106, Safdarjung Enclave, 3rd Floor, New Delhi 110029",
    phone: "—",
    email: "psu_unnati@unnati.org",
    image: "/sub-images/office-ahmedabad2.jpg",
  },
];