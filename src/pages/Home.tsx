import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import RecommendationCard from "@/components/RecommendationCard";
import { ArrowRight, Compass, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import heroImage from "@/assets/hero-home.jpg";
import beach1 from "@/assets/beach1.jpg";
import beach2 from "@/assets/beach2.jpg";
import beach3 from "@/assets/beach3.jpg";
import beach4 from "@/assets/beach4.jpg";
import beach5 from "@/assets/beach5.jpg";
import beach6 from "@/assets/beach6.jpg";
import temple1 from "@/assets/temple1.jpg";
import temple2 from "@/assets/temple2.jpg";
import temple3 from "@/assets/temple3.jpg";
import temple4 from "@/assets/temple4.jpg";
import temple5 from "@/assets/temple5.jpg";
import temple6 from "@/assets/temple6.jpg";
import country1 from "@/assets/country1.jpg";
import country2 from "@/assets/country2.jpg";

const recommendations = [
  {
    title: "Maldives Tropical Paradise",
    description: "Experience the ultimate tropical getaway with turquoise waters, palm trees, and luxurious overwater bungalows in this pristine island paradise.",
    image: beach1,
    category: "Beach",
    location: "Maldives",
    recommended: true
  },
  {
    title: "Sunset Beach Haven",
    description: "Witness breathtaking sunsets on golden sands where the sky meets the sea in a spectacular display of nature's beauty.",
    image: beach2,
    category: "Beach",
    location: "Bali, Indonesia",
    recommended: true
  },
  {
    title: "Nusa Dua Beach Paradise",
    description: "Discover pristine white sands and crystal-clear turquoise waters perfect for swimming, snorkeling, and relaxation under traditional Balinese umbrellas.",
    image: beach3,
    category: "Beach",
    location: "Bali, Indonesia",
    recommended: true
  },
  {
    title: "Santorini Black Sand Beach",
    description: "Experience the unique volcanic black sand beaches with stunning white cliff views and iconic blue-domed churches overlooking the Aegean Sea.",
    image: beach4,
    category: "Beach",
    location: "Santorini, Greece"
  },
  {
    title: "Bora Bora Lagoon",
    description: "Indulge in luxury at this world-famous turquoise lagoon with overwater bungalows and the majestic Mount Otemanu as your backdrop.",
    image: beach5,
    category: "Beach",
    location: "Bora Bora, French Polynesia",
    recommended: true
  },
  {
    title: "Anse Source d'Argent",
    description: "Marvel at the unique granite rock formations and powder-white sand beaches surrounded by crystal-clear turquoise waters and tropical palms.",
    image: beach6,
    category: "Beach",
    location: "La Digue, Seychelles"
  },
  {
    title: "Golden Spires Temple",
    description: "Marvel at the intricate golden architecture of this Buddhist temple surrounded by lush tropical gardens and peaceful meditation spaces.",
    image: temple1,
    category: "Temple",
    location: "Chiang Mai, Thailand"
  },
  {
    title: "Mountain Temple Sanctuary",
    description: "Discover this majestic temple perched on misty mountainsides, adorned with cherry blossoms and offering panoramic views of ancient landscapes.",
    image: temple2,
    category: "Temple",
    location: "Kyoto, Japan"
  },
  {
    title: "Angkor Wat Complex",
    description: "Explore the magnificent ancient temple complex with stunning stone architecture, reflection pools, and breathtaking sunrise views over the jungle.",
    image: temple3,
    category: "Temple",
    location: "Siem Reap, Cambodia"
  },
  {
    title: "Fushimi Inari Shrine",
    description: "Walk through thousands of vibrant red torii gates creating mesmerizing tunnels that lead up the sacred mountain through mystical forest paths.",
    image: temple4,
    category: "Temple",
    location: "Kyoto, Japan"
  },
  {
    title: "Borobudur Temple",
    description: "Visit this massive ancient Buddhist temple featuring intricate stone carvings, Buddha statues, and stunning views of volcanic mountains.",
    image: temple5,
    category: "Temple",
    location: "Central Java, Indonesia"
  },
  {
    title: "Grand Palace Temple",
    description: "Experience the opulence of traditional Thai architecture with golden spires, ornate decorations, and the sacred Emerald Buddha temple.",
    image: temple6,
    category: "Temple",
    location: "Bangkok, Thailand"
  },
  {
    title: "European Countryside",
    description: "Wander through rolling hills, charming villages, and historic architecture in the heart of Europe's most picturesque regions.",
    image: country1,
    category: "Country",
    location: "Europe"
  },
  {
    title: "New Zealand Wilderness",
    description: "Explore dramatic mountain ranges, pristine lakes, and untouched natural beauty in one of the world's most spectacular adventure destinations.",
    image: country2,
    category: "Country",
    location: "New Zealand"
  }
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  const filteredRecommendations = useMemo(() => {
    if (!searchQuery.trim()) return recommendations;
    
    const query = searchQuery.toLowerCase();
    return recommendations.filter(rec => 
      rec.title.toLowerCase().includes(query) ||
      rec.description.toLowerCase().includes(query) ||
      rec.category.toLowerCase().includes(query) ||
      rec.location?.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const beachResults = filteredRecommendations.filter(r => r.category === "Beach");
  const templeResults = filteredRecommendations.filter(r => r.category === "Temple");
  const countryResults = filteredRecommendations.filter(r => r.category === "Country");
  
  const recommendedBeaches = recommendations.filter(r => r.category === "Beach" && r.recommended);
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

      {/* Search Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search destinations, beaches, temples, countries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                className="pl-12 h-14 text-lg bg-background shadow-md"
              />
            </div>
            {searchQuery && (
              <p className="mt-4 text-center text-muted-foreground">
                Found {filteredRecommendations.length} result{filteredRecommendations.length !== 1 ? 's' : ''}
              </p>
            )}
            {searchFocused && !searchQuery && (
              <div className="mt-4 p-4 bg-background rounded-lg shadow-lg">
                <h4 className="font-semibold mb-3 text-foreground">Recommended Beaches</h4>
                <div className="space-y-2">
                  {recommendedBeaches.map((beach, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSearchQuery(beach.title)}
                      className="w-full text-left px-3 py-2 rounded hover:bg-muted transition-colors flex items-center gap-2"
                    >
                      <Search className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <div className="font-medium text-sm">{beach.title}</div>
                        <div className="text-xs text-muted-foreground">{beach.location}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Beach Recommendations */}
      {beachResults.length > 0 && (
        <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Paradise Beaches</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dive into crystal-clear waters and relax on pristine white sand beaches
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {beachResults.map((rec, idx) => (
              <RecommendationCard
                key={idx}
                title={rec.title}
                description={rec.description}
                image={rec.image}
                category={rec.category}
                location={rec.location}
              />
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Temple Recommendations */}
      {templeResults.length > 0 && (
        <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Sacred Temples</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Journey through ancient spiritual sites filled with history and architectural wonder
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {templeResults.map((rec, idx) => (
              <RecommendationCard
                key={idx}
                title={rec.title}
                description={rec.description}
                image={rec.image}
                category={rec.category}
                location={rec.location}
              />
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Country Recommendations */}
      {countryResults.length > 0 && (
        <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Explore by Country</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover diverse landscapes and cultures across the most beautiful destinations worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {countryResults.map((rec, idx) => (
              <RecommendationCard
                key={idx}
                title={rec.title}
                description={rec.description}
                image={rec.image}
                category={rec.category}
                location={rec.location}
              />
            ))}
          </div>
        </div>
      </section>
      )}

      {/* No Results Message */}
      {searchQuery && filteredRecommendations.length === 0 && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <p className="text-xl text-muted-foreground">No destinations found matching "{searchQuery}"</p>
            <Button 
              onClick={() => setSearchQuery("")}
              variant="outline"
              className="mt-4"
            >
              Clear Search
            </Button>
          </div>
        </section>
      )}

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
