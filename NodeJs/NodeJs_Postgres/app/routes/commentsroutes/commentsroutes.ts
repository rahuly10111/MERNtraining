import { Router } from 'express';
import commentscontroller from '../../controller/index'
import tokenverify from '../../middleware/tokenValidation'

const router = Router();

router.post('/postcomments', commentscontroller.commentscontroller.postcommentsdetails);

router.get('/getcomments', tokenverify, commentscontroller.commentscontroller.getcommentsdetails);

router.delete('/deletecomments', commentscontroller.commentscontroller.deletecommentsdetails);

router.put('/putcomments/:id', commentscontroller.commentscontroller.putcommentsdetails);

router.get('/sortsearchcomments', commentscontroller.commentscontroller.sortingSearchCommentsdetails);

router.get('/filtercomments', commentscontroller.commentscontroller.filtercommentsdetails);


export default router;