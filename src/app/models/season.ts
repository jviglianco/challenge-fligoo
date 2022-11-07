import { Team } from "./team";

export class Season {
    id!: number;
    startDate!: Date;
    endDate!: Date;
    currentMatchday!: number;
    winner!: Team;
}
