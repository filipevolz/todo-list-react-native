import { TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./styles";
import { useState } from "react";

type Props = {
    status: boolean,
    onToggleStatus: () => void
}

export function CheckBox({status, onToggleStatus}: Props){
    return(
        <TouchableOpacity style={status ? styles.buttonActive : styles.buttonDisabled} onPress={onToggleStatus}>
            { status ? <MaterialCommunityIcons name="check-bold" color="#FFF"/> : null }
        </TouchableOpacity>
    )
}