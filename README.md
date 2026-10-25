# MBBE Discipleship Tracker

A phone-friendly tracking app for the discipleship ministry. Lessons are taught from the printed Discovery Lessons booklet. Disciplers record each meeting, disciples follow their progress and confirm meetings, and moderators track everyone and issue certificates. Google Sheets holds the data, Google Apps Script is the server, and GitHub Pages hosts the app.

## What's in this folder

| File | Where it goes |
| --- | --- |
| `Code.gs` | Google Apps Script, attached to your Google Sheet |
| `index.html` | GitHub repository (the app itself) |
| `manifest.json`, `icon.svg` | GitHub repository (home-screen icon) |

With `API_URL` left empty, `index.html` runs a demo with sample people. Use that to show the moderators before going live.

## 1. Set up the Google Sheet and server (about 10 minutes)

1. In Google Drive, create a new Google Sheet named **MBBE Discipleship**.
2. Open **Extensions → Apps Script**. Delete the sample code and paste all of `Code.gs`.
3. At the top, edit the `SETUP` values: your name, **your mobile number** (this is your login), a starting PIN, and the first congregation.
4. Click **Save**, choose `setup` in the function menu, and click **Run**. Google asks you to authorize. Choose your account, then **Advanced → Go to project → Allow**.
5. Back in the Sheet you now have eight tabs: Users, Congregations, Lessons, Enrollments, Sessions, Certificates, AuditLog, Settings. The Level One lesson checklist (Lessons One to Seven) is already loaded.
6. In Apps Script, click **Deploy → New deployment**. Choose type **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
7. Click **Deploy** and copy the **Web app URL** (it ends in `/exec`).

Setup also adds a nightly job that marks completions older than one year as **Expired**.

## 2. Put the app on GitHub Pages

1. Open `index.html` in a text editor. Near the bottom, find:
   ```
   var API_URL = "";
   ```
   Paste your Web app URL between the quotes and save.
2. On GitHub (account **rawsources**), create a new public repository, for example `discipleship`.
3. Upload `index.html`, `manifest.json` and `icon.svg`.
4. Go to **Settings → Pages**. Under *Branch*, choose **main** and **/ (root)**, then **Save**.
5. After a minute the app is live at `https://rawsources.github.io/discipleship/`.

## 3. First steps as admin

1. Open the app, sign in with your mobile number and starting PIN, then go to **More → Profile** and change the PIN.
2. **More → Congregations**: add each congregation, its location and preacher(s) in charge.
3. **More → Settings**: set the certificate signatories.
4. **More → Lessons**: add the memory verse (reference and KJV text) for Lessons Two to Seven.
5. **Appoint moderators.** Each moderator registers like a disciple. Approve them under **People → To approve**, open their name, set **Role** to *Moderator*, tick their congregations, and save.
6. Share the link with members. On a phone, use **Add to Home Screen** so it opens like an app.

## Who can do what

| | Disciple | Discipler | Moderator | Admin |
| --- | :-: | :-: | :-: | :-: |
| See own progress, lesson checklist, next meeting | ✓ | ✓ | ✓ | ✓ |
| Confirm meetings, read memory verses, view certificates | ✓ | ✓ | ✓ | ✓ |
| Record sessions for their disciples, add private notes | | ✓ | ✓ | ✓ |
| Mark a disciple fit to graduate, reset their PIN | | ✓ | ✓ | ✓ |
| Approve registrations, assign disciplers | | | ✓ | ✓ |
| Promote a disciple to discipler, deactivate accounts | | | ✓ | ✓ |
| Dashboard, reports (CSV), issue certificates | | | own congregations | all |
| Congregations, lesson checklist, settings, moderators | | | | ✓ |

## The yearly cycle

1. A member registers. A moderator approves them and assigns a discipler.
2. Discipler and disciple meet and go through the printed booklet.
3. After each meeting the discipler records it: the date, the lesson covered, whether it was finished, private notes, and the next meeting date. The first session of the year starts the member's lessons automatically.
4. The disciple sees the lesson ticked off and taps **Yes, we met** to confirm.
5. When every lesson is finished, the discipler taps **Mark fit to graduate**. The status becomes **Completed**, valid for 365 days.
6. A moderator issues the certificate. The member can view and print it.
7. After a year the status turns **Expired**. The next session the discipler records starts a new year.

The dashboard flags members with no meeting in 30 days (change this under Settings), members ready to graduate, and completions expiring within 60 days.

## Adding or changing lessons

**More → Lessons**. Each lesson is a title, its place in the order, and an optional memory verse. **Hide** removes a lesson from the checklist without deleting its history. A new level (for example Level Two) is just lessons with Level set to 2.

## Updating the server code later

Paste the new `Code.gs`, save, then **Deploy → Manage deployments → ✏️ Edit → Version: New version → Deploy**. The URL stays the same, so the app needs no change.

## Good to know

- **Don't rename the tabs or the header row** in the Sheet. Reading the Sheet is fine; editing cells by hand is possible but use the app where you can.
- PINs are stored as salted hashes, so nobody can read them in the Sheet. Five wrong PINs lock the account for 15 minutes.
- Keep the Sheet shared only with yourself (and a backup admin). **File → Version history** lets you restore an earlier copy.
- This setup comfortably handles a few thousand members. Each tap takes about one to two seconds, because Apps Script is not instant.
- Only lesson titles and memory verses (KJV) are stored in the app. The booklet content stays on paper.
