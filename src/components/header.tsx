import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl">
            Houzez
          </Link>

          {/* Main Navigation */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/buy" className={navigationMenuTriggerStyle()}>
                  Buy
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/rent" className={navigationMenuTriggerStyle()}>
                  Rent
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/agents" className={navigationMenuTriggerStyle()}>
                  Agents
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Add Property Button */}
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Property
        </Button>
      </div>
    </header>
  );
}
