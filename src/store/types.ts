export type AsyncReduxItem<T> = {
    loading: boolean;
    error: any;
    data: T | null;
};

export type AsyncReduxList<T> = {
    loading: boolean;
    error: any;
    data: T[];
};