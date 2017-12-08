const mongo = require("mongodb").MongoClient;
const mongoId = require("mongodb").ObjectID

/**
 * A Module contianing database functions
 *
 */
module.exports = {
    dsn: process.env.DBWEBB_DSN || "mongodb://localhost:27017/drinks",

    /**
     * Connect to the db and recive db object
     * @return {object} database
     */
    async connect() {
        const db  = await mongo.connect(this.dsn);
        return db;
    },

    /**
     * close db.
     */
    async close(db) {
        await db.close();
    },

    /**
     * close db.
     */
    async getCollection(collection) {
        const db  = await this.connect();
        const col = await db.collection(collection);
        const res = await col.find().toArray();

        await this.close(db);

        return res;
    },


    /**
     * Get Item
     */
    async getItem(collection, id) {
        const db  = await this.connect();
        const col = await db.collection(collection);
        const res = await col.find({ _id: mongoId(id) }).toArray();

        await this.close(db);

        return res;
    },


    /**
     * Delete item from a collection
     */
    async deleteItem(collection, id) {
        const db  = await this.connect();
        const col = await db.collection(collection);
        const res = await col.deleteOne({ _id: mongoId(id)});

        await this.close(db);

        return res;
    },

    /**
     * Insert Item
     */
    async insertItem(collection, type, brand, size) {
        const db  = await this.connect();
        const col = await db.collection(collection);
        const res = await col.insertOne({ type: type, brand: brand, size: size });

        await this.close(db);

        return res;
    },


    /**
     * Update Item
     */
    async updateItem(collection, id, brand, type, size) {
        const db  = await this.connect();
        const col = await db.collection(collection);
        const res = await col.updateOne({ _id: mongoId(id)}, {
            brand: brand,
            type: type,
            size: size
        });

        await this.close(db);

        return res;
    },


    /**
     * Search item
     */
    async searchItems(collection, searchString) {
        const db  = await this.connect();
        const col = await db.collection(collection);
        const res = await col.find( { $text: { $search: /searchString/ } } ).toArray();
        await this.close(db);

        return res;
    }
};
