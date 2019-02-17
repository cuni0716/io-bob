import User from 'models/User';

export default async (req, res) => {
  const { id } = req.params;
  const { name, bags } = req.body;

  if (!id || (!name && !bags) || (name && typeof name !== 'string') || (bags && isNaN(bags))) {
    return res.sendStatus(400);
  }

  try {
    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.sendStatus(404);
    }

    user.name = name || user.name;
    user.bags = bags || user.bags;

    await user.save();

    return res.json(user);
  } catch (e) {
    return res.status(500).json(e);
  }
};
