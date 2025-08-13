import { RestaurantData } from '@/app/types';

export const restaurantData: RestaurantData = {
  project_name: "bellas_bistro_website",
  business_type: "restaurant",
  business_name: "Bella's Bistro",
  tagline: "Authentic Italian Cuisine in the Heart of Downtown",
  description: "Family-owned Italian restaurant serving traditional recipes passed down through three generations, featuring fresh pasta, wood-fired pizza, and an extensive wine collection.",
  brand: {
    primary_color: "#8B4513",
    secondary_color: "#D2691E",
    accent_color: "#228B22",
    logo_text: "Bella's Bistro",
    font_style: "elegant",
    use_gradient: true
  },
  contact_info: {
    phone: "(555) 123-4567",
    email: "info@bellasbistro.com",
    address: {
      street: "123 Main Street",
      city: "Downtown",
      state: "California",
      zip: "90210",
      country: "USA"
    },
    social_media: {
      facebook: "https://facebook.com/bellasbistro",
      instagram: "https://instagram.com/bellasbistro",
      twitter: "",
      linkedin: "",
      youtube: ""
    },
    hours: {
      monday: "Closed",
      tuesday: "5:00 PM - 10:00 PM",
      wednesday: "5:00 PM - 10:00 PM",
      thursday: "5:00 PM - 10:00 PM",
      friday: "5:00 PM - 11:00 PM",
      saturday: "4:00 PM - 11:00 PM",
      sunday: "4:00 PM - 9:00 PM"
    }
  },
  website_structure: {
    sections: {
      hero: {
        enabled: true,
        style: "video_background",
        background_type: "video",
        cta_primary: "View Our Menu",
        cta_secondary: "Make Reservation"
      },
      about: {
        enabled: true,
        story: "Founded in 1952 by Giovanni Rossini, Bella's Bistro has been serving authentic Italian cuisine to our community for over 70 years. What started as a small family trattoria has grown into downtown's most beloved Italian restaurant, while never losing sight of our commitment to traditional recipes and warm hospitality.",
        mission: "To bring the authentic flavors of Italy to your table while creating memorable dining experiences for families and friends.",
        values: ["Authentic Italian Traditions", "Fresh Local Ingredients", "Family-Friendly Atmosphere"],
        team_section: true
      },
      services: {
        enabled: true,
        display_style: "card_grid",
        services_list: [
          {
            name: "Dine-In Experience",
            description: "Enjoy our full menu in our warm, inviting dining room with live acoustic music on weekends",
            price: "Entrees $18-32",
            features: ["Full Bar", "Wine Pairings", "Live Music Weekends"]
          },
          {
            name: "Private Events",
            description: "Host your special occasion in our private dining room for groups up to 40 guests",
            price: "Starting at $45/person",
            features: ["Customized Menus", "Dedicated Service", "Audio/Visual Setup"]
          },
          {
            name: "Catering Services",
            description: "Bring Bella's authentic flavors to your office or home gathering",
            price: "From $12/person",
            features: ["Fresh Preparation", "Delivery Available", "Full Service Options"]
          }
        ]
      },
      testimonials: {
        enabled: true,
        display_style: "carousel",
        testimonials_list: [
          {
            name: "Maria Rodriguez",
            title: "Local Food Critic",
            company: "Downtown Gazette",
            content: "Bella's Bistro transports you straight to Italy with every bite. The osso buco is absolutely divine, and the tiramisu is the best I've had outside of Rome!",
            rating: 5
          },
          {
            name: "James Thompson",
            title: "Regular Customer",
            company: "Thompson Family",
            content: "We've been coming here for family dinners for over 15 years. The Rossini family treats everyone like family, and the food is consistently amazing. Our go-to spot for celebrations!",
            rating: 5
          }
        ]
      }
    }
  }
};