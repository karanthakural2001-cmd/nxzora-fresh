# Nxzora Fresh Website (Next.js + TypeScript + Tailwind)

## 1. Get the files on your computer
Unzip `nxzora-fresh.zip`. You will get a folder called `nxzora-fresh`.

## 2. Upload to GitHub (no coding)
1. Create a free account at github.com, then click **New repository**. Name it `nxzora-fresh`, keep it Private, click **Create**.
2. On the new repo page click **uploading an existing file**.
3. Open the unzipped folder, select EVERYTHING inside it (app, components, lib, public, package.json, etc.) and drag it into the browser. Do not upload the zip itself.
4. Click **Commit changes**.

## 3. Deploy on Vercel
1. Go to vercel.com, sign up with GitHub, click **Add New > Project**, and import `nxzora-fresh`.
2. Before clicking Deploy, open **Environment Variables** and add the variables in step 4 and 5. Then click **Deploy**.
(You can also add them later in Project > Settings > Environment Variables, then **Redeploy**.)

## 4. Add your WhatsApp number and email
| Name | Value |
|---|---|
| NEXT_PUBLIC_WHATSAPP_NUMBER | Digits only with country code, e.g. 919876543210 |
| NEXT_PUBLIC_BUSINESS_EMAIL | your business email |
| NEXT_PUBLIC_SITE_URL | your final website address, e.g. https://www.yourdomain.com |

## 5. Configure the enquiry form (Resend, free plan)
1. Sign up at resend.com. Go to **API Keys > Create API Key** and copy it.
2. Go to **Domains**, add your domain and add the DNS records Resend shows you at your domain registrar. Wait until it says Verified.
3. Add in Vercel:
   - RESEND_API_KEY = the key you copied
   - ENQUIRY_TO_EMAIL = the email that should receive enquiries
   - ENQUIRY_FROM_EMAIL = e.g. `Nxzora Fresh <enquiries@yourdomain.com>` (must use your verified domain)
4. Redeploy. Until these are set, the form shows an honest "not configured" error and never claims success.
Never put the API key anywhere except Vercel environment variables.

## 6. Connect your domain
Vercel > your project > **Settings > Domains > Add**. Enter your domain and add the DNS records Vercel shows at your registrar. It can take up to a few hours.

## 7. Test the live site
- Open every page on phone and desktop; test the mobile menu.
- Click each WhatsApp button: your number and the prefilled message should appear.
- Click the email link.
- Submit the form with empty fields (errors should show), then a real submission. Check the email arrives.

## Images
Already placed in `public/images/`: `logo.png` (trimmed, proportions kept), `food-court-render.jpg`, `gallery-1..4.jpg` (crops of the render).
To add real photos: upload them to `public/images/` in GitHub (Add file > Upload files) and replace the same filenames.

## Items for you to review
- Plan inclusions and terms are NOT specified: edit `planDetails` in `lib/plans.ts`.
- `app/about/page.tsx`: add your company story. `app/facilities/page.tsx`: confirm facilities and categories (taken from the concept render).
- Privacy Policy is a general template; have it legally checked.
- All imagery is labelled "concept render".

## Run locally (optional)
`npm install` then `npm run dev`, open http://localhost:3000. Copy `.env.example` to `.env.local` and fill it in.
