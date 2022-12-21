import { useDispatch, useSelector } from 'react-redux';
import {  onOpenDateModal } from '../store';


export const useUiStore = () => {

    const dispatch = useDispatch();

    const { 
        isDateModalOpen
    } = useSelector( state => state.ui );

    const openDateModal = () => {
        dispatch( onOpenDateModal() )
    }






    return {
        //* Propiedades
        isDateModalOpen,

        //* Métodos
        openDateModal,
     
    }

}