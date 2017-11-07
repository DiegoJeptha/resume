export interface EducationInterface {
    school: string;
    course: string;
    graduationYear: string;
    summary: string;
}

export class Education {
    content: EducationInterface;

    constructor(school: EducationInterface["school"],
        course: EducationInterface["course"],
        graduationYear: EducationInterface["graduationYear"],
        summary: EducationInterface["summary"]) {

        this.content = { school, course, graduationYear, summary };
    }
}
