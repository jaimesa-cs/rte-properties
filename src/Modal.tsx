import { Button, ButtonGroup, ModalBody, ModalFooter, ModalHeader } from "@contentstack/venus-components"

import React from "react"
import { ReturnCbModalProps } from "@contentstack/venus-components/build/components/Modal/Modal";

interface SelectModalProps extends ReturnCbModalProps{

}
 
const SelectModal = ({ closeModal}: SelectModalProps) => {
   return (
       <>
           <ModalHeader title={"Layout Options"} closeModal={closeModal} />
           <ModalBody className="modalBodyCustomClass">
               <div className="dummy-body">
                   ...
               </div>
           </ModalBody>
           <ModalFooter>
               <ButtonGroup>
                   <Button onClick={closeModal} buttonType="light">
                       Cancel
                   </Button>
                   <Button onClick={closeModal} icon="SaveWhite" disabled>
                       Save
                   </Button>
               </ButtonGroup>
           </ModalFooter>
       </>
   )
}
 
export default SelectModal;
