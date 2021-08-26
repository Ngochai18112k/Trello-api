import { ColumnModel } from "*/models/column.model";
import { BoardModel } from "*/models/board.model";
import { CardModel } from "*/models/card.model";

const createNew = async (data) => {
    try {
        //transaction mongodb
        const newColumn = await ColumnModel.createNew(data);
        newColumn.cards = [];

        //update columnOrder Array in boards collection
        await BoardModel.pushColumnOrder(newColumn.boardId.toString(), newColumn._id.toString());

        return newColumn;
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
        if (upadateData.cards) delete upadateData.cards;

        const updatedColumn = await ColumnModel.update(id, upadateData);

        if (updatedColumn._destroy) {
            //delete many cards in this column
            CardModel.deleteMany(updatedColumn.cardOrder);
        }

        return updatedColumn;
    } catch (error) {
        throw new Error(error);
    }
};

export const ColumnService = {
    createNew,
    update
};
