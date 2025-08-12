import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { restaurantData } from '@/app/lib/data';

export default function Footer() {
  const { contact_info, business_name, tagline } = restaurantData;

  return (
    <footer className="bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">{business_name}</h3>
            <p className="text-amber-200 mb-6 text-lg">{tagline}</p>
            <p className="text-amber-100 leading-relaxed">
              Experience authentic Italian cuisine crafted with love and tradition. 
              Join us for an unforgettable dining experience that brings the warmth 
              of Italy to your table.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-200">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-amber-300" />
                <span className="text-sm">{contact_info.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-amber-300" />
                <span className="text-sm">{contact_info.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-amber-300 mt-1" />
                <div className="text-sm">
                  <div>{contact_info.address.street}</div>
                  <div>{contact_info.address.city}, {contact_info.address.state} {contact_info.address.zip}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-200">Hours</h4>
            <div className="space-y-2">
              {Object.entries(contact_info.hours).map(([day, hours]) => (
                <div key={day} className="flex justify-between text-sm">
                  <span className="capitalize font-medium">{day}:</span>
                  <span className={hours === 'Closed' ? 'text-amber-300' : ''}>{hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="border-t border-amber-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {contact_info.social_media.facebook && (
                <a 
                  href={contact_info.social_media.facebook} 
                  className="text-amber-200 hover:text-white transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Facebook size={24} />
                </a>
              )}
              {contact_info.social_media.instagram && (
                <a 
                  href={contact_info.social_media.instagram} 
                  className="text-amber-200 hover:text-white transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Instagram size={24} />
                </a>
              )}
            </div>
            <div className="text-sm text-amber-200">
              © 2024 {business_name}. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}