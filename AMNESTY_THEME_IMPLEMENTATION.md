# Amnesty International Theme Implementation

## Overview
This document outlines the Amnesty International brand theme transformation applied to the job system application. The update includes new branding assets, color scheme, and design elements that align with Amnesty International's identity.

## Changes Made

### 1. Brand Assets & Logos
**Location:** `/public/images/`

Four official Amnesty International logos have been added:
- **amnesty-logo-yellow.png** - Yellow background with black candle symbol (primary header logo)
- **amnesty-logo-black.jpg** - Black background with yellow text and candle symbol (footer logo)
- **amnesty-candle-symbol.png** - The iconic candle wrapped in barbed wire symbol
- **amnesty-campaign.jpg** - Campaign photography showing Amnesty activists

All logos are now referenced in:
- Header component (`components/layout/header.tsx`)
- Footer component (`components/layout/footer.tsx`)
- Layout metadata (`app/layout.tsx`)

### 2. Color Scheme Update
**File:** `/app/globals.css`

The application now uses the official Amnesty International color palette:

#### Light Mode (`:root`)
- **Primary Color:** Amnesty Yellow (`oklch(0.97 0.21 110)` ≈ `#FFFF00`)
- **Secondary Color:** Black (`oklch(0.2 0 0)` ≈ `#000000`)
- **Background:** White (`oklch(1 0 0)`)
- **Foreground:** Black/Dark Gray (`oklch(0.2 0 0)`)

#### Dark Mode (`.dark`)
- **Primary Color:** Amnesty Yellow (`oklch(0.97 0.21 110)`)
- **Secondary Color:** Black background (`oklch(0.2 0 0)`)
- **Maintains contrast and accessibility** for all interactive elements

All design tokens have been updated including:
- `--primary` and `--primary-foreground`
- `--secondary` and `--secondary-foreground`
- `--accent` and `--accent-foreground`
- `--ring` and chart colors
- Sidebar colors and states

### 3. Footer Styling
**File:** `components/layout/footer.tsx`

- Background changed from blue (`#0468B1`) to black (`#000000`)
- Text remains white for optimal contrast
- Logo background updated to complement the black footer
- Social media icons and links styled for better visibility on dark background

### 4. Metadata Updates
**File:** `app/layout.tsx`

Updated all branding references:
- Page title: "Amnesty International"
- Description: "Amnesty International campaigns for justice, freedom, and dignity for people everywhere."
- Favicon updated to use new yellow logo
- Open Graph image updated for social sharing
- Apple touch icon updated
- Twitter card image updated

## Database & Integrations

### Supabase Integration
The application uses Supabase for data persistence and authentication:

**Database Schema** includes:
- **users** - User accounts and profiles with role-based access
- **countries** - Global country/region information
- **jobs** - Career opportunities and positions
- **job_applications** - Application tracking system
- **news** - News and article content
- **resources** - Educational and reference materials
- **issues** - Human rights issues and topics
- **comments** - User comments and discussions
- **file_uploads** - File storage tracking

**Row Level Security (RLS)** is enabled on all tables with policies for:
- Public content access (open jobs, published news, active issues)
- Authenticated user access (job applications, comments, profile updates)
- Admin/Editor only access (content creation and management)

### Vercel Blob Integration
File storage is configured for:
- Resume uploads for job applications
- Image uploads for news and content
- Profile avatars and media assets
- Document storage for resources

**Access Level:** Private (requires authentication for upload/download)

### SQL Scripts
Database setup scripts are located in `/scripts/`:

1. **setup-database.sql** - Main schema and configuration
2. **001_create_tables.sql** - Initial table creation
3. **002_seed_countries.sql** - Sample country data
4. Additional migration scripts for specialized features

To execute these scripts:
1. Connect to your Supabase project
2. Go to the SQL Editor
3. Copy and paste the script content
4. Execute the script

## Design Guidelines

### Color Usage
- **Yellow (#FFFF00)** - Primary call-to-action buttons, links, highlights
- **Black (#000000)** - Text, backgrounds, navigation, footer
- **White** - Card backgrounds, text on dark backgrounds
- **Grays** - Borders, disabled states, secondary elements

### Typography
- Font family: Source Sans 3 (configured in layout.tsx)
- Headings: Bold weights (600-700)
- Body text: Regular weight (400) with line height 1.4-1.6

### Accessibility
- Contrast ratio of 7:1+ for text on colored backgrounds
- Interactive elements have clear focus states in yellow
- Semantic HTML and ARIA labels throughout
- Screen reader support for all interactive components

## Testing & Verification

The theme has been tested and verified:
- ✓ Homepage loads with correct branding
- ✓ Yellow logo displays in header with proper contrast
- ✓ Footer shows black background with white text and yellow logo
- ✓ All navigation links styled with Amnesty color scheme
- ✓ Responsive design works on mobile and desktop
- ✓ Dark mode theme applies consistently
- ✓ All buttons and interactive elements use brand colors

## Browser Support
The theme uses modern CSS features and is compatible with:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Next Steps

1. **Content Update** - Review and update existing content to align with Amnesty values
2. **Additional Pages** - Apply theme to careers, about, and countries pages
3. **Image Optimization** - Add country-specific imagery and campaign photos
4. **Database Population** - Seed country data and job listings using provided scripts
5. **Deployment** - Deploy to Vercel with the updated theme

## Environment Variables Required

Ensure these are set in your Vercel project:
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `BLOB_READ_WRITE_TOKEN` - Vercel Blob storage token

## Support & Resources

- [Amnesty International Official Site](https://www.amnesty.org/)
- [Supabase Documentation](https://supabase.com/docs)
- [Vercel Blob Documentation](https://vercel.com/docs/storage/vercel-blob)
- [Next.js Documentation](https://nextjs.org/docs)

---

**Last Updated:** May 25, 2026
**Theme Version:** 1.0
**Branch:** amnesty-international-theme
