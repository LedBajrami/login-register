import { Upload, message } from "antd";
import { useDispatch } from "react-redux";
import { uploadProfilePhoto } from "../../redux/slices/userThunks";


function UserPhotoUpload() {
  const dispatch = useDispatch()
    const handleUpload = async (file) => {
    
        try {
          await dispatch(uploadProfilePhoto(file)).unwrap()
            message.success('Profile photo uploaded successfully');
        } catch (error) {
          console.error('Error uploading photo:', error);
          message.error('An error occurred while uploading the photo.');
        }
        return false
      };

      return (
        <Upload beforeUpload={handleUpload} name="profile_photo" showUploadList={false}>
          <button style={{marginBlock: "10px"}}>Upload Photo</button>
        </Upload>
      )
}

export default UserPhotoUpload