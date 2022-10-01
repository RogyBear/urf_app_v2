import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Button from '../components/global-components/forms/Button'



export default function QuestionFooter({ palette, handleBack, handleForward, totalQuestions, confirmation = false }) {

    // if (confirmation) return (
    //     <View style={{ width: '100%', marginVertical: 25 }}>
    //         <Button
    //             text="Редагувати інформарцію"
    //             onPress={() => setStep(0)}
    //             palette={palette}
    //         />
    //         <Button
    //             primary
    //             text="Все правильно!"
    //             onPress={() => setOpenConfirm(true)}
    //             palette={palette}
    //         />
    //     </View>
    // )


    return (
        <View style={styles.footer}>
            <Button
                primary={false}
                key={1}
                text='Назад'
                handleBack={handleBack}
                palette={palette}
            />
            <Button
                primary={true}
                key={2}
                text='Далі'
                handleForward={handleForward}
                palette={palette}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    footer: {
        marginHorizontal: 10,
        flexDirection: 'row'
        // display: 'flex',
        // width: '100%'
    }
})