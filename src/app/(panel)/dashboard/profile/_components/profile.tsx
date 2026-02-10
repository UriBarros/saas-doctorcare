"use client"

import { UserProfileForm } from "./profile-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import imgTest from "../../../../../../public/foto1.png"

export function ProfileContent(){
  const form = UserProfileForm();

  return (
    <div className="mx-auto">
      <Form {...form}>
        <form>
          <Card>
            <CardHeader>
              <CardTitle>Meu Perfil</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <div className="bg-gray-200 relative h-40 w-40 rounded-full overflow-hidden">
                  <Image
                    src={imgTest}
                    alt="foto de test da clinica"
                    fill
                    className="obeject-cover"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={ ({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">
                        Nome Completo:
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Digite o nome da clínica..." />
                      </FormControl>
                    </FormItem>
                  )}
                
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={ ({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">
                        Endereço da clínica:
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Digite o nome da clínica..." />
                      </FormControl>
                    </FormItem>
                  )}
                
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={ ({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">
                        Telefone da clínica:
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Digite o telefone da clínica..." />
                      </FormControl>
                    </FormItem>
                  )}
                
                />

                <FormField
                  control={form.control}
                  name="status"
                  render={ ({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">
                        Status da clínica:
                      </FormLabel>
                      <FormControl>

                        <Select onValueChange={field.onChange} defaultValue="active">
                          <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selecione o status da clínica..."/>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="active">Ativo</SelectItem>
                          <SelectItem value="inactive">Inativo</SelectItem>
                        </SelectContent>
                        </Select>

                      </FormControl>
                    </FormItem>
                  )}
                
                />
              </div>
            </CardContent>
          </Card>
        </form>
      </Form>
    </div>
  )
}