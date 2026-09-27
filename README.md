# Tampere Siivous — static bilingual website

A complete Finnish/English static website for **tamperesiivous.com**, designed for GitHub Pages and focused on office and commercial cleaning in Tampere.

## What is included

- Finnish homepage and 10 commercial-service landing pages
- Full English mirror under `/en/`
- About, responsibility, FAQ, contact, quote and privacy pages
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

and replace it in:
- `pyyda-tarjous.html`
- `en/request-a-quote.html`

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
