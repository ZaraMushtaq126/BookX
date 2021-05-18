import React from 'react';
import { View, Text, FlatList,StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const ListItemScreen = () => {
    const myitems = [
        {
            name: "Mobile",
            typ: "Lend",
            phone: "0303838299",
            image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            desc: "I'm selling my Phone...jbbjfdbjgbf; wjfrbwejbf iiefhhej fe"
        },

        {
            name: "Camera",
            typ: "sell",
            phone: "0303856599",
            image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FtZXJhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            desc: "I'm selling my Phone...jbbjfdbjgbf; wjfrbwejbf iiefhhej fe"
        }
    ]

    const renderItem = (item) => {
        return(
        <Card style={styles.card}>
            <Card.Title title={item.name}/>
            <Card.Content>
                <Paragraph>{item.desc}</Paragraph>
                <Paragraph>{item.typ}</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: item.image }} />
            <Card.Actions>
                <Button>200</Button>
                <Button>Call Seller</Button>
            </Card.Actions>
        </Card>
        )
    }
    return (

        <View>
            <FlatList
                data={myitems}
                keyExtractor={(item) => item.phone}
                renderItem={({ item }) => renderItem(item)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        margin: 10,
        elevation:2
    },
});
export default ListItemScreen
