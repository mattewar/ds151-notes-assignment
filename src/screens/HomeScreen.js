
import React, { useReducer, useContext } from 'react';
import { StyleSheet, Text, Button, ScrollView, View } from 'react-native';
import { NotesContext } from '../context/NotesContext';


function HomeScreen({ navigation }) {

    const { notes, dispatchNotes } = useContext(NotesContext)


    return (
        <ScrollView>
            <Button title="Adicionar" onPress={() => navigation.navigate('Create')} />
            {notes.map((note, index) => {
                return (
                    <View style={styles.noteView}>
                        <View style={styles.header}>
                            <Text style={styles.title}>{note.title}</Text>
                            <Button style={styles.removeButton} color="red" title="X" onPress={() => dispatchNotes({ type: "delete", index: index })} />
                        </View>
                        <Text style={styles.content}>{note.content}</Text>
                        <Button style={styles.removeButton} title="Editar ->" onPress={() => navigation.navigate('Update',{index: index,note: note})} />
                    </View>
                )
            })}
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
export default HomeScreen;