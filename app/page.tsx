import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import * as z from "zod";

export default function Home() {
    const formSchema = z.object({
        title: z
            .string()
            .min(5, {message: 'Hey the title is not long enough'})
            .max(100, {message: 'Its too long'}),
        price: z.number().min(5, {message: 'Hey the title is not'}),
        description: z
            .string()
            .min(5, {message: 'Hey the title is not long enough'})
            .max(100, {message: 'Its too long'})
            .trim(),
    })

    const form = useForm({
        mode: "onChange",
        defaultValues: {
            title: '',
            price: 29.99,
            description: '',
        }
    })
    return <main className="">

    </main>
}
