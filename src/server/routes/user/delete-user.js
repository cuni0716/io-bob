import User from 'models/User';

export default async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.sendStatus(400);
  }

  try {
    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.sendStatus(404);
    }

    await user.remove();

    return res.json(user);
  } catch (e) {
    return res.status(500).json(e);
  }
};
