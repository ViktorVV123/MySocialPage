export type PostType={
    id:string
    text:string
    like:number
}

export type initialStateType={
   posts:Array<PostType>

}

interface fetchPostType {
    type: allFETCH.FETCH_POST
    id:string

}
export enum allFETCH {
    ADD_POST = 'ADD_POST',
    FETCH_POST = '',
    DELETE_POST = 'DELETE_POST',
    COUNTER_LIKE = 'COUNTER_LIKE',

}

export type PostActionType =  fetchPostType