interface _BaseIF {
    readonly id: number;
    readonly created_at: Date;
    updated_at: Date;
}

interface _MetaIF {
    page: number;
    pages: number;
    items: number;
    status: number;
}

export type {
    _BaseIF,
    _MetaIF
} 