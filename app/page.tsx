"use client"
import React from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Tiptap from "../components/Tiptap";
import { useForm } from "react-hook-form";

// Definindo o esquema de validação com Zod
const formSchema = z.object({
    title: z
        .string()
        .min(5, { message: "Hey, the title is not long enough" })
        .max(100, { message: "It's too long" }),
    price: z
        .number()
        .min(5, { message: "Price must be at least 5" }),
    description: z
        .string()
        .min(5, { message: "Hey, the description is not long enough" })
        .max(100, { message: "It's too long" })
        .trim(),
});

export default function Home() {
    // Configuração do formulário com useForm e zodResolver
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            title: "",
            price: 29.99,
            description: "",
        },
    });

    // Função de submissão do formulário
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values); // Exemplo de uso dos valores do formulário
    }

    return (
        <main className="p-24">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    {/* Campo Title */}
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Main title for your product" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Campo Description */}
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Tiptap description={field.value} onChange={field.onChange} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Botão de envio */}
                    <Button className="my-4" type="submit">
                        Submit
                    </Button>
                </form>
            </Form>
        </main>
    );
}
