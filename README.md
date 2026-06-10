# 💼 Job Portal — Full Stack Web Application

A modern, full-featured job portal built with **React**, **Firebase Authentication**, and a **Node.js/Express** backend. Job seekers can browse and apply for jobs, while employers can post and manage listings.

---

## 🌐 Live Demo

https://job-portal-4909c.web.app

---

## 📸 Screenshots

> _(Add screenshots of Home, HotJobs, Job Details, and Dashboard pages here)_

---

## ✨ Features

### 👤 Authentication
- Email & Password Registration / Login
- Google Sign-In via Firebase
- JWT-based session management with HTTP-only cookies
- Protected routes with auto-redirect on 401/403

### 🔍 Job Seeker
- Browse all hot/featured jobs
- Filter jobs by category
- View detailed job info (salary, type, location, responsibilities, requirements)
- Apply with LinkedIn, GitHub, and Resume URL
- Track and manage submitted applications (with delete)

### 🏢 Employer
- Post new job listings with full details
- View all self-posted jobs
- See application count per job
- Review all applicants for a specific job

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 18, React Router v6, Tailwind CSS, DaisyUI |
| **Animations** | Framer Motion (motion/react), Lottie React |
| **Auth** | Firebase Authentication (Email + Google OAuth) |
| **HTTP Client** | Axios (with interceptors for auth) |
| **Icons** | React Icons |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Auth Tokens** | JWT via HTTP-only cookies |

---

## 📁 Project Structure

```
src/
├── assets/                  # Images, animations, icons
├── common/
│   ├── Context/
│   │   ├── AuthProvider.jsx      # Firebase auth context + JWT management
│   │   └── useAxiosSecure.jsx    # Axios instance with auth interceptors
│   ├── pages/
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── CarthotJobs.jsx           # Job card component
│   ├── CategorySection.jsx       # Browse by category
│   ├── JobApply.jsx              # Job application form
│   ├── JobDetails.jsx            # Full job detail view
│   ├── MyApplication.jsx         # Applicant's submitted applications
│   ├── Myjob.jsx                 # Employer's posted jobs
│   ├── Navbar.jsx
│   ├── PrivateRoute.jsx          # Auth guard component
│   ├── SocialLogin.jsx           # Google login button
│   └── ViewApplications.jsx      # Employer views applicants
├── hook/
│   └── UserAuth.jsx              # useAuth custom hook
├── layout/
│   └── MainLayout.jsx
├── AddJob.jsx                    # Post a new job
├── Footer.jsx
├── Header.jsx                    # Animated hero section
├── Home.jsx
├── HotJobs.jsx                   # All jobs listing
└── main.jsx                      # Router + root setup
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn
- A Firebase project
- A running instance of the [backend server](https://job-portal-server-six-theta.vercel.app)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/job-portal-client.git
cd job-portal-client

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local
# Fill in your Firebase config keys
```

### Environment Variables

Create a `.env.local` file in the root:

```env
VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_project.appspot.com
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
```

### Run Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 🔗 API Endpoints (Backend)

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/jobs` | Get all jobs (filter by `?email=`) |
| `GET` | `/jobs/:id` | Get single job |
| `POST` | `/jobs` | Post a new job |
| `GET` | `/job-application?email=` | Get user's applications |
| `POST` | `/job-applications` | Submit a job application |
| `DELETE` | `/job-applications/:id` | Delete an application |
| `GET` | `/job-applications/jobs/:job_id` | Get all applicants for a job |
| `POST` | `/jwt` | Issue JWT cookie |
| `POST` | `/logout` | Clear JWT cookie |

---

## 🔐 Security

- JWT tokens stored in **HTTP-only cookies** (not localStorage)
- Axios interceptor auto-logs out on `401`/`403` responses
- Protected routes redirect unauthenticated users to `/login`
- Original path preserved via React Router `state` for post-login redirect

---

## 🐛 Known Issues / TODO

- [ ] Add profile picture upload on registration
- [ ] Add job search/filter by keyword or location
- [ ] Improve loading state UX (skeleton loaders)
- [ ] Add pagination to job listings
- [ ] Email notifications on application status change
- [ ] Admin dashboard

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [your-linkedin](https://linkedin.com/in/your-linkedin)
