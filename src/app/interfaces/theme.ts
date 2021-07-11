import { IBase } from "./base";
import { IUser } from "./user";

export interface ITheme extends IBase {
    subscribers: string[];
    post: string[];
    themeName: string;
    userId: IUser;
}