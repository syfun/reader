import React from 'react';
import { View, Text, Image } from 'react-native';


class Book extends React.Component {
    render() {
        return (
            <View>
                <Image source={{ uri: 'http://qidian.qpic.cn/qdbimg/349573/1004684807/180' }}
                    style={{ width: 400, height: 400 }} />
                <Text>{props.title}</Text>
            </View>
        )
    }
}

const Book = ({ title }) => (
    <View>
        <Image source={{ uri: 'http://qidian.qpic.cn/qdbimg/349573/1004684807/180' }}
            style={{ width: 400, height: 400 }} />
        <Text>{props.title}</Text>
    </View>
);

export default Book;