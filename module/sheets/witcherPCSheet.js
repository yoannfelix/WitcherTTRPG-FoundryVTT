import { timeStamp } from "console"

export default class witcherPCSheet extends ActorSheet {
	static get defaultOptions(){
		return mergeObject(super.defaultOptions,{
			template: "sytems/witcherrpg/templates/sheets/playercharacter-sheet.hbs",
			classes: ["witcherrpg", "sheet", "playercharacter"]
		});
	}
}