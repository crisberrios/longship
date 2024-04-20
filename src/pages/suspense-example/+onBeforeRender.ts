import { fact$ } from "../../store/store";

export { onBeforeRender };
function onBeforeRender() {
	fact$.value = "PLACEHOLDER";
}
