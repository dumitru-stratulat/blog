import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import {Context} from '../context/BlogContext'
import createDataContext from '../context/createDataContext'
import { FontAwesome, Feather, AntDesign } from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
    const {state,addBlogPost, deleteBlogPost} = useContext(Context)

    const blogPost = state.find(
        ()=> blogPost => blogPost.id === navigation.getParam('id'))
    return (
        <View>
            <Text>IndexScreen</Text>
            <Button title="Add Post"  onPress={addBlogPost}/>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item})=>{
                    return (
                        <TouchableOpacity onPress={()=>navigation.navigate('Show',{id: item.id})}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => { deleteBlogPost(item.id) }}>
                                    <FontAwesome style={styles.icon} name="trash-o" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}
IndexScreen.navigationOptions = ({navigation}) =>{
    return {
        headerRight: ()=> { return (<TouchableOpacity onPress={()=>navigation.navigate('Create')}>
                        <AntDesign name="pluscircleo" size={30}/>
                     </TouchableOpacity>)}
    }
}

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderWidth: 0.5,
        borderRadius: 10,
        paddingHorizontal: 10
    },
    icon: {
        fontSize: 24
    },
    title:{
        fontSize: 18
    }
})

export default IndexScreen
