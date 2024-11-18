import { useParams } from 'react-router-dom';
import { Building2, DollarSign, MapPin, TrendingUp, Users, Clock } from 'lucide-react';

const MOCK_PROJECT = {
  id: '1',
  title: 'Luxury Beachfront Villa',
  location: 'Miami Beach, FL',
  price: 2500000,
  returns: 12.5,
  image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=800',
  minInvestment: 5000,
  description: 'This stunning beachfront property offers unparalleled views and luxury amenities. Located in the heart of Miami Beach, this investment opportunity combines premium location with strong appreciation potential.',
  features: ['5 Bedrooms', '6 Bathrooms', '6,500 sq ft', 'Private Pool', 'Direct Beach Access'],
  investmentDetails: {
    totalInvestors: 127,
    funded: 1875000,
    remaining: 625000,
    timeLeft: '15 days'
  }
};

export default function ProjectDetail() {
  const { id } = useParams();

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <div>
            <img
              src={MOCK_PROJECT.image}
              alt={MOCK_PROJECT.title}
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Property Features</h3>
              <div className="grid grid-cols-2 gap-4">
                {MOCK_PROJECT.features.map((feature) => (
                  <div key={feature} className="flex items-center">
                    <Building2 className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div>
            <h1 className="text-3xl font-bold font-display">{MOCK_PROJECT.title}</h1>
            <div className="flex items-center mt-2 text-gray-600">
              <MapPin className="h-5 w-5 mr-2" />
              {MOCK_PROJECT.location}
            </div>

            <div className="mt-6">
              <p className="text-gray-600">{MOCK_PROJECT.description}</p>
            </div>

            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500">Property Value</p>
                  <p className="text-2xl font-semibold flex items-center">
                    <DollarSign className="h-6 w-6" />
                    {MOCK_PROJECT.price.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Expected Returns</p>
                  <p className="text-2xl font-semibold flex items-center">
                    <TrendingUp className="h-6 w-6 text-primary mr-1" />
                    {MOCK_PROJECT.returns}%
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Min Investment</p>
                  <p className="text-2xl font-semibold flex items-center">
                    <DollarSign className="h-6 w-6" />
                    {MOCK_PROJECT.minInvestment.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Investors</p>
                  <p className="text-2xl font-semibold flex items-center">
                    <Users className="h-6 w-6 mr-1" />
                    {MOCK_PROJECT.investmentDetails.totalInvestors}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-500">Funding Progress</span>
                  <span className="text-sm font-medium">
                    {Math.round((MOCK_PROJECT.investmentDetails.funded / MOCK_PROJECT.price) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary rounded-full h-2"
                    style={{
                      width: `${(MOCK_PROJECT.investmentDetails.funded / MOCK_PROJECT.price) * 100}%`,
                    }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-500">
                  <span>
                    <DollarSign className="h-4 w-4 inline" />
                    {MOCK_PROJECT.investmentDetails.funded.toLocaleString()} raised
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {MOCK_PROJECT.investmentDetails.timeLeft} left
                  </span>
                </div>
              </div>

              <button className="w-full mt-6 bg-primary text-white py-3 rounded-md hover:bg-primary-dark transition-colors flex items-center justify-center text-lg font-medium">
                <TrendingUp className="h-5 w-5 mr-2" />
                Invest Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}