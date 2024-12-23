import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {styles} from './styles';

type Props = {
    onRemove: () => void
}

export function DeleteButton({onRemove}: Props){
    return(
        <TouchableOpacity style={styles.button} onPress={onRemove}>
            <MaterialCommunityIcons name="trash-can-outline" style={styles.icon}/>
        </TouchableOpacity>
    )
}