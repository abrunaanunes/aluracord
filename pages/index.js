import appConfig from '../config.json';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

function Title(props)
{
    const Tag = props.tag || 'h1';
    return (
       <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} { 
                    color: ${appConfig.theme.colors.neutrals['000']};
                    font-size: 24px;
                    font-weight: 600;
                }
            `}</style>
       </>
    );
}

export default function PaginaInicial() {
    // const username = 'bruna24nunes';
    const [username, setUsername] = React.useState('abrunaanunes');
    const router = useRouter();
    const imageDefault = 'https://i.pinimg.com/474x/79/25/6d/79256ddaf1506418b85112a77e582814.jpg';
    const nameDefault = 'Joey Tribbiani';
    return (
      <>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'start',
            backgroundColor: appConfig.theme.colors.primary[500],
            backgroundImage: 'url(https://i.pinimg.com/originals/34/12/85/3412856403724d2dc00e3d80903f7461.jpg)',
            backgroundPosition: 'center', backgroundSize: 'cover'
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '590px',
              borderRadius: '5px', padding: '32px', margin: '5rem',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals[700],
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={function (event) {
                event.preventDefault();
                router.push('/chat');
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Title tag="h2">Boas vindas de volta!</Title>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                {appConfig.name}
              </Text>

              <TextField
                value={username}
                onChange={
                  function(event) {
                    //Capturar o valor
                    const input_value = event.target.value;
                    //Trocar o valor da variável
                    setUsername(input_value);
                  }
                }
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary[500],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  },
                }}
              />
              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals[999],
                  mainColor: appConfig.theme.colors.neutrals[300],
                  mainColorLight: appConfig.theme.colors.neutrals[100],
                  mainColorStrong: appConfig.theme.colors.neutrals[600],
                }}
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                maxWidth: '150px',
                height: '150px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '0.25rem',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '0.25rem',
                }}
                src={username.length > 2 ? `https://github.com/${username}.png` : imageDefault}
              />
              {/* <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                  {
                    username.length < 3 ? nameDefault :

                    <Link href={`https://github.com/${username}`}>
                      {username}
                    </Link>
                  }
              </Text> */}
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }