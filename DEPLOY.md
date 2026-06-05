# Deploy Guide — GitHub + Vercel CI/CD

## Step 1 — Create a GitHub Repository

1. Go to https://github.com/new
2. Name it: `uzairali-portfolio` (or anything you like)
3. Set it to **Public**
4. Do NOT initialize with README (your code is already here)
5. Click **Create repository**
6. Copy the repo URL — it looks like: `https://github.com/Uzair625/uzairali-portfolio.git`

---

## Step 2 — Push Code to GitHub

Open a terminal inside the `portfolio-next` folder and run these commands:

```bash
cd "portfolio-next"

git init
git add .
git commit -m "feat: initial portfolio — Next.js + Three.js + Framer Motion"

git branch -M main
git remote add origin https://github.com/Uzair625/uzairali-portfolio.git
git push -u origin main
```

> Replace the URL with your actual repo URL from Step 1.

---

## Step 3 — Connect Vercel (auto-deploy on every push)

1. Go to https://vercel.com and sign in with GitHub
2. Click **Add New → Project**
3. Import your `uzairali-portfolio` repo from GitHub
4. Vercel will auto-detect it as Next.js — leave all settings as default
5. Click **Deploy**

That's it! Vercel will:
- Build and deploy your site immediately
- Auto-redeploy on every `git push` to `main`
- Run the GitHub Actions CI check on every push and PR

---

## Step 4 — Your Live URL

After deployment, Vercel gives you a URL like:
```
https://uzairali-portfolio.vercel.app
```

You can also add a custom domain in Vercel → Project → Settings → Domains.

---

## Daily Workflow (after initial setup)

```bash
# Make changes, then:
git add .
git commit -m "update: <describe your change>"
git push
```

Vercel picks it up automatically and redeploys within ~60 seconds.

---

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```
