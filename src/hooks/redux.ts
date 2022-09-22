import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {allActionCreators} from "../store/reducers/action-creators";
import {RootState} from "../store";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActionCreators, dispatch);
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector