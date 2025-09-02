import { Bell, CreditCard, PieChart, Receipt, Users } from "lucide-react";

export const FEATURES = [
  {
    title: "Group Expenses",
    Icon: Users,
    bg: "bg-green-100",
    color: "text-green-600",
    description:
      "Create groups for roommates, trips, or events to keep expenses organized.",
  },
  {
    title: "Smart Settlements",
    Icon: CreditCard,
    bg: "bg-teal-100",
    color: "text-teal-600",
    description:
      "Our algorithm minimises the number of payments when settling up.",
  },
  {
    title: "Expense Analytics",
    Icon: PieChart,
    bg: "bg-green-100",
    color: "text-green-600",
    description:
      "Track spending patterns and discover insights about your shared costs.",
  },
  {
    title: "Payment Reminders",
    Icon: Bell,
    bg: "bg-amber-100",
    color: "text-amber-600",
    description:
      "Automated reminders for pending debts and insights on spending patterns.",
  },
  {
    title: "Multiple Split Types",
    Icon: Receipt,
    bg: "bg-green-100",
    color: "text-green-600",
    description:
      "Split equally, by percentage, or by exact amounts to fit any scenario.",
  },
  {
    title: "Real‑time Updates",
    Icon: () => (
      /* custom inline icon (no Lucide equivalent) */
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M9 14v8M15 14v8M9 2v6M15 2v6" />
      </svg>
    ),
    bg: "bg-teal-100",
    color: "text-teal-600",
    description:
      "See new expenses and repayments the moment your friends add them.",
  },
];

export const STEPS = [
  {
    label: "1",
    title: "Create or Join a Group",
    description:
      "Start a group for your roommates, trip, or event and invite friends.",
  },
  {
    label: "2",
    title: "Add Expenses",
    description:
      "Record who paid and how the bill should be split amongst members.",
  },
  {
    label: "3",
    title: "Settle Up",
    description: "View who owes what and log payments when debts are cleared.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Living with roommates is so much easier with Splitr. We track everything from rent and bills to shared groceries. It has completely eliminated the awkward 'who owes what' conversations. A must-have for any shared household!",
    name: "Priya S.",
    image: "/testimonials/women-1.jpg",
    role: "Flatmate",
  },
  {
    quote:
      "Honestly, Splitr saved our friendships on our recent group trip to Goa. From flights and hotels to that one expensive dinner, everything was tracked in real-time. Settling up at the end was as simple as a single click.",
    name: "Alex Johnson",
    image: "/testimonials/men-1.jpg",
    role: "Frequent Traveler",
  },
  {
    quote:
      "I'm always the one organizing group dinners. Before Splitr, I'd end up paying a huge bill and then chasing people for days. Now, I just create a group, add the expense, and the app handles the rest. It's a game-changer.",
    name: "Meera Desai",
    image: "/testimonials/women-2.jpg",
    role: "Social Planner",
  },
  {
    quote:
      "My partner and I use it to manage our shared household expenses while keeping our personal finances separate. It's incredibly transparent and fair, which has been great for our budget and our relationship.",
    name: "Sarah Chen",
    image: "/testimonials/women-3.jpg",
    role: "Homeowner",
  },
  {
    quote:
      "As a college student, I'm constantly splitting small costs—late-night snacks, movie tickets, you name it. Splitr keeps a running tab so no one forgets the small amounts that eventually add up. So much better than a chaotic group chat!",
    name: "Rohan Mehra",
    image: "/testimonials/men-2.jpg",
    role: "University Student",
  },
  {
    quote:
      "I was a die-hard spreadsheet user for tracking expenses, but Splitr converted me. The mobile accessibility and the way it simplifies complex debts into single payments is something my spreadsheet could never do. I'm never going back.",
    name: "David Smith",
    image: "/testimonials/men-3.jpg",
    role: "Project Manager",
  },
  {
    quote:
      "Perfect for freelancers collaborating on projects. We use Splitr to share costs for software subscriptions, cloud storage, and client-related travel. It keeps our project finances clean and professional.",
    name: "Aisha Khan",
    image: "/testimonials/women-4.jpg",
    role: "Freelance Designer",
  },
  {
    quote:
      "The interface is so clean and intuitive. I added my first expense and invited my friends in under a minute. It just works, beautifully. No clutter, no confusion.",
    name: "Jessica Lee",
    image: "/testimonials/women-5.jpg",
    role: "App Enthusiast",
  },
  {
    quote:
      "Organizing a vacation with my extended family was daunting, especially the money part. Splitr made it incredibly easy to track shared costs for the rental house and activities, ensuring everything was fair without any family squabbles.",
    name: "Mark O'Brien",
    image: "/testimonials/men-5.jpg",
    role: "Family Vacation Organizer",
  },
];
