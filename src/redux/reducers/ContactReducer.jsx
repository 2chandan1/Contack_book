const initialState=[
    {
        id:0,
        name:'chandan Tiwari',
        email:'sc@12.com',
        number:9135084630,
    },
    {
        id:1,
        name:'vishal kumar',
        email:'vishal@12gmail.com',
        number:7091938210
    },
    {
        id:2,
        name:'pihu pandey',
        email:'pihu@12.com',
        number:1324565788
    },
    {
        id:3,
        name:'ankit kumar rai',
        email:'ankit@gmaul.com',
        number:75081522
    },
    {
        id:4,
        name:'nisha rai',
        email:'nisha12@gmail.com',
        number:707085420
    },
    {
        id:5,
        name:'Atul Tiwari',
        email:'Atul@2.com',
        number:1324565788
    },
];
const ContactReducer =(state=initialState,action)=>{
    switch(action.type){
        case "ADD_CONTACT":
            state=[...state, action.payload];
            return state;
        case "UPDATE_CONTACT":
            const updateState=state.map((contact)=>
            contact.id===action.payload.id ? action.payload:contact
            );
            state=updateState;
            return state;

        case "DELETE_CONTACT":
            const filterContacts=state.filter((contact)=>contact.id !== action.payload && contact);
            state =filterContacts;
            return state;
        default:
            return state;
    }
};
export default ContactReducer;