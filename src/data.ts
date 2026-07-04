export const CONTACT = {
  phones: [
    { display: '+91 81785 96746', href: 'tel:+918178596746' },
    { display: '+91 78388 26859', href: 'tel:+917838826859' },
  ],
  email: 'virinchhiarchitect@gmail.com',
  address: 'SG Benefit, Shop No.-111, First Floor, Govindpuram, Ghaziabad',
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export type Project = {
  title: string
  category: string
  location: string
  year: string
  image: string
  images?: string[]
  span?: boolean
  imageAspect?: string
}

export const PROJECTS: Project[] = [
  {
    title: 'The Corten Courtyard House',
    category: 'Residential',
    location: 'Wave City, Ghaziabad',
    year: '2025',
    image: '/projects/casa-verde.jpg',
    span: true,
    imageAspect: 'aspect-square',
  },
  {
    title: 'E-68, Swarn Jayanti Puram',
    category: 'Residential',
    location: 'Govind Puram, Ghaziabad',
    year: '2024',
    image: '/projects/e68-residence.jpg',
  },
  {
    title: 'Shri Pet Clinic',
    category: 'Interiors',
    location: 'Raj Nagar Extension, Ghaziabad',
    year: '2025',
    image: '/projects/shri-pet-clinic/1.jpg',
    images: [
      '/projects/shri-pet-clinic/1.jpg',
      '/projects/shri-pet-clinic/2.jpg',
      '/projects/shri-pet-clinic/3.jpg',
      '/projects/shri-pet-clinic/4.jpg',
      '/projects/shri-pet-clinic/5.jpg',
      '/projects/shri-pet-clinic/6.jpg',
      '/projects/shri-pet-clinic/7.jpg',
    ],
  },
  {
    title: 'Roof Top Resort',
    category: 'Interiors',
    location: 'Vasundhara, Ghaziabad',
    year: '2025',
    image: '/projects/roof-top-resort/1.jpg',
    span: true,
    images: [
      '/projects/roof-top-resort/1.jpg',
      '/projects/roof-top-resort/2.jpg',
      '/projects/roof-top-resort/3.jpg',
      '/projects/roof-top-resort/4.jpg',
      '/projects/roof-top-resort/5.jpg',
      '/projects/roof-top-resort/6.jpg',
      '/projects/roof-top-resort/7.jpg',
    ],
  },
]

export const SERVICES = [
  {
    no: '01',
    title: 'Architectural Design',
    desc: 'Concept-to-completion design of residences, commercial buildings and institutions — rooted in context, climate and craft.',
  },
  {
    no: '02',
    title: 'Interior Design',
    desc: 'Bespoke interiors that balance material warmth with editorial restraint, from single rooms to entire homes.',
  },
  {
    no: '03',
    title: 'Turnkey Construction',
    desc: 'Single-point responsibility from drawings to handover — budgets, vendors, quality and timelines managed end to end.',
  },
  {
    no: '04',
    title: 'Planning & Approvals',
    desc: 'Site analysis, feasibility, sanction drawings and statutory approvals handled with local authorities.',
  },
  {
    no: '05',
    title: 'Landscape Design',
    desc: 'Courtyards, terraces and gardens designed as living extensions of architecture.',
  },
  {
    no: '06',
    title: '3D Visualisation',
    desc: 'Photorealistic renders and walkthroughs so you experience every space before a brick is laid.',
  },
]

export const TEAM = [
  {
    name: 'Ar. Vaibhav Kummar',
    role: 'Urban Planner · Co-founder',
    initials: 'VK',
    bio: 'Leads design direction across residential and commercial work, with a focus on light, proportion and material honesty.',
  },
  {
    name: 'Sumit',
    role: 'Co-founder · Projects & Execution',
    initials: 'S',
    bio: 'Heads turnkey delivery — site execution, vendor networks and quality control that keep every project on time.',
  },
  {
    name: 'Vartika',
    role: 'Co-founder · Interiors',
    initials: 'V',
    bio: 'Shapes the interior language of the studio, curating finishes, furniture and detail with an editorial eye.',
  },
]
