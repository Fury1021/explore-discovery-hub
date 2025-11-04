import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface RecommendationCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  location?: string;
}

const RecommendationCard = ({ title, description, image, category, location }: RecommendationCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/90 text-primary-foreground backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
        {location && (
          <div className="flex items-center gap-1 mb-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        )}
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default RecommendationCard;
