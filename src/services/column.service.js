import { ColumnModel } from "*/models/column.model";
import { BoardModel } from "*/models/board.model";

const createNew = async (data) => {
    try {
        //transaction mongodb
        const newColumn = await ColumnModel.createNew(data);

        //update columnOrder Array in boards collection
        await BoardModel.pushColumnOrder(newColumn.boardId.toString(), newColumn._id.toString());

        return newColumn;
    } catch (error) {
        //throw new Error(error);
    }
};

const update = async (data) => {
    try {
        const upadateData = {
            ...data,
            updatedAt: Date.now()
        }
        const result = await ColumnModel.update(id, data);
        return result;
    } catch (error) {
        //throw new Error(error);
    }
};

export const ColumnService = {
    createNew,
    update
};
