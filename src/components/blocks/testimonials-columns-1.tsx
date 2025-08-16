"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col items-center gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div 
                  className="p-6 rounded-2xl border border-border/50 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] max-w-xs w-full group" 
                  key={i}
                >
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <svg 
                      className="w-6 h-6 text-primary/30 group-hover:text-primary/50 transition-colors duration-300" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>

                  {/* Testimonial Text */}
                  <div className="text-sm leading-relaxed text-muted-foreground mb-6 group-hover:text-foreground transition-colors duration-300">
                    &ldquo;{text}&rdquo;
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Image
                        width={48}
                        height={48}
                        src={image}
                        alt={name}
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-border/50 group-hover:ring-primary/30 transition-all duration-300"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-sm tracking-tight leading-5 text-foreground group-hover:text-primary transition-colors duration-300">
                        {name}
                      </div>
                      <div className="text-xs leading-5 opacity-70 tracking-tight text-muted-foreground group-hover:opacity-90 transition-opacity duration-300">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};