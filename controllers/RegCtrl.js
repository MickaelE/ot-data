const Registration = require('../models/registrations')

createRegistration = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Ingen anmälan',
        })
    }

    const registration = new Registration(body)

    if (!registration) {
        return res.status(400).json({ success: false, error: err })
    }

    registration
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: registration._id,
                message: 'Anmälan skapad!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Anmälan inte skapad!',
            })
        })
}

updateRegistration = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Ingen uppdaterad data ',
        })
    }

    registration.findOne({ _id: req.params.id }, (err, registration) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Anmälan inte hittad!',
            })
        }
        registration.name = body.name
        registration.time = body.time
        registration.rating = body.rating
        registration
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: movie._id,
                    message: 'Anmälan updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Anmälan not updated!',
                })
            })
    })
}

deleteRegistration = async (req, res) => {
    await Registration.findOneAndDelete({ _id: req.params.id }, (err, registration) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!registration) {
            return res
                .status(404)
                .json({ success: false, error: `Anmälan not found` })
        }

        return res.status(200).json({ success: true, data: movie })
    }).catch(err => console.log(err))
}

getRegistrationById = async (req, res) => {
    await Registration.findOne({ _id: req.params.id }, (err, registration) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: registration })
    }).catch(err => console.log(err))
}

getRegistrations = async (req, res) => {
    await Registration.find({}, (err, Registration) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!Registration.length) {
            return res
                .status(404)
                .json({ success: false, error: `Anmälan not found` })
        }
        return res.status(200).json({ success: true, data: Registration })
    }).catch(err => console.log(err))
}

module.exports = {
    createRegistration,
    updateRegistration,
    getRegistrations,
    deleteRegistration,
    getRegistrationById,
}