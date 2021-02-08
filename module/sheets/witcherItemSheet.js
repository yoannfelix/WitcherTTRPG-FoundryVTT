export default class witcherItemSheet extends ItemSheet {
	get template () {
		return `systems/witcherrpg/templates/sheets/${this.item.data.type}-sheet.html`;
	}
}