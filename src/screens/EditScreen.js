import React,{useContext} from 'react'
import { View, Text } from 'react-native'
import { Context } from '../context/BlogContext'
import { TextInput } from 'react-native-gesture-handler';
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({navigation}) => {
    const { state,editBlogPost } = useContext(Context)
    const id = navigation.getParam('id')
    const blogPost = state.find((blogPost) => blogPost.id === id)

    return (
        <BlogPostForm 
        initialValues={{ title: blogPost.title,content: blogPost.content}}
        onSubmit={(title,content) =>{
            editBlogPost(id,title,content,()=> navigation.pop())
        }}/>
    )
}

export default EditScreen
