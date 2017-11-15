export interface WorkhistoryInterface {
    company: string;
    title: string;
    location: string;
    dateRange: string;
    text: string;
    accomplishments: string;
}

export class Workhistory {

    company: string;
    title: string;
    location: string;
    dateRange: string;
    text: string;
    accomplishments: string;

    constructor(company: WorkhistoryInterface["company"],
        title: WorkhistoryInterface["title"],
        location: WorkhistoryInterface["location"],
        dateRange: WorkhistoryInterface["dateRange"],
        text: WorkhistoryInterface["text"],
        accomplishments: WorkhistoryInterface["accomplishments"]) {

        // this.content = { company, title, location, dateRange, text, accomplishments };
    }
}
