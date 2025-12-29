export interface Experience {
    companyName: string
    companyLogo: string
    role: string
    startDate: string
    endDate?: string
    description: string[]
}

export const experienceList: Experience[] = [
    {
        companyName: "Diligite",
        companyLogo: "/public/assets/images/diligite_logo.png",
        role: "Frontend Engineer",
        startDate: "January 2025",
        endDate: "November 2025",
        description: [
            "Developed responsive web applications including e-commerce sites and admin dashboards using React, Next.js, and Vue.js.",
            "Built interactive user interfaces with reusable component libraries and efficient state management solutions.",
            "Ensured mobile-responsive and cross-browser compatible development across all major browsers and devices."
        ]
    }
]

export default experienceList
