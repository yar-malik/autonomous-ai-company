# Autonomous AI Company Directory

Clean directory site for companies that offer autonomous company building.

## Run locally

```bash
npm install
npm run dev
```

## Environment variables

Copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY`
- `SUBMISSION_FROM_EMAIL`
- `SUBMISSION_TO_EMAIL`

The submit form sends email server-side, so the destination address is not exposed in the frontend.

## Edit the directory

Update the seeded list in `data/companies.js`.
