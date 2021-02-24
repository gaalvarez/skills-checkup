import { ObjectDirective } from "vue";

export const scCheckDirectiveOption: ObjectDirective = {
  mounted(el, binding) {
    const res = binding.value || {};
    if (res.correct === res.response) {
      el.style["background-color"] = "green";
    } else {
      el.style["background-color"] = "red";
    }
  },
};
