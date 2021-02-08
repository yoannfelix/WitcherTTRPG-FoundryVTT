import witcheritemSheet from "./module/sheets/witcheritemSheet.js";

Hooks.once("init", function(){
    console.log("witcherrpg | Initializing The Witcher RPG System");

    Items.unregiterSheet("core", Itemsheet);
    Items.registerSheet("witcherrpg", witcherItemSheet, { MakeDefault: true});

});