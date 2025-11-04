import { Button } from "@/components/ui/button";
import RecommendationCard from "@/components/RecommendationCard";
import { ArrowRight, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-home.jpg";
import beach1 from "@/assets/beach1.jpg";
import beach2 from "@/assets/beach2.jpg";
import temple1 from "@/assets/temple1.jpg";
import temple2 from "@/assets/temple2.jpg";
import country1 from "@/assets/country1.jpg";
import country2 from "@/assets/country2.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Travel Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="flex justify-center mb-6">
            <Compass className="w-16 h-16 text-secondary animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            Explore breathtaking destinations, from pristine beaches to ancient temples and stunning landscapes around the world
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                Start Planning <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Beach Recommendations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Paradise Beaches</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dive into crystal-clear waters and relax on pristine white sand beaches
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <RecommendationCard
              title="Maldives Tropical Paradise"
              description="Experience the ultimate tropical getaway with turquoise waters, palm trees, and luxurious overwater bungalows in this pristine island paradise."
              image={beach1}
              category="Beach"
            />
            <RecommendationCard
              title="Sunset Beach Haven"
              description="Witness breathtaking sunsets on golden sands where the sky meets the sea in a spectacular display of nature's beauty."
              image={beach2}
              category="Beach"
            />
          </div>
        </div>
      </section>

      {/* Temple Recommendations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Sacred Temples</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Journey through ancient spiritual sites filled with history and architectural wonder
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <RecommendationCard
              title="Golden Spires Temple"
              description="Marvel at the intricate golden architecture of this Buddhist temple surrounded by lush tropical gardens and peaceful meditation spaces."
              image={temple1}
              category="Temple"
            />
            <RecommendationCard
              title="Mountain Temple Sanctuary"
              description="Discover this majestic temple perched on misty mountainsides, adorned with cherry blossoms and offering panoramic views of ancient landscapes."
              image={temple2}
              category="Temple"
            />
          </div>
        </div>
      </section>

      {/* Country Recommendations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Explore by Country</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover diverse landscapes and cultures across the most beautiful destinations worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <RecommendationCard
              title="European Countryside"
              description="Wander through rolling hills, charming villages, and historic architecture in the heart of Europe's most picturesque regions."
              image={country1}
              category="Country"
            />
            <RecommendationCard
              title="New Zealand Wilderness"
              description="Explore dramatic mountain ranges, pristine lakes, and untouched natural beauty in one of the world's most spectacular adventure destinations."
              image={country2}
              category="Country"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-primary-foreground">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Get personalized travel recommendations and start planning your dream vacation today
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl">
              Contact Us Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
