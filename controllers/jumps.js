const jumpsRouter = require('express').Router()

const Jump = require('../models/jump')

jumpsRouter.get('/', async (request, response) => {
    const jumps = await Jump.find({})
    response.json(jumps)
})

jumpsRouter.get('/:id', async (request, response, next) => {
    const jump = await Jump.findById(request.params.id)

    if (jump) {
        response.json(jump)
    } else {
        response.status(404).end()
    }
})

jumpsRouter.post('/', async (request, response, next) => {
    const body = request.body

    const jump = new Jump({
        type: body.type,
        dz: body.dz,
        altitude: body.altitude,
        opening: body.opening,
        freefalltime: body.freefalltime,
        date: new Date()
    })

    const savedJump = await jump.save()
    
    response.json(savedJump.toJSON())
})

jumpsRouter.delete('/:id', async (request, response) => {
    await Jump.findByIdAndRemove(request.params.id)
    response.status(204).end()
})

jumpsRouter.put('/:id', async (request, response, next) => {
    const body = request.body

    const jump = {
        type: body.type,
        dz: body.dz,
        altitude: body.altitude,
        opening: body.altitude,
        freefalltime: body.freefalltime
    }

    const updatedJump = await Jump.findByIdAndUpdate(request.params.id, jump, { new: true })

    response.json(updatedJump)
})

module.exports = jumpsRouter