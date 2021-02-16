export default class witcherItemSheet extends ItemSheet {

	static get defaultOptions(){
		return mergeObject(super.defaultOptions,{
			width: 530,
			height: 340,
			classes: ["witcherrpg", "sheet", "item"]
		});
		
	} 

	get template () {
		return `systems/witcherrpg/templates/sheets/${this.item.data.type}-sheet.hbs`;
	}

	getData(){
		const data = super.getData();

		data.config = CONFIG.witcherrpg;

		return data;
	}
}