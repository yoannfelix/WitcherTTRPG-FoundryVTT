import {witcherrpg} from "./module/config.js";
import witcherItemSheet from "./module/sheets/witcherItemSheet.js";
import witcherCharacterSheet from "./module/sheets/witcherPCSheet.js";

Hooks.once("init", function(){
    console.log("witcherrpg | Initializing The Witcher RPG System");
   
    CONFIG.witcherrpg = witcherrpg;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("witcherrpg", witcherItemSheet, { types: ["weapon"], MakeDefault: true, label: "WitcherRPG.SheetClassItem"});

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("witcherrpg", witcherCharacterSheet, { types: ["weapon"], MakeDefault: true, label: "WitcherRPG.SheetClassItem"});
});