import { Card, CardContent } from "@/components/ui/card";
import { Globe, Heart, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Global Expertise",
      description: "Years of experience curating the world's most memorable destinations and authentic travel experiences."
    },
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: "Passionate Service",
      description: "We're driven by our love for travel and commitment to helping you discover your perfect getaway."
    },
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      title: "Quality First",
      description: "Every recommendation is personally vetted to ensure you experience only the best destinations."
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Community Focused",
      description: "Join thousands of satisfied travelers who have discovered their dream destinations with us."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-foreground">About TravelGuide</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted companion for discovering the world's most extraordinary destinations
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-none shadow-lg">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                At TravelGuide, we believe that travel has the power to transform lives, broaden perspectives, 
                and create lasting memories. Our mission is to inspire and empower travelers to explore the 
                world with confidence and wonder.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We carefully curate recommendations for beaches, temples, and destinations across the globe, 
                ensuring each suggestion offers unique experiences and authentic cultural connections. Whether 
                you're seeking relaxation, adventure, or spiritual enlightenment, we're here to guide your journey.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">What Drives Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded by a team of passionate travelers and cultural enthusiasts, TravelGuide was born 
                  from a simple idea: everyone deserves to experience the world's most beautiful destinations 
                  without the stress of planning.
                </p>
                <p>
                  Over the years, we've personally visited and reviewed hundreds of locations, from tropical 
                  beach paradises to ancient temple complexes and diverse country landscapes. Each recommendation 
                  comes from genuine experience and deep appreciation for what makes each destination special.
                </p>
                <p>
                  Today, we're proud to help thousands of travelers discover their perfect vacation spots, 
                  create unforgettable memories, and return home with stories that last a lifetime. Join us 
                  on this incredible journey of exploration and discovery.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
