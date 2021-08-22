import { ColumnModel } from "*/models/column.model";

const createNew = async (data) => {
    try {
        const result = await ColumnModel.createNew(data);
        return result;
    } catch (error) {
        throw new Error(error);
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
        throw new Error(error);
    }
};

export const ColumnService = {
    createNew,
    update
};
