import { reactive } from "vue";

const store = reactive({
    username: 'EdwMacias',
    updateUsername(username){
        this.username = username
    }
})

export default store