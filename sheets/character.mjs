/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
const { HandlebarsApplicationMixin } = foundry.applications.api;
const { ActorSheetV2 } = foundry.applications.sheets; // Access the base class here

export class CharacterActorSheet extends HandlebarsApplicationMixin(ActorSheetV2) {
	constructor(object, options) {
		super(object, options)
	}
	
	static get DEFAULT_OPTIONS() {
		return foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
			classes: ['inversedirectivegs', 'sheet', 'actor'],
			tag: "form",
			actions: {
				importDocument: this,
			},
			form: {
				handler: this.#onSubmitForm,
				submitOnChange: true,
				closeOnSubmit: false
			},
			window: {
				contentClasses: ['inversedirectivegs', 'content'],
				resizable: true,
				minimizable: true,
				width: 2339,
				height: 1925,
			},
		});
	}
	
	get document() {
		return this.options.document
	}

	get title() {
		return `${this.document.name}: ${game.i18n.localize('INVERSEDIRECTIVEGS.CharacterSheet')}`
	}
	
	/**
	 * Prepare the context for the sheet.
	 * @override
	 */
	async _prepareContext(options) {
		// Call your existing getData method logic to populate the context
		const context = await super._prepareContext(options);
		
		context.system = context.document.system;
		
		context.actor = context.document
		
		if (context.document.system.description) {
			context.enrichedDescription = await foundry.applications.ux.TextEditor.enrichHTML(
				context.document.system.description,
				{
					async: true, // Required in v13 for asynchronous enrichment
					rollData: context.document.getRollData(),
					relativeTo: context.document,
				}
			);
		}
		return context;
	}

	
	/**
	 * handling data
	 */
	static async #onSubmitForm(event, form, formData) {
		console.log(formData)
		event.preventDefault()
		formData.object.name = formData.object.name ?? this.document.name; 
		formData.object.img = formData.object.img ?? this.document.img;
		await this.document.update(formData.object)
	}

	/**
	 * This method is called upon form submission after form data is validated.
	 * @param {Event} event The initial triggering submission event.
	 * @param {object} formData The object of validated form data with which to update the document.
	 * @returns {Promise<Document>} A Promise which resolves once the update operation has completed.
	 */
	async _updateObject(event, formData) {
		// formData is already flattened (e.g., { "system.attributes.str.value": 10 })

		// Apply the data to the document using the document's built-in update method
		return this.document.update(formData);
	}
	
}
