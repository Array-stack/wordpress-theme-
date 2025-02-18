import React from "react";
import AgentCard from "./AgentCard";

interface AgentsShowcaseProps {
  agents?: Array<{
    name: string;
    photo: string;
    phone: string;
    email: string;
    rating: number;
    listings: number;
    sales: number;
  }>;
}

const AgentsShowcase = ({ agents = defaultAgents }: AgentsShowcaseProps) => {
  return (
    <div className="w-full max-w-[1200px] mx-auto py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Meet Our Top Agents</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Work with the best real estate professionals in the industry. Our top
          agents are here to help you find your dream property.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {agents.map((agent, index) => (
          <AgentCard key={index} {...agent} />
        ))}
      </div>
    </div>
  );
};

const defaultAgents = [
  {
    name: "Sarah Johnson",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    phone: "(555) 123-4567",
    email: "sarah.j@realestate.com",
    rating: 4.8,
    listings: 24,
    sales: 156,
  },
  {
    name: "Michael Chen",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    phone: "(555) 234-5678",
    email: "michael.c@realestate.com",
    rating: 4.9,
    listings: 31,
    sales: 203,
  },
  {
    name: "Emily Rodriguez",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    phone: "(555) 345-6789",
    email: "emily.r@realestate.com",
    rating: 4.7,
    listings: 19,
    sales: 142,
  },
  {
    name: "David Kim",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    phone: "(555) 456-7890",
    email: "david.k@realestate.com",
    rating: 4.9,
    listings: 28,
    sales: 187,
  },
];

export default AgentsShowcase;
