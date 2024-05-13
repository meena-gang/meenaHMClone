import {combineReducers} from 'redux';
import {
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    VStack,
  } from '@chakra-ui/react'
  
const genericDataReducer = (state={womens:[],mens:[],kids:[]},action) => {
   
    //  console.log(action.payload);
    switch(action.type){        
        case 'fetchData' : return {...state, womens: action.payload.womensData, mens:action.payload.mensData,kids:action.payload.kidsData,};
        default : return state;
    }
}

const intialCartState =  JSON.parse(localStorage.getItem('cart')) || [];

const cartReducer = (state= intialCartState,action) => {
    
    switch(action.type){
        case 'add' : return [...action.payload];
        case 'addFromCart' : return[...action.payload];
        case 'removeFromCart' : return[...action.payload];
        default : return state;
    }
}
let isLoggedIn = JSON.parse(localStorage.getItem('token')) || false;

const authReducer = (state=isLoggedIn,action) => {
    switch(action.type){
    case 'signIn' : return true;
    case 'signOut' : return false;
    default : return state;
    }
}

export const rootReducer = combineReducers({genericDataReducer,cartReducer,authReducer});