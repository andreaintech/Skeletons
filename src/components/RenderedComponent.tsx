import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'

const { width } = Dimensions.get('window');

const RenderedComponent = () => {
    return (
        <View style={styles.container} />
    )
}

export default RenderedComponent

const styles = StyleSheet.create({
    container: { height: 150, width, backgroundColor: 'orange' }
})
