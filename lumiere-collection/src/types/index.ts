export interface NavigationItem {
  label: string;
  path: string;
}

export interface Collection {
  name: string;
  description: string;
  image: string;
  price_range: string;
  link: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  rating: number;
}

export interface SocialPlatform {
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}