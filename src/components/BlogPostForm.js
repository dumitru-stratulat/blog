import React, { useState,useContext } from 'react'
import { View, Text,TextInput,Button,StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'

const BlogPostForm = ({onSubmit, initialValues}) => {
    const [title,setTitle] = useState(initialValues.title)
    const [content,setContent] = useState(initialValues.content)
    const { addBlogPost } = useContext(Context)

    return (
        <View>
            <Text style={styles.label}>Enter title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text)=>setTitle(text)}/>
            <Text style={styles.label}>Enter content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text)=>setContent(text)}/>
            <Button 
                title="Add Blogpost"
                onPress={()=>{
                    onSubmit(title,content)
                }}
            />
        </View>
    )
}

BlogPostForm.defaultProps= {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
})

export default BlogPostForm
