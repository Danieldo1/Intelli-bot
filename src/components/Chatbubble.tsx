import React from 'react'
import Balancer from 'react-wrap-balancer'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from './ui/accordion'
import {Message} from 'ai/react'
import ReactMarkdown from 'react-markdown'
import { formattedText } from '@/lib/utils'

const wrapperText= (text:string) => 
    text.split("\n").map((line, index) => (
        <span key={index}>
            {line}
            <br />
        </span>
    ))

    interface ChatbubbleProps extends Partial<Message> {
        sources: string []
    }
const Chatbubble = ({role="assistant", content,sources}: ChatbubbleProps) => {
    if(!content){
        return null
    }


    return (
        <div>
            <Card className="mb-2">
                <CardHeader>
                    <CardTitle
                    className={role!= "assistant" ? 'text-amber-600 dark:text-amber-200' : 'text-blue-600 dark:text-blue-200'}
                    >{role == "assistant" ? "Assistant" : "You"}
                    </CardTitle>
                </CardHeader>
            <CardContent className='text-sm'>
                <Balancer>{wrapperText(content)}</Balancer>
            </CardContent>
            <CardFooter>
                <CardDescription className='w-full'>
                <Accordion type="single" collapsible className="w-full">
                    {sources.map((source, index) => (
                        <AccordionItem key={index} value={`source-${index}`}>
                            <AccordionTrigger>{`Source ${index+1}`}</AccordionTrigger>
                            <AccordionContent>
                                <ReactMarkdown >
                                    {formattedText(source)}
                                </ReactMarkdown>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                     </Accordion>
                </CardDescription>
            </CardFooter>
            </Card>
        </div>
    )
}

export default Chatbubble