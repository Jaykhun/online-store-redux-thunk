import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import FetchProductAsyncActions from "../store/asyncActions/"

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(FetchProductAsyncActions, dispatch)
}
