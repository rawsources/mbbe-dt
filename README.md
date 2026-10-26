# MBBE Discipleship Tracker

A phone-friendly tracking app for the discipleship ministry. Lessons are taught from the printed Discovery Lessons booklet. Disciplers record each meeting (with photos if they like) and send the disciple a picture update on Messenger or Viber. Coordinators add disciples, track everyone, download report PDFs, issue certificates and make the certificate presentation. Disciples don't need an account. Google Sheets holds the data, Google Drive holds the photos privately, Google Apps Script is the server, and GitHub Pages hosts the app.

## What's in this folder

| File | Where it goes |
| --- | --- |
| `Code.gs` | Google Apps Script, attached to your Google Sheet |
| `index.html` | Your GitHub repository (the whole app) |
| `manifest.webmanifest`, `sw.js`, `icon-180.png`, `icon-192.png`, `icon-512.png` | The same GitHub folder as `index.html`. These let people add the app to their home screen and open it full screen. |

## Updating from the previous version (you already have it running)

1. **Server:** in Apps Script, delete all the code and paste the new `Code.gs`. Save.
2. **Run `setup` once.** Choose `setup` in the function menu and click **Run**. Google asks for one new permission: **Google Drive**, so the app can keep photos in a private folder. Allow it. Setup is safe to run again; it only adds what's missing. Your people and sessions stay.
3. **Deploy a new version:** **Deploy → Manage deployments → ✏️ Edit → Version: New version → Deploy**. The link stays the same.
4. **App:** in your GitHub repository, **Add file → Upload files**, drag in `index.html` and the five home-screen files, then **Commit changes**.

The Sheet upgrades itself: new columns (such as **Question** in the Lessons tab) and tabs appear the first time they're needed.

**What changed in this version:** the new look (tiles, the journey, floating menu with a big **+** button, wide layouts for tablet and computer), a refresh button and save status in the header, the new Record a session, picture updates for disciples, report PDF, coordinators adding disciples, and disciple sign-in switched **off** (Settings can turn it back on). Meeting confirmations were removed.

## First-time setup (new Sheet)

1. Create a Google Sheet named **MBBE Discipleship**. Open **Extensions → Apps Script**, paste `Code.gs`, and edit the `SETUP` lines at the top (admin name, mobile number, starting PIN, first congregation).
2. Save, choose `setup`, click **Run**, and allow the permissions (Sheets, Drive).
3. **Deploy → New deployment → Web app**, Execute as **Me**, Who has access **Anyone**. Copy the `/exec` link into `var API_URL = "";` near the bottom of `index.html`.
4. Upload `index.html` to a public GitHub repository and turn on **Settings → Pages** (branch **main**, folder **/ (root)**).

## Add to home screen (full screen)

On a phone, the app can sit on the home screen like a regular app and open full screen, without the browser bar. **More** and **Profile** show how:

- **Android (Chrome):** tap **Install app** when it appears, or the menu **⋮ → Add to Home screen / Install app**.
- **iPhone (Safari):** tap the Share button, then **Add to Home Screen**.

It still updates itself, and opens even with no signal (showing the copy saved on the phone).

## Signing in by name

Disciplers and coordinators can type their mobile number, first name, last name or full name. Suggestions appear after 3 letters; picking one is the surest way in. If a first name matches more than one person, the app asks for the full name or mobile number.

## Disciplers who are also being discipled

A discipler's page has a **Being discipled this year** switch (coordinators set it under **Manage**; disciplers can set it in their own **Profile**).

- **Off** (default): the page shows only the photo, name and details, role and PIN. No discipler, lessons or sessions, and they don't count in the dashboard or reports.
- **On:** a discipler can be assigned, their lessons are tracked, and they appear on the dashboard and reports like any disciple. When approving a new discipler, tick **Also being discipled this year** to set it right away.

## Adding disciples

Disciples don't create accounts. A coordinator adds them: **People → Add a disciple** (or **More → Add a disciple**). Enter the full name, congregation and discipler. The mobile number is optional; it's shown to the discipler so they can message the disciple.

