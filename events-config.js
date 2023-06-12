const configArr = [
  {
    Page: "Homepage",
    Section: "Success Mantras",
    Element: "Share on LinkedIn",
    type: "REDIRECT",
    target: "",
    Category: "launchpad",
    Subcategory: "success_mantras",
    Name: "share_linkedin",
    Label: "Share on LinkedIn",
  },
  {
    Page: "Homepage",
    Section: "Alumni",
    Element: "Videos",
    type: "IN_PAGE",
    target: "",
    Category: "launchpad",
    Subcategory: "alumni_videos",
    Name: "{{alumniName}}",
    Label: "Alumni Video",
  },
  {
    Page: "Homepage",
    Section: "Payment Methods",
    Element: "Watch Video Button",
    type: "IN_PAGE",
    target: "",
    Category: "launchpad",
    Subcategory: "payment_methods",
    Name: "watch_video_button",
    Label: "Watch Video",
  },
  {
    Page: "Homepage",
    Section: "Payment Methods",
    Element: "Video",
    type: "IN_PAGE",
    target: "",
    Category: "launchpad",
    Subcategory: "payment_methods",
    Name: "video",
    Label: "PaP vs Upfront video",
  },
  {
    Page: "Homepage",
    Section: "Payment Methods",
    Element: "Request a Callback",
    type: "API_CALL",
    target: "/users/onboardedUserCallbackRequest",
    Category: "launchpad",
    Subcategory: "payment_methods",
    Name: "request_callback",
    Label: "Request a Callback",
  },
  {
    Page: "Homepage",
    Section: "Payment Methods",
    Element: "Download blank ISA",
    type: "REDIRECT",
    target: "",
    Category: "launchpad",
    Subcategory: "payment_methods",
    Name: "download_blank_isa",
    Label: "Download blank ISA",
  },
  {
    Page: "Homepage",
    Section: "Payment Methods",
    Element: "Upload ISA",
    type: "REDIRECT",
    target: "",
    Category: "launchpad",
    Subcategory: "payment_methods",
    Name: "upload_isa",
    Label: "Upload ISA",
  },
  {
    Page: "Homepage",
    Section: "Payment Methods",
    Element: "Upload ISA again",
    type: "REDIRECT",
    target: "",
    Category: "launchpad",
    Subcategory: "payment_methods",
    Name: "upload_isa_again",
    Label: "Upload ISA Again",
  },
  {
    Page: "Homepage",
    Section: "Course Guides",
    Element: "Videos",
    type: "IN_PAGE",
    target: "",
    Category: "launchpad",
    Subcategory: "course_guides",
    Name: "{{videoName}}",
    Label: "Course Guide Video",
  },
  {
    Page: "Homepage",
    Section: "HTML/CSS Projects",
    Element: "Start Learning",
    type: "REDIRECT",
    target: "",
    Category: "launchpad",
    Subcategory: "html_css_projects",
    Name: "start_learning",
    Label: "Start Learning",
  },
  {
    Page: "Homepage",
    Section: "HTML/CSS Projects",
    Element: "Build Your Project",
    type: "REDIRECT",
    target: "",
    Category: "launchpad",
    Subcategory: "html_css_projects",
    Name: "build_your_project",
    Label: "Build Your Project",
  },
  {
    Page: "Homepage",
    Section: "Precourse",
    Element: "Start Course",
    type: "REDIRECT",
    target: "",
    Category: "launchpad",
    Subcategory: "precourse",
    Name: "start_course",
    Label: "Start Course",
  },
  {
    Page: "Homepage",
    Section: "Soft Skill Videos",
    Element: "Videos",
    type: "IN_PAGE",
    target: "",
    Category: "launchpad",
    Subcategory: "soft_skill_videos",
    Name: "{{videoName}}",
    Label: "Soft Skill Videos",
  },
  {
    Page: "Homepage",
    Section: "Right Pane",
    Element: "Personal Docs",
    type: "REDIRECT",
    target: "",
    Category: "launchpad",
    Subcategory: "personal_docs",
    Name: "upload_personal_docs",
    Label: "Upload Personal Document",
  },
  {
    Page: "Homepage",
    Section: "Right Pane",
    Element: "Aptitude Module",
    type: "REDIRECT",
    target: "",
    Category: "launchpad",
    Subcategory: "aptitude_module",
    Name: "start_learning",
    Label: "Start Learning",
  },
  {
    Page: "Homepage",
    Section: "Right Pane",
    Element: "Aptitude Contest",
    type: "REDIRECT",
    target: "",
    Category: "launchpad",
    Subcategory: "aptitude_contest",
    Name: "take_the_test",
    Label: "Take the test",
  },

  {
    Page: "Modules",
    Section: "All courses",
    Element: "Selected course",
    type: "IN_PAGE",
    target: "",
    Category: "launchpad_modules",
    Subcategory: "all_courses",
    Name: "**selected_course**",
    Label: "Course Selection",
  },
  {
    Page: "Modules",
    Section: "All modules",
    Element: "Selected module",
    type: "API_CALL",
    target: "",
    Category: "launchpad_modules",
    Subcategory: "all_modules",
    Name: "**module name**",
    Label: "Module Selected",
  },
  {
    Page: "Modules",
    Section: "All modules",
    Element: "Assignment",
    type: "IN_PAGE",
    target: "",
    Category: "launchpad_modules",
    Subcategory: "assignments",
    Name: "**module name**",
    Label: "Assignment",
  },
  {
    Page: "Modules",
    Section: "All modules",
    Element: "Coding Questions",
    type: "REDIRECT",
    target: "",
    Category: "solve_question",
    Subcategory: "launchpad_modules",
    Name: "coding_**questionId**",
    Label: "Start Solving",
  },
  {
    Page: "Modules",
    Section: "All modules",
    Element: "Coding Questions",
    type: "REDIRECT",
    target: "",
    Category: "reattempt_question",
    Subcategory: "launchpad_modules",
    Name: "coding_**questionId**",
    Label: "Solved",
  },
  {
    Page: "Modules",
    Section: "All modules",
    Element: "Conceptual Questions",
    type: "REDIRECT",
    target: "",
    Category: "solve_question",
    Subcategory: "launchpad_modules",
    Name: "conceptual_**questionId**",
    Label: "Start Solving",
  },
  {
    Page: "Modules",
    Section: "All modules",
    Element: "Webdev Questions",
    type: "REDIRECT",
    target: "",
    Category: "solve_question",
    Subcategory: "launchpad_modules",
    Name: "webdev_**questionId**",
    Label: "Start Solving",
  },
  {
    Page: "Modules",
    Section: "All modules",
    Element: "Lectures",
    type: "IN_PAGE",
    target: "",
    Category: "launchpad_modules",
    Subcategory: "lectures",
    Name: "**module name**",
    Label: "Lectures",
  },
  {
    Page: "Modules",
    Section: "All modules",
    Element: "Video player",
    type: "IN_PAGE",
    target: "",
    Category: "watch_recording",
    Subcategory: "launchpad_modules",
    Name: "**video name**",
    Label: "Video",
  },

  {
    Page: "Refer and earn",
    Section: "top cards",
    Element: "Earned Cash",
    type: "IN_PAGE",
    target: "",
    Category: "launchpad",
    Subcategory: "refer_and_earn",
    Name: "earned_cash",
    Label: "Know More",
  },
  {
    Page: "Refer and earn",
    Section: "top cards",
    Element: "Your Referral",
    type: "IN_PAGE",
    target: "",
    Category: "launchpad",
    Subcategory: "refer_and_earn",
    Name: "your_referral",
    Label: "Know More",
  },
  {
    Page: "Refer and earn",
    Section: "top cards",
    Element: "Potential Earnings",
    type: "IN_PAGE",
    target: "",
    Category: "launchpad",
    Subcategory: "refer_and_earn",
    Name: "potential_earnings",
    Label: "Know More",
  },
  {
    Page: "Refer and earn",
    Section: "Share with friends",
    Element: "Copy Ref Link",
    type: "IN_PAGE",
    target: "",
    Category: "launchpad",
    Subcategory: "refer_and_earn",
    Name: "copy_ref_link",
    Label: "Copy Link",
  },
  {
    Page: "Refer and earn",
    Section: "Share with friends",
    Element: "WhatsApp",
    type: "IN_PAGE",
    target: "",
    Category: "launchpad",
    Subcategory: "refer_and_earn",
    Name: "share_whatsapp",
    Label: "WhatsApp icon",
  },
  {
    Page: "Refer and earn",
    Section: "Refer your friend",
    Element: "Submit friend details",
    type: "API_CALL",
    target: "referral/potential-referral",
    Category: "launchpad",
    Subcategory: "refer_and_earn",
    Name: "submit_referral",
    Label: "Submit",
  },
  {
    Page: "Refer and earn",
    Section: "FAQs",
    Element: "FAQ",
    type: "IN_PAGE",
    target: "",
    Category: "launchpad",
    Subcategory: "refer_and_earn",
    Name: "faq_{{faqName}}",
    Label: "FAQ",
  },
  {
    Page: "Refer and earn",
    Section: "Footer",
    Element: "Contact Us",
    type: "REDIRECT",
    target: "",
    Category: "launchpad",
    Subcategory: "refer_and_earn",
    Name: "contact_us",
    Label: "Contact us",
  },

  {
    Page: "Profile",
    Section: "Personal Info",
    Element: "Submit",
    type: "API_CALL",
    target: "/student-personal-details/saveGeneralProfileFormFields",
    Category: "launchpad",
    Subcategory: "profile_personal",
    Name: "submit",
    Label: "Submit",
  },
  {
    Page: "Profile",
    Section: "Professional Info",
    Element: "Choose File",
    type: "IN_PAGE",
    target: "",
    Category: "launchpad",
    Subcategory: "profile_professional",
    Name: "choose_resume",
    Label: "Choose File",
  },
  {
    Page: "Profile",
    Section: "Professional Info",
    Element: "Upload Resume",
    type: "API_CALL",
    target: "",
    Category: "launchpad",
    Subcategory: "profile_professional",
    Name: "upload_resume",
    Label: "Upload Resume",
  },
  {
    Page: "Profile",
    Section: "Professional Info",
    Element: "Submit",
    type: "API_CALL",
    target: "/student-personal-details/savePlacementProfileFormFields",
    Category: "launchpad",
    Subcategory: "profile_professional",
    Name: "submit",
    Label: "Submit",
  },

  {
    Page: "Left Navbar",
    Section: "Left Navbar",
    Element: "Home",
    type: "REDIRECT",
    target: "",
    Category: "launchpad",
    Subcategory: "navbar",
    Name: "home",
    Label: "Home",
  },
  {
    Page: "Left Navbar",
    Section: "Left Navbar",
    Element: "Modules",
    type: "REDIRECT",
    target: "",
    Category: "launchpad",
    Subcategory: "navbar",
    Name: "module",
    Label: "Modules",
  },
  {
    Page: "Left Navbar",
    Section: "Left Navbar",
    Element: "Live Doubt",
    type: "REDIRECT",
    target: "",
    Category: "launchpad",
    Subcategory: "navbar",
    Name: "live_doubt",
    Label: "Live Doubt",
  },
  {
    Page: "Left Navbar",
    Section: "Left Navbar",
    Element: "Gym",
    type: "REDIRECT",
    target: "",
    Category: "launchpad",
    Subcategory: "navbar",
    Name: "gym",
    Label: "Gym",
  },
  {
    Page: "Left Navbar",
    Section: "Left Navbar",
    Element: "Contests",
    type: "REDIRECT",
    target: "",
    Category: "launchpad",
    Subcategory: "navbar",
    Name: "contests",
    Label: "Contests",
  },
  {
    Page: "Left Navbar",
    Section: "Left Navbar",
    Element: "Sessions",
    type: "REDIRECT",
    target: "",
    Category: "launchpad",
    Subcategory: "navbar",
    Name: "sessions",
    Label: "Sessions",
  },
  {
    Page: "Left Navbar",
    Section: "Left Navbar",
    Element: "Notes",
    type: "REDIRECT",
    target: "",
    Category: "launchpad",
    Subcategory: "navbar",
    Name: "notes",
    Label: "Notes",
  },
  {
    Page: "Left Navbar",
    Section: "Left Navbar",
    Element: "open Editor",
    type: "REDIRECT",
    target: "",
    Category: "launchpad",
    Subcategory: "navbar",
    Name: "open_editor",
    Label: "open Editor",
  },
  {
    Page: "Left Navbar",
    Section: "Left Navbar",
    Element: "Calendar",
    type: "REDIRECT",
    target: "",
    Category: "launchpad",
    Subcategory: "navbar",
    Name: "calendar",
    Label: "Calendar",
  },
  {
    Page: "Left Navbar",
    Section: "Left Navbar",
    Element: "Soft Skills",
    type: "REDIRECT",
    target: "",
    Category: "launchpad",
    Subcategory: "navbar",
    Name: "soft_skills",
    Label: "Soft Skills",
  },
  {
    Page: "Left Navbar",
    Section: "Left Navbar",
    Element: "Projects",
    type: "REDIRECT",
    target: "",
    Category: "launchpad",
    Subcategory: "navbar",
    Name: "project",
    Label: "Projects",
  },
  {
    Page: "Left Navbar",
    Section: "Left Navbar",
    Element: "Refer & Earn",
    type: "REDIRECT",
    target: "",
    Category: "launchpad",
    Subcategory: "navbar",
    Name: "refer_and_earn",
    Label: "Refer & Earn",
  },
  {
    Page: "Left Navbar",
    Section: "Left Navbar",
    Element: "Job Portal",
    type: "REDIRECT",
    target: "",
    Category: "launchpad",
    Subcategory: "navbar",
    Name: "job_portal",
    Label: "Job Portal",
  },
  {
    Page: "Left Navbar",
    Section: "Left Navbar",
    Element: "Contact BM",
    type: "REDIRECT",
    target: "",
    Category: "launchpad",
    Subcategory: "navbar",
    Name: "contact_bm",
    Label: "Contact BM",
  },
  {
    Page: "Left Navbar",
    Section: "Left Navbar",
    Element: "Profile",
    type: "REDIRECT",
    target: "",
    Category: "launchpad",
    Subcategory: "navbar",
    Name: "profile",
    Label: "Profile",
  },
  {
    Page: "Left Navbar",
    Section: "Left Navbar",
    Element: "Logout",
    type: "REDIRECT",
    target: "",
    Category: "launchpad",
    Subcategory: "navbar",
    Name: "logout",
    Label: "Logout",
  },
];
module.exports = {
  configArr,
};
