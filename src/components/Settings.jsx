import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";

const CurrentPassword = ({ currentPassword, setCurrentPassword }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">
      Current Password
    </label>
    <input
      type="password"
      value={currentPassword}
      onChange={(e) => setCurrentPassword(e.target.value)}
      placeholder="Enter current password"
      className="mt-1 p-2 w-full border rounded"
    />
  </div>
);

const NewPassword = ({ newPassword, setNewPassword }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">
      New Password
    </label>
    <input
      type="password"
      value={newPassword}
      onChange={(e) => setNewPassword(e.target.value)}
      placeholder="Enter new password"
      className="mt-1 p-2 w-full border rounded"
    />
  </div>
);

const Settings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const user = useSelector((store) => store.user);
  const [errorMsg, setErrorMsg] = useState("");
  const [passwordStatus, setPasswordStatus] = useState("");

  const handleUpdatePassword = async () => {
    try {
      const response = await axios.patch(
        BASE_URL + "/profile/password",
        { currentPassword, newPassword },
        { withCredentials: true }
      );
      setPasswordStatus("Password Changed Successfully");
      setTimeout(() => {
        setPasswordStatus("");
      }, 1000);
    } catch (err) {
      setErrorMsg(err?.response?.data);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 shadow-lg rounded-2xl bg-white">
        {passwordStatus && (
          <p className="text-blue-600 text-center mb-4 font-semibold">
            {passwordStatus}
          </p>
        )}
        <h2 className="text-2xl font-semibold text-center mb-4">Settings</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="text"
            value={user?.emailId}
            readOnly
            className="mt-1 p-2 w-full border rounded bg-gray-200 text-gray-600 cursor-not-allowed"
          />
        </div>
        <div className="space-y-4">
          <CurrentPassword
            currentPassword={currentPassword}
            setCurrentPassword={setCurrentPassword}
          />
          <NewPassword
            newPassword={newPassword}
            setNewPassword={setNewPassword}
          />
          {errorMsg && <p className="text-blue-600 text-center">{errorMsg}</p>}
          <button
            onClick={handleUpdatePassword}
            className="w-full mt-4 p-2 bg-blue-500 text-white rounded"
          >
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
