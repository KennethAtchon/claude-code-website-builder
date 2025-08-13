export interface ContactInfo {
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  social_media: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
  };
  hours: {
    [key: string]: string;
  };
}

export interface Service {
  name: string;
  description: string;
  price: string;
  features: string[];
}

export interface Testimonial {
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
}

export interface RestaurantData {
  project_name: string;
  business_type: string;
  business_name: string;
  tagline: string;
  description: string;
  brand: {
    primary_color: string;
    secondary_color: string;
    accent_color: string;
    logo_text: string;
    font_style: string;
    use_gradient: boolean;
  };
  contact_info: ContactInfo;
  website_structure: {
    sections: {
      hero: {
        enabled: boolean;
        style: string;
        background_type: string;
        cta_primary: string;
        cta_secondary: string;
      };
      about: {
        enabled: boolean;
        story: string;
        mission: string;
        values: string[];
        team_section: boolean;
      };
      services: {
        enabled: boolean;
        display_style: string;
        services_list: Service[];
      };
      testimonials: {
        enabled: boolean;
        display_style: string;
        testimonials_list: Testimonial[];
      };
    };
  };
}