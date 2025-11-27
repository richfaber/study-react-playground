
export interface model1 {
    name: string;
    age: number;
}

export interface restFeedback extends model1 {
    result: string;
    isError: boolean, 
    isLoading: boolean
}