export interface Experience {
    company: string
    role: string
    startDate: string
    endDate?: string
    duration: string // <-- added
    description: string
}

export const experienceList: Experience[] = [
    {
        company: 'Acme Corp',
        role: 'Frontend Developer',
        startDate: '2021-06',
        endDate: '2023-08',
        duration: '2y 2m', // <-- added
        description: 'Built UI with Vue 3 and Tailwind.' // added
    },
    {
        company: 'Example LLC',
        role: 'Intern',
        startDate: '2020-01',
        endDate: '2020-12',
        duration: '11m', // <-- added
        description: 'Worked on internal tools.' // added
    }
]

export default experienceList
