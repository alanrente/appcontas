import { BiEdit } from "react-icons/bi";
import { Button, Modal, Select } from "antd";
import { Role } from "interfaces/Roles";
import { ContainerScrolable } from "components/ContainerScrolable";
import useProfiles from "./index.hook";

export default function ProfilesPage() {
  const n = useProfiles();
  return (
    <>
      <ContainerScrolable>profiles</ContainerScrolable>
    </>
  );
}
