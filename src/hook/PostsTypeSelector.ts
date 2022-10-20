import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store/Reducer/store";



export const useAppSelector: TypedUseSelectorHook<RootState>= useSelector