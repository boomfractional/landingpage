import ProjectCard from '../components/ProjectCard';

const MOCK_PROJECTS = [
  {
    id: '1',
    title: 'Luxury Beachfront Villa',
    location: 'Miami Beach, FL',
    price: 2500000,
    returns: 12.5,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=800',
    minInvestment: 5000
  },
  {
    id: '2',
    title: 'Downtown High-Rise',
    location: 'Manhattan, NY',
    price: 5000000,
    returns: 10.8,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&w=800',
    minInvestment: 10000
  },
  {
    id: '3',
    title: 'Modern Tech Hub Office',
    location: 'San Francisco, CA',
    price: 8000000,
    returns: 9.5,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&w=800',
    minInvestment: 15000
  }
];

export default function Projects() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 font-display">Available Properties</h1>
          <p className="mt-4 text-gray-600">
            Browse our curated selection of premium real estate investments
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PROJECTS.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}