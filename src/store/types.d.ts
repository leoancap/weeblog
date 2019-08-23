import { IPostsActions } from "./post/types";
import rootReducer from "./rootReducer";

export type IAppState = ReturnType<typeof rootReducer>;
export type IAppActions = IPostsActions;
