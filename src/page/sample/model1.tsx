
export interface model1 {
    id: number;
    name?: string;
    age?: number;
}

export interface restFeedback extends model1 {
    result: string;
    isError: boolean, 
    isLoading: boolean
}