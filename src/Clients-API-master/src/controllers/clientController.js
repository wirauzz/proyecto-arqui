const Client = require('../models/client')

module.exports = {
    
    index: async (req,res,next) => {
        const clients = await Client.find({});
        res.status(200).json(clients);
    },

    newClient: async (req,res,next) => {
        const newClient = new Client(req.body);
        const client = await newClient.save();
        res.status(200).json(client);
    },

    getClient: async (req,res,next) => {
        const {clientId} = req.params;
        const client = await Client.findById(clientId);
        res.status(200).json(client);
    },

    replaceClient: async (req,res,next) => {
        const {clientId} = req.params;
        const newClient = new Client(req.body);
        const oldClient = await Client.findByIdAndUpdate(clientId,newClient);
        res.status(200).json({success: true});
    },

    updateClient: async (req,res,next) => {
        const {clientId} = req.params;
        const newClient = new Client(req.body);
        const oldClient = await Client.findByIdAndUpdate(clientId,newClient);
        res.status(200).json({success: true});
    },

    deleteClient: async (req,res,next) => {
        const {clientId} = req.params;
        const oldClient = await Client.findByIdAndDelete(clientId);
        res.status(200).json({success: true});
    }
};