import User from 'models/User';

export default async (req, res) => {
  const { name, bags } = req.body;

  if (!name || typeof name !== 'string' || !bags || isNaN(bags)) {
    return res.sendStatus(400);
  }

  try {
    const user = new User({ name, bags });
    await user.save();
    return res.status(201).json(user);
  } catch (e) {
    return res.status(500).json(e);
  }
};
