# WE WATCH

A community-driven streaming platform: creators propose original series, an administrator approves them, and viewers watch published episodes.

**Current status: Phase 0 (project setup).** Nothing but the foundation exists yet. No login, no database, no videos.

## What is in this folder

```
we-watch/
├── index.html              Setup check page (becomes the homepage in Phase 4)
├── README.md               This file
├── .gitignore              Tells Git which files to never upload
├── css/
│   └── base.css            Colors, fonts, shared styles
└── js/
    ├── config.js           YOUR Supabase URL + key (you edit this)
    └── supabase-client.js  Creates the shared Supabase connection
```

More folders (`studio/`, `admin/`, `js/api/`) are added in later phases.

## Setup steps (do them in order)

### Step 1: Unzip the project

Unzip `we-watch.zip`. You get a folder named `we-watch`. Put it somewhere easy to find, for example your Desktop.

### Step 2: Create a Supabase project

1. Go to https://supabase.com and create a free account.
2. Click **New project**. Name it `we-watch`.
3. Choose a strong **database password** and save it in a password manager. (We will not need it in the website.)
4. Pick the region closest to your viewers, then click **Create new project** and wait a couple of minutes.

### Step 3: Copy your two keys into `js/config.js`

1. In Supabase, open **Project Settings** then **API** (the menu may say "API Keys" in newer versions).
2. Copy the **Project URL**.
3. Copy the **publishable** key (older projects call it the **anon** key).
4. Open `we-watch/js/config.js` in a text editor (Notepad, TextEdit in plain-text mode, or VS Code).
5. Replace `PASTE_YOUR_PROJECT_URL_HERE` and `PASTE_YOUR_PUBLISHABLE_KEY_HERE` with your values. Keep the quote marks. Save.

> **Never** paste the `service_role` or `secret` key anywhere in this folder.

### Step 4: Test it on your computer

Double-click `index.html` to open it in your browser. You should see:

- **Website files loaded: OK**
- **Supabase connection: Connected**

If Supabase connection says something else, the message under the card tells you what to fix.

### Step 5: Put it on GitHub

1. Create a free account at https://github.com.
2. Click **New repository**. Name it `we-watch`. Choose **Public** (free GitHub Pages requires it). Do not tick any "add README" boxes. Click **Create repository**.
3. On the empty repository page, click **uploading an existing file**.
4. Drag everything **inside** the `we-watch` folder (not the folder itself) into the page, including the `css` and `js` folders. Make sure `index.html` ends up at the top level.
5. Click **Commit changes**.

### Step 6: Turn on GitHub Pages

1. In your repository, open **Settings** then **Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose branch **main** and folder **/ (root)**, then click **Save**.
4. Wait about a minute. The page shows your address, for example `https://YOURNAME.github.io/we-watch/`.

Open that address. You should see the same setup check page, with both rows showing OK.

### Step 7: Tell Supabase your website address

Without this, email links (confirm account, reset password) break later.

1. In Supabase, open **Authentication** then **URL Configuration**.
2. Set **Site URL** to your GitHub Pages address (with the trailing slash).
3. Under **Redirect URLs**, add the same address followed by `**`, for example `https://YOURNAME.github.io/we-watch/**`.
4. Save.

## Checklist before Phase 1

- [ ] `index.html` opens locally and shows "Connected"
- [ ] The site is live on GitHub Pages and shows "Connected"
- [ ] Supabase Site URL and Redirect URL are saved
- [ ] You have **not** put a service_role/secret key anywhere

When all four are ticked, tell me and we start Phase 1: the database.
