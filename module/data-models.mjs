const {BooleanField, HTMLField, SchemaField, NumberField, StringField} = foundry.data.fields;

class ActorDataModel extends foundry.abstract.TypeDataModel {
	static defineSchema() {
		return {
			description: new HTMLField()
		};
	}
}

export class CharacterDataModel extends ActorDataModel {
	static defineSchema() {
		return {
			...super.defineSchema(),
			nickname: new StringField({blank: true}),
			nationality: new StringField({blank: true}),
			gender: new StringField({blank: true}),
			surname: new StringField({blank: true}),
			age: new NumberField({ required: false, integer: true, min: 0, initial: 0 }),
			profession: new StringField({blank: true}),
			organisation: new StringField({blank: true}),
			role: new StringField({blank: true}),
			traits: new SchemaField({
				line1: new StringField({blank: true}),
				line2: new StringField({blank: true}),
				line3: new StringField({blank: true}),
				line4: new StringField({blank: true}),
			}),
			physicalArmorHU1: new NumberField({ required: false, integer: true, min: -9, max:9, initial: 0 }),
			physicalArmorHU2: new NumberField({ required: false, integer: true, min: -9, max:9, initial: 0 }),
			physicalArmorA: new NumberField({ required: true, integer: true, min: 1, max:9, initial: 1 }),
			physicalArmorArrowAB: new BooleanField({initial: false}),
			physicalArmorB: new NumberField({ required: true, integer: true, min: 1, max:9, initial: 1 }),
			physicalArmorArrowBC: new BooleanField({initial: false}),
			physicalArmorC: new NumberField({ required: true, integer: true, min: 1, max:9, initial: 1 }),
			physicalArmorD: new NumberField({ required: true, integer: true, min: 1, max:9, initial: 1 }),
			physicalArmorArrowED: new BooleanField({initial: false}),
			physicalArmorE: new NumberField({ required: true, integer: true, min: 1, max:9, initial: 1 }),
			physicalArmorArrowFE: new BooleanField({initial: false}),
			physicalArmorF: new NumberField({ required: true, integer: true, min: 1, max:9, initial: 1 }),
			physicalModSU: new NumberField({ required: false, integer: true, min: -9, max:9, initial: 0 }),
			physicalModRD: new NumberField({ required: false, integer: true, min: -9, max:9, initial: 0 }),
			mentalModSU: new NumberField({ required: false, integer: true, min: -9, max:9, initial: 0 }),
			mentalModRD: new NumberField({ required: false, integer: true, min: -9, max:9, initial: 0 }),
			mojo: new SchemaField({
				value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
				max: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
			}),
			skill: new SchemaField({
				wit: new NumberField({ required: true, integer: true, min: 1, max:9, initial: 1 }),
				force: new NumberField({ required: true, integer: true, min: 1, max:9, initial: 1 }),
				athletics: new NumberField({ required: true, integer: true, min: 1, max:9, initial: 1 }),
				persuasion: new NumberField({ required: true, integer: true, min: 1, max:9, initial: 1 }),
				crafting: new NumberField({ required: true, integer: true, min: 1, max:9, initial: 1 }),
				pilot: new NumberField({ required: true, integer: true, min: 1, max:9, initial: 1 }),
				espionage: new NumberField({ required: true, integer: true, min: 1, max:9, initial: 1 }),
				survival: new NumberField({ required: true, integer: true, min: 1, max:9, initial: 1 }),
				marksmanship: new NumberField({ required: true, integer: true, min: 1, max:9, initial: 1 }),
				naturalSciences: new NumberField({ required: true, integer: true, min: 1, max:9, initial: 1 }),
				socialSciences: new NumberField({ required: true, integer: true, min: 1, max:9, initial: 1 }),
				formalSciences: new NumberField({ required: true, integer: true, min: 1, max:9, initial: 1 }),
				lifeSciences: new NumberField({ required: true, integer: true, min: 1, max:9, initial: 1 }),
				appliedSciences: new NumberField({ required: true, integer: true, min: 1, max:9, initial: 1 }),
				humanSicences: new NumberField({ required: true, integer: true, min: 1, max:9, initial: 1 }),
				language: new NumberField({ required: true, integer: true, min: 1, max:9, initial: 1 }),
				healthSciences: new NumberField({ required: true, integer: true, min: 1, max:9, initial: 1 }),
				meleeCombat: new NumberField({ required: true, integer: true, min: 1, max:9, initial: 1 }),
			}),
			mutations: new SchemaField({
				line1: new StringField({blank: true}),
				line2: new StringField({blank: true}),
				line3: new StringField({blank: true}),
			}),
			brokenCondition: new StringField({blank: true}),
			trauma: new SchemaField({
				line1: new StringField({blank: true}),
				line2: new StringField({blank: true}),
			}),
		}
	}
}

class ItemDataModel extends foundry.abstract.TypeDataModel {
	static defineSchema() {
		return {
			description: new HTMLField(),
		};
	}
}

export class GearDataModel extends ItemDataModel {
	static defineSchema() {
		return {
			...super.defineSchema(),
			specialAbility: new HTMLField(),
			poor: new BooleanField({initial: true}),
			regular: new BooleanField({initial: false}),
			advanced: new BooleanField({initial: false}),
		};
	}
}
