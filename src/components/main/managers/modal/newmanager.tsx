import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'

export const NewManagerModal = ({ open, onClose }) => {
  return (
    <Modal
      isOpen={open}
      isCentered
      orientation="horizontal"
      blockScrollOnMount={false}
      trapFocus={open}
      motionPreset="scale"
      colorScheme="orange"
      size="3xl"
      onClose={onClose}
    >
      <ModalOverlay color="black" backdropFilter="auto" backdropBlur="4px" />
      <ModalContent background="black" rounded="md" className="bg-black">
        <ModalHeader className=" rounded-t-md bg-neutral-900 text-white">
          New manager
        </ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody className="bg-neutral-800  text-neutral-300">
          <div className="py-20">123</div>
        </ModalBody>

        <ModalFooter className="rounded-b-md bg-neutral-900">
          <Button colorScheme="red" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="solid">Create</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
