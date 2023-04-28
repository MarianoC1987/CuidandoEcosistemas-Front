import React from "react";
import "./UserProfile/userProfile.css";
import Cubism from "../../components/CubismBackground/Cubism";
import ProfileButtons from "../../components/ProfileButtons/ProfileButtons";
import SettingFrame from "../../components/SettingFrame/SettingFrame";

function UserProfile() {
  return (
    <>
      <Cubism className="cubism" />
      <SettingFrame />
      <ProfileButtons />
    </>
  );
}

export default UserProfile;
