# Glamour Pools of Naples — spec landing site

Standalone pitch/spec website for **Alex Brawner / Glamour Pools of Naples**, a
custom pool builder & remodeler in Southwest Florida. Built after Alex submitted
the $49/mo website form on apexbranding.design.

- **Live (staging):** https://glamour-pools-naples.james-welbes.workers.dev
- **Stack:** Astro (static) + Cloudflare Worker (static assets + `/api/contact`)
- **CRM:** Command Center contact `62f78790311b` → `ready_to_pitch`

## Verified facts used (nothing fabricated)

| Field | Value | Source |
|-------|-------|--------|
| Owner | Alex Brawner | $49/mo form + Facebook (facebook.com/alex.brawner.1) |
| Business | Glamour Pools of Naples | Alex's Facebook ("Glamour pools of Naples"); form said "Glamour custom pools" |
| Services | Builds and remodels pools | His form message |
| Service area | Naples, Marco Island, Bonita Springs | His form message |
| Email | alexbrawner@aol.com | Form |
| Location | Naples, FL | Facebook |

**Deliberately NOT included** (could not verify — would not invent): phone number,
street address, reviews/ratings, license number, photos, logo. The `glamourpoolsfl.com`
that appears in search is a *different* company in Cape Coral — not Alex's.

## Contact form

POSTs to `/api/contact`. Validates, honeypot (`website_hp`), optional D1 storage
(`submissions` table, see `schema.sql`), and HMAC-signed notify to the Command
Center push endpoint (same pattern as apexbranding.design). No D1 is bound yet —
form returns `{ok:true, stored:false}` and still fires the CC notify when
`PUSH_NOTIFY_SECRET` is set as a Worker secret.

## Develop / deploy

```bash
npm install
npm run build
export CLOUDFLARE_API_TOKEN=... CLOUDFLARE_ACCOUNT_ID=a3b10674bc6373a81438a11c1c93b3de
npx wrangler deploy
```

## Possible next steps

- Get Alex's real phone → add click-to-call CTA
- Real project photos → swap the SVG hero for a gallery
- Bind D1 + set `PUSH_NOTIFY_SECRET` so leads store + push like the client sites
- Custom domain once Alex is onboarded