Disciplers and coordinators still sign in. A new discipler can use **Create your account** on the sign-in page; a coordinator approves them and sets the role.

**Settings → Disciples can sign in** (admin): off by default. Turn it on if you want disciples to sign in to see their own progress. They'll need a PIN; reset one from their page under **Manage**.

## Levels and recording a session

If each book is its own level (Level 1 The Foundation, Level 2 The Direction, …), the app counts progress in levels: the lesson path, the disciple's page, people cards and picture updates show “2 of 7 levels”.

**Record a session → Change level or lesson** lists every level (and the lessons inside levels that have several). Completed levels are greyed out.

When the session finishes the last lesson of a level, a box appears: **Complete Level 2 · The Direction now** (ticked). Saving then also marks the disciple fit to graduate for that level, so the coordinator can issue its certificate. If you untick it and later record the next level, the finished level is completed automatically. A level that was started but not finished has to be continued (or its session removed) before moving to another.

## Picture updates for disciples

After saving a session the app opens **Send [name] an update**. It draws a picture on the phone with:

- the disciple's photo and progress ring, and the lesson path
- the lesson studied (with the session photo, if one was added)
- the memory verse, once the lesson is finished
- a question to start a conversation (“Something to think about”)
- the next meeting date

Choose **Session update**, **Meeting reminder** or **Progress / Congratulations**. Edit the question or the message, then tap **Share picture**: on a phone this opens the share menu (Messenger, Viber, SMS, save to gallery). On a computer it saves the picture and copies the message. Private notes never appear. You can send an update any time from the disciple's page (**Send update**, or under each session).

Each lesson has a ready-made question. The admin can change it in **More → Lessons → Edit**.

## Header, refresh and save status

Every screen shows the save status at the top: **All changes saved · updated 2 min ago**, **Saving 1 change…**, or **Offline · 2 changes waiting**. The round **refresh** button gets the latest data from the Sheet right away.

## Report PDF

**Reports** (or **Report PDF** on the dashboard): choose a congregation, status, discipler and a **From / To** period (or tap This month, Last month, Last 3 months, This year, All time), then tap **Download PDF**. With a period, the report lists the people whose lessons ran in it and adds sessions held, lessons finished and who completed in that period. You get summary boxes (people, completed, in progress, ready to graduate, not met recently, not started, expired) and a table of everyone matching, with status, lessons, last and next meeting, and validity. CSV copy and download are still there for spreadsheets.

## Trying it with sample data

**More → Sample data → Load sample data** (admin only). It adds 2 sample congregations and 11 test people at every stage: in progress, ready to graduate, not met recently, completed with a certificate, expired, waiting for approval, and without a discipler. They're marked **Sample** everywhere and don't appear on the sign-up form.

- Sign in as any of them with their number (shown on that screen) and PIN **1234**.
- When you're done, **Clear sample data** removes them and everything recorded for them while testing: sessions, certificates, photos and activity. Your real data isn't touched.

## Who can do what

| | Disciple | Discipler | Coordinator | Admin |
| --- | :-: | :-: | :-: | :-: |
| Own progress, checklist, next meeting, memory verses, certificates (only if disciple sign-in is on) | ✓ | ✓ | if taking lessons | |
| Add or change own profile photo | ✓ | ✓ | ✓ | ✓ |
| Record sessions (with up to 3 photos), private notes, send picture updates | | ✓ | ✓ | ✓ |
| “My disciples” list | | ✓ | if switched on | |
| Mark fit to graduate, reset a disciple's PIN | | ✓ | ✓ | ✓ |
| Add disciples, approve sign-ups and set their role, assign disciplers | | | ✓ | ✓ |
| Dashboard, report PDF, issue certificates, presentation PDF | | | own congregations | all |
| Make coordinators or admins, congregations, preacher photos, lessons, settings, sample data | | | | ✓ |

**Coordinator options** (in their Profile, or set by the admin): *I also disciple people* and *I'm taking the lessons this year*. Each one adds or hides the matching menu items.

## Signing in

