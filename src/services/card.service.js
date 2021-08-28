import { CardModel } from "*/models/card.model";
import { ColumnModel } from "../models/column.model";

const createNew = async (data) => {
    try {
        //transaction mongodb
        const newCard = await CardModel.createNew(data);

        //update columnOrder Array in boards collection
        await ColumnModel.pushCardOrder(newCard.columnId.toString(), newCard._id.toString());

        return newCard;
    } catch (error) {
        throw new Error(error);
    }
};

const update = async (id, data) => {
    try {
        const upadateData = {
            ...data,
            updatedAt: Date.now()
        }
        if (upadateData._id) delete upadateData._id;
        if (upadateData.columns) delete upadateData.columns;

        const updatedCard = await CardModel.update(id, upadateData);

        return updatedCard;
    } catch (error) {
        throw new Error(error);
    }
};

export const CardService = {
    createNew,
    update
};