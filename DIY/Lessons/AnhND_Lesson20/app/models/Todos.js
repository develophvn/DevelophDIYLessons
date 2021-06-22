import mongoose from 'mongoose';

class Todos {
	constructor() {
		const TodosSchema = new mongoose.Schema({
			title: {
				type: String,
				require: true,
			},
			checked: {
				type: Boolean,
				require: true,
			}
		}, {
			timestamps: true
		});

		this.model = mongoose.model('Todos', TodosSchema);
	}

	findAll() {
		return this.model.find({});
	}

	updateCheckedItem(itemId, checked) {
		const query = {
			_id: itemId,
		};
		const update = {
			$set: {
				checked
			}
		};

		return this.model.updateOne(query, update);
	}
}

export default new Todos();
