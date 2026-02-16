"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleContact = void 0;
const handleContact = (req, res) => {
    const { name, email, message } = req.body;
    console.log("New Contact Request:");
    console.log(name, email, message);
    res.json({
        success: true,
        message: "Message received successfully!"
    });
};
exports.handleContact = handleContact;
