import { Router } from 'express';
import commentscontroller from '../../controller/index'

const router = Router();

router.post('/postcomments', commentscontroller.commentscontroller.postcommentsdetails);

router.get('/getcomments', commentscontroller.commentscontroller.getcommentsdetails);

router.delete('/deletecomments/:id', commentscontroller.commentscontroller.deletecommentsdetails);

router.put('/putcomments/:id', commentscontroller.commentscontroller.putcommentsdetails);

router.get('/sortsearchcomments/:sort', commentscontroller.commentscontroller.sortingSearchCommentsdetails);

//router.get('/searchcomments/:search', commentscontroller.commentscontroller.searchcommentsdetails);

router.get('/filtercomments', commentscontroller.commentscontroller.filtercommentsdetails);


export default router;