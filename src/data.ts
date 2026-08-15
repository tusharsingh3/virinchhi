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
    name: 'Ar. Sumit Chakarwarty',
    role: 'Co-Founder & Architect | BIM Specialist',
    initials: 'SC',
    image: '/team/sumit.jpg',
    bio: [
      'Sumit brings a rare combination of architectural creativity and technical precision to every project he touches. With a Bachelor of Architecture and Master\'s in Construction Engineering & Management from CEPT University, he has built over 4 years of rich, hands-on experience across some of the most complex built environments imaginable — large-scale, IGBC-compliant Tier-3 Data Centers that demand an extraordinary level of coordination and detail.',
      'As Co-Founder of Virinchhi Architects, Sumit plays a central role in shaping the firm\'s technical identity. He is a problem-solver at heart — whether he\'s developing BIM models in Revit, coordinating with structural and MEP engineers, or preparing detailed BOQs and feasibility reports, he approaches every challenge with calm focus and a genuine desire to get things right. His experience spans project inception all the way through to site execution, and notably, he has contributed to a BIM Handbook — a testament to how deeply he understands the discipline, not just as a practitioner but as someone who can document, teach, and refine best practices for others.',
      'At Virinchhi, Sumit leads the technical and documentation side of projects, ensuring that every design is not just beautiful but buildable, compliant, and delivered on time.'
    ],
    quote: "Good architecture isn't just about what you see — it's about everything that makes it stand."
  },
  {
    name: 'Ar. Vaibhav Kummar',
    role: 'Founder & Principal Architect | Urban Planner | Advanced Vastu Consultant',
    initials: 'VK',
    image: '/team/vaibhav.jpg',
    bio: [
      'Vaibhav started Virinchhi Architects with a simple but powerful belief — that every client deserves a space that truly feels like theirs. A licensed architect and the founding vision behind the firm, he brings over four years of hands-on professional experience in commercial building design, backed by a Bachelor of Architecture and a Master\'s in Urban & Regional Planning (MURP).',
      'His experience gave him deep exposure to large-scale commercial projects — from initial CAD drawings through to final handover — while his urban planning background means he always thinks beyond the building, considering how a space sits within its surroundings, community, and long-term context. As an Advanced Vastu Consultant, he integrates ancient spatial wisdom with contemporary design thinking, creating spaces that feel not just beautiful but deeply balanced.',
      'Vaibhav has also published research paper "Leveraging Artificial Intelligence and Digital Twins for Industrial Development along the Tharada–Ahmedabad Expressway Corridor" reflects his forward-thinking approach — exploring how emerging technology can shape smarter, more sustainable infrastructure for the future.',
      'He believes the best designs come from truly understanding a client\'s lifestyle, aspirations, and budget — and then finding the most elegant way to bring all of that together. He personally oversees each project at Virinchhi, ensuring the firm\'s commitment to quality is never compromised.'
    ],
    quote: "A great building begins long before the first drawing — it begins with listening."
  },
  {
    name: 'Vartika Arya',
    role: 'Co-Founder & Interior Design Specialist | Advanced Vastu Consultant',
    initials: 'VA',
    image: '/team/vartika.jpg',
    bio: [
      'Walk into any space Vartika has touched and you\'ll feel it before you can explain it — a sense of ease, of everything being exactly where it should be. As Co-Founder of Virinchhi Architects, Vartika holds a Master\'s in Interior Design and has dedicated her career to the art of transforming rooms into experiences that reflect the people who live and work in them.',
      'Her approach to interior design is deeply personal. She takes the time to understand not just a client\'s aesthetic preferences, but how they move through their day, what makes them feel at home, and what they want a space to say about them. From luxury residential interiors and bespoke furniture design to commercial fit-outs and office environments, she works across a wide range of projects — each one crafted with the same meticulous attention to light, material, proportion, and detail.',
      'As an Advanced Vastu Consultant, Vartika brings an additional layer of intentionality to every interior she designs. She weaves Vastu principles into spatial layouts, furniture placement, colour palettes, and material choices — ensuring that every space is not just visually stunning but energetically harmonious.',
      'At Virinchhi, she collaborates closely with the architecture team to ensure that interiors and architecture speak the same design language from the very beginning.'
    ],
    quote: "Interiors are the most personal part of architecture — they're where a building becomes a home."
  }
]

