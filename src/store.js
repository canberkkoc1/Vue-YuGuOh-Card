import {createStore} from 'vuex'
import axios from "axios"


const store = createStore({
    state:{
        cardInfo:[]
    },

    mutations:{
        setAllData(state,data){
            state.cardInfo = data
        }
    },

    actions:{
        async getAllData({commit},cardType){
             await axios.get(
                `https://db.ygoprodeck.com/api/v7/cardinfo.php?type=${cardType}`
            ).then(response => {
                console.log(response.data)
                commit("setAllData",response.data)

            })

        }
    },
    
    getters:{
        getCardState(state){
            return state.cardInfo
        }
    },
})


export default store