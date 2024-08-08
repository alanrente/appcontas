import { BiEdit } from "react-icons/bi";
import { Button, Modal, Select } from "antd";
import { Role } from "interfaces/Roles";
import { ContainerScrolable } from "components/ContainerScrolable";
import useProfiles from "./index.hook";

export default function ProfilesPage() {
  const { profiles, isEdit, handleEdit, setIsEdit, profileEdit, setProfileEdit } = useProfiles();
  return (
    <>
      <ContainerScrolable>
        {profiles &&
          profiles.map((profile, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "solid 1px",
                borderRadius: "25px",
                margin: "0.5rem",
                padding: "0 .5rem",
                fontWeight: "bold",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "70%",
                  // backgroundColor: "#c2c2c2",
                }}
              >
                <label>{profile.email}</label>
                <label>{profile.role}</label>
              </div>
              <Button
                style={{ borderRadius: "25px", width: "10%" }}
                icon={<BiEdit />}
                onClick={() => handleEdit(profile)}
              />
            </div>
          ))}
      </ContainerScrolable>
      <Modal
        centered
        cancelText="Cancelar"
        okText="Salvar"
        visible={isEdit}
        destroyOnClose
        onCancel={() => {
          setIsEdit(false);
          setProfileEdit(undefined);
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <label style={{ fontWeight: "bold" }}>Usuário: {profileEdit?.email}</label>
          <Select defaultValue={profileEdit?.role}>
            {Object.values(Role).map((op) => (
              <option value={op}>{op}</option>
            ))}
          </Select>
        </div>
      </Modal>
    </>
  );
}
