'use client';

import { Separator } from '@/components/ui/separator';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';
import { 
  Github, 
  MessageCircle, 
  Mail, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { SubjectIcon } from '@/components/ui/icons';

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'API', href: '#api' },
    { name: 'Documentation', href: '#docs' }
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ],
  resources: [
    { name: 'Help Center', href: '/help' },
    { name: 'Community', href: '/community' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Support', href: '/support' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' }
  ]
};

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/zemon' },
  { name: 'Discord', icon: MessageCircle, href: 'https://discord.gg/zemon' },
  { name: 'Email', icon: Mail, href: 'mailto:hello@zemon.com' }
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <SubjectIcon className="w-8 h-8 text-primary mr-2" />
              <span className="text-2xl font-bold">Quild</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Built for the Builder Within You. The ultimate platform for college students to learn, build, and showcase their programming skills.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card/50 border border-border/50 flex items-center justify-center hover:bg-card hover:border-primary/50 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    {link.name}
                    {link.href.startsWith('http') && (
                      <ExternalLink className="w-3 h-3 ml-1" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2025 Zemon. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>Made with ❤️ for builders</span>
              <span>•</span>
              <span>Built with Next.js & ShadCN/UI</span>
            </div>
            
            {/* Theme Switcher */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Theme:</span>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 