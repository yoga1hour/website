# Yoga 1 Hour — SEO/AEO responsive launch package

## Included
- Clean canonical URLs with directory `index.html` pages.
- Legacy `.html` URL redirects via `.htaccess` plus fallback redirect documents.
- Homepage rebuilt around private Home Yoga, comparison/USP, Class Types, process, FAQs and latest blogs.
- Bangalore-focused SEO titles, meta descriptions, canonical URLs, Open Graph/Twitter metadata and structured data.
- Three new SEO blog articles under `/blog/`.
- Existing Journal articles moved to clean `/blog/.../` URLs.
- Central launch pricing remains in `js/pricing.js`.
- Responsive creative-image grids with local assets and descriptive alt text.
- No internal navigation intentionally points to legacy `.html` URLs.

## Production notes
1. Upload the entire package contents to the web root.
2. Keep `.htaccess` enabled on Apache/LiteSpeed hosting so old `.html` URLs 301 redirect to clean URLs.
3. If the host is Nginx/static-only, implement equivalent 301 rules at the server/CDN layer.
4. Submit `/sitemap.xml` in Google Search Console.
5. Connect verified Google Business Profile/review and consented testimonial videos when their final embed URLs/assets are available; the homepage uses non-broken placeholders rather than inventing third-party proof.


## Update notes — September 2026
- Added responsive Instagram, Facebook, LinkedIn, YouTube and X icons to every live-page footer.
- Added `/privacy-policy/` with privacy and cookie/local-storage details based on the website's current enquiry and WhatsApp workflow.
- Added a responsive cookie-consent banner across live pages. Consent is stored locally under `yoga1hour_cookie_consent`; this implementation does not set advertising or analytics cookies.
- Standardised booking CTAs to `/contact/#booking` and added the booking anchor to the contact form.
- Added the Privacy Policy link to every footer and added the page to `sitemap.xml`.
