# CONTINUE_PROMPT.md — Royal Goa Ride Website Redesign
## Updated after Session 3

### Project
Transform https://royalgoaride.com into Goa's highest-converting car rental website.
GitHub: https://github.com/sayedsalma765421-rgb/royal-goa-ride-/tree/main
Rules: No Bootstrap/Tailwind/jQuery. Vanilla HTML/CSS/JS only. SEO score 100. WhatsApp as primary CTA everywhere.

---

### COMPLETED FILES ✅

| File | Status | Notes |
|---|---|---|
| AUDIT.md | ✅ Done | Full 20+ issue audit |
| index.html | ✅ Done | Full homepage — hero, quiz, estimator, fleet preview, reviews, FAQ, guides |
| complete-fleet.html | ✅ Done | 12 vehicles, filter by type, compare modal |
| vehicle/creta-rental-goa.html | ✅ Done | Full vehicle page template with gallery, pricing tiers, specs, FAQ, sidebar |
| faq/index.html | ✅ Done | Searchable FAQ with 7 groups, live search, category sidebar nav |
| contact.html | ✅ Done | WhatsApp-first contact, 6 message templates, response promise, trust stats |

---

### STILL TO BUILD (priority order)

#### PRIORITY 1 — Remaining vehicle pages (use creta-rental-goa.html as template)
These are thin clones of the Creta template. Change: name, slug, price, deposit, specs, tagline, FAQ content, WhatsApp pre-filled text, schema.

**vehicle/maruti-swift-rental-goa.html**
- Price: ₹1,200/day · Deposit: ₹5,000
- Specs: 5 seats, Manual, Petrol, Unlimited KM
- Tagline: Goa's most fuel-efficient beach hopper
- Best for: Solo, Couples, Budget travelers

**vehicle/baleno-rental-goa.html**
- Price: ₹1,200/day · Deposit: ₹5,000
- Specs: 5 seats, Manual/Auto, Petrol
- Tagline: Premium hatchback with touchscreen

**vehicle/i20-rental-goa.html**
- Price: ₹1,400/day · Deposit: ₹5,000
- Specs: 5 seats, Manual/iMT, Petrol, Sunroof option

**vehicle/innova-rental-goa.html**
- Price: ₹3,500/day · Deposit: ₹10,000
- Specs: 7 seats, Manual, Diesel, Hill-ready
- Best for: Families, Groups

**vehicle/fortuner-rental-goa.html**
- Price: ₹6,000/day · Deposit: ₹15,000
- Specs: 7 seats, Auto, Diesel, Premium
- Best for: Corporate, Premium

**vehicle/luxury-car-rental-goa.html**
- Overview page listing Mercedes C300 + Audi A3
- On Request pricing
- Best for: Weddings, special occasions

**vehicle/mercedes-c300-rental-goa.html**
- On Request
- Chauffeur available
- Best for: Weddings, elite travel

**vehicle/audi-a3-rental-goa.html**
- On Request
- Sport mode
- Best for: Special occasions, driving enthusiasts

#### PRIORITY 2 — Supporting pages

**routes.html** (linked as /routes.html AND /guild/routes)
- 8–10 popular Goa driving routes
- Each route: name, start/end, distance, drive time, best season, recommended vehicle, 1–2 highlights
- Routes: North Goa Circuit, South Goa Beaches, Dudhsagar Falls, Panjim Heritage, Sunset Coastal, Spice Farm Loop, Basilica of Bom Jesus, Old Goa Heritage
- Internal CTA boxes after every 2 routes: "Taking this route? Book a [recommended vehicle]"
- Article schema + Breadcrumb schema

**tourist-places.html** (linked as /tourist-places.html AND /guild/tourist-places)
- Grid of 12–15 Goa tourist spots
- Each card: place name, short description, distance from Margao, recommended vehicle, tip
- Category filter: Beaches / Heritage / Nature / Nightlife / Food
- Schema: TouristAttraction for each place

**guild/rental-policies.html**
- Comprehensive rental terms
- Sections: Booking / Fuel / Deposit / Damage / Extensions / Cancellation / Documents
- Plain language, not legalese
- Schema: WebPage

**privacy-policy.html**
- Standard privacy policy
- GDPR-friendly language
- Sections: Data collected / Use / Cookies / Third parties / Contact

#### PRIORITY 3 — Blog/SEO content pages

**blog/goa-travel-guide.html**
- Long-form: "Complete Goa Travel Guide 2024"
- H2 sections: Getting Around / Best Time to Visit / North vs South / Hidden Beaches / Food / Where to Stay
- Mid-article CTA boxes: "Exploring North Goa? Book a Creta from ₹2,200/day"
- Article schema · 8–10 min read time
- Internal links to fleet and vehicle pages

