import { useState } from "react";
import { EditEmployeeModal } from "../EditEmployeeModal";
import { EmployeeTable } from "../EmployeeTable";
import { NewEmployeeModal } from "../NewEmployeeModal";
import { ViewEmployeeModal } from "../ViewEmployeeModal";
import { Container } from "./styles";




export function Dashboard () {
  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false)
  const [isViewTransactionModalOpen,setIsViewTransactionModalOpen] = useState(false)
  const [isEditTransactionModalOpen,setIsEditTransactionModalOpen] = useState(false)
  
  function handleOpenNewEmployeeModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewEmployeeModal() {
      setIsNewTransactionModalOpen(false);
  }
  
  function handleOpenViewEmployeeModal() {
    setIsViewTransactionModalOpen(true);
  }
  function handleCloseViewEmployeeModal() {
    setIsViewTransactionModalOpen(false);
  }

  function handleOpenEditEmployeeModal() {
    setIsEditTransactionModalOpen(true);
  }
  function handleCloseEditEmployeeModal() {
    setIsEditTransactionModalOpen(false);
  }
  return (
    <Container>
      <EmployeeTable onOpenNewEmployeeModal={handleOpenNewEmployeeModal} onOpenViewEmployeeModal={handleOpenViewEmployeeModal} onOpenEditEmployeeModal={handleOpenEditEmployeeModal}/>

      <NewEmployeeModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewEmployeeModal} />

      <ViewEmployeeModal isOpen={isViewTransactionModalOpen} onRequestClose={handleCloseViewEmployeeModal} />

      <EditEmployeeModal isOpen={isEditTransactionModalOpen} onRequestClose={handleCloseEditEmployeeModal} />
    </Container>
  );
}