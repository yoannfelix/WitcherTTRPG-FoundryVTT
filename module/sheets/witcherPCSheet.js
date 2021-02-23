export default class witcherPCSheet extends ActorSheet {
	static get defaultOptions(){
		return mergeObject(super.defaultOptions,{
			template: "systems/witcherrpg/templates/sheets/character-sheet.hbs",
			classes: ["witcherrpg", "sheet", "playercharacter"]
		});
	}
}