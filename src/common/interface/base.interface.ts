export interface IBaseParams {
    filters?: any[];
    joins?: any[];
    sorts?: any[];

    page?: number;
    per_page?: number;
}

export interface IBaseState {
    isLoading?: boolean;

    params?: any;
    pagination?: any;
    totalData?: any;
}

export interface IData {
    id?: string;
    created_at?: string;
    updated_at?: string;
}

