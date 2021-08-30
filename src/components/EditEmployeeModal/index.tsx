// import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container} from './styles';

interface EditEmployeeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}



Modal.setAppElement('#root');

export function EditEmployeeModal({ isOpen, onRequestClose }: EditEmployeeModalProps) {
  // const { createTransaction } = useTransactions()
  
  // const [title, setTitle] = useState('')
  // const [amount, setAmount] = useState(0)
  // const [category, setCategory] = useState('')
  // const [type, setType] = useState('deposit')


  // async function handleCreateNewTransaction(event: FormEvent) {
  //   event.preventDefault()

  //   // await createTransaction({
  //   //   title,
  //   //   amount,
  //   //   category,
  //   //   type,
  //   // })
  //   setTitle('')
  //   setAmount(0)
  //   setCategory('')
  //   setType('deposit')
  //   onRequestClose();

    
    
  // }

  return (
    <Modal isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
       >
         <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
           {/* <img src={closeImg} alt="Fechar modal" /> */}
         </button>
       <Container >
      <h2>Editar Funcionario(a) </h2>

      <input
        placeholder="Nome"
       
      />

      <input
       placeholder="e-Mail"
       
      />
      <label >Data de Nascimento</label>
      <input
      placeholder="Data de Nascimento"
      type="date"
      />
      <label >Data de Admissão</label>
      <input
        placeholder="Data de Admissão"
        type="date"
      />

      <select>
        <option value="" disabled selected>
          Selecione um Nivel:
        </option>
        <option value="Junior" >
          Junior
        </option>
        <option value="Pleno" >
          Pleno
        </option>
        <option value="Senior">
          Senior
        </option>
      </select>

      <select>
        <option value="" disabled selected>
          Selecione um Setor:
        </option>
        <option value="Engenharia" >
          Egenharia
        </option>
        <option value="Compras" >
          Compras
        </option>
        <option value="Vendas">
          Vendas
        </option>
        <option value="Financeiro" >
          Financeiro
        </option>
      </select>

      <select>
        <option value="" disabled selected>
          Selecione um Cargo:
        </option>
        <option value="Auxiliar" >
          Auxiliar
        </option>
        <option value="Técnico" >
          Técnico
        </option>
        <option value="Engenheiro">
          Engenheiro
        </option>
        <option value="Diretor" >
          Diretor
        </option>
      </select>


      <button type="submit">Cadastrar</button>

      

       </Container>
    </Modal>
  )
}