**blog/best-beaches-in-goa.html**
- "15 Best Beaches in Goa — Ranked by a Local"
- Each beach: description, how to get there by car, parking notes, best time
- Recommended vehicle for beach type (quiet/crowded/remote)
- Article schema

**blog/self-drive-tips.html**
- "Goa Driving Guide for First-Timers"
- Sections: Road rules / Traffic / Parking / Monsoon tips / Speed limits / Police checkpoints / Emergency numbers
- Article schema

#### PRIORITY 4 — Location landing pages (SEO)
These are thin pages targeting location-specific searches. Template:
- Hero: "Car Rental in [Location], Goa"
- What's nearby, how we deliver there
- 4 vehicle cards
- LocalBusiness + Breadcrumb schema
- Canonical to /location/[slug]

Pages needed:
- location/goa-airport-car-rental.html
- location/north-goa-car-rental.html
- location/south-goa-car-rental.html
- location/calangute-car-rental.html
- location/baga-car-rental.html
- location/candolim-car-rental.html (create at location/candolim-car-rental.html)
- location/anjuna-car-rental.html
- location/vagator-car-rental.html
- location/morjim-car-rental.html
- location/panjim-car-rental.html
- location/margao-car-rental.html
- location/vasco-car-rental.html

---

### Design Tokens (use on every page, never change)
```css
--navy: #0B1829
--navy-mid: #122035
--teal: #0D9488
--teal-light: #14B8AA
--gold: #C9A84C
--gold-light: #E8C872
--sand: #F5F0E8
Font display: Playfair Display (headings)
Font body: Inter (body)
```

### Business Info (use everywhere)
- Phone: +91 99753 56697
- WhatsApp: https://wa.me/919975356697
- Email: bookingsroyalgoa@gmail.com
- Address: Near Madgao Railway Station, Margao, Goa 403601
- Google Rating: 4.9 stars, 847 reviews

### Vehicle Pricing Reference
| Vehicle | Rate/day | Deposit |
|---|---|---|
| Maruti Swift / Baleno | ₹1,200 | ₹5,000 |
| Hyundai i20 | ₹1,400 | ₹5,000 |
| Hyundai Creta | ₹2,200 | ₹7,000 |
| Mahindra Thar | ₹3,500 | ₹10,000 |
| Toyota Innova | ₹3,500 | ₹10,000 |
| Toyota Fortuner | ₹6,000 | ₹15,000 |
| Mercedes C300 / Audi A3 | On Request | On Request |

### Instructions for Next Claude Instance
1. Read this file fully first
2. Copy nav + footer from contact.html — identical on all pages
3. Build vehicle pages in this order: swift → innova → fortuner → luxury overview → mercedes → audi → baleno → i20
4. For vehicle pages: use creta-rental-goa.html as template; change name, slug, specs, pricing, FAQ, WhatsApp pre-fill, and schema
5. Then build: routes.html, tourist-places.html, guild/rental-policies.html, privacy-policy.html
6. Then build blog pages (long-form content)
7. Then build location pages (thin, SEO-targeted)
8. All files go to /mnt/user-data/outputs/royal-goa-ride/ with correct subdirectory structure
9. Maintain reveal animations (IntersectionObserver), sticky mobile CTA, WhatsApp float on every page
10. Every page must have: skip link, breadcrumb schema, LocalBusiness schema, ARIA labels

### Output Directory
```
royal-goa-ride/
  AUDIT.md ✅
  CONTINUE_PROMPT.md ✅
  index.html ✅
  complete-fleet.html ✅
  contact.html ✅
  faq/index.html ✅
  vehicle/
    creta-rental-goa.html ✅
    maruti-swift-rental-goa.html ← NEXT
    innova-rental-goa.html
    fortuner-rental-goa.html
    luxury-car-rental-goa.html
    mercedes-c300-rental-goa.html
    audi-a3-rental-goa.html
    baleno-rental-goa.html
    i20-rental-goa.html
  routes.html
  tourist-places.html
  guild/
    rental-policies.html
    routes.html → (same as routes.html, or redirect)
    tourist-places.html → (same as tourist-places.html)
  blog/
    goa-travel-guide.html
    best-beaches-in-goa.html
    self-drive-tips.html
  location/
    goa-airport-car-rental.html
    north-goa-car-rental.html
    south-goa-car-rental.html
    calangute-car-rental.html
    baga-car-rental.html
    anjuna-car-rental.html
    (etc.)
  privacy-policy.html
```
