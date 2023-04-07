import { reactive, computed } from "vue";

const storeState = reactive({
  name: "Bethany",
});

const changeName = function (newName) {
  storeState.name = newName;
};

export default {
  state: storeState, // object with state key value pairs
  changeName, // state editor
};
