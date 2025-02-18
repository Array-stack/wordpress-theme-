import React from "react";
import { Card } from "./ui/card";
import { Avatar } from "./ui/avatar";
import { Button } from "./ui/button";
import { Phone, Mail, Star } from "lucide-react";

interface AgentCardProps {
  name?: string;
  photo?: string;
  phone?: string;
  email?: string;
  rating?: number;
  listings?: number;
  sales?: number;
}

const AgentCard = ({
  name = "Sarah Johnson",
  photo = "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  phone = "(555) 123-4567",
  email = "sarah.j@realestate.com",
  rating = 4.8,
  listings = 24,
  sales = 156,
}: AgentCardProps) => {
  return (
    <Card className="w-[280px] h-[320px] bg-white p-6 flex flex-col items-center space-y-4">
      <Avatar className="w-24 h-24">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover rounded-full"
        />
      </Avatar>

      <div className="text-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="flex items-center justify-center mt-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm text-gray-600">{rating}</span>
        </div>
      </div>

      <div className="w-full space-y-2">
        <Button
          variant="outline"
          className="w-full flex items-center justify-start gap-2"
          size="sm"
        >
          <Phone className="w-4 h-4" />
          {phone}
        </Button>
        <Button
          variant="outline"
          className="w-full flex items-center justify-start gap-2"
          size="sm"
        >
          <Mail className="w-4 h-4" />
          {email}
        </Button>
      </div>

      <div className="w-full flex justify-between text-sm text-gray-600 pt-2 border-t">
        <div className="text-center">
          <p className="font-semibold">{listings}</p>
          <p>Listings</p>
        </div>
        <div className="text-center">
          <p className="font-semibold">{sales}</p>
          <p>Sales</p>
        </div>
      </div>
    </Card>
  );
};

export default AgentCard;
