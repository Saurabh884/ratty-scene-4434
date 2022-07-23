import React from "react"
import { useNavigate } from "react-router-dom"

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input
  } from '@chakra-ui/react'
import { Navigate } from "react-router-dom"





 export function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const navigate=useNavigate()

    const handleLogin=()=>{
        alert("Login succesfull")
        navigate("./")
        window.location.reload()
    }
  
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Login
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Please Login to continue</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Enter Mobile ' />
              <Button colorScheme="teal" marginTop="10px" onClick={handleLogin}>Continue</Button>
            </DrawerBody>

  
          </DrawerContent>
        </Drawer>
      </>
    )
  }