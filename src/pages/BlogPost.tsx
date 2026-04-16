import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, Calendar, Tag } from "lucide-react";
import blogProptech from "@/assets/blog-proptech-portfolio.png";
import blogPhiladelphia from "@/assets/blog-philadelphia-summit.jpg";
import blogTechConsolidation from "@/assets/blog-tech-consolidation.png";
import blogPortfolio from "@/assets/blog-portfolio-intelligence.png";
import blogCanniff from "@/assets/blog-canniff-building.jpg";
import blogSOC2 from "@/assets/blog-soc2-certification.png";
import blog12000Doors from "@/assets/blog-12000-doors.png";
import blogDemetrios from "@/assets/blog-demetrios-barnes.jpg";
import blogUnified from "@/assets/blog-unified-infrastructure.png";

const blogPosts: Record<string, { title: string; category: string; date: string; image: string; content: string }> = {
  "proptech-portfolio": {
    title: "Most PropTech Solves One Problem. 1VALET Solves Portfolio Complexity.",
    category: "Industry Insights",
    date: "April 7, 2026",
    image: blogProptech,
    content: `
The operators winning in multifamily today aren't the ones with the most tools. They're the ones who consolidated.

## The Problem with Fragmented Tech Stacks

Most property management teams juggle 12-15 different software vendors. Each solves one problem brilliantly but creates integration headaches, data silos, and resident frustration.

## The 1VALET Difference

1VALET was built from the ground up as a unified platform. Hardware, software, and services — all working together seamlessly.

### Key Benefits:
- **Single vendor accountability** — no more finger-pointing between vendors
- **Unified data layer** — insights across your entire portfolio
- **Resident experience** — one app for everything, opened 4x daily
- **Operator efficiency** — one dashboard for all building systems

## The ROI of Consolidation

Operators who've switched to 1VALET report:
- 30% reduction in technology costs
- 50% faster issue resolution
- 25% increase in resident satisfaction scores
- Significant NOI growth through operational efficiency

The future of multifamily technology isn't more tools. It's better integration.
    `
  },
  "philadelphia-summit": {
    title: "1VALET at the Philadelphia Multifamily Summit by Bisnow",
    category: "Events",
    date: "April 2, 2026",
    image: blogPhiladelphia,
    content: `
Join us at Bisnow's Philadelphia Multifamily Summit to learn about unified smart building platforms.

## Event Details

**Date:** April 15, 2026  
**Location:** Philadelphia Convention Center  
**Time:** 8:00 AM - 5:00 PM

## What to Expect

Our team will be presenting on:
- The future of smart building technology
- How unified platforms drive NOI growth
- Real case studies from Philadelphia properties
- Live product demonstrations

## Schedule a Meeting

Stop by our booth or schedule a private demo to see how 1VALET can transform your property operations.

We look forward to connecting with Philadelphia's multifamily community!
    `
  },
  "tech-consolidation": {
    title: "The Multifamily Industry Has Adopted Technology. It Hasn't Consolidated It.",
    category: "Industry Insights",
    date: "April 1, 2026",
    image: blogTechConsolidation,
    content: `
Fragmented tech stacks are costing operators millions. Here's how consolidation changes the game.

## The Current State

The average Class A property uses 15+ technology vendors. This creates:
- Data silos that prevent actionable insights
- Resident frustration with multiple apps and portals
- Operational inefficiency from switching between systems
- Higher total cost of ownership

## The Consolidation Imperative

Leading operators are recognizing that technology consolidation isn't just about cost savings — it's about creating a competitive advantage through:

1. **Unified resident experience** — One app for all interactions
2. **Integrated operations** — All systems speaking the same language
3. **Portfolio intelligence** — Data-driven decisions across properties
4. **Vendor accountability** — Single point of contact and support

## Making the Transition

Consolidation doesn't happen overnight, but the roadmap is clear:
1. Audit your current tech stack
2. Identify integration pain points
3. Prioritize platforms that offer breadth and depth
4. Plan a phased migration

The operators who consolidate first will have a significant advantage in resident retention and operational efficiency.
    `
  },
  "portfolio-intelligence": {
    title: "Why Portfolio Intelligence Is the Next Competitive Advantage",
    category: "Industry Insights",
    date: "March 30, 2026",
    image: blogPortfolio,
    content: `
Data-driven building management is no longer optional — it's the new standard for competitive multifamily.

## What is Portfolio Intelligence?

Portfolio intelligence means having real-time visibility and actionable insights across all your properties, from a single dashboard.

## The Four Pillars

1. **Operational Data** — System uptime, maintenance requests, response times
2. **Resident Engagement** — App usage, amenity bookings, satisfaction scores
3. **Financial Metrics** — Rent collection, cost per unit, ROI on technology
4. **Security & Access** — Entry logs, package deliveries, incident reports

## From Reactive to Proactive

With portfolio intelligence, operators can:
- Predict maintenance issues before they occur
- Identify properties needing attention
- Benchmark performance across the portfolio
- Make data-driven capital allocation decisions

## The Competitive Edge

Operators with strong portfolio intelligence are seeing:
- 20% faster decision-making
- 35% reduction in operational costs
- Higher asset valuations at disposition
- Better resident retention rates

In today's market, data isn't just information — it's your competitive advantage.
    `
  },
  "canniff-mill": {
    title: "Canniff Mill Residences: When a Technology Partner Has to Step Up",
    category: "Client Highlight",
    date: "March 25, 2026",
    image: blogCanniff,
    content: `
How 1VALET delivered a full smart building deployment under tight timelines for this premium property.

## The Challenge

Canniff Mill Residences needed a complete smart building solution deployed in just 8 weeks before lease-up began.

## The Solution

1VALET mobilized our full deployment team to deliver:
- 43" Smart Intercom consoles in the lobby
- Complete access control integration
- Resident app setup and customization
- Management portal configuration
- Staff training and support

## The Results

✅ Deployed on time, before lease-up  
✅ Zero downtime during move-in  
✅ 95% resident app adoption in first week  
✅ Property achieved 98% occupancy in 60 days  

## Client Testimonial

*"1VALET didn't just deliver technology — they delivered peace of mind. Their team was on-site every day, solving problems before they became issues."*  
— Property Manager, Canniff Mill Residences

This is what partnership looks like.
    `
  },
  "soc2-certification": {
    title: "1VALET Achieves SOC 2 Type I Certification",
    category: "Press Release",
    date: "March 2, 2026",
    image: blogSOC2,
    content: `
Demonstrating our commitment to enterprise-grade security and data protection standards.

## What is SOC 2?

SOC 2 (System and Organization Controls) is a rigorous auditing standard that evaluates how organizations manage customer data based on five trust principles:
- Security
- Availability
- Processing Integrity
- Confidentiality
- Privacy

## Why It Matters

For property owners and residents, SOC 2 Type I certification means:
- **Validated security controls** — Independently audited and verified
- **Data protection** — Your resident data is secure
- **Enterprise readiness** — Meets institutional-grade requirements
- **Continuous monitoring** — Ongoing commitment to security

## What's Next

We're already working toward SOC 2 Type II certification, which evaluates the operational effectiveness of controls over time.

Security isn't a feature — it's a foundation. And we're committed to keeping it rock-solid.
    `
  },
  "12000-doors": {
    title: "1VALET Rolling Out 12,000 Door Portfolio",
    category: "Press Release",
    date: "February 23, 2026",
    image: blog12000Doors,
    content: `
One of the largest smart building deployments in North America.

## The Scale

12,000 doors across 45 properties in 12 cities. This is transformational.

## What's Being Deployed

- Smart access control for every entry point
- Video intercom systems in all lobbies
- Resident app with digital keys
- Centralized management portal
- Package scanning and delivery automation

## The Impact

For residents:
- Seamless building access via smartphone
- Integrated package notifications
- One app for all building interactions

For operators:
- Complete visibility across the portfolio
- Reduced staffing costs through automation
- Data-driven operational insights
- Enhanced security and compliance

## The Timeline

Phased rollout over 18 months, with first properties going live in Q2 2026.

This deployment solidifies 1VALET's position as the leading smart building platform for large-scale multifamily portfolios.
    `
  },
  "demetrios-barnes-ceo": {
    title: "SmartRent Co-Founder Joins 1VALET as CEO",
    category: "Press Release",
    date: "February 18, 2026",
    image: blogDemetrios,
    content: `
Demetrios Barnes brings deep proptech and capital markets experience to accelerate growth.

## About Demetrios

Demetrios Barnes co-founded SmartRent and grew it to become one of the most recognized names in multifamily technology. His expertise spans:
- Product development and innovation
- Capital markets and investor relations
- Strategic partnerships and growth
- Operational excellence at scale

## His Vision

*"The future of multifamily technology is unified platforms, not fragmented point solutions. 1VALET has built exactly what the industry needs — a complete operating system for smart buildings. I'm honored to lead this incredible team as we scale globally."*

## What This Means

With Demetrios at the helm, 1VALET will:
- Accelerate product development
- Expand into new markets (including India and UAE)
- Deepen integrations with major PMS platforms
- Scale operations to support rapid growth

The best is yet to come.
    `
  },
  "india-launch": {
    title: "1VALET Officially Launches in India's Premium Real Estate Market",
    category: "India Launch",
    date: "January 15, 2026",
    image: blogUnified,
    content: `
Bringing world-class smart building technology to Mumbai, Delhi NCR, Bangalore and beyond.

## Why India?

India's real estate market is experiencing unprecedented growth, with premium developers seeking world-class technology to differentiate their properties.

## What We're Bringing

- **Smart Intercom systems** designed for Indian climate conditions (up to 55°C)
- **Resident app** with UPI and local payment integration
- **Management portal** integrated with local property management systems
- **24/7 local support** from our Mumbai office

## Market Opportunity

- 500+ premium residential towers under construction in top 5 cities
- Growing demand for smart home features from affluent buyers
- Developers seeking differentiation in competitive market
- Government push for smart city infrastructure

## Local Partnerships

We're working with India's leading developers and property management companies to bring 1VALET's platform to market.

## Get Started

Indian developers and property managers: Schedule a demo to see how 1VALET can transform your properties.

The future of smart living in India starts now. 🇮🇳
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold font-display mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="text-primary font-semibold hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Back button */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              {post.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight mb-6">
            {post.title}
          </h1>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl overflow-hidden mb-12"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="prose prose-lg prose-invert max-w-none"
        >
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return <h2 key={index} className="text-2xl font-bold font-display mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
            }
            if (paragraph.startsWith('### ')) {
              return <h3 key={index} className="text-xl font-semibold font-display mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
            }
            if (paragraph.startsWith('- **')) {
              const match = paragraph.match(/- \*\*(.+?)\*\* — (.+)/);
              if (match) {
                return (
                  <li key={index} className="flex items-start gap-2 my-2">
                    <span className="text-primary font-semibold">{match[1]} —</span>
                    <span className="text-muted-foreground">{match[2]}</span>
                  </li>
                );
              }
            }
            if (paragraph.startsWith('- ')) {
              return <li key={index} className="text-muted-foreground my-1">{paragraph.replace('- ', '')}</li>;
            }
            if (paragraph.match(/^\d+\./)) {
              const match = paragraph.match(/\d+\.\s+\*\*(.+?)\*\* — (.+)/);
              if (match) {
                return (
                  <li key={index} className="flex items-start gap-2 my-3">
                    <span className="text-primary font-semibold">{match[1]} —</span>
                    <span className="text-muted-foreground">{match[2]}</span>
                  </li>
                );
              }
            }
            if (paragraph.startsWith('✅')) {
              return <p key={index} className="text-primary my-2">{paragraph}</p>;
            }
            if (paragraph.startsWith('"') && paragraph.endsWith('"')) {
              return (
                <blockquote key={index} className="border-l-4 border-primary pl-4 my-6 italic text-muted-foreground">
                  {paragraph.replace(/"/g, '')}
                </blockquote>
              );
            }
            if (paragraph.trim() === '') return null;
            return <p key={index} className="text-muted-foreground leading-relaxed my-4">{paragraph}</p>;
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 p-8 glass-card rounded-2xl"
        >
          <h3 className="text-2xl font-bold font-display mb-4">Ready to Transform Your Properties?</h3>
          <p className="text-muted-foreground mb-6">
            Schedule a personalized demo and see how 1VALET can elevate your building operations.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:brightness-110 transition-all glow-green"
          >
            Free Consultation
          </Link>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPost;
