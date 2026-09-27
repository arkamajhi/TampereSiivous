# Tampere Siivous — static bilingual website

A complete Finnish/English static website for **tamperesiivous.com**, designed for GitHub Pages and focused on office and commercial cleaning in Tampere.

## What is included

- 101 HTML pages across Finnish and English
- Full commercial-service taxonomy: maintenance cleaning, specialist cleaning and add-on services
- Dedicated pages for office, retail, hotel, restaurant, healthcare, stairwell, industrial, shopping-centre and automotive premises
- Company, experiences, recruitment, blog, feedback, billing, responsibility, FAQ, contact, quote and privacy sections
- Six practical SEO/editorial articles in Finnish with English counterparts
- Existing Tampere-specific landing pages retained alongside the new generic service pages
- Mobile navigation and sticky mobile quote CTA
- LocalBusiness, Service, FAQ and Breadcrumb structured data
- Canonical URLs + reciprocal `hreflang` tags
- `sitemap.xml`, `robots.txt`, `CNAME`, `.nojekyll`, 404 page and OG image
- Accessible accordions, labels, skip link and reduced-motion handling
- No JavaScript framework or build step required

## Publish on GitHub Pages

1. Create a GitHub repository.
2. Upload **the contents of this folder** to the repository root.
3. In GitHub: Settings → Pages → Deploy from a branch → `main` / root.
4. `CNAME` is already set to `tamperesiivous.com`. Configure the required DNS records in your domain provider according to GitHub Pages' current custom-domain instructions.
5. In GitHub Pages settings, enable HTTPS after DNS has propagated.

## IMPORTANT before launch

### 1. Quote form
The quote form currently posts to **FormSubmit** using `tyozyoy@gmail.com` because GitHub Pages cannot process form submissions itself. The first submission may require inbox activation by FormSubmit. For a production site, consider replacing this endpoint with your preferred form backend (Formspree, Basin, Netlify Forms if migrated, your own serverless function, etc.).

Search for:
`https://formsubmit.co/tyozyoy@gmail.com`

and replace it in all forms:
- `pyyda-tarjous.html` / `en/request-a-quote.html`
- `anna-palautetta.html` / `en/feedback.html`
- `avoimet-tyopaikat.html` / `en/open-jobs.html`

Then update the privacy notice to name the actual processor you use.

### 2. Contact details
Current contact details included:
- Phone: 044 931 8824
- Email: tyozyoy@gmail.com
- Legal operator: Tyozy, Business ID 3549202-5

Change them globally before deployment if you create `info@tamperesiivous.com`.

### 3. Photography
The build uses remote Unsplash images. This keeps the ZIP light and gives the site rich photography immediately, but production is more resilient when approved images are stored locally. `CREDITS.md` lists the selected sources.

### 4. Claims
The copy intentionally avoids invented certifications, employee counts, named customers, guarantees or unsupported sustainability claims. Add real proof (Google reviews, customer logos, insurance details, certifications) only after you can substantiate it.

## SEO strategy built in

Primary Finnish intent clusters include:
- toimistosiivous Tampere
- yrityssiivous Tampere
- toimitilasiivous Tampere
- liiketilasiivous Tampere
- ravintolasiivous Tampere
- porrassiivous Tampere
- ikkunanpesu yrityksille Tampere
- perussiivous yrityksille Tampere
- rakennus- ja loppusiivous Tampere
- kuntosalisiivous Tampere
- varasto- ja teollisuussiivous Tampere

The English site targets matching office/commercial cleaning queries while remaining natural and useful rather than keyword-stuffed.

## Recommended launch follow-up

- Create/verify a Google Business Profile using the actual trading details you are entitled to use.
- Connect Google Search Console and submit `/sitemap.xml`.
- Add real project photographs and genuine reviews as they become available.
- Add a business email at the domain.
- Compress self-hosted photographs to AVIF/WebP when you replace the remote images.
- Add analytics only after deciding your cookie/privacy approach. The current website intentionally has no analytics or marketing cookies.


## V2 expanded commercial architecture (27 Sep 2026)

`PAGE-MAP.md` lists the Finnish/English page pairs for maintenance. The site now includes full Finnish and English service taxonomies for maintenance cleaning, specialist cleaning and add-on facility services, plus company, experiences, jobs, feedback, billing and editorial pages. Generic service pages and Tampere-specific landing pages intentionally serve different search intent to reduce duplication.

Important operational checks before publishing:
- Confirm that 24/7 urgent-cleaning requests can genuinely be received at the published phone number and keep the case-by-case availability wording.
- Healthcare, industrial, work-at-height and hazardous-contamination assignments must only be accepted when the required competence, PPE, access equipment and customer instructions can be ensured.
- The Oiva-support page deliberately does not promise an Oiva grade; Oiva is an official food-control evaluation system.
- Do not add certifications, customer logos or named B2B references without evidence/permission.
- Confirm the current VAT ID and business information before launch if legal details change.


## V3 additions inspired by current competitor research

The site now includes three original customer-experience features: an existing-customer service request route, an interactive cleaning-needs/frequency calculator, and a quality/service-process page. These were inspired by useful patterns seen in current Tampere-area commercial service sites, but the implementation and copy are original. The calculator is explicitly indicative and does not present a binding price. No competitor certifications, customer logos, NPS results, guarantees or references have been copied.

## Analytics and map integration

This build includes the following integrations on every HTML page:

- Google Analytics 4 measurement ID: `G-XRJDE56L4W`
- Microsoft Clarity project ID: `yosbgcb2my`
- Embedded Google Maps location for Tyozy Tampere in every footer

The privacy pages in Finnish and English include disclosures for these integrations.

### EU/Finland cookie-consent note
The tracking snippets in this package load immediately, matching the supplied implementation. Before production launch, review whether your consent-management setup should prevent non-essential analytics from loading until the visitor has provided the required consent.


## Map embed

The footer on every HTML page embeds the Tampere Siivous Google Maps listing provided for the site.
