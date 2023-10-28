import { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';

export default function Profile() {
  const fileRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});

  // firebase storage
  // allow read;
  // allow wirte: if
  // request.resource.size < 2 * 1014 * 1024 &&
  // request.resource.contentType.matches('image/.*')

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, avatar: downloadURL });
        });
      }
    );
  };

  return (
    <div className="max-w-lg p-3 mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <img
          onClick={() => fileRef.current.click()}
          src={formData.avatar || currentUser.avatar}
          alt="avatar"
          className="self-center object-cover w-24 h-24 transition duration-200 ease-in-out rounded-full shadow-lg cursor-pointer hover:ring-2 ring-gray-400 ring-offset-2"
        />
        <p className="text-sm text-center">
          {fileUploadError ? (
            <span className="text-red-700">
              Error Image Upload(image size must be less than 2mb)
            </span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className="text-green-700">Image Uploaded Successfully!</span>
          ) : (
            ''
          )}
        </p>
        <input
          type="text"
          placeholder="Username"
          className="p-3 border rounded-lg focus:outline-none"
          id="username"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 border rounded-lg focus:outline-none"
          id="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 border rounded-lg focus:outline-none"
          id="password"
        />
        <button className="p-3 text-white uppercase transition rounded-lg bg-slate-700 hover:bg-opacity-95">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-500 transition cursor-pointer hover:text-red-600">
          Delete Account
        </span>
        <span className="text-red-500 transition cursor-pointer hover:text-red-600">
          Sign Out
        </span>
      </div>
    </div>
  );
}
