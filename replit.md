# Bonzi Frontend - E-commerce Marketplace

## Overview
A modern Next.js e-commerce application featuring a responsive product marketplace with categories, product carousels, and shopping functionality. The application showcases various product categories from electronics to home goods with a clean, modern UI built with Tailwind CSS.

## Recent Changes
- **2025-09-21**: Successfully imported from GitHub and configured for Replit environment
- Configured Next.js development server for host 0.0.0.0:5000
- Added allowedDevOrigins configuration for Replit proxy compatibility
- Set up build and deployment configuration for production
- Added cache control headers for optimal performance

## Project Architecture
- **Framework**: Next.js 14.2.32 with React 18
- **Styling**: Tailwind CSS with PostCSS
- **Icons**: React Icons library for UI elements
- **Pages Structure**: 
  - Home page with product listings and categories
  - Product detail pages with dynamic routing
  - Authentication pages (login/register)
  - API routes for backend functionality
- **Components**: Modular component structure with reusable ProductCard, Carousel, and Layout components

## Development Setup
- **Port**: 5000 (frontend only)
- **Host**: 0.0.0.0 for Replit proxy compatibility
- **Hot Reload**: Enabled with Next.js development server
- **Build System**: Next.js with automatic optimization

## Key Features
- Responsive design for mobile, tablet, and desktop
- Product categories with filtering
- Product carousels and galleries
- Shopping cart functionality structure
- User authentication pages
- Cache control for optimal performance in Replit environment

## Deployment Configuration
- **Target**: Autoscale (suitable for stateless frontend)
- **Build Command**: npm run build
- **Start Command**: npm start
- **Environment**: Configured for Replit proxy with allowedDevOrigins