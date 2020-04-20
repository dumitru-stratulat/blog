
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer'

const blogReducer = (state,action) =>{
    switch(action.type){
        case 'get_blogposts':
            return action.payload
        case 'edit_blogpost':
            return state.map((blogPost)=> {
               return blogPost.id === action.payload.id ? action.payload : blogPost
            })

        case 'delete_blogpost':
            return state.filter((blogPost)=>blogPost.id !== action.payload)
        default:
            return state;    
    }
}
const getBlogPosts = dispatch =>{
    return async ()=>{
        const response = await jsonServer.get('/blogposts')
        console.log(response.data)
        dispatch({ type: 'get_blogposts', payload: response.data })
    }
}
const addBlogPost = (dispatch) =>{
    return async (title,content,callback)=>{
        await jsonServer.post('/blogposts',{title,content})
        callback ? callback() : null
    }
    // return (title,content,callback) => {
    //     dispatch({ type: 'add_blogpost', payload:{ title, content} })
 
    // }
}
const deleteBlogPost = (dispatch) =>{
    return async (id) => {
        await jsonServer.post(`/blogposts/${id}`,{title,content})
        // dispatch({ type: 'delete_blogpost',payload: id })
    }
}
const editBlogPost = (dispatch) =>{
    return (id,title,content,callback) => {
        dispatch({ type: 'edit_blogpost',payload: {id,title,content} })
        callback ? callback() : null
    }
}

export const { Context, Provider, } = createDataContext(
    blogReducer,
    {addBlogPost,deleteBlogPost,editBlogPost,getBlogPosts},[])