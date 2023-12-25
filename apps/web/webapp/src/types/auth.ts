export type User = {
    id: number;
    email: string;
    fullName: string;
    teamAccount: "yes" | "no";
    usageMode:"personal" | "work" | "education";
    createdAt: string;
    updatedAt: string;
}