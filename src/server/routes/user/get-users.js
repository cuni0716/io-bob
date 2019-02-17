import User from 'models/User';

export default async (req, res) => {
  try {
    const users = await User.find({});
    return res.json(users);
  } catch (e) {
    return res.status(500).json(e);
  }
};
