import { useEffect, useState } from "react";
import { User } from "interfaces/User";
import { getAllProfiles } from "services/users";

export default function useProfiles() {
  const [profiles, setProfiles] = useState<User[]>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [profileEdit, setProfileEdit] = useState<User>();

  async function handleGetProfiles() {
    const profiles = await getAllProfiles();

    if (!profiles) return setProfiles([]);

    setProfiles(profiles);
  }

  function handleEdit(profile: User) {
    setProfileEdit(profile);
    setIsEdit(true);
  }

  useEffect(() => {
    handleGetProfiles();
  }, []);

  return {
    isEdit,
    profiles,
    profileEdit,
    setProfileEdit,
    setIsEdit,
    handleEdit,
  };
}
