# Royal Goa Ride Sitemap Audit

**Audit date:** 2026-11-09  
**Production site checked:** `https://royalgoaride.com`  
**Scope:** HTML pages, canonical and robots metadata, sitemap entries, and the 11 supplied URLs.

## Summary

- The sitemap is well-formed XML and contains 39 unique absolute HTTPS URLs.
- All 39 URLs match an existing, indexable HTML page's canonical URL in the working tree. There are no duplicate sitemap entries or sitemap URLs pointing at non-indexable pages.
- No sitemap URLs were added or removed: all existing canonical pages are already represented, and the supplied paths are either legacy URLs with an existing canonical destination or paths with no corresponding page.
- The production site currently returns redirect loops for several URLs in the sitemap and for some supplied aliases. Conflicting rules were removed from `_redirects`; those changes require deployment before production can be rechecked.
- Four supplied URLs currently return 404 and have no corresponding page or suitable existing destination. They were not added to the sitemap, and no pages or redirects were invented for them.

## Supplied URLs

Production status below was measured before the local redirect-rule changes. Redirect chains were followed up to 10 hops.

| Supplied URL | Production result | Existing page / canonical destination | Sitemap action |
|---|---|---|---|
| `/blog/north-goa-guide.html` | 404 | Local redirect maps to `/location/north-goa-car-rental/` | Do not list alias; destination is already listed |
| `/blog/goa-food-guide` | 404 | No matching page or existing redirect | Unresolved; do not add |
| `/blog/goa-nightlife` | 404 | No matching page or existing redirect | Unresolved; do not add |
| `/location/vagator-car-rental.html` | 301 loop | Existing page canonical is `/location/vagator-car-rental/` | Do not list alias; destination is already listed |
| `/blog/best-time-visit-goa` | 404 | No matching page or existing redirect | Unresolved; do not add |
| `/blog/driving-rules-india` | 404 | Local redirect maps to `/blog/self-drive-tips/` | Do not list alias; destination is already listed |
| `/about-us.html` | 404 | No matching page or existing redirect | Unresolved; do not add |
| `/travel-guides` | 301 loop | Local redirect maps to `/blog/` | Do not list alias; destination is already listed |
| `/rental-policies.html` | 301 → 200 | `/guild/rental-policies` | Do not list alias; destination is already listed |
| `/car-rental-mopa-airport` | 301 → 200 | `/location/goa-airport-car-rental/` | Do not list alias; destination is already listed |
| `/car-rental-margao.html` | 301 loop | Local redirect maps to `/location/margao-car-rental/` | Do not list alias; destination is already listed |

The two `404` results for legacy paths that have local redirect rules (`north-goa-guide.html` and `driving-rules-india`) indicate that production is not serving the current working-tree redirect configuration. Those rules should be verified after deployment.

## Existing Sitemap Issues and Changes

Production returned self-redirect loops for these sitemap URLs: `/blog/`, `/refund-policy`, `/location/vagator-car-rental/`, `/location/margao-car-rental/`, `/location/morjim-car-rental/`, and `/location/vasco-car-rental/`.

The conflicting redirect rules were removed from `_redirects` so the existing canonical paths can resolve without being redirected to themselves. The sitemap entries were retained because each has an existing indexable page and matching canonical in the working tree. Production behavior cannot be confirmed until the configuration is deployed.

## Indexability, Canonicals, and Duplicates

- Each sitemap entry has a matching canonical tag and an `index, follow` robots directive in the working-tree HTML.
- The sitemap has no repeated `<loc>` values. The indexable HTML pages have no duplicate canonical URLs.
- Canonical folder pages use trailing slashes; flat-file pages and vehicle pages use extensionless URLs. The sitemap follows each page's canonical spelling.
- Legacy `.html`, case-variant, and no-slash paths are not sitemap URLs. Existing redirects and canonical tags consolidate the supported aliases; unresolved 404 paths remain excluded.
- Existing page titles, descriptions, structured data, and page files were left unchanged.

## XML and Protocol Validation

- XML parsed successfully as a sitemap `<urlset>` in the `http://www.sitemaps.org/schemas/sitemap/0.9` namespace.
- All 39 `<loc>` values are absolute HTTPS URLs on the canonical site host.
- The sitemap contains no duplicate `<loc>` values.

## Unresolved / Follow-up

1. `/blog/goa-food-guide`, `/blog/goa-nightlife`, `/blog/best-time-visit-goa`, and `/about-us.html` do not exist in the working tree and return 404 in production. No pages were created because the audit must not invent content or URLs.
2. Deploy the `_redirects` changes, then recheck the production sitemap URLs and legacy aliases. The present audit cannot claim the production loops are resolved before deployment.
3. Confirm whether the four missing paths are intentionally retired or should be addressed separately with approved content or a relevant replacement destination.
