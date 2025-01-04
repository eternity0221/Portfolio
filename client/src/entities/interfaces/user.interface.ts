import { _BaseIF, _MetaIF } from "./system.interfaces";

interface UserIF extends _BaseIF {
    nickname: string;
    readonly email: string;
    blocking: boolean;
}

interface UserManyResponseIF {
    data: UserIF[];
    meta: _MetaIF;
}

interface UserOneResponseIF {
    data: UserIF;
    meta: _MetaIF;
}

export type  { UserIF, UserManyResponseIF, UserOneResponseIF }