- **Mobile number or full name**, plus PIN. If two members share a name, the app asks for the mobile number.
- **Suggestions:** after typing 3 letters of a name, up to 5 matches appear as first name, last initial and a hidden number (for example *Ana C. · 0917•••4567*). Only approved members are suggested, and searches are limited to slow down anyone trying to browse names.
- **Remember me on this phone:** next time the app shows “Welcome back, Ana” and only asks for the PIN. “Not you?” switches account.

## Speed and working offline

When someone signs in or opens the app, it downloads everything that person is allowed to see in one go. After that every screen opens instantly from the phone's copy.

- Changes (recording a session, adding a disciple, marking fit to graduate) show immediately and are sent in the background. All waiting changes go to the server in one request, and the reply brings back the fresh copy, so saving takes one trip instead of several. The header shows **Saving…** or **Offline · 2 changes waiting**.
- With no signal, people can still browse and record sessions. Waiting changes are sent automatically when the phone is back online.
- If the server can't accept a waiting change (for example the disciple was reassigned in the meantime), the app says so and refreshes.
- The copy refreshes itself every few minutes and whenever the app is reopened. The **refresh** button in the header does it on demand.
- Photos need a connection to upload.

## Photos

- **Profile photos** are optional; without one a silhouette is shown. They're cropped square and shrunk on the phone before upload.
- **Who sees them:** admin, coordinators (their congregations) and the person's discipler. A disciple sees only their own.
- **Session photos:** up to 3 per session, seen by their discipler, coordinators and the admin (and the disciple, if disciple sign-in is on). The first one appears on the picture update.
- **Preacher photos:** **More → Congregations**, open a congregation, then add a photo next to each preacher in charge.
- All photos are kept in a private Drive folder, **MBBE Discipleship Photos (private)**, and are only shown through the app. Don't share that folder.

## Certificate presentation (PDF)

**More → Presentation** (or the Certificates screen). It follows the graduation deck you already use:

1. **Opening:** program name, “Recognition of Graduates”, the date and venue, the senior pastor’s photo, and two verses (2 Timothy 2:2 and 2:15 unless you change them).
2. **Tally:** graduates per congregation and the total.
3. For each congregation: a **cover** with its preacher(s) in charge (photo, name and title), a **divider** for each level with its memory verse, then each **certificate** (name, level, date, venue, two signatories) with the graduate’s photo, congregation and discipler, and the congregation’s **tally** by level.
4. **Closing:** “Congratulations, graduates! To God be the glory”.

Set it up once:
- **Settings:** signatory 1 (senior pastor) and 2 (for example the program director), with titles, and **Signatory 1 photo**.
- **Congregations:** type preachers with their titles in brackets, for example `Ptr. Jay Caparas (Chief Acts Preacher), Ptr. Robert Malit (Resident Pastor)`, then add each photo.

On the presentation screen choose the ceremony date, venue and program name (remembered for next time), then the **From / To** period: only graduates who completed in that period are listed. Tick who to include and tap **Create PDF**.

The discipler shown on each certificate is the one who recorded that graduate's sessions, even if a coordinator marked them fit to graduate.

## The yearly cycle

1. A coordinator adds the disciple and assigns a discipler.
2. Discipler and disciple meet and go through the printed booklet.
3. After each meeting the discipler records it (tap the **+** button) and sends the picture update. The first session of the year starts the member's lessons automatically.
4. When every lesson is finished, the discipler taps **Mark fit to graduate**. The status becomes **Completed**, valid for 365 days.
5. A coordinator issues the certificate and can include it in the presentation PDF.
6. After a year the status turns **Expired**. The next session recorded starts a new year.

## Good to know

- **Don't rename the tabs or header row** in the Sheet. Reading it is fine.
- PINs are stored as salted hashes, never in the phone's copy. Five wrong PINs lock the account for 15 minutes.
- Keep the Sheet and the photo folder shared only with yourself (and a backup admin). **File → Version history** restores an earlier copy of the Sheet.
- The app checks for a newer version each time it opens and reloads itself, so members get updates automatically.
- Only lesson titles and memory verses (KJV) are stored. The booklet content stays on paper.
