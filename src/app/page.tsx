"use client"

import { LampContainer } from '@/components/ui/lamp'
import { Brain, Settings, Palette, BarChart3, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Lamp Effect */}
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 text-center"
        >
          {/* Main Heading */}
          <h1 className="bg-gradient-to-br from-foreground/70 to-foreground/50 py-4 bg-clip-text text-3xl sm:text-4xl md:text-7xl font-medium tracking-tight text-transparent mb-6 md:mb-8">
            Empowering SMBs through 
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">AI & Technology</span>
          </h1>

          {/* Problem/Solution Hook */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 md:mb-4 max-w-3xl mx-auto px-4">
            Struggling with manual processes eating up your team's time?
          </p>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            We help SMBs <span className="text-cyan-400 font-semibold">increase productivity by 35%</span> through strategic AI implementation and process automation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-6 md:mt-8 px-4">
            <Link
              href="mailto:nick@nroconsulting.com?subject=Free Consultation Request&body=Hi Nick,%0A%0AI'm interested in a free 15-minute consultation to discuss how AI and automation could help my business.%0A%0A"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors duration-200 w-full sm:w-auto text-center justify-center"
            >
              <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Free 15-Min Consultation
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border border-border hover:bg-accent text-foreground font-medium rounded-lg transition-colors duration-200 w-full sm:w-auto text-center justify-center"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </LampContainer>
      
      {/* Trust Signals Section */}
      <section className="py-12 md:py-16 bg-background border-b border-border/20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
              Why Choose NRO Consulting?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
              Proven expertise in transforming SMB operations through strategic technology implementation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center px-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-xl md:text-2xl font-bold text-primary">5+</span>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">Years Experience</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Deep expertise in AI strategy, automation, and digital transformation for SMBs
              </p>
            </div>
            
            <div className="text-center px-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-xl md:text-2xl font-bold text-primary">✓</span>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">No Upfront Costs</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Risk-free consultation and strategic planning. Pay only when you see results
              </p>
            </div>
            
            <div className="text-center px-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-xl md:text-2xl font-bold text-primary">90</span>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">Day Results</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Rapid implementation with measurable productivity gains within 3 months
              </p>
            </div>
          </div>
          
          <div className="mt-8 md:mt-12 text-center px-4">
            <div className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-accent/50 border border-border rounded-lg">
              <span className="text-xs sm:text-sm text-foreground text-center">
                <span className="font-semibold text-primary">Guarantee:</span> If you don't see measurable improvements within 90 days, we'll refund your investment
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-card/50 backdrop-blur-sm border border-border p-8 rounded-xl hover:bg-card/70 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Brain className="w-12 h-12 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                AI Strategy & Implementation
              </h3>
              <p className="text-muted-foreground">
                Develop comprehensive AI adoption strategies tailored to your business needs 
                and implement solutions that deliver measurable results.
              </p>
            </div>
            
            <div className="text-center bg-card/50 backdrop-blur-sm border border-border p-8 rounded-xl hover:bg-card/70 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Settings className="w-12 h-12 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                Technology Consulting
              </h3>
              <p className="text-muted-foreground">
                Provide expert guidance on technology decisions, architecture, 
                and digital transformation initiatives.
              </p>
            </div>
            
            <div className="text-center bg-card/50 backdrop-blur-sm border border-border p-8 rounded-xl hover:bg-card/70 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Palette className="w-12 h-12 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                Web Design & Development
              </h3>
              <p className="text-muted-foreground">
                Create beautiful, functional websites and applications that represent 
                your brand and serve your customers.
              </p>
            </div>
            
            <div className="text-center bg-card/50 backdrop-blur-sm border border-border p-8 rounded-xl hover:bg-card/70 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <BarChart3 className="w-12 h-12 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                Process Automation
              </h3>
              <p className="text-muted-foreground">
                Identify and automate repetitive tasks to increase efficiency 
                and reduce operational costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-12">
            Let's Work Together
          </h2>
          
          <div className="flex justify-center">
            <a
              href="mailto:nick@nroconsulting.com?subject=Consulting Inquiry&body=Hi Nick,%0A%0AI'm interested in learning more about your consulting services.%0A%0A"
              className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background text-foreground py-12">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="bg-primary text-primary-foreground rounded-lg p-2 text-sm font-bold">
              NRO
            </div>
            <span className="font-bold text-lg">Consulting</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 NRO Consulting. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
