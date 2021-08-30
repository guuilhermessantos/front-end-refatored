// import { useTransactions } from "../../hooks/useTransactions";
import { Container, DivButton } from "./styles";


interface TableProps {
  onOpenNewEmployeeModal: () => void;
  onOpenViewEmployeeModal: () => void;
  onOpenEditEmployeeModal: () => void;
}


export function EmployeeTable({ onOpenNewEmployeeModal, onOpenViewEmployeeModal, onOpenEditEmployeeModal }: TableProps) {
  
  return(
    <Container>
      
      <span> Painel de Controle</span>
      <span> Funcionarios</span>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Data de Nascimento</th>
            <th>Data de Admissão</th>
            <th>Setor</th>
            <th>Cargo</th>
            <th>Nivel</th>
            <th>Editar</th>
            <th>Visualizar</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
          
              <tr>
                <td>Guilherme</td>
                <td> guuilhermessantos@gmail.com</td>
                <td> 21/08/1999</td>
                <td> 21/09/2020</td>
                <td> Fabrica</td>
                <td> Dev</td>
                <td> Junior </td>
                <td> 
                  <button type="submit" onClick={onOpenEditEmployeeModal} id = "btnEdit">
                    Editar
                  </button>
                </td>
                <td>
                  <button type="submit" onClick={onOpenViewEmployeeModal} id = "btnView">
                    Visualizar
                  </button>
                </td>
                <td> 
                  <button type="submit" id = "btnDelet">
                    Deletar
                  </button> 
                </td>
              </tr>
              <tr>
                <td>Guilherme</td>
                <td> guuilhermessantos@gmail.com</td>
                <td> 21/08/1999</td>
                <td> 21/09/2020</td>
                <td> Fabrica</td>
                <td> Dev</td>
                <td> Junior </td>
                <td> Editar </td>
                <td> Visualizar </td>
                <td> Deletar </td>
              </tr>
           
          
         
        </tbody>
      </table>
      <DivButton>
      <button type="button" onClick={onOpenNewEmployeeModal}>
       <img src="" alt="" /> Adicionar
     </button>
     </DivButton>
    </Container>
    
  )
}