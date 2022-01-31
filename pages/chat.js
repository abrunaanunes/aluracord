import { Box, Text, TextField, Image, Button, Icon } from '@skynexui/components';
import { useRouter } from "next/router";
import React from 'react';
import appConfig from '../config.json';
import { createClient } from '@supabase/supabase-js';
import { ButtonSendSticker } from '../src/components/ButtonSendSticker';

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzU1MTQ1NiwiZXhwIjoxOTU5MTI3NDU2fQ.G6SOfHkJZbQvDctYzRv4A0pJE423uPbSETZQKQuyPdQ';
const SUPABASE_URL = 'https://djtodvpndrskvevlbgzq.supabase.co';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function messageListener(addMessage) {
    return supabaseClient
        .from('messages')
        .on('INSERT', (item) => {
            addMessage(item.new);
        })
        .subscribe();
}
export default function ChatPage() {
    const [message, setMessage] = React.useState('');
    const [messageList, setMessageList] = React.useState([]);
    const router = useRouter();
    const userLogged = router.query.username;

    React.useEffect(() => {
        const supabaseData = supabaseClient
            .from('messages')
            .select('*')
            .order('id', { ascending: false })
            .then(({ data }) => {
                setMessageList(data);
            });
        messageListener((newMessage) => {
            setMessageList((currentValue) => {
                return [newMessage, ...currentValue];
            });
        });
    }, []);
    /*
    // Usuário
    -- Usuário digita no campo textarea
    -- Aperta enter para enviar
    -- Tem que adicionar o texto na listagem

    // Dev
    -- [x] Campo criado
    -- [x] Vamos usar o onChange usa o State (ter if para caso seja enter para limpar a variável)
    -- [x] Lista de mensagens
    */
   function handleNewMessage(newMessage) {
    const message = {
        from: userLogged, 
        text: newMessage
    }

    supabaseClient
        .from('messages')
        .insert(
            [message]
        )
        .then(({ data }) => {
           
        })

    setMessage('');
   }

    function deleteMessage(currentMessage) {
        supabaseClient
            .from('messages')
            .delete()
            .match({id: currentMessage.id})
            .then(({data}) => {
                const messagesListFiltered = messageList.filter((message) => {
                    return message.id != data[0].id
                });
                setMessageList(messagesListFiltered);
            });
    }
    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.neutrals[999],
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.neutrals[700],
                    height: '100%',
                    maxWidth: '60vw',
                    maxHeight: '75vh',
                    padding: '32px',
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.theme.colors.neutrals[600],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >

                    <MessageList messages={messageList} username={userLogged}/>
                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                            value={message}
                            onChange={(event) => {
                                const input_value = event.target.value;
                                setMessage(input_value);
                            }}
                            onKeyPress={(event) => {
                                if(event.key === 'Enter') {
                                    event.preventDefault();
                                    handleNewMessage(message);
                                }
                            }}
                            placeholder="Insira sua mensagem aqui..."
                            type="textarea"
                            styleSheet={{
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals[200],
                            }}
                        />
                        <ButtonSendSticker 
                            onStickerClick={(sticker) => {
                                handleNewMessage(`:sticker: ${sticker}`)
                            }}/>
                        <Button
                            type='button'
                            label='Enviar'
                            onClick={() => {
                                handleNewMessage(message);
                            }}
                            styleSheet={{
                                borderRadius: '5px',
                                padding: '0 3px 0 0',
                                minWidth: '60px',
                                minHeight: '44px',
                                fontSize: '20px',
                                marginBottom: '8px',
                                marginRight: '10px',
                                lineHeight: '0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: appConfig.theme.colors.neutrals[300],
                              }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text variant='heading5'>
                    Chat
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                />
            </Box>
        </>
    )
}

function MessageList(props) {
    const deleteMessage = props.deleteMessage;
    const username = props.username;
    return (
        <Box
            tag="ul"
            styleSheet={{
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
            }}
        >
            {props.messages.map((message) => {
                return (
                    <Text
                        key={message.id}
                        tag="li"
                        styleSheet={{
                            borderRadius: '5px',
                            padding: '6px',
                            marginBottom: '12px',
                            hover: {
                                backgroundColor: appConfig.theme.colors.neutrals[700],
                            }
                        }}
                    >
                        <Box
                            styleSheet={{
                                marginBottom: '8px',
                            }}
                        >
                            <Image
                                styleSheet={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginRight: '8px',
                                }}
                                src={`https://github.com/${message.from}.png`}
                            />
                            <Text tag="strong">
                                {message.from}
                            </Text>
                            <Text
                                styleSheet={{
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    color: appConfig.theme.colors.neutrals[300],
                                }}
                                tag="span"
                            >
                                {(new Date().toLocaleDateString())}
                            </Text>
                            <Icon
                                name={"FaTrash"}
                                styleSheet={{
                                    display: username === message.from ? "block" : "none",
                                    marginLeft: "auto",
                                    marginRight: ".7rem",
                                    transition: ".4s ease all",
                                    cursor: "pointer",
                                }}
                            ></Icon>
                        </Box>
                        {message.text.startsWith(':sticker:')
                        ? ( <Image 
                            styleSheet={{
                                width: '150px',
                                height: '150px',
                                borderRadius: '5px',
                            }}
                            src={message.text.replace(':sticker:', '')}/> )
                        : ( message.text )} 
                    </Text>
                )
            })}
        </Box>
    )
}