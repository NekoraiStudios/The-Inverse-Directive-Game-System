import { SystemActor, SystemItem } from "./module/documents.mjs";
import { CharacterDataModel, GearDataModel } from "./module/data-models.mjs";
import { CharacterActorSheet } from "./sheet/character.mjs";

globalThis.InverseDirectiveGS = {
	SystemActor,
	SystemItem
};


Hooks.once("init", () => {
	globalThis.InverseDirectiveGS = game.InverseDirectiveGS = Object.assign(game.system, globalThis.InverseDirectiveGS);
	// Configure custom Document implementations.
	CONFIG.Actor.documentClass = SystemActor;
	CONFIG.Item.documentClass = SystemItem;

	// Configure System Data Models.
	CONFIG.Actor.dataModels = {
		character: CharacterDataModel,
	};
	CONFIG.Item.dataModels = {
		gear: GearDataModel
	};
	
	// register vehicule sheet
	foundry.documents.collections.Actors.registerSheet('inversedirectivegs', CharacterActorSheet, {
		types: ['character'],
		makeDefault: true,
		label: 'INVERSEDIRECTIVEGS.SheetLabels.Character',
	});

	CONFIG.Actor.trackableAttributes = {
		charater: {
			bar: [
				"mojo",
			],
			value: []
		}
	};

});

Hooks.once("ready", async () => {
	const prototypeTokenOverrides = await game.settings.get("core","prototypeTokenOverrides");
	await game.settings.set(
		"core",
		"prototypeTokenOverrides",
		foundry.utils.mergeObject(prototypeTokenOverrides.toObject(), {
			character: {
				disposition: CONST.TOKEN_DISPOSITIONS.NEUTRAL,
				actorLink: true,
				displayBars: CONST.TOKEN_DISPLAY_MODES.OWNER,
				bar1:{
					attribute:"mojo"
				}
			}
		})
	)
});
