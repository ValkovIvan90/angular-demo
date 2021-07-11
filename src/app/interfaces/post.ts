import { IBase } from "./base";
import { ITheme } from "./theme";
import { IUser } from "./user";

export interface IPost extends IBase {
    Likes: string[];
    text: string;
    userId: IUser;
    themeId: ITheme;
}