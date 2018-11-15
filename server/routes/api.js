const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');

const db = 'mongodb://toolX:!QAZ2wsx@ds213472.mlab.com:13472/videoplayer';
mongoose.Promise = global.Promise;
mongoose.connect(db, (e) => {
  if (e) {
    console.log(`Error: ${e}`);
  }
});

router.get('/videos', (req, res) => {
  console.log(`Get request for all videos`);

  Video.find({}).exec((e, videos) => {
    if (e) {
      console.log(`Error retrieving videos`);
    } else {
      res.json(videos);
    }
  })
});

router.get('/videos/:id', (req, res) => {
  console.log(`Get request for a single video`);

  Video.findById(req.params.id).exec((e, video) => {
    if (e) {
      console.log(`Error retrieving video`);
    } else {
      res.json(video);
    }
  })
});

router.post('/video', (req, res) => {
  console.log(`Post a video to mongoDB`);

  const newVideo = new Video();
  newVideo.title = req.body.title;
  newVideo.url = req.body.url;
  newVideo.description = req.body.description;

  newVideo.save((e, insertedVideo) => {
    if (e) {
      console.log(e);
    } else {
      res.json(insertedVideo);
    }
  });
});

router.put('/video/:id', (req, res) => {
  console.log(`Update video`);

  Video.findByIdAndUpdate(
    req.params.id, 
    {
      $set: {
      title: req.body.title,
      url: req.body.url,
      description: req.body.description
    }
  },
  {
    new: true
  },
  (e, updatedVideo) => {
    if (e) {
      res.send(`Error updating video: ${e.message}`);
    } else {
      res.json(updatedVideo);
    }
  });
});

router.delete('/video/:id', (req, res) => {
  console.log(`Deleting a video`);

  Video.findByIdAndDelete(req.params.id, (e, deletedVideo) => {
    if (e) {
      res.send(`Error while deleting a video`);
    } else {
      res.json(deletedVideo);
    }
  });
})

module.exports = router;
