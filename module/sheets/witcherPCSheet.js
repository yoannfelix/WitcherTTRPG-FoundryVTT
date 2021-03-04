export default class witcherPCSheet extends ActorSheet {
	static get defaultOptions(){
		return mergeObject(super.defaultOptions,{
			template: "systems/witcherrpg/templates/sheets/character-sheet.hbs",
			classes: ["witcherrpg", "sheet", "playercharacter"]
		});
	}

	getData(){
		const data = super.getData();
		data.config = CONFIG.witcherrpg;
		data.weapons= data.items.filter(function (item){ return item.type == "weapon"});
		return data;
	}
}