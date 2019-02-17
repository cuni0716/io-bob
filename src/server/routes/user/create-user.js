import User from 'models/User';

export default async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.sendStatus(400);
  }

  try {
    const user = new User({ name });
    await user.save();
    return res.status(201).json(user);
  } catch (e) {
    return res.status(500).json(e);
  }
};
