<template>
    <div id="card">         

                 <b-card v-for="item in getCardState.data" :key="item"
                    :title="item.name"
                    :img-src="item.card_images[0].image_url"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                   {{item.type}}
                    </b-card-text>
                </b-card>
                
           
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {

    data(){
        return{
            
        }
    },


    computed: {
        ...mapGetters([
            "getCardState"
        ])
    },

}
</script>

<style>
#card{
    display: grid;
    grid-template-columns: repeat(5,18%);
    row-gap: 5rem;
    column-gap: 2rem;
    
}
</style>