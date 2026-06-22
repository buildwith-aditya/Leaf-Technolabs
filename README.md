# Leaf Technolabs — Website

A complete, multi-page static website for Leaf Technolabs (ERPNext & Frappe service provider).
No build step, no dependencies — pure HTML/CSS/JS. Upload and go.

## Pages
- index.html              — Home (hero, services, products, process, industries, 5 testimonial slots, FAQ)
- services.html           — 8 detailed services + engagement models
- frappe-products.html    — ERPNext, Accounting, Frappe HR, CRM, Helpdesk, Insights, Drive, LMS, Builder, Wiki, Framework
- industries.html         — Manufacturing, Retail, Trading, Services, Healthcare, Education, Construction, NGOs
- about.html              — Story, mission, values, team placeholders
- contact.html            — Contact form, info tiles, map placeholder, FAQ
- assets/styles.css       — All styling (brand tokens at the top in :root)
- assets/script.js        — Mobile nav, scroll reveals, counters, form handler

## Things YOU need to add manually (search for these)
1. **Contact info** — search for `add manually` across all files:
   - `[Office address — add manually]`
   - `[Email — add manually]` / `[Email address — add manually]`
   - `[Phone — add manually]` / `[Phone number — add manually]`
2. **5 Testimonials** — index.html, "Client voices" section: replace `[Testimonial N ...]`, `[Client Name]`, `[Designation], [Company]` and the photo placeholders.
3. **Images** — every dashed box labelled `IMAGE PLACEHOLDER` is a `<div class="ph">`. Replace the whole div with `<img src="..." alt="..." style="border-radius:18px;width:100%;">` (or keep the div and put the img inside).
4. **Team** — about.html: names, roles, photos.
5. **Map** — contact.html: replace the MAP PLACEHOLDER div with your Google Maps embed iframe.
6. **Social links** — footer `href="#"` on LinkedIn/X/YouTube/Instagram icons.
7. **Contact form backend** — the form currently shows a thank-you message only.
   Recommended: create a Web Form in your own Frappe CRM and either embed it or
   POST the form to it via the Frappe REST API (script hook is in assets/script.js).

## Brand
- Logo: inline SVG leaf (in header/footer of every page + favicon). Colors: deep green #0D4A37, lime #C9F24B, ink #10271C, paper #F6F3EA.
- Fonts: Fraunces (display) + Archivo (body), loaded from Google Fonts.
- To tweak the palette, edit the CSS variables in `:root` at the top of assets/styles.css.

## Deploy
Upload all files (keeping the assets/ folder) to any static host:
cPanel public_html, Netlify, Vercel, GitHub Pages, Cloudflare Pages — or serve it
via Frappe's own www folder / Frappe Builder if you want it inside your bench.
