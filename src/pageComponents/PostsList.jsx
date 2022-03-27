import Modal, { ModalStyles } from '../components/Modal';
import Post from './Post';
import PostDelete from './PostDelete';
import PostEdit from './PostEdit';

export default function PostsList() {
  return (
    <>
      <div className="mb-11 flex flex-col gap-11">
        <Post />
      </div>

      <Modal type={ModalStyles.TOP} isHide={true}>
        <PostDelete />
      </Modal>

      <Modal isHide={true}>
        <PostEdit />
      </Modal>
    </>
  )
}