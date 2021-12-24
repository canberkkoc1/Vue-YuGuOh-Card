<template>
  <div >
      <div style="margin-bottom:2rem;display:flex;justify-content:space-between; width:600px">

        <select name="" id="" v-model="cardType">
            <option v-for="item in typesOfCard" :key="item" :value="item">{{item}}</option>
            
            
        </select>

          <!-- <label for="magic">Magic</label>
          <input type="radio" name="magic"  value="magic"  id=""  v-model="cardSet.cardType"> |
          <label for="trap">Trap</label>
          <input type="radio" name="trap"  value="trap" id="" v-model="cardSet.cardType"> |
          <label for="spell">Spell</label>
          <input type="radio" name="spell" value="spell" id="" v-model="cardSet.cardType"> -->
      </div>
      <div>
            <button @click="getData">Create a Deck</button>
      </div>
  </div>
</template>

<script>
export default {

    data(){
        return{
            
            typesOfCard:[
            "Effect Monster",
            "Flip Effect Monster",
            "Flip Tuner Effect Monster",
            "Gemini Monster",
            "Normal Monster",
            "Normal Tuner Monster",
            "Pendulum Effect Monster",
            "Pendulum Flip Effect Monster",
            "Pendulum Normal Monster",
            "Pendulum Tuner Effect Monster",
            "Ritual Effect Monster",
            "Ritual Monster",
            "Skill Card",
            "Spell Card",
            "Spirit Monster",
            "Toon Monster",
            "Trap Card",
            "Tuner Monster",
            "Union Effect Monster",
            ],
            cardType:"",
        }
    },

    methods: {
        getData(){
            this.$store.dispatch("getAllData",this.cardType)
            
            
        }
    },

}
</script>

<style>

</style>