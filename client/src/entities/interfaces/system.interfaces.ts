import { ButtonHTMLAttributes } from "react";

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

interface _ButtonIF extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLink?: boolean;
    children?: React.ReactNode;
}

interface _LinkIF {
    isActive?: boolean;
    className?: string;
    href?: string;
    children?: React.ReactNode;
}

export type {
    _BaseIF,
    _MetaIF,
    _ButtonIF,
    _LinkIF,
} 