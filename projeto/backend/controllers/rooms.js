
const index = async ({ User }, req, res, next) => {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (error) {
      res.status(500).json({error})
    }
  };
  const show = async ({ Rooms }, req, res, next) => {
    try {
      const room = await Rooms.findOne({ _id: req.params.id });
      res.json(room);
    } catch (error) {
      res.status(500).json({ error })
    }
  };
  const create = async ({ Rooms }, req, res, next) => {
    try {
      const room = new Rooms(req.body);
      await room.save();
      res.json(room)
    } catch (error) {
      res.status(500).json({ error })
    }
  }
  const update = async ({ Rooms }, req, res, next) => {
    try {
      const room = new Rooms(req.body);
      await room.update();
    } catch (error) {
      res.status(500).json({ error })
    }
  };
  const destroy = async ({ User }, req, res, next) => {
    try {
      await User.remove({ _id: req.params.id})
      res.status(200).json()
    } catch (error) {
      res.status(500).json({ error })
    }
  }
  module.exports = {
    index,
    create,
    show,
    update,
    destroy
  }