"use client"

import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { LogIn, Menu } from "lucide-react";
import { useState } from "react";
import { useSession } from "next-auth/react"
import { handleRegister } from "../_actions/login"



export function Header(){
  const {data: session, status} = useSession();
  const [isOpen, setIsOpen] = useState(false);


  const navItems = [
    { href: "#Profissionais", label: "Profissionais" },
    { href: "#Precos", label: "Preços" },
  ]

  async function handleLogin() {
    await handleRegister("github");
  }

  const NavLinks = () => (
    <>
      {navItems.map((item) => ( 
        <Button
          onClick={() => setIsOpen(false)}
          key={item.href}
          asChild
          className="bg-transparent hover:bg-transparent text-black shadow-none"
        >
          <Link href={item.href} className="text-base">
            {item.label}
          </Link>

        </Button>
      ))}

      {status === "loading" ? (
        <></>
      ) : session ? (
        <Link
          href="/dashboard"
          className="flex items-center justify-center gap-2 bg-zinc-900 text-white py-1 rounded-md px-4"
        >
          Painel do Profisional
        </Link>
      ) : (
        <Button className="cursor-pointer" onClick={handleLogin}>
          <LogIn/>
          Fazer Login
        </Button>
        
      )}
    </>
  )

  return (
    <header className="fixed top-0 right-0 left-0 z-50 py-4 px-6 bg-white shadow-md">
      
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          href="/"
          className="text-3xl font-bold text-zinc-900"

        >


          Doctor<span className="text-emerald-500">Care</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-4">
          <NavLinks />
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button 
              className="md:hidden text-black hover:bg-transparent cursor-pointer"
              variant="ghost"
              size="icon"
            >
              <Menu className="w-6 h-6" /> 
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-60 sm:w-75 z-50">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Navegue pelo site usando o menu abaixo.
              </SheetDescription>
            </SheetHeader>

            <nav className="flex flex-col space-y-4 mt-6">
              <NavLinks />
            </nav>

            <SheetFooter>
              <SheetClose>
                <Button variant="ghost">Fechar</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}