"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export default function Newsletter() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Newsletter signup:", data.email);
      setIsSubmitted(true);
      reset();
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Mail className="w-16 h-16 text-accent mx-auto mb-8" />
            
            <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wider">
              Join Our Circle
            </h2>
            
            <p className="font-secondary text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Be the first to discover new collections and exclusive events
            </p>
          </motion.div>

          <motion.div
            className="max-w-lg mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8"
              >
                <Check className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-primary text-2xl font-semibold text-white mb-2">
                  Welcome to Our Circle
                </h3>
                <p className="font-secondary text-white/80">
                  Thank you for subscribing. You'll receive our latest updates soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className={cn(
                      "w-full h-14 px-6 text-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 rounded-lg focus:border-accent focus:ring-accent",
                      errors.email && "border-red-400 focus:border-red-400 focus:ring-red-400"
                    )}
                    {...register("email")}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <div className="absolute -bottom-6 left-0 flex items-center space-x-2 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.email.message}</span>
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full h-14 bg-accent hover:bg-accent/90 text-black font-medium text-lg rounded-lg uppercase tracking-wider transition-all duration-300 transform hover:scale-105",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      <span>Subscribing...</span>
                    </div>
                  ) : (
                    "Subscribe"
                  )}
                </Button>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center space-x-2 text-red-400 text-sm"
                  >
                    <AlertCircle className="w-4 h-4" />
                    <span>{error}</span>
                  </motion.div>
                )}
              </form>
            )}

            {!isSubmitted && (
              <motion.p
                className="font-secondary text-xs text-white/60 mt-6 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We respect your privacy and will never share your information
              </motion.p>
            )}
          </motion.div>

          {/* Decorative Elements */}
          <div className="flex justify-center space-x-8 mt-16">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="w-2 h-2 bg-accent rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + (item * 0.1) }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}