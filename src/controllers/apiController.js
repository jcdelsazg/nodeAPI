import mongoose from 'mongoose'
import apiSchema from '../models/apiModel'

const ApiNode = mongoose.model('ApiNode', apiSchema)

export const addNewApiNode = (req, res) => {
    const newApiNode = new ApiNode(req.body)

    newApiNode.save((err, apiNode) => {
        if (err) {
            res.send(err)
        }
        res.json(apiNode)
    })
}

export const getApiNodes = (req, res) => {
    ApiNode.find({}, (err, apiNode) => {
        if (err) {
            res.send(err)
        }
        res.json(apiNode)
    })
}

export const getApiNodeById = (req, res) => {
    ApiNode.findById(req.params.apiNodeID, (err, apiNode) => {
        if (err) {
            res.send(err)
        }
        res.json(apiNode)
    })
}

export const updateApiNode = (req, res) => {
    ApiNode.findByIdAndUpdate(
        { _id: req.params.apiNodeID },
        req.body,
        { new: true, useFindAndModify: false },
        (err, apiNode) => {
            if (err) {
                res.send(err)
            }
            res.json(apiNode)
        }
    )
}

export const deleteApiNode = (req, res) => {
    ApiNode.remove({ _id: req.params.apiNodeID }, (err, apiNode) => {
        if (err) {
            res.send(err)
        }
        res.json({ mess: 'Successfully deleted contact' })
    })
}
