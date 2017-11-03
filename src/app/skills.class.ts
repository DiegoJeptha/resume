export interface SkillInterface {
    title: string;
    items: string[];
}

export class Skill {
    content: SkillInterface;

    constructor(title: SkillInterface["title"], items: SkillInterface["items"]) {
        this.content = { title, items };
    }
}
