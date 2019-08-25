import IFilterActions from './filters/types';
import IPostsActions from './posts/types';
import rootReducer from './rootReducer';


export type IAppState = ReturnType<typeof rootReducer>;
export type IAppActions = IPostsActions | IFilterActions;
