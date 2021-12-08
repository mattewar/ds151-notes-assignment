
import React, { useContext, useState } from 'react';
import { StyleSheet, TextInput, Button, ScrollView, View } from 'react-native';
import { NotesContext } from '../context/NotesContext';


function CreateScreen({ navigation }) {

    const { notes,dispatchNotes } = useContext(NotesContext)
    const [ title, setTitle ] = useState("")
    const [ content, setContent ] = useState("")

    return (
        <ScrollView>
            <Button title="Voltar" onPress={() => navigation.navigate('Home')} />
            <View style={styles.noteView}>
                <TextInput placeholder='Titulo' value={title} onChangeText={(a) => setTitle(a)} />
                <TextInput placeholder='Conteudo' value={content} onChangeText={(a) => setContent(a)} />
                <Button title="Adicionar" onPress={() => {
                    dispatchNotes({ type: "create", payload: [{ title: title, content: content }] });
                    navigation.navigate('Home')
                }} />

            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    noteView: {
        backgroundColor: "#f5cc5b",
        padding: 5,
        marginTop: 10,
        marginHorizontal: 30,
        minHeight: 100,
    },
    title: {
        fontSize: 24,
        textAlign: "center"
    },
    content: {

    },
    removeButton: {
        shadowRadius: 0,
        shadowOpacity: 0
    },
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
    }
});
export default CreateScreen;