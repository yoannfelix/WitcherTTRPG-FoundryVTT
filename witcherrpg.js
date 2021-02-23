import { witcherrpg } from "./module/config.js";
import witcherItemSheet from "./module/sheets/witcherItemSheet.js";
import witcherPCSheet from "./module/sheets/witcherPCSheet.js";

async function preloadHandlebarsTemplates(){
    const templatePaths = [
        "systems/witcherrpg/templates/partials/character-stat-block.hbs"
    ]

    return loadTemplates(templatePaths);
};

Hooks.once("init", function(){
    console.log("witcherrpg | Initializing The Witcher RPG System");
   
    CONFIG.witcherrpg = witcherrpg;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("witcherrpg", witcherItemSheet, {MakeDefault: true, label: "WitcherRPG.SheetClassItem"});

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("witcherrpg", witcherPCSheet, { MakeDefault: true, label: "WitcherRPG.SheetClassItem"});

    preloadHandlebarsTemplates();
});