import { Building2, DollarSign, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  returns: number;
  image: string;
  minInvestment: number;
}

export default function ProjectCard({
  id,
  title,
  location,
  price,
  returns,
  image,
  minInvestment,
}: ProjectCardProps) {
  return (
    <Link to={`/projects/${id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 group-hover:transform group-hover:scale-[1.02]">
        <div className="relative h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-primary">
            {returns}% ROI
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600 flex items-center mt-1">
            <Building2 className="h-4 w-4 mr-1" />
            {location}
          </p>
          <div className="mt-4 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Total Value</p>
              <p className="text-lg font-semibold text-gray-900 flex items-center">
                <DollarSign className="h-4 w-4" />
                {price.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Min Investment</p>
              <p className="text-lg font-semibold text-gray-900 flex items-center">
                <DollarSign className="h-4 w-4" />
                {minInvestment.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition-colors flex items-center justify-center">
              <TrendingUp className="h-4 w-4 mr-2" />
              Invest Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}