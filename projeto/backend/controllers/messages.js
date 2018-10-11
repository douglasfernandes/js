
const index = async ({ Message }, req, res, next) => {
    try {
      const message = await Message.find({});
      res.json(message);
    } catch (error) {
      res.status(500).json({error})
    }
  };
  const show = async ({ Message }, req, res, next) => {
    try {
      const message = await Message.findOne({ _id: req.params.id });
      res.json(message);
    } catch (error) {
      res.status(500).json({ error })
    }
  };
  const create = async ({ Message }, req, res, next) => {
    try {
      const message = new Messages(req.body);
      await message.save();
      res.json(message)
    } catch (error) {
      res.status(500).json({ error })
    }
  }
  const update = async ({ Message }, req, res, next) => {
    try {
      const message = new Messages(req.body);
      await message.update();
    } catch (error) {
      res.status(500).json({ error })
    }
  };
  const destroy = async ({ Message }, req, res, next) => {
    try {
      await Message.remove({ _id: req.params.id})
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