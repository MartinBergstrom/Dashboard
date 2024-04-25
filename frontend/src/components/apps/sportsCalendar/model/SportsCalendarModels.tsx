export interface SportsCalendarEvent {
    _id: string;
    name: string;
    description: string;
    pre_start_date?: Date;
    start_date: Date;
    end_date: Date;
    category: string;
    channels: string[];
    banner_color: string;
    highlights?: EventHighlight[];
}

export interface EventHighlight {
    date: Date;
    description: string;
}