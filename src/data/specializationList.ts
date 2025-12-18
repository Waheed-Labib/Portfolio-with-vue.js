export interface Specialization {
    topic: string,
    expertiseLevel: 0 | 1 | 2 | 3 | 4 | 5
}

export const specializationList: Specialization[] = [
    {
        topic: "JavaScript Frontend Frameworks",
        expertiseLevel: 4
    },
    {
        topic: "Full-Stack Development",
        expertiseLevel: 3
    },
    {
        topic: "UI/UX, Documentation, Systems Design",
        expertiseLevel: 2
    }
]

export default specializationList;