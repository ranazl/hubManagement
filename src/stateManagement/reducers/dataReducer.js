import {DataGetAll,DataAdd,DataRemove,DataEdit} from '../actions/actionTypes'

const initialState = {
    items: [
        {number: 1, nationalCode: 1234567890, name: "رعنا", familyName: "ذوالفقاری", roles: "ادمین"},
        {number: 2, nationalCode: 9987654321, name: "اسماعیل", familyName: "مومن", roles: "مدیر"},
        {number: 3, nationalCode: 1987654321, name: "نیما", familyName: "رستمی", roles: "معاون"},
        {number: 4, nationalCode: 3458621902, name: "مهدی", familyName: "جمالی", roles: "کارمند"},
        {number: 5, nationalCode: 5645767568, name: "پریسا", familyName: "داودی", roles: "کارمند"},
        {number: 6, nationalCode: 1234567899, name: "زهرا", familyName: "فروتن", roles: "کارمند"}
    ],
    isLoading:true
};

function DataReducer (state= initialState, action) {

    switch (action.type) {
        case DataGetAll:
        return {...state, items:state.items};
        case DataAdd:
        return {...state, items:state.items.concat([action.payload])};
        case DataRemove:
        return {...state, items: state.items.filter((item) => item.id !== action.payload)};

        default:
            return state;
    }
}

export default DataReducer;