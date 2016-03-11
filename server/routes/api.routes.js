import { Router } from 'express';
import * as PostController from '../controllers/post.controller';
import * as NoodleController from '../controllers/noodle.controller';
const router = new Router();

// Get all Posts
router.route('/getPosts').get(PostController.getPosts);

// Get one post by title
router.route('/getPost').get(PostController.getPost);

// Add a new Post
router.route('/addPost').post(PostController.addPost);

// Delete a Post
router.route('/deletePost').post(PostController.deletePost);

// Crawl a new site
router.route('/crawl').post(NoodleController.crawlSite);

// Crawl a new site
router.route('/getPages').get(NoodleController.getPages);

router.route('/search/:query').get(NoodleController.search);

export default router;
