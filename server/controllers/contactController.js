const Contact = require('../models/Contact');

// @desc    Submit a contact form
// @route   POST /api/contact
// @access  Public
const submitContact = async (req, res) => {
  const { name, email, service, message } = req.body;

  if (!name || !email || !service) {
    return res.status(400).json({ message: 'Please add all required fields' });
  }

  try {
    const contact = await Contact.create({
      name,
      email,
      service,
      message,
    });

    if (contact) {
      res.status(201).json({
        _id: contact._id,
        name: contact.name,
        email: contact.email,
        message: 'Contact form submitted successfully',
      });
    } else {
      res.status(400).json({ message: 'Invalid contact data' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  submitContact,
};
