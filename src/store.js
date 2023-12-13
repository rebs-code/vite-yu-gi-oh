import { reactive } from "vue";

export const store = reactive({
  cards: [],
  archetypes: [],
  apiYuGiOh: {
    defaultURL: "https://db.ygoprodeck.com/api/v7/",
    cardInfo: "cardinfo.php",
    archetypes: "archetypes.php",
  },
